;(function(){
  'use strict';

  let form = document.getElementById('search-form');
  let input = form.querySelector('[name=keyword]');
  let userList = document.querySelector('.user-list')

  boot();
  function boot(){
    bindEvent();
  }
  function bindEvent(){
    form.addEventListener('submit',e=>{
      e.preventDefault();

      let keyword = input.value;
      search(keyword);
    })
  }
  function search(key){
    let http = new XMLHttpRequest();
    http.open('get','https://api.github.com/search/users?q='+key);
    http.send();

    http.addEventListener('load',$=>{
      let data = JSON.parse(http.responseText);
      render(data);
    })
  }
  function render(data){
    userList.innerHTML = '';
    data.items.forEach(it=>{
      let item = document.createElement('div');
      item.classList.add('item');

      item.innerHTML = `
      <div class=avatar>
        <img src=${it.avatar_url}>
      </div>
      <div class="detail">
        <strong>${it.login}</strong>
        <div class="dec">
          个人主页：
          <a href=${it.url}>${it.url}</a>
        </div>
      </div>
      `;
      userList.appendChild(item);
    })
  }
})();

