<template>
  <div class="pb-5 position-relative">
    <p class="text-center">Select Images that you want to convert to PDF</p>
    <label for="select-images" class=" opacity-100 btn btn-dark position-absolute top-50 start-50 translate-middle mt-3">Select Images</label>
    <input @change="selectImages($event)" id="select-images" class="invisible" type="file" accept="image/png, image/jpeg, image/jpg" multiple>
  </div>
</template>

<script setup>
import { ref } from "vue";

const emit = defineEmits(["set-images", "set-imageFiles"]);
var images = ref([]);
var imageFiles = ref([]);

const imageSelect = (file) => {
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
  fileReader.readAsDataURL(file);
};

const getScalingFactor = (nW, nH) => {
  if (nW > nH) {
    return 200 / nW;
  }
  return 350 / nH;
};

const selectImages = async (event) => {
  const files= event.target.files
  for (const file of files) {
    imageFiles.value.push({ name: file.name, file: file });
    imageSelect(file);
  }
  console.log(files);

  emit("set-images", images.value);
  emit("set-imageFiles", imageFiles.value);
};
</script>
