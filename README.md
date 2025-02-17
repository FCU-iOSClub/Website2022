# iOS Club Website 2022

![iOS Club](https://img.shields.io/badge/FCU-iOS%20Club-green?logo=apple&style=flat-square)
![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/fcu-iosclub/website2022/build.yml?style=flat-square)
![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/fcu-iosclub/website2022/prettier_check.yml?label=prettier&style=flat-square)

## Note

- 本站是靜態網頁
- 管理使用 **yarn**，而非 npm
- 專案使用 [Gatsby](https://www.gatsbyjs.com) + [React](https://zh-hant.reactjs.org) 製作。目前需要 Node 22 以上 (前面版本沒測過)。
- CSS Framwork 使用 [TailwindCSS](https://tailwindcss.com)。
- `master` 分之上的最新 commit 會自動被部署到 [Cloudflare Pages](https://pages.cloudflare.com) 上。
- 如果不確定新東西會不會 work，記得用 PR 的方式，讓 GitHub Actions 和 Cloudflare Pages 都 Build 試試看，再決定要不要合併分支。盡量避免直接推 master。

## Quick start

先安裝依賴

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

## 首頁公告

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

## 活動相簿

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

## 歷屆幹部

在 `src/data/member` 中新增檔案

### 個人連結

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

## Icon

Icon 使用 [Iconify](https://iconify.design)。

使用方式：

```js
import { Icon } from "@iconify/react";

<Icon icon="simple-icons:ios" />;
```

可以到 [Browse Icons](https://icon-sets.iconify.design/) 搜尋要使用的 Icon。
