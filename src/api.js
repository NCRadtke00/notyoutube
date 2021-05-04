import axios from "axios";
console.log(process.env.NCR_YTC_API_KEY);
const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "",
  },
});
export default request;
