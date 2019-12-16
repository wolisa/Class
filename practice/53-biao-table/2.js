;
(function(){
  'use strict';
  window.saTable ={boot};

  let table,thead,tbody,list,structure;
  function boot(tableSelector,struct,arr){
    table = document.querySelector(tableSelector);
    thead = table.tHead;
    tbody = table.tBodies[0];
    list = arr;
    structure = struct;

    render();
  }

  function render(){
    renderHead();
    renderBody();
  }

  function renderHead(){
    let html = '';
    thead.innerHTML = '';
    for(let key in structure){
      html+= `<th>${structure[key]}</th>`;
    }
    thead.innerHTML = html;
  }
  function renderBody(){
    list.forEach(it =>{
      let tr = document.createElement('tr');
      tbody.appendChild(tr);
      let html = '';

      for(let i in structure){
        html+=`<td>${it[i] || '-'}</td>`
      };
      tr.innerHTML = html;
    })
  }
})();