<script setup>
import ImgToPdf from "./components/ImgToPdf.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>
<template>
  <div class="app-margin">
    <header>
      <Header></Header>
    </header>
    <body>
      <ImgToPdf></ImgToPdf>
    </body>
    <footer>
      <Footer></Footer>
    </footer>
    
  </div>
</template>
<style scoped>
.app-margin{
  margin-left: 3em;
  margin-right:3em;
}
</style>
