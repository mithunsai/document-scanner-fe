<template>
  <div class="d-flex flex-wrap justify-content-center">
    <div class="position-relative" v-for="(image, index) in imagesComp">
      <img
        :src="image.src"
        :width="image.width"
        :height="image.height"
        alt="Image"
        class="me-1 mb-1"
      />

      <span
        class="fa-sharp fa-solid fa-circle-xmark position-absolute top-0 end-0 translate-middle-y fs-4 mouse-pointer"
        aria-hidden="true"
      ></span>
    </div>
  </div>
</template>
<script setup>
import { computed } from "vue";

const props = defineProps(["images"]);
const imagesComp = computed(() => {
  return props.images;
});
</script>
<style>
.imgDim {
  width: 250px;
  height: 396px;
}
.mouse-pointer:hover {
  cursor: pointer;
}
</style>
