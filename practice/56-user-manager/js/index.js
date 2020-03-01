;
(function () {
  'use stript';

  let elForm = document.getElementById('userForm');
  let elTable = document.getElementById('userTable');
  let data = [{
      username: 'zls',
      email: 'zls@msn.com',
      balance: 13
    },
    {
      username: 'lsd',
      email: 'lsd@msn.com',
      balance: 14,
    }
  ];
  let tbody = elTable.tBodies[0];

  let inputs = {
    index:elForm.querySelector('[name=index]'),
    username:elForm.querySelector('[name=username]'),
    email:elForm.querySelector('[name=email]'),
    balance:elForm.querySelector('[name=balance]')
  };

  
  boot();

  function boot() {
    bindSubmit();
    render();
  }

  function bindSubmit() {
    elForm.addEventListener('submit', e => {
      e.preventDefault();

      let row = {};
    
      row.username = inputs.username.value;
      row.email = inputs.email.value;
      row.balance =inputs.balance.value;

      inputs.index.value? data[inputs.index.value] = row : 
      data.push(row);


      elForm.reset();

      render();
    })
  }

  function render() {
    tbody.innerHTML = '';
    data.forEach((item, index) => {
      if (!item)
        return;
      let tr = document.createElement('tr');

      tr.innerHTML = `<td>${item.username}</td><td>${item.email}</td><td>${item.balance}</td><td class="operation"><button class="delete">删除</button><button class="update">更新</button></td>`;
      tbody.appendChild(tr);


      tr.querySelector('.operation').addEventListener('click', e => {
        let klass = e.target.classList;

        if (klass.contains('delete')) {
          item[index] = null;
          tr.remove();
        }

        if(klass.contains('update')){
          inputs.index.value = index;
          inputs.username.value = item.username;
          inputs.email.value = item.email;
          inputs.balance.value = item.balance;
        }
      })

      
    })


  }
})();