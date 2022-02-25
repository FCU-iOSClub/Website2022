# iOS Club Website 2022

![iOS Club](https://img.shields.io/badge/FCU-iOS%20Club-green?logo=apple&style=flat-square)
![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/Fcu-iOSClub/WebSite2022/Build%20Test/master?label=build&style=flat-square&color=green)
![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/fcu-iosclub/Website2022/Prettier%20Check/master?color=green&label=prettier&style=flat-square)

## Note

- 本站是靜態網頁
- 專案使用 [Gatsby](https://www.gatsbyjs.com) + [React](https://zh-hant.reactjs.org) 製作。目前需要 Node 14 以上。
- CSS Framwork 使用 [TailwindCSS](https://tailwindcss.com)。
- `master` 分之上的最新 commit 會自動被部署到 [Cloudflare Pages](https://pages.cloudflare.com) 上。
- 如果不確定新東西會不會 work，記得用 PR 的方式，讓 GitHub Actions 和 Cloudflare Pages 都 Build 試試看，再決定要不要合併分支。盡量避免直接推 master。

## Quick start

先安裝依賴

```bash
npm i
```

### 開發模式

會在 `localhost:8000` 上啟動網頁

```bash
npm run develop
```

### 產生靜態網頁

在 `public` 資料夾中產生網頁

```bash
npm run build
```

## Prettier

Commit 前養成好習慣，自動排版一下

```bash
npm run prettier
```

## Icon

Icon 使用 [Iconify](https://iconify.design)。

使用方式：

```js
import { Icon } from "@iconify/react";

<Icon icon="simple-icons:ios" />;
```

可以到 [Browse Icons](https://icon-sets.iconify.design/) 搜尋要使用的 Icon。
