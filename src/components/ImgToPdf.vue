<template>
  <div class="imgToPdf">
    <div class="d-inline-flex d-sm-flex flex-column justify-content-center flex-sm-row justify-content-sm-evenly ms-5 m-sm-0 pb-5">
      <button class="btn btn-dark ms-5 mb-3 m-sm-0">Select Images</button>
      <button class="btn btn-dark ms-5 mb-3 m-sm-0">Preview Images</button>
      <button class="btn btn-dark ms-5 mb-3 m-sm-0">Convert to PDF</button>
    </div>
    <div class="pb-5">
      <img :src="imgSrc" :width="imgWidth" :height="imgHeight" alt="Image" />
    </div>
    <div class="d-inline-flex d-sm-flex flex-column justify-content-center flex-sm-row justify-content-sm-evenly ms-5 m-sm-0 pb-5">
      <button class="btn btn-dark ms-5 mb-3 m-sm-0">Download PDF</button>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";

export default {
  name: "ImgToPdf",
  setup() {
    var imgSrc = ref("");
    var imgWidth = ref(0);
    var imgHeight = ref(0);
    var imageSelect = (event) => {
      const files = event.target.files;
      const file = files[0];
      const fileReader = new FileReader();
      fileReader.addEventListener("load", (event) => {
        imgSrc.value = event.target.result;
        imgWidth.value = 100;
        imgHeight.value = 100;
        console.log(imgWidth, imgHeight);
      });
      fileReader.readAsDataURL(file);
    };
    return { imageSelect, imgSrc, imgWidth, imgHeight };
  },
};
</script>
<style>
.imgToPdf{
  padding: 5% 5%;
}
</style>