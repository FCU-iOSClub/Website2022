# CLAUDE.md

此文件為 Claude Code (claude.ai/code) 在處理此專案時的開發指引。

## 專案概述

逢甲大學 iOS Club 官方網站，使用 Gatsby + React 建置的現代化靜態網站，部署於 Cloudflare Pages。網站功能包含社團活動展示、課程資訊、成員相簿、最新公告，以及實用的 RFID 轉換器工具。

## 開發指令

```bash
# 安裝相依套件（使用 Yarn，不要用 npm）
yarn

# 啟動開發伺服器（localhost:8000）
yarn develop

# 啟動開發伺服器（允許外部訪問 0.0.0.0:8000）
yarn dev

# 建置靜態網站到 public/ 目錄
yarn build

# 程式碼格式化（提交前務必執行）
yarn prettier
```

## 技術架構

### 核心技術

- **框架**: Gatsby 5.x + React 18
- **樣式**: TailwindCSS 4.x + PostCSS
- **圖示**: Iconify React Component
- **圖片展示**: LightGallery（支援縮放、縮圖）
- **輪播元件**: Splide.js + 自動滾動擴展
- **資料管理**: JSON 檔案 + gatsby-transformer-json
- **SEO**: React Helmet
- **彈窗提示**: SweetAlert2
- **分頁元件**: rc-pagination
- **響應式判斷**: react-responsive
- **時間軸元件**: react-vertical-timeline-component
- **SVG 支援**: gatsby-plugin-svgr + @svgr/webpack
- **需求**: Node.js 22+
- **套件管理**: Yarn

### 專案結構

```
├── CLAUDE.md              # 開發指引文件
├── README.md              # 專案說明文件
├── package.json           # 相依套件與腳本
├── gatsby-config.js       # Gatsby 設定檔
├── gatsby-node.js         # 動態頁面生成邏輯
├── gatsby-browser.js      # 瀏覽器端程式碼
├── postcss.config.js      # PostCSS 設定
├── yarn.lock              # Yarn 鎖定檔
├── static/                # 靜態資源
│   └── icon.ico          # 網站圖示
├── functions/             # Cloudflare Pages Functions
│   └── api/              # API 端點
│       └── qrcode.js     # QR Code API 代理
└── src/
    ├── components/        # 可重複使用的 React 元件
    │   ├── buttons/      # 按鈕元件
    │   │   ├── slider_button.js # 滑動動畫按鈕（主要按鈕）
    │   │   └── reverse_colors_button.js # 反色按鈕（次要按鈕）
    │   ├── navbar.js     # 響應式導覽列（含手機版選單）
    │   ├── header.js     # 網站標頭（含 meta 標籤）
    │   ├── footer.js     # 網站頁尾（含社群連結）
    │   └── image-with-placeholder.js # 圖片載入元件
    ├── pages/            # 靜態頁面
    │   ├── index.js      # 首頁
    │   ├── gallery_list.js # 活動相簿列表
    │   ├── members.js    # 歷屆幹部
    │   ├── course.js     # 社團課程
    │   ├── club_activities.js # 社團活動
    │   ├── contest.js    # 競賽得獎
    │   ├── companion.js  # 相關單位
    │   ├── swift_res.js  # Swift 學習資源
    │   ├── rfid_converter.js # RFID 轉換器工具
    │   ├── qrcode_generator.js # QR Code 產生器工具
    │   └── 404.js       # 404 錯誤頁面
    ├── templates/        # 動態頁面模板
    │   ├── gallery.js    # 個別活動相簿頁面
    │   └── member_page.js # 個別屆期幹部頁面
    ├── data/             # JSON 資料檔案
    │   ├── announcement/ # 公告資料
    │   ├── gallery/      # 活動相簿資料
    │   └── member/       # 幹部資料
    ├── images/           # 圖片資源
    │   └── svg/         # SVG 圖示
    ├── styles/           # 全域樣式
    │   └── global.css   # TailwindCSS 匯入與自訂樣式
    ├── css/             # 元件專用樣式
    │   ├── gallery.css  # LightGallery 自訂樣式
    │   └── pagination.css # 分頁元件樣式
    └── hooks/           # React 自訂 Hooks
        └── useGoogleAdsConversion.js # Google Ads 轉換追蹤
```

## 資料管理

### 公告系統

在 `src/data/announcement/` 新增 JSON 檔案即可自動生成首頁公告：

```json
{
  "title": "公告標題",
  "date": "YYYY/MM/DD",
  "content": "公告內容",
  "urlText": "連結文字（選填）",
  "url": "https://example.com（選填）",
  "image": "圖片URL（選填）"
}
```

### 活動相簿

在 `src/data/gallery/` 新增檔案，命名格式：`YYYY-MM-DD 活動名稱.json`

```json
{
  "name": "活動名稱",
  "date": "YYYY-MM-DD",
  "mainPhoto": "主要照片URL",
  "location": "活動地點",
  "photos": ["照片URL1", "照片URL2", "..."],
  "gdrive_url": "Google Drive 資料夾連結（選填）"
}
```

**注意**: 當 `gdrive_url` 存在時，相簿頁面的「See More」按鈕會連結到 Google Drive 資料夾，因此使用Google Drive外連時請保持photos為空陣列。

### 歷屆幹部

在 `src/data/member/` 新增檔案，以屆數命名（如：8.json）：

```json
{
  "name": "第八屆",
  "url": "8",
  "startDate": "2024-08-01",
  "endDate": "now",
  "description": "屆期描述（選填）",
  "image": "團體照URL",
  "members": [
    {
      "name": "姓名",
      "position": "職位",
      "description": "個人描述（選填）",
      "image": "個人照片URL",
      "links": [
        {
          "icon_type": "youtube",
          "text": "連結描述",
          "url": "連結URL"
        }
      ]
    }
  ]
}
```

支援的 `icon_type`: 目前僅支援 `youtube`，後需開發需要在createMemberLinkIcon中定義。

## 頁面生成機制

Gatsby 透過以下方式自動生成頁面：

1. **靜態頁面**: `src/pages/` 中的檔案自動對應路由
2. **動態相簿頁面**: `gatsby-node.js` 根據 gallery JSON 生成 `/gallery/{日期} {名稱}` 路由
3. **動態幹部頁面**: `gatsby-node.js` 根據 member JSON 生成 `/members/{屆數}` 路由

詳細邏輯請參考 `gatsby-node.js` 中的 GraphQL 查詢與頁面建立程式碼。

## 樣式系統

### 自訂 TailwindCSS 顏色

```css
--color-iosbgblue: #b3c4d6 /* 背景藍色 */ --color-ioscardblue: #8098b5
  /* 卡片藍色 */ --color-iostextblue: #4771a3 /* 文字藍色 */
  --color-footerbg: #4f7096 /* 頁尾背景 */ --color-btnbg: #445484 /* 按鈕背景 */
  --color-btnbg1: #fff5d1 /* 替代按鈕背景 */ --color-iospink: #ecadad
  /* iOS 粉色強調 */;
```

### 字型設定

- **主要字型**: Noto Serif TC（繁體中文襯線字型）
- **備用字型**: ui-serif, Georgia, Cambria, Times New Roman, Times, serif

### 圖示使用

使用 Iconify React Component：

```jsx
import { Icon } from "@iconify/react";

<Icon icon="simple-icons:apple" className="w-6 h-6" />;
```

圖示瀏覽：https://icon-sets.iconify.design/

## 主要功能

### 導覽系統

- 響應式設計，手機版提供漢堡選單
- 固定式標頭，平滑過場效果
- 中英文混合選單項目

### 首頁功能

- 動態公告系統（基於 JSON 資料）
- 自動滾動活動相簿輪播
- 多處「Join Us」行動呼籲按鈕

### 相簿系統

- LightGallery 整合，支援縮放與縮圖功能
- 響應式網格佈局
- Google Drive 延伸相簿整合

### RFID 轉換器工具

- 十六進位轉十進位，支援位元組序處理
- 即時輸入驗證與格式化
- 一鍵複製功能

### QR Code 產生器工具

- 透過 `/api/qrcode` 代理 QRCode Monkey API 呼叫
- 支援自訂 URL 輸入，自動套用 iOS Club 社團 Logo
- 漸層色彩配置
- 生成高解析度 QR Code 圖片
- 支援下載生成的 QR Code

### 成員檔案系統

- 依屆數組織呈現
- 社群媒體連結整合
- 上下屆導覽功能

### API 功能

#### QR Code API 代理

位置：`functions/api/qrcode.js`

**功能**：

- 代理請求到 QRCode Monkey API
- 解決前端 CORS 限制問題
- 支援兩種操作模式：
  1. 生成 QR Code（POST JSON payload）
  2. 獲取已生成的圖片（POST `{ imageUrl: "/path" }`）

**端點**：

- 正式環境：`https://iosclub.tw/api/qrcode`
- 本地開發：需使用 Cloudflare Pages 本地開發工具

**使用範例**：

```javascript
// 生成 QR Code
const response = await fetch("/api/qrcode", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    data: "https://iosclub.tw",
    config: {
      body: "square",
      eye: "frame0",
      eyeBall: "ball0",
      erf1: [],
      erf2: [],
      erf3: [],
      brf1: [],
      brf2: [],
      brf3: [],
      bodyColor: "#000000",
      bgColor: "#FFFFFF",
      eye1Color: "#000000",
      eye2Color: "#000000",
      eye3Color: "#000000",
      eyeBall1Color: "#000000",
      eyeBall2Color: "#000000",
      eyeBall3Color: "#000000",
      gradientColor1: "",
      gradientColor2: "",
      gradientType: "linear",
      gradientOnEyes: false,
      logo: "",
      logoMode: "default",
    },
    size: 300,
    download: false,
    file: "png",
  }),
});

// 獲取已生成的圖片
const imageResponse = await fetch("/api/qrcode", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    imageUrl: "/temp/xxxxxxxxxxxx.png",
  }),
});
const blob = await imageResponse.blob();
```

**CORS 設定**：

- `Access-Control-Allow-Origin: *`
- `Access-Control-Allow-Methods: POST, OPTIONS`
- `Access-Control-Allow-Headers: Content-Type`

**快取策略**：

- 圖片回應設定 `Cache-Control: public, max-age=3600`（1小時）

**錯誤處理**：

- API 錯誤會返回 JSON 格式錯誤訊息
- 包含狀態碼和詳細錯誤資訊
- 伺服器錯誤返回 500 狀態碼

## 部署與 CI/CD

- **正式環境**: https://iosclub.tw
- **託管平台**: Cloudflare Pages
- **自動部署**: master 分支 commit 觸發建置
- **GitHub Actions**:
  - 建置驗證
  - Prettier 程式碼格式檢查
- **開發流程**: 使用 Pull Request 測試建置後再合併至 master

## Git 工作流程規範

- **分支策略**: 不應直接推送到 master 分支，必須使用 Pull Request 工作流程
- **CI/CD 要求**: 所有 PR 必須通過 GitHub Actions 的 build 測試和 prettier 檢查
- **提交前檢查**: 務必執行 `yarn prettier` 進行程式碼格式化

## 提交訊息規範

使用中文或英文提交訊息，中文遵循以下格式：

- `新增 [功能/內容描述]` - 新增/修改功能
- `修正 [問題描述]` - bug 修復
- `更新 [更新內容]` - 內容或功能更新
- `文件` - 說明/開發文件新增、修改，並非指網頁呈現的內容
- `重構` - 既不是新增功能，也不是修補 bug 的程式碼變動)。

英文遵循以下格式：

- `feat:` - 新增/修改功能 (feature)。
- `fix:` - bug 修復 (bug fix)。
- `update:` - 內容或功能更新
- `docs:` - 文件 (documentation)。
- `refactor:` - 重構 (既不是新增功能，也不是修補 bug 的程式碼變動)。

## 檔案命名規範

### Gallery 檔案

- 格式：`YYYY-MM-DD 活動名稱.json`
- 日期必須補零到兩位數（如：`2024-01-09` 不是 `2024-1-9`）
- 範例：`2024-12-23 期末聚.json`

### Announcement 檔案

- 可使用描述性名稱（如：`WWDC2025.json`）
- 建議以事件或時間命名便於管理

## 圖片資源管理

- **主要 CDN**: 使用 Cloudflare R2 服務
  - URL 格式：`https://imagedelivery.net/cdkaXPuFls5qlrh3GM4hfA/[圖片ID]/public`
  - 上傳工具：使用 PicGo 搭配 Tony 的 `picgo-plugin-cloudflare`
- **備用存儲**: GitHub Repository `FCU-iOSClub/Website2022ImageBed`
- **Google Drive 整合**: Gallery 可選擇性連結 Google Drive 資料夾

## 環境要求

- **Node.js**: 版本 22+（GitHub Actions 和本地開發需一致）
- **包管理器**: 必須使用 Yarn，禁止使用 npm
- **開發伺服器**:
  - 本地開發：`yarn develop` (localhost:8000)
  - 網路訪問：`yarn dev` (0.0.0.0:8000)

## 開發規範

### 程式碼品質

- 提交前務必執行 `yarn prettier`
- 遵循現有程式碼模式與命名規範
- 適當時使用 TypeScript 風格的 JSDoc 註解
- 維持響應式設計原則

### 內容更新

- 圖片儲存於外部 CDN（Cloudflare Images），須使用PicGo搭配Tony的`picgo-plugin-cloudflare`上傳
- 部署前驗證 JSON 資料格式
- 新增照片後測試相簿功能
- 確認成員檔案連結正常運作

### 效能考量

- 靜態網站生成提供優異效能
- 圖片經過 CDN 最佳化
- 透過程式碼分割最小化 JavaScript 套件
- 相簿功能採漸進式增強
