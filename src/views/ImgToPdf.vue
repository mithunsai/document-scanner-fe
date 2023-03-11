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
      <SelectImages @set-images="setImages"></SelectImages>
    </div>
    <div v-show="buttonSelected === 'preview'">
      <PreviewImages :images="images" @remove-image="removeImage(index)"></PreviewImages>
    </div>
    <div v-show="buttonSelected === 'convert'">
      <ConvertToPdf :images="images"></ConvertToPdf>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import SelectImages from "../components/SelectImages.vue";
import PreviewImages from "../components/PreviewImages.vue";
import ConvertToPdf from "../components/ConvertToPdf.vue";
export default {
  name: "ImgToPdf",
  components: {
    SelectImages,
    PreviewImages,
    ConvertToPdf,
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

    const removeImage= (index)=>{
      images.value.splice(index,1)
    }

    return {
      selectImages,
      previewImages,
      convertToPDF,
      setImages,
      removeImage,
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
