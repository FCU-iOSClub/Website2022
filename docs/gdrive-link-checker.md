# Google Drive 連結檢查

自動確認網站上的 Google Drive 資料夾連結，都能以「未登入的訪客」身分開啟。檢查時不使用任何 Google 帳號或 credential，結果等同一般訪客點開連結的情況。

## 檢查範圍

| 來源 | 資料位置                      | 欄位                 |
| ---- | ----------------------------- | -------------------- |
| 相簿 | `src/data/gallery/*.json`     | `gdrive_url`（選填） |
| 教材 | `src/data/course/course.json` | `gdrive_url`         |

- 只檢查非空的 `gdrive_url`。
- 只支援資料夾網址（`https://drive.google.com/drive/folders/<folder-id>`），單一檔案或 Google 文件／簡報的網址會被判定為無效。
- Drive 資料夾的分享權限應設為「**知道連結的任何人**」都能檢視。

## 什麼時候會檢查

|          | PR 檢查                                       | 每週檢查                                                       |
| -------- | --------------------------------------------- | -------------------------------------------------------------- |
| Workflow | `gdrive_check.yml`（Google Drive link check） | `gdrive_notify.yml`（Google Drive link maintenance）           |
| 觸發時機 | PR 改到相簿／教材資料、檢查器或相關 workflow  | 每週二、三台灣時間 09:17（UTC 01:17）、`master` 相關更新、手動 |
| 結果     | 只顯示在 PR 的 checks                         | 顯示在 Actions，狀態改變時通知 Discord                         |

社課在週二、週三晚上，排程設在這兩天早上，讓教材連結在每堂社課前都確認過（也能抓到前一晚被改壞的連結）；寒暑假照常執行。

> GitHub 會在公開 repo 連續 60 天沒有 commit 時自動停用排程 workflow。長假後開學前，請到 Actions 確認「Google Drive link maintenance」仍為啟用狀態，並手動按一次 **Run workflow**。

## 連結失效時怎麼處理

1. 到 GitHub Actions 的「Google Drive link maintenance」打開失敗的執行紀錄，在「Check Google Drive links」步驟的輸出中找出標示 ❌ 的項目（格式為 `[來源] 名稱 (日期)`）。
2. 依結果處理：
   - **Permission denied**：到 Google Drive 將該資料夾的分享權限改為「知道連結的任何人」。
   - **Invalid Google Drive URL／Invalid record**：修正 JSON 中的 `gdrive_url`，確認是資料夾網址且 JSON 格式正確。
   - **Timeout／Network error／Unable to determine**：多半是暫時性問題，先重新執行確認。
3. 在 Actions 頁面對「Google Drive link maintenance」按 **Run workflow** 重新檢查；若先前有發過失敗通知，恢復後 Discord 會收到恢復通知。

## 本地執行

```bash
# 檢查所有相簿與教材連結
yarn test:gdrive-links

# 只檢查單一連結
yarn test:gdrive-links --url "https://drive.google.com/drive/folders/<folder-id>"
```

| 結果                                 | 意思                                    |
| ------------------------------------ | --------------------------------------- |
| ✅ Accessible                        | 未登入可以開啟                          |
| ❌ Permission denied                 | 需要登入或權限，分享設定有問題          |
| ❌ Invalid Google Drive URL          | 不是 Drive 資料夾網址                   |
| ❌ Invalid record                    | JSON 格式錯誤，或 `gdrive_url` 不是字串 |
| ❌ Timeout／Network error            | 連線逾時或網路錯誤（會自動重試一次）    |
| ⚠️ Unable to determine accessibility | Google 回傳非預期的內容，無法判定       |

只要有任何一個連結不是 ✅，指令就會以 non-zero exit code 結束。

## Discord 通知

### 設定

在 GitHub 儲存庫的 **Settings → Secrets and variables → Actions → New repository secret** 建立 `DISCORD_GALLERY_WEBHOOK_URL`，值填入 Discord webhook URL。

- secret 名稱沿用相簿檢查器時期的命名，未隨檢查範圍擴大而更改。
- 不要把 webhook URL 寫進 README、程式碼或 workflow。
- PR 檢查不需要這個 secret，也不會發送通知。
- 每週檢查只在 `FCU-iOSClub/Website2022` 執行，fork 中會自動略過，fork 不需要（也不應）設定這個 secret。

### 通知規則

- 只通知 **Permission denied** 與 **Invalid URL** 兩種結果；Timeout、網路錯誤等暫時性問題只會讓 workflow 失敗，不發通知。
- 只在狀態改變時通知：第一次出現失敗、失敗的連結有變化、全部恢復時各通知一次；相同的失敗重複出現時不會再通知。
- 通知內容會標示來源，例如 `[教材] 社課簡報`。

### Webhook 外洩時

如果 webhook URL 曾經外洩（例如提交到 Git、出現在日誌或公開訊息），請立即在 Discord 撤銷該 webhook、建立新的 webhook，再更新 GitHub Actions secret，不要繼續使用已外洩的 URL。

## 新增檢查來源

要檢查其他資料目錄中的 `gdrive_url` 時：

1. 在 `scripts/check-gdrive-links.mjs` 的 `SOURCES` 加上 `{ directory: "<src/data 下的資料夾>", label: "<來源名稱>" }`。
2. 在 `.github/workflows/gdrive_check.yml` 與 `gdrive_notify.yml` 的 `paths` 加上 `src/data/<資料夾>/**`。

## 附註：通知狀態的保存方式

每週檢查會把上一輪的失敗狀態存在 GitHub Actions cache（`.cache/gdrive-link-state.json`），用來判斷狀態是否改變。

- 每次執行都會以新的 key（含 `run_id`）存一份狀態，下次執行再依前綴取回最近的一份。
- GitHub Actions cache 超過 7 天未被存取就會被刪除，因此排程的任兩次執行間隔都必須小於 7 天（目前為週二→週三 1 天、週三→週二 6 天）。調整排程時請維持這個條件，否則每次執行都會讀不到上一輪狀態，同一個失敗會被重複通知。
- cache 不是完整的歷史紀錄，也可能被手動清除；消失後的下一次執行會視為第一次檢查，若當下有失敗就會重新通知一次。
- PR 檢查不使用這份狀態；cache 也不能當作連結目前一定可用的證明，要確認請重新執行檢查。
