<template>
  <div>
    <div>
      <div>
        <button>Select Images</button>
        <button>Preview Images</button>
        <button>Convert to PDF</button>
      </div>
      <div>
        <img :src="imgSrc" :width="imgWidth" :height="imgHeight" alt="Image" />
      </div>
      <div><button>Download PDF</button></div>
    </div>
  </div>
</template>
<style scoped></style>
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
