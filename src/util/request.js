import axios from "axios";
import { Toast } from "mint-ui";

const baseURL = {
  development: "/",
  production: "http://funjosen.fun:3000"
};

// console.log("当前环境", process.env.NODE_ENV);
const request = axios.create({
  baseURL: baseURL[process.env.NODE_ENV]
});

//http request 拦截器
request.interceptors.request.use(
  config => config,
  error => {
    return Promise.reject(error);
  }
);

//http response 拦截器
request.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    Toast({
      message: "网络错误",
      iconClass: "iconfont icon-guanbi2"
    });
    return Promise.reject(error);
  }
);

export default request;
