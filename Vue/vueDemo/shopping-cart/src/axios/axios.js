import axios from 'axios'
import config from './config'

// axios(config);
export class AXIOS {
  constructor() {

  }
  //获取已授权列表
  get(param) {                  //get数据
    config.data.strSQL = param.param;
    return axios.get(param.api,{},config);
  }
  post(param) {                 //post数据
    config.data.strSQL = param.param;
    return axios.post(param.api,{},config);
  }
  reqSuccess(obj,msg){

  }
  reqFail(obj,msg){

  }
}
export default AXIOS;