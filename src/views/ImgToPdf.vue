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
      <SelectImages @setimages="setImages"></SelectImages>
    </div>
    <div
      class="pb-5"
      v-show="buttonSelected === 'preview' && images.length > 0"
    >
      <PreviewImages :images="images"></PreviewImages>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import SelectImages from "../components/SelectImages.vue";
import PreviewImages from "../components/PreviewImages.vue";
export default {
  name: "ImgToPdf",
  components: {
    SelectImages,
    PreviewImages,
  },

  setup() {
    var images = ref([]);
    var imgWidth = ref(0);
    var imgHeight = ref(0);

    var buttonSelected = ref("select");

    var selectImages = async () => {
      buttonSelected.value = "select";
    };

    const previewImages = () => {
      buttonSelected.value = "preview";
    };

    const convertToPDF = () => {
      buttonSelected.value = "convert";
    };

    const setImages = (imagesSelected) => {
      images.value = imagesSelected;
      buttonSelected.value = "preview";
    };

    return {
      selectImages,
      previewImages,
      convertToPDF,
      setImages,
      buttonSelected,
      images,
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
</style>
