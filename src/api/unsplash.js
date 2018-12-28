import axios from "axios";

const apiInfo = {
  rootUrl: "https://api.unsplash.com",
  endpoint: "/search/photos",
  apiKey: "f3961038d1098b2b2289c8b8cd5fd9f21611930b5c91149b64e61be5d4b5e0a7"
};

export default axios.create({
    baseURL: apiInfo.rootUrl,
    headers:{
        Authorization: `Client-ID ${apiInfo.apiKey}`
    }
});
