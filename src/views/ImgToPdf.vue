<template>
  <div class="imgToPdf">
    <div class="btn-group d-flex pb-5">
      <button class="btn" :class="{
          'btn-dark': buttonSelected === 'select',
          'btn-light': buttonSelected !== 'select',
        }" @click="selectImages($event)">
        Select Images
      </button>
      <button
        class="btn"
        :class="{
          'btn-dark': buttonSelected === 'preview',
          'btn-light': buttonSelected !== 'preview',
        }"
        @click="previewImages()"
      >
        Preview Images
      </button>
      <button
        class="btn"
        :class="{
          'btn-dark': buttonSelected === 'convert',
          'btn-light': buttonSelected !== 'convert',
        }"
        @click="convertToPDF()"
      >
        Convert to PDF
      </button>
    </div>
    <div class="pb-5" v-show="buttonSelected === 'preview' && imgSrcs.length>0">
      <img :src="imgSrc" alt="Image" class="imgDim" v-for="imgSrc in imgSrcs" />
    </div>
    <div
      class="d-inline-flex d-sm-flex flex-column justify-content-center flex-sm-row justify-content-sm-evenly ms-4 m-sm-0 pb-5"
    >
      <button class="btn btn-dark btn-lg ms-5 mb-3 m-sm-0">Download PDF</button>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";

export default {
  name: "ImgToPdf",

  setup() {
    var imgSrcs = ref([]);
    var imgWidth = ref(0);
    var imgHeight = ref(0);

    var imageSelect = (fileData) => {
      const fileReader = new FileReader();
      fileReader.addEventListener("load", (event) => {
        imgSrcs.value.push(event.target.result);
      });
      fileReader.readAsDataURL(fileData);
    };

    var buttonSelected = ref("select");
    var selectImages = async (event) => {
      buttonSelected.value = "select";
      const options = {
        types: [
          {
            description: "Images",
            accept: {
              "image/*": [".png", ".gif", ".jpeg", ".jpg"],
            },
          },
        ],
        excludeAcceptAllOption: false,
        multiple: true,
      };
      const fileHandle = await window.showOpenFilePicker(options);
      for (const file of fileHandle) {
        const fileData = await file.getFile();
        imageSelect(fileData);
      }
      console.log(imgSrcs);
    };

    const previewImages = () => {
      buttonSelected.value = "preview";
    };

    const convertToPDF = ()=>{
      buttonSelected.value = "convert"
    }
    return {
      imageSelect,
      selectImages,
      previewImages,
      convertToPDF,
      buttonSelected,
      imgSrcs,
      imgWidth,
      imgHeight,
    };
  },
};
</script>
<style>
.imgToPdf {
  padding: 5% 5%;
}
.imgDim {
  width: 150px;
  height: 200px;
}
</style>
