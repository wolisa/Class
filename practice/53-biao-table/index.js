;
(function (){
  'use strict';
  window.saTable={boot};

  let table,thead,tbody,struct,list;

  function boot(tableSelector,structure,arr){
    table = document.querySelector(tableSelector);
    thead = table.tHead;
    tbody = table.tBodies[0];
    struct = structure;
    list = arr;

    render();
  }
  function render(){
    renderHead();
    renderBody();
  }

  function renderHead(){
    let html = '';
    thead.innerHTML = '';

    for(let key in struct){
      html += `<th>${struct[key]}</th>`;
    }
    thead.innerHTML=html;
  }
  
  function renderBody(){
    list.forEach(it =>{
      let html = '';
      let tr = document.createElement('tr');
      tbody.appendChild(tr);

      for(let i in struct){
        html+= `<td>${it[i] || '-'}</td>`;
      }
      tr.innerHTML = html;
    })
  }
})();