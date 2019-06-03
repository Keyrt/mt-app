import Axios from 'axios'
Axios.defaults.baseURL = 'http://api.duyiedu.com'
Axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  console.log(config)
  config.params = {
    ...config.params,
    appkey: 'mydream_1553134626793'
  }
  return config
}, function (error) {
  return Promise.reject(error)
})
export default Axios
