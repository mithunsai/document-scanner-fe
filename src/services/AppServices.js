import axios from "axios";

const appServices = {
  uploadImages: (file) => {
    const url = "http://127.0.0.1:8000/uploadImages/";
    return axios.post(url, { base64: file });
  },
};

export default appServices;
