import axios from "axios";

const appServices = {
  uploadImages: (imageFiles) => {
    const url = "/uploadImages/";
    return axios.post(url, imageFiles, {
      headers: {
        "Content-Type": "multipart/form-data",
        "Accept": "application/pdf"
      },
    });
  },
};

export default appServices;
