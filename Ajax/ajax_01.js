/*
 *AJAX:Asynchronous JavaScript And Xml, JavaScript执行异步网络请求
 *用户点击“Submit”按钮，表单开始提交，浏览器就会刷新页面，web的运作原理：一次HTTP请求对应一个页面
 *要让用户留在当前页面，同时发送请求，要用JavaScript实现，接收到数据后，再用JavaScript更新页面
 */
//实现AJAX主要依靠XMLHttpRequest对象：
function success(text){
  var textarea = document.getElementById('response-text');
  textarea.value = text;
}
function fail(err){
  var textarea = document.getElementById('response-text');
  text.value = 'Error:' + err;
}

var xhr = new XMLHttpRequest();  //创建XMLHttpRequest对象

/*
 *必须在调用open之前指定onreadystatechange事件处理程序
 *才能确保跨浏览器兼容性
 */
xhr.onreadystatechange = function(){    //监测状态变化
  if(xhr.readyState == 4){  //状态为4时代表请求完成
    if(xhr.status === 200){   //响应已经成功返回
      return success(xhr.responseText);
    }else{
      return fail(xhr.status);
    }  
  }
  else{
    console.log('HTTP请求还在继续');
  }
}

xhr.open('get',url); 
xhr.send();

/*IE以及低版本IE,XMR对象是通过MSXML库中的一个ActiveX对象实现的。
 *所以在IE中可能会遇到三种不同的XHR对象：
 *MSXML2.XMLHttp、MSXML2.XMLHttp.3.0、MSXML2.XMLHttp.6.0
 *所以封装一个函数来创建XHR对象，兼容IE版本
 */
function createXHR(){
  if(typeof XMLHttpRequest != "undefined"){
    return new XMLHttpRequest();
  }else if(typeof ActiveXObject != "undefined"){
    if(typeof arguments.callee.activeXString != "string"){
      var versions = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0", "MSXML2.XMLHttp"],
          i, len;
      for(i=0, len=versions.length; i<len; i++){
        try{
          new ActiveXObject(versions[i]);
          arguments.callee.activeXString = versions[i];
          break;
        }catch(ex){
          console.log(ex);
        }
      }
    }
    return new ActiveXObject(arguments.callee.activeXString);
  }
}
var xhr = createXHR();

/*
 *跨域资源共享
 *Ajax同信限制：跨域安全策略；
 *XHR对象只能访问与包含它的页面位于同一个域中的资源：
 *1、域名要相同（www.example.com和example.com不同），
 *2、协议要相同（http和https不同），
 *3、端口号要相同（默认是:80端口，它和:8080就不同）。
 */