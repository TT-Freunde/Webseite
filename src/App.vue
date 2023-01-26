<template>
  <div class="site">
    <Header/>
    <router-view class="views"></router-view>
    <Footer/>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

import HomeView from "./views/HomeView.vue";
import TSV from "./views/TSV.vue";

import router from "./router/index";

export default {
  name: "App",
  data(){
    return{

    };
  },
  components: {
    Header,
    Footer,
    HomeView,
    TSV
  },
  methods: {
    navigateBack(){
      router.go(-1);
    }
  },
  created(){
    window.scrollTo(0,0);
  }
}
</script>


<style lang="scss">
@import "./variables.scss";
.site{
  max-width: 100vw;
  overflow-x: hidden;
}
</style>
