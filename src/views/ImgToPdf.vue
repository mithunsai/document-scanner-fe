<template>
  <div class="imgToPdf">
    <div class="btn-group d-flex pb-5">
      <button
        class="btn"
        :class="{
          'btn-dark': buttonSelected === 'select',
          'btn-light': buttonSelected !== 'select',
        }"
        @click="selectImages($event)"
      >
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
    <div v-show="buttonSelected === 'select'">
      <SelectImages @setImgSrcs="setImageSources"></SelectImages>
    </div>
    <div
      class="pb-5"
      v-show="buttonSelected === 'preview' && imgSrcs.length > 0"
    >
      <img :src="imgSrc" alt="Image" class="imgDim" v-for="imgSrc in imgSrcs" />
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import SelectImages from "../components/SelectImages.vue";
export default {
  name: "ImgToPdf",
  components: {
    SelectImages,
  },

  setup() {
    var imgSrcs = ref([]);
    var imgWidth = ref(0);
    var imgHeight = ref(0);

    var buttonSelected = ref("select");

    var selectImages = async (event) => {
      buttonSelected.value = "select";
    };

    const previewImages = () => {
      buttonSelected.value = "preview";
    };

    const convertToPDF = () => {
      buttonSelected.value = "convert";
    };

    const setImageSources = (imageSources) => {
      imgSrcs.value = imageSources;
      buttonSelected.value= 'preview'
    };

    return {
      selectImages,
      previewImages,
      convertToPDF,
      setImageSources,
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
