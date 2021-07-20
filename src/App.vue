<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
  // data() {
  //   return {
  //     themes: "light-theme",
  //     coloring: '#0084ff',
  //     settheme: 0
  //   }
  // },
  // created() {
  //   if(this.$cookies.isKey('theme')){
  //     this.themes = this.$cookies.get('theme');
  //     if(this.$cookies.get('theme') === 'light-theme'){
  //       return this.settheme = 0;
  //     } else {
  //       return this.settheme = 1;
  //     }
  //   }
  // },
  // methods: {
  //   changetheme(value){
  //     this.themes = value;
  //     this.$cookies.set('theme', value);
  //     if(value === 'light-theme'){
  //       return this.settheme = 0;
  //     } else {
  //       return this.settheme = 1;
  //     }
  //   },
  // },
}
</script>
<style lang="scss">
@import './style.scss';
#app{
  background: #fff;
}
</style>

