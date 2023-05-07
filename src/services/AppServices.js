import axios from "axios";

const appServices = {
  uploadImages: (imageFiles) => {
    const url = "http://127.0.0.1:8000/uploadImages/";
    return axios.post(url, imageFiles, {
      headers: {
        "Content-Type": "multipart/form-data",
        "Accept": "application/pdf"
      },
    });
  },
};

export default appServices;
