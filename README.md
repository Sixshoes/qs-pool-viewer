# QS 聯絡人 Pool 解析站（獨立網站）

與提交表單分開部署。用途：從 Google 試算表下載 `.xlsx` 後上傳，在本機瀏覽器解析 Pool 現況（不上傳至任何伺服器）。

## 網址

部署後：`https://sixshoes.github.io/qs-pool-viewer/`

## 使用方式

1. 開啟 Google 試算表「QS 2028 聯絡人提報」
2. **檔案 → 下載 → Microsoft Excel (.xlsx)**
3. 開啟本網站，選擇或拖曳該檔案
4. 查看摘要與三個工作表內容

## 本機開發

```sh
npm install
npm run dev
```

## GitHub Pages 部署

1. 在 GitHub 建立 repo：`qs-pool-viewer`
2. 推送本目錄至 `main`
3. Settings → Pages → Source 選 GitHub Actions
