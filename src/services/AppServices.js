import axios from "axios";

const appServices = {
  uploadImages: (imageFiles) => {
    const url = "https://document-scanner-be.onrender.com/uploadImages/";
    return axios.post(url, imageFiles, {
      headers: {
        "Content-Type": "multipart/form-data",
        "Accept": "application/pdf"
      },
    });
  },
};

export default appServices;
