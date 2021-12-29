# ✅ VUE
## Vue 시작하기 
[Vue 3 Cli 설치하기](https://v3.ko.vuejs.org/guide/installation.html#cli)  
[ue 프로젝트 시작하기](https://cli.vuejs.org/guide/creating-a-project.html#using-the-gui)
```cmd
npm install -g @vue/cli
vue create [새로 만들 폴더명]
```

* 기본 구성
```html
<div id="app">
  <h1>{{ message }}</h1>
</div>
```
```js
Vue.createApp({
  data(){
    return {
      message: 'Hello Vue'
    }
  }
}).mount('#app');
```
