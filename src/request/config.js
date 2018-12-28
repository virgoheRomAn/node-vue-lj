const axios = require("axios");
const Qs = require("qs");

const instance = axios.create({
    timeout: 100000,
    headers: {}
});

//添加请求拦截器
instance.interceptors.request.use(function (config) {
    config.headers['accessToken'] = localStorage.getItem('accessToken') || undefined;
    //config.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';

    config.params = config.params || {};
    //config.data = Qs.stringify(config.data);

    return config;
}, function (error) {
    console.log(error);

    return Promise.reject(error);
});

//添加响应拦截器
instance.interceptors.response.use(function (response) {
    let data = response.data;
    //令牌失效，请重新获取令牌
    if (data.errorCode === 'E0004' && response.config.url.indexOf('refreshToken.json') == -1) {
        return instance.refreshToken().then(() => {
            response.config.headers['accessToken'] = localStorage.getItem('accessToken') || undefined;
            return instance(response.config);
        });
    }
    return response;
}, function (error) {
    console.log(error);

    return Promise.reject(error);
});

export default instance;