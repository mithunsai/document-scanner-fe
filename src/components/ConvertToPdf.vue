<template>
  <div>
    
    <div class="position-relative mb-5">
      <div v-if="props.images.length > 0" class="pb-5">
        <p class="text-center">Convert the selected images to PDF</p>
        <button
          class="btn btn-dark position-absolute start-50 translate-middle mt-3"
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
    <div class="d-flex flex-wrap justify-content-center">
      <div v-for="image in images">
        <img
          :src="image.src"
          :width="image.width"
          :height="image.height"
          alt="Image"
          class="me-1 mb-1"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import appServices from "../services/AppServices";
const props = defineProps(["images", "imageFiles"]);
const emit= defineEmits(["enableSpin",'converted'])
const convertToPDF = () => {
  emit("enableSpin", true)
  var formData = new FormData();
  props.imageFiles.forEach((imageFile) => {
    formData.append("imageFiles", imageFile.file);
  });
  appServices
    .uploadImages(formData)
    .then(async (response) => {
      const a = document.createElement("a");
      a.href = "data:application/pdf;base64," + response.data;
      a.download = "download.pdf";
      a.click();
      emit('converted')
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(()=>{
      emit("enableSpin", false)
    });
};
</script>
