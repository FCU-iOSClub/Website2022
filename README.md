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

### 社課教材

社課簡報的 Google Drive 資料夾連結放在 `src/data/course/course.json` 的 `gdrive_url`，每學年更新一次，上下學期的教材都放在同一個資料夾中。

```json
{
  "name": "社課簡報",
  "gdrive_url": "https://drive.google.com/drive/folders/<folder-id>"
}
```

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

#### 彩蛋

可以在成員加上選填的 `easterEgg`，讓照片變成彩蛋，元件在 `src/components/easter-egg/`。

| type    | 觸發方式                                 | src                                                                    |
| ------- | ---------------------------------------- | ---------------------------------------------------------------------- |
| `video` | 點擊照片播放影片（含聲音），播完自動關閉 | 放在 `static/` 的影片路徑，建議 H.264 + AAC 的 mp4，盡量壓在 1 MB 以內 |
| `image` | 按住照片顯示全螢幕圖片，放開隱藏         | Cloudflare Images 圖片網址                                             |

`hint` 為選填，滑鼠移到照片上時顯示的提示文字。

```json
{
  "easterEgg": {
    "type": "video",
    "src": "/easter-egg/niulai.mp4",
    "hint": "牛來長"
  }
}
```

影片會進 Git 歷史，合併含影片的 PR 時請用 Squash and merge，避免中間版本的檔案留在 `master`。

> 目前影片放在 `static/` 只適合少量、小檔案。未來影片數量增加或檔案變大時，應將影片移至外部儲存（例如 Cloudflare R2 或其他 CDN），`src` 改填完整網址，避免 repo 持續膨脹並觸及 Cloudflare Pages 的檔案限制。

## Google Drive 連結檢查

相簿與社課教材的 Google Drive 資料夾連結，會在 PR 與每週二、三台灣時間 09:17（社課前）自動檢查是否能以未登入身分開啟，失效時通知 Discord。

```bash
yarn test:gdrive-links
```

檢查範圍、失效處理方式與 Discord 通知設定請見 [docs/gdrive-link-checker.md](docs/gdrive-link-checker.md)。

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
