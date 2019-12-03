online demo : https://seanlin05583.github.io/seanlin-profile/hh-hero

## 執行方式
1. clone repo

    ```$ git clone https://github.com/SeanLin05583/hh-hero.git sean-hh-hero```
2. cd sean-hh-hero

    ```$ cd sean-hh-hero```
3. install package

    ```$ npm install```
    
4. start project

    ``` npm start```


## 架構    
![](https://paper-attachments.dropbox.com/s_27A841566E6280773698BEBEDABFF861258818FC58B30EA164F280F2811B3248_1575262169924_+2019-12-02+12.43.47.png)

- 不使用 Redux，用 React context hook。
- 不使用 CSS framework，諸如 bootstrap、bulma 等固然快速好用，但很難應付客製化的需求。
- 能用變數命名理解的 code 不寫註解，除非某些特定解法是 google 來的，會附上連結
```
├ /src
    ├ /components
        ├ /common：放置共用型 Component
            ├ /CircleSpinner：Loading 旋轉 Component
            ├ /NumberEditor：Number 加減 Component
        ├ /pages：放置各 route 對應的頁面(此專案只有 HeroPage)
            ├ /HeroPage：hero 頁
                ├ /HeroList：呈現 Hero 列表
                    ├ HeroList
                    ├ HeroCard：Hero 小卡
                ├ /HeroProfile
                    ├ HeroProfile
                    ├ HeroProfileEditor：編輯 Hero 屬性，並有按鈕可以送出
        ├ App.jsx：主檔案
        ├ normalize.css
        ├ style.css：global CSS
    ├ /api：呼叫的 API 集中於此
    ├ /state：React Context Provider 與 useStateValue custom hook
```

## 套件
### cdn

- fontawesome：使用 icon

### css

- normalize.css：統一各瀏覽器基本 styling

### dependencies

- classnames：module css
- axios：handle http request
- react-router：routing for React

### devDependencies

- @babel/plugin-transform-runtime：to use async/await
- autoprefixer：postCSS 自動加入各瀏覽器前綴
- postcss-mixins：使用 CSS mixin
- postcss-nested：使用巢狀 CSS

## 遇到問題
 - 原本預計用 useState 管理狀態，但 HeroList 傳遞"目前選擇的 hero id"給 HeroCard 時，點選切換 Hero 勢必會因為 props 改變造成 HeroList re-render。
     > 解法：改實作 React context 與 custom hook，直接在 HeroCard 從 state 中得到 selectedHeroId，就不需透過 HeroList 傳遞 props 造成 re-render
     > 
     > [2bcd236](https://github.com/SeanLin05583/hh-hero/commit/2bcd2362ecb6857dc9d7e0f7d6fe310ad39ecb0e)
 - 不希望 User 進入除了 /heroes 以外的 routing
     > - app.js 加上 `<Redirect from="*" to="/heroes" />`
     > - HeroProfile 撈取 hero profile 時，在該 hero id 不存在於 hero list 中時，跳轉 '/heroes'
     
 - 使用 react-router，在 /heroes/:id 頁面時重新整理會吃不到 /heroes/:id/bundle.js， 
     >  html 設定 `<base href="/" />` 指定全站的 href base 為 root，即會吃到 /bundle.js
