;
(function () {
  'use strict';

  window.rq = {
    get,
    post
  };

  function get(url, onSuccess) {
    send('get', url, null, onSuccess)
  };

  function post(url,data){
    send('post',url,data,onSuccess)
  };

  function send(type, url, data, onSuccess) {
    let http = new XMLHttpRequest();
    http.open(type, url);
    http.send();
    http.addEventListener('load', () => {
      let data = JSON.parse(http.responseText);
      onSuccess && onSuccess(data);
    })
  }
})();