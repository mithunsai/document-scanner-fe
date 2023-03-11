<template>
  <div class="pb-5 position-relative">
    <p class="text-center">Select Images that you want to convert to PDF</p>
    <button
      class="btn btn-dark position-absolute top-50 start-50 translate-middle mt-3"
      @click="selectImages()"
    >
      Select Images
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const emit = defineEmits(["setimages"]);
var images = ref([]);

const imageSelect = (fileData) => {
  const fileReader = new FileReader();
  fileReader.addEventListener("load", (event) => {
    const img = new Image();
    img.setAttribute("src", event.target.result);
    setTimeout(() => {
      const scalingFactor = getScalingFactor(
        img.naturalWidth,
        img.naturalHeight
      );
      images.value.push({
        src: event.target.result,
        width: Math.floor(img.naturalWidth * scalingFactor),
        height: Math.floor(img.naturalHeight * scalingFactor),
      });
    }, 1);
  });
  fileReader.readAsDataURL(fileData);
};

const getScalingFactor = (nW, nH) => {
  if (nW > nH) {
    return 200 / nW;
  }
  return 350 / nH;
};

const selectImages = async () => {
  images.value = [];
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

  emit("setimages", images.value);
};
</script>
