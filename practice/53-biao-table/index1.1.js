;(function(){
  'use strict';

  window.saTable = {boot};

  let list,tbody,thead,table,struct,operations;

  function boot(tableSelector, structure, arr,ops){
    list = arr;
    table = document.querySelector(tableSelector);
    thead = table.tHead;
    tbody = table.tBodies[0];
    struct = structure;
    operations = ops;

    render();
  }

  function render(){
    renderHead();
    renderBody();
  }

  function renderHead(){
    let tr = document.createElement('tr');
    let html = '';
    thead.appendChild(tr);

    for(let it in struct){
      html += `<th>${struct[it]}</th>`;
    }
    if(operations){
      html += `<th>操作</th>`;
    };
    tr.innerHTML = html;
  }

  function renderBody(){
    list.forEach((i,index)=>{
      let html = '';
      let tr = document.createElement('tr');
      tbody.appendChild(tr);

      for(let it in struct){
        html += `<td>${i[it] || '-'}</td>`;
      };
      
      if(operations){
        let btnHtml ='';
        for(let action in operations){
          btnHtml += `<button class="${action}">${action}</button>`;
        }
        html+= `<td>${btnHtml}</td>`;
      }
      tr.innerHTML = html;

      if(operations){
        for(let key in operations){
          tr.querySelector('.'+key).addEventListener('click', ()=>{
            operations[key](tr,index);
          });
        }
      }
    })
  }
})();