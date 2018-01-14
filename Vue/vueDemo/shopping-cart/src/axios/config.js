import Qs from 'qs'
export default{
    // `url` 是用于请求的服务器 URL，这里没有请求服务器
    url: '',        

    // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
    baseURL: 'http://....',

    method: 'POST',

    // `transformRequest` 允许在向服务器发送前，修改请求数据
    // 只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
    // 后面数组中的函数必须返回一个字符串，或 ArrayBuffer，或 Stream
    transformRequest: [                                 // 这个函数可以不用管，可以注释掉
        function(data) {
            data.strSQL = base64encode(data.strSQL);
            data = Qs.stringify(data);
            return data;
        }
    ],


    // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
    transformResponse: [                               // 这个函数可以不用管，可以注释掉
        function(data) {
            return data;
        }
    ],

    // `headers` 是即将被发送的自定义请求头
    headers: {
        'Content-Type':'application/x-www-form-urlencoded'
    },


    // `params` 是即将与请求一起发送的 URL 参数
    // 必须是一个无格式对象(plain object)或 URLSearchParams 对象
    params: {

    },

    // `paramsSerializer` 是一个负责 `params` 序列化的函数
    paramsSerializer: function(params) {
        return Qs.stringify(params)
    },


    // `data` 是作为请求主体被发送的数据
    // 只适用于这些请求方法 'PUT', 'POST', 和 'PATCH'
    // 在没有设置 `transformRequest` 时，必须是以下类型之一：
    // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
    // - 浏览器专属：FormData, File, Blob
    // - Node 专属： Stream
    data: {
        eid: "514403",
        currentPage:1,
        ItemsOfPage:99999,
        type:0,
        strSQL:""
    },

    // `timeout` 指定请求超时的毫秒数(0 表示无超时时间)
    // 如果请求话费了超过 `timeout` 的时间，请求将被中断
    timeout: 5000,

    // `withCredentials` 表示跨域请求时是否需要使用凭证
    withCredentials: true,


    // `responseType` 表示服务器响应的数据类型，可以是 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
    responseType: 'json',

    // `maxContentLength` 定义允许的响应内容的最大尺寸
    maxContentLength: 2000,

  /* `validateStatus` 定义对于给定的HTTP 响应状态码是 resolve 或 reject  promise 。
    *如果 `validateStatus` 返回 `true` (或者设置为 `null` 或 `undefined`)，promise 将被 resolve; 否则，promise 将被 rejecte
    */
    validateStatus: function(status) {
        return status >= 200 && status < 300; // default
    },

    // `maxRedirects` 定义在 node.js 中 follow 的最大重定向数目
    // 如果设置为0，将不会 follow 任何重定向
    maxRedirects: 5, // default
}



let base64encode = (str) => {                               //base64encode()和utf16to8()都不重要，因为不用向服务器发送和接受数据
  let keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  let output = "";
  let chr1, chr2, chr3 = "";
  let enc1, enc2, enc3, enc4 = "";
  let i = 0;
  let input = utf16to8(str);
  do {
    chr1 = input.charCodeAt(i++);
    chr2 = input.charCodeAt(i++);
    chr3 = input.charCodeAt(i++);
    enc1 = chr1 >> 2;
    enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
    enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
    enc4 = chr3 & 63;
    if (isNaN(chr2)) {
      enc3 = enc4 = 64;
    } else if (isNaN(chr3)) {
      enc4 = 64;
    }
    output = output + keyStr.charAt(enc1) + keyStr.charAt(enc2) + keyStr.charAt(enc3) + keyStr.charAt(enc4);
    chr1 = chr2 = chr3 = "";
    enc1 = enc2 = enc3 = enc4 = "";
  } while (i < input.length);
  return output;

}
let utf16to8 = (str) => {
  let out, i, len, c;
  out = "";
  len = str.length;
  for (i = 0; i < len; i++) {
    c = str.charCodeAt(i);
    if ((c >= 0x0001) && (c <= 0x007F)) {
      out += str.charAt(i);
    } else if (c > 0x07FF) {
      out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));
      out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F));
      out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
    } else {
      out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F));
      out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F));
    }
  }
  return out;
}