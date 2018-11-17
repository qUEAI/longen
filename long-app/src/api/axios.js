"use strict";

import Vue from "vue";
import axios from "axios";
import qs from "qs";

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const baseURL = "/"; // 为 axios 实例的方法传递相对 URL

// axios 全局配置
axios.defaults.headers.common = {
    "Accept": "application/json",
    // "Authorization": "Bearer",
    "X-Requested-With": "XMLHttpRequest"
    // "Access-Control-Allow-Origin": "*"
};
// axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
// axios.defaults.headers.post["Content-Type"] = "text/xml";
axios.defaults.withCredentials = true;

// 发送请求前处理request的数据
/* axios.defaults.transformRequest = [(data) => {
    // Do whatever you want to transform the data
    let newData = "";
    for (let k in data) {
        newData += encodeURIComponent(k) + "=" + encodeURIComponent(data[k]) + "&";
    }
    return newData;
}]; */

// 请求配置
let config = {
    // baseURL: process.env.baseURL || process.env.apiUrl || ""
    baseURL: baseURL + "longen_service/", // 为 axios 实例的方法传递相对 URL
    timeout: 15000 // Timeout 超时时间
    // withCredentials: true // 跨域请求时是否需要使用凭证
};
// 荣丰接口实例化
const _axios = axios.create(config);
_axios.interceptors.request.use(
    function(config) {
        // store.commit("loadingState", true);
        // // Do something before request is sent
        // if (window.sessionStorage.getItem("state")) {
        //     config.headers.Authorization = JSON.parse(window.sessionStorage.getItem("state")).token;
        // } else {
        //     config.headers.Authorization = "Bearer";
        // }
        // if (config.method === "get") {
        //     return config;
        // }
        //
        // config.data = qs.stringify(config.data);
        config.data = qs.stringify(config.data);
        return config;
    },
    function(error) {
        // Do something with request error
        // store.commit("loadingState", true);
        return Promise.reject(error);
    }
);

// Add a response interceptor
_axios.interceptors.response.use(
    function(response) {
        // store.commit("loadingState", false);
        // // Do something with response data
        // if (response.data.code === 304) { // 账号或密码错误
        //     const responseError = new Error("账号或密码错误");
        //     responseError.error = "账号或密码错误";
        //     throw responseError.error;
        //     // return Promise.resolve("账号或密码错误");
        // } else if (response.data.code === 305) { // 需要用户登陆
        //     if (JSON.parse(window.sessionStorage.getItem("state")).logout) {
        //         store.commit("confirmLogout");
        //         store.commit("setAuthData", []);
        //         store.commit("editLoginState");
        //         window.location.href = "/login";
        //         sessionStorage.clear();
        //         return Promise.resolve("请重新登录");
        //     } else {
        //         setTimeout(() => {
        //             store.commit("setAuthData", []);
        //             store.commit("editLoginState");
        //             window.location.href = "/login";
        //             sessionStorage.clear();
        //         }, 50);
        //         const responseError = new Error("请重新登录");
        //         responseError.error = "请重新登录";
        //         throw responseError.error;
        //     }
        // } else if (response.data.code === 306) {
        //     const responseError = new Error("需要权限");
        //     responseError.error = "需要权限";
        //     throw responseError.error;
        //     // return Promise.resolve("需要权限");
        // } else if (response.data.code === 307) {
        //     const responseError = new Error("账号已被锁定,请联系管理员");
        //     responseError.error = "账号已被锁定,请联系管理员";
        //     throw responseError.error;
        //     // return Promise.resolve("账号已被锁定,请联系管理员");
        // } else if (response.data.code === 500) {
        //     const responseError = new Error("服务器内部错误，请稍后重试或与管理员联系");
        //     responseError.error = "服务器内部错误，请稍后重试或与管理员联系";
        //     throw responseError.error;
        // } else if (!response.data) {
        //     const responseError = new Error(response);
        //     // responseError.origin = response;
        //     throw responseError;
        // } else {
        //     return response;
        // }
       return response;
    },
    function(error) {
        // store.commit("loadingState", false);
        // Do something with response error
        /* let responseError;
        if (error.data.code === 500) {
            responseError = new Error("服务器内部错误，请稍后重试或与管理员联系");
        } else {
            responseError = new Error("消息发送失败，请稍后重试或与管理员联系");
        }
        // responseError.error = error;
        throw responseError; */
        return Promise.reject(error);
    }
);
Plugin.install = function(Vue, options) {
    Vue.axios = _axios;
    window.axios = _axios;
    Object.defineProperties(Vue.prototype, {
        axios: {
            get() {
                return _axios;
            }
        },
        $axios: {
            get() {
                return _axios;
            }
        }
    });
};

Vue.use(Plugin);

export default Plugin;
