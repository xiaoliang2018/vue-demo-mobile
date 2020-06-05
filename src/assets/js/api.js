// let ajaxUrl2 = 'http://192.168.137.1:1000';
import axios from 'axios';
import qs from 'qs';

const testAxios = (token,fn1,fn2) => {
    // axios.defaults.headers.common['token'] = token;
    axios.get('/test/get',
    {
      params:{
        city:'沈阳'
      }
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}
export default {
    testAxios
}


