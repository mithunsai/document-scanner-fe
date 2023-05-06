<template>
  <div class="position-relative">
    <div v-if="props.images.length > 0" class="pb-5">
      <p class="text-center">Convert the selected images to PDF</p>
      <button
        class="btn btn-dark position-absolute top-50 start-50 translate-middle mt-3"
        @click="convertToPDF()"
      >
        Convert to PDF
      </button>
    </div>
    <div class="" v-else>
      <p class="text-center">
        <i class="fa-solid fa-face-frown fs-3 me-2"></i>There are no images
        selected. Please select images to Convert to PDF
      </p>
    </div>
  </div>
</template>
<script setup>
import appServices from '../services/AppServices';
const props = defineProps(["images","imageFiles"]);
const convertToPDF = () => {
  console.log(props.imageFiles[0].name);
};
</script>
