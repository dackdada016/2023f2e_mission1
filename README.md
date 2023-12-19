
# 本專案為 2023 THE F2E 黑客松第一週立委競選官網作品
![](ReadmeImage/homePage.png)
[官方網站](https://2023.thef2e.com/)
[關卡資訊](https://www.notion.so/efa96b68af924fd2a5d8fcc802ea85ac?pvs=21)
## 使用UI設計師組 jhen 的投稿作品
[UI設計師 jhen 投稿頁面](https://2023.thef2e.com/users/12061579704041679194)

### 使用技術
* React
  - hook : useState useContext
* React-Bootstrap
* Styled-components
* Scss
## 專案說明
專案安裝
```
  npm install
```
專案啟動
```
  npm start
```
專案編譯
```
  npm run build
```
專案編譯 + 發佈(GithubPages)
```
  npm run deploy
```

## 專案架構
```
├── src
│   ├── assets              // 圖片及字體
│   │   ├── font
│   │   └── images
│   ├── components          // 共用元件(包含context)
│   │   ├── card
│   │   │   ├── EventCard.js
│   │   │   └── EventsList.js
│   │   ├── contexts
│   │   │   └── ModalProvider.js    // Modal控制
│   │   ├── icon
│   │   │   └── IconGroup.js
│   │   └── modal
│   │       ├── EventsModal.js
│   │       ├── ModalStyle.js
│   │       ├── PolicIssuesModal.js
│   │       └── SectionStyle.js
│   ├── data                // 文案資料
│   │   ├── LatesEventsData.js
│   │   └── PolicIssuesData.js
│   └── pages               // 區塊頁面
│       ├── Advocate.js
│       ├── CandidateIntro.js
│       ├── Footer.js
│       ├── Header.js
│       ├── IdentificationSlogan.js
│       ├── index.js
│       ├── LatestEvents.js
│       ├── PolicIssues.js
│       └── SupportAndFeedback.js
├── App.css
├── App.js
├── App.test.js
├── index.css
├── index.js
└── reportWebVitals.js

```