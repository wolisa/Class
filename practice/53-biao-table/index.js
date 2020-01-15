;
(function () {
  'use strict';
  window.saTable = {
    boot
  };

  let table, thead, tbody, struct, list,operations;

  function boot(tableSelector, structure, arr,ops) {
    table = document.querySelector(tableSelector);
    thead = table.tHead;
    tbody = table.tBodies[0];
    struct = structure;
    list = arr;
    operations = ops;

    render();
  }

  function render() {
    renderHead();
    renderBody();
  }

  function renderHead() {
    let html = '';
    thead.innerHTML = '';

    for (let key in struct) {
      html += `<th>${struct[key]}</th>`;
    }
    if(operations){
      html += `<th>操作</th>`;
    }
    thead.innerHTML = html;
  }

  function renderBody() {
    list.forEach((it,index) => {
      let html = '';
      let tr = document.createElement('tr');
      tbody.appendChild(tr);

      for (let i in struct) {
        html += `<td>${it[i] || '-'}</td>`;
      }

      if(operations){
        let btnHtml = '';
        for(let action in operations){
          btnHtml += `<button class="${action}">${operations[action].name}</button>`;
          
        }
        html += `<td>${btnHtml}</td>`;
      }
      tr.innerHTML = html;
      if(operations){
        for(let key in operations){
          tr.querySelector('.' + key).addEventListener('click',  ()=>{
            operations[key].action? operations[key].action(tr,index) : operations[key](tr,index);
          })
        }
      }
    })
  }
})();