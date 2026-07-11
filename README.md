# 子彈思考整理術・教學導讀網站

《子彈思考整理術》(瑞德・卡洛 Ryder Carroll 著,天下雜誌出版)的教學導讀網站。
內容為各單元重點整理、白話解說與思考題,**並非原書全文**;
原文引用僅限每單元至多兩句短金句。

## 技術棧

- Vite 7 + React 19(HashRouter,可靜態部署)
- Tailwind CSS v4(class 策略深色模式)
- Lucide React 圖標
- react-markdown + remark-gfm + rehype-highlight(Markdown 內容渲染)

## 開發

```bash
npm install
npm run dev      # 開發伺服器
npm run build    # 產出 dist/
npm run preview  # 預覽 build 結果
```

## 內容編輯

單元內容在 `src/content/00.md` ~ `19.md`(共 20 個教學單元,按原書五部分組),
frontmatter 需含 `title / label / part / order` 四欄。
支援四種 callout:`> [!TIP]`、`> [!WARNING]`、`> [!NOTE]`、`> [!ADVANCED]`。
新增單元只要新增 `NN.md` 檔,側欄、路由、上下章導覽會自動生成。

## 佈局

頂欄(標題/搜尋/GitHub/深淺色切換)、左側欄(分部收合目錄+當前單元高亮)、
主內容區(麵包屑+文章+上一課/下一課)、右側 TOC(H2/H3 scrollspy)。
GitHub 連結位址在 `src/components/Navbar.jsx` 的 `GITHUB_URL`。
