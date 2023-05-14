<script setup>
import ImgToPdf from "./views/ImgToPdf.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>
<template>
  <div class="h-100 w-100 d-flex flex-column">
      <Header></Header>
      <ImgToPdf class="flex-fill"></ImgToPdf>
      <Footer class=""></Footer>    
  </div>
</template>
