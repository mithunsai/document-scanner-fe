<template>
  <div class="pb-5 position-relative">
    <p class="text-center">Select Images that you want to convert to PDF</p>
    <button class="btn btn-dark position-absolute top-50 start-50 translate-middle mt-3" @click="selectImages()">Select Images</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const emit= defineEmits(['setImgSrcs'])
var imgSrcs = ref([]);

const imageSelect = (fileData) => {
  const fileReader = new FileReader();
  fileReader.addEventListener("load", (event) => {
    imgSrcs.value.push(event.target.result);
  });
  fileReader.readAsDataURL(fileData);
};

const selectImages = async () => {
  const options = {
    types: [
      {
        description: "Images",
        accept: {
          "image/*": [".png", ".jpeg", ".jpg"],
        },
      },
    ],
    excludeAcceptAllOption: true,
    multiple: true,
  };
  const fileHandle = await window.showOpenFilePicker(options);
  for (const file of fileHandle) {
    const fileData = await file.getFile();
    imageSelect(fileData);
  }

  emit('setImgSrcs',imgSrcs.value);
};
</script>
