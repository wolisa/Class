;
(function () {
  'use strict';
  window.saTable = {boot};

  let table,thead,tbody,structure,list;

  function boot(tableSelector, struct, arr) {
    table = document.querySelector(tableSelector);
    thead = table.tHead;
    tbody = table.tBodies[0];
    list  = arr;
    structure = struct;
    render();
  }
  function render(){
    renderHead();
    renderBody();
  }
  function renderHead(){
    let html = '';
    for(let key in structure){
      html += `<th>${structure[key]}</th>`;
    }
    thead.innerHTML = html;
  };
  function renderBody(){
    list.forEach(it =>{
      let html = '';
      let tr = document.createElement('tr');
      tbody.appendChild(tr);
      for(let k in structure){
        html += `<td>${it[k] || '不便透露'} </td>`
      }
      tr.innerHTML = html;
    })
  }
  
})();