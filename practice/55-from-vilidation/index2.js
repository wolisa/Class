;
(function () {
  'use stript';

  let data = {};
  let error = {
    username: [],
    email: [],
    phone: [],
    password: [],
  };
  let form = document.querySelector('form');
  let errorContainer = form.querySelector('.errorContainer');

  boot();

  function boot() {
    bindSubmit();
  }

  function bindSubmit() {
    form.addEventListener('submit', e => {
      e.preventDefault();

      data.username = form.querySelector('[name=username]').value;
      data.password = form.querySelector('[name=password]').value;
      data.email = form.querySelector('[name=email]').value;
      data.phone = form.querySelector('[name=phone]').value;

      validate(data) ? hideError() : showError();
      bindKeyup();
    })
  }

  function bindKeyup(){
    let errorAll = form.querySelectorAll('.error');
    errorAll.forEach(it =>{
      it.addEventListener('keyup', e=>{
        if(e.key!='Enter'&& e.key!='Escape'&&e.key!='1')
          it.classList.remove('error');
      })
    })
  }

  function showError() {
    errorContainer.innerHTML = '';
    errorContainer.hidden = false;
    for (let key in error) {
      let it = error[key];

      let klass = form.querySelector(`[name=${key}]`).classList;
      if (it.length)
        klass.add('error');

      it.forEach(str => {
        let errorItem = document.createElement('div');
        errorItem.innerText = str;
        errorContainer.appendChild(errorItem);
      })
    }
  }

  function hideError() {
    errorContainer.hidden = true;
  }

  function validate(obj) {
    let vali = true;
    error = {
      username: [],
      email: [],
      phone: [],
      password: [],
    };

    if (!isUsername(obj.username, 4, 12)) {
      error.username.push('用户名应在4-12字符之间');
      vali = false;
    }
    if (!isPassword(obj.password, 6, 12)) {
      error.password.push('密码应在6-12字符之间');
      vali = false;
    }
    if (!isEmail(obj.email)) {
      error.email.push('邮箱格式不符');
      vali = false;
    }
    if (!isPhone(obj.phone)) {
      error.phone.push('手机号码格式不正确');
      vali = false;
    }

  }

  function isUsername(str, min, max) {
    if (!betweenLight(str, min, max))
      return false;
    return true;
  }

  function isPassword(str, min, max) {
    if (!betweenLight(str, min, max))
      return false;
    return true;
  }

  function isEmail(str) {
    if (!str.includes('@') || !str.includes('.'))
      return false;
    return true;
  }

  function isPhone(str) {
    if ((str.length != 11 && str.length != 13 && str.length != 14) || str.startsWidth('1'))
      return false;
    return true;
  }

  function between(num, min, max) {
    return num <= max && num >= min;
  }

  function betweenLight(str, min, max) {
    between(str.length, min, max);
  }
})();