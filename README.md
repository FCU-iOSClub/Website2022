# iOS Club Website 2022

![iOS Club](https://img.shields.io/badge/FCU-iOS%20Club-green?logo=apple&style=flat-square)
![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/fcu-iosclub/website2022/build.yml?style=flat-square)
![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/fcu-iosclub/website2022/prettier_check.yml?label=prettier&style=flat-square)

## Note

- 本站是靜態網頁
- 管理使用 **yarn**，而非 npm
- 專案使用 [Gatsby 5](https://www.gatsbyjs.com) + [React 18](https://zh-hant.reactjs.org) 製作。目前需要 Node 22 以上 (前面版本沒測過)。
- CSS Framework 使用 [TailwindCSS](https://tailwindcss.com)。
- `master` 分支上的最新 commit 會自動被部署到 [Cloudflare Pages](https://pages.cloudflare.com) 上。
- 如果不確定新東西會不會 work，記得用 PR 的方式，讓 GitHub Actions 和 Cloudflare Pages 都 Build 試試看，再決定要不要合併分支。盡量避免直接推 master。

## Quick start

先安裝依賴（如使用 Dev Container 可省略）

```bash
yarn
```

### 開發模式

會在 `localhost:8000` 上啟動網頁

```bash
yarn develop
```

### 產生靜態網頁

在 `public` 資料夾中產生網頁

```bash
yarn build
```

## Prettier

Commit 前養成好習慣，自動排版一下

```bash
yarn prettier
```

## 資料新增

### 首頁公告

在 `/src/data/annoucement` 下的 Json 檔會自動生成公告。`url`, `urlText`, `image` 可選填，其餘必填。

空白範例：

```json
{
  "title": "",
  "date": "",
  "content": "",
  "urlText": "",
  "url": "",
  "image": ""
}
```

### 社團活動

在 `/src/data/activities` 中新增檔案，檔案名稱以學年度數字命名。

範例：

```json
{
  "academicYear": 111, // 學年度
  "contents": [
    {
      "title": "活動名稱",
      "date": "2023-05-16、2023-05-23" // 活動日期 月、日務必補零到兩位數 依照活動日期範圍使用、或 ~ 分隔
    },
    {
      "title": "社團旅遊（臺南）",
      "date": "2025-08-13 ~ 2025-08-15"
    }
  ]
}
```

### 活動相簿

在 `/src/data/gallery` 下的 Json 檔案會被產生到相簿中。

範例 Json `2022-09-25 GIS FCU 企業參訪.json`：

```json
{
  "name": "GIS FCU 企業參訪", // 活動名稱
  "date": "2022-03-25", // 活動日期 月、日務必補零到兩位數
  // 主要相片
  "mainPhoto": "https://imagedelivery.net/cdkaXPuFls5qlrh3GM4hfA/ebc9b623-ab73-4b0f-ad46-77959aeb2900/public",
  "location": "FCU", // 活動地點
  "photos": [
    // 所有相片
    "https://imagedelivery.net/cdkaXPuFls5qlrh3GM4hfA/ebc9b623-ab73-4b0f-ad46-77959aeb2900/public",
    "https://imagedelivery.net/cdkaXPuFls5qlrh3GM4hfA/ebc9b623-ab73-4b0f-ad46-77959aeb2900/public"
  ],
  "gdrive_url": "" //可選 若活動相簿有對應的 Google Drive 資料夾，可加入 gdrive_url 欄位，當 gdrive_url 存在時，活動相簿頁面的 "See More" 按鈕將連結到此 URL
}
```

目前大部分的照片都放在 GitHub 的 FCU-iOSClub/Website2022ImageBed 上。

### Gallery Link Check

掃描 `src/data/gallery` 中所有非空的 `gdrive_url`，以未登入、未使用任何 Google credential 的訪客身分檢查 Google Drive 資料夾是否可存取：

```bash
yarn test:gallery-links
yarn test:gallery-links --url "https://drive.google.com/drive/folders/<folder-id>"
```

若結果確認需要權限、網址無效、發生網路錯誤或無法判定，指令會以 non-zero exit code 結束。

### 競賽得獎

在 `/src/data/contest` 中新增檔案，檔案名稱以年份命名。

範例：

```json
{
  "year": 2026, // 年份
  "title": "2026 社團成員競賽得獎名單", // 該年度的標題
  "contents": [
    ["比賽名稱", "獎項名稱", "參賽者（多人時以、分隔）", "《作品名稱》"],
    ["Apple Swift Student Challenge", "Winner", "魯敬元", "《MusicLearning》"]
  ]
}
```

### 歷屆幹部

在 `src/data/member` 中新增檔案

#### 個人連結

可以在 `links` 中加入個人連結，這個一個陣列可以放多個。

目前 type 只有 `youtube` 可以用，需要加其他的可以呼叫 Tony，或自己加。

下面是小筆筆的範例：

```json
{
  "links": [
    {
      "icon_type": "youtube",
      "text": "我的 Youtube",
      "url": "https://www.youtube.com/@xiao.bi_bi"
    }
  ]
}
```

## Gallery link checker

相簿連結檢查器會在 Pull Request 上執行檢查，並在 `master` 的相關更新時維護檢查狀態。PR gate 不需要 Discord secret，也**不會傳送 Discord 通知**；完整掃描可能因為目前儲存庫中既有連結受到限制而失敗。

### Discord 通知設定

維護工作流程若要傳送狀態變更通知，請在 GitHub 儲存庫中前往 **Settings → Secrets and variables → Actions → New repository secret**，建立名稱完全相同的 `DISCORD_GALLERY_WEBHOOK_URL` secret，並將 Discord webhook URL 填入 secret value。README、程式碼與 workflow 中都不要直接寫入 webhook value。

維護工作流程會在 `master` 的相關 push、每日 **UTC** 排程，以及手動 dispatch 時執行。Discord 僅通知兩種結果：`Permission denied` 與 `Invalid URL`。通知採 transition-only：第一次出現失敗或失敗集合改變時通知一次；相同失敗重複出現時保持靜默；恢復後通知一次。

檢查器使用快取保存上一輪的失敗狀態，因此快取是精簡、可重現且不含憑證的狀態；它不是完整歷史紀錄，也不保證跨工作流程執行永遠保留。PR gate 與 `master` 維護執行可能各自使用不同的快取內容，不能把快取當作連結目前一定可用的證明。

如果 webhook value 曾經暴露（包括提交到 Git、日誌或公開訊息），請立即在 Discord 撤銷該 webhook 並建立新的 webhook，再更新 GitHub Actions secret；不要繼續使用已暴露的 URL。

## Button

### Slider Button

目前為主要按鈕。  
樣式為邊框白底，懸停時上滑文字，顯示其他文字。

使用方式：

```js
import SliderButton from "../components/buttons/slider_button";

<SliderButton
  text = "" // 主要顯示文字
  hoverText = "" // 滑鼠懸停時顯示的文字
  icon = "" // （可選）Iconify 圖示
  onClick = {() => { // 點擊時執行
    window.open("https://iosclub.tw", "_blank"); // 以新分頁開啟網站
  }}
  disabled = false // （可選）是否可以禁用按鈕
  className = "" // （可選）額外的 CSS
  width = "" // （可選）自訂寬度 - 預設：w-auto
  textSize = "" // （可選）自訂文字大小 - 預設：text-xl
  loading = false // （可選）是否可以顯示載入狀態
  loadingText = "" // （可選）載入顯示文字 - 預設：處理中⋯⋯
/>
```

### Reverse Colors Button

反色按鈕，適合用於次要按鈕。  
樣式為邊框白底，懸停時填滿背景。

使用方式：

```js
import ReverseColorsButton from "../components/buttons/reverse_colors_button";

<ReverseColorsButton
  text = "" // 按鈕文字
  icon = "" // （可選）Iconify 圖示
  onClick = {() => { // 點擊時執行
    window.location.href = "/course"; // 切換至分頁
  }}
  disabled = false // （可選）是否禁用按鈕
  className = "" // （可選）額外的 CSS
  textSize = "" // （可選）自訂文字大小 - 預設：text-base
  borderColor = "" // （可選）邊框顏色 - 預設：border-gray-700
  hoverBg = "" // （可選）懸停背景色 - 預設：hover:bg-btnbg
  textColor = "" // （可選）文字顏色 - 預設：text-gray-800
  hoverTextColor = "" // （可選）懸停文字顏色 - 預設：hover:text-white
/>
```

## Icon

Icon 使用 [Iconify](https://iconify.design)。

使用方式：

```js
import { Icon } from "@iconify/react";

<Icon icon="simple-icons:ios" />;
```

可以到 [Browse Icons](https://icon-sets.iconify.design/) 搜尋要使用的 Icon。
