;
(function () {
  'use strict';
  window.saTable = {
    boot
  };

  let table, thead, tbody, structure, list;

  function boot(tableSelector, struct, arr) {
    list = arr;
    structure = struct;
    table = document.querySelector(tableSelector);
    thead = table.tHead;
    tbody = table.tBodies[0];

    render();
  }

  function render() {
    renderHead();
    renderBody();
  };

  function renderHead() {
    let html = '';
    for (let i in structure) {
      html += `<th>${structure[i]}</th>`;
    }
    thead.innerHTML = html;
  }

  function renderBody() {

    list.forEach(it => {
      let html = '';
      let tr = document.createElement('tr');
      tbody.appendChild(tr);

      for (let i in structure) {
        html += `<td>${it[i] || '-'}</td>`;
      }
      tr.innerHTML = html;
    })
  }
})();