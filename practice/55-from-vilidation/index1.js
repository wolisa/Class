;
(function () {
  'use stript';

  ;
  (function () {
    'use stript';
  
    let
      data = {},
  
      error = {
        username: [],
        password: [],
        phone: [],
        email: []
      },
  
  
      form = document.querySelector('form');
    let errorContainer = form.querySelector('.errorContainer');
  
    boot();
  
    function boot() {
      bindEvent();
    }
  
    function bindEvent() {
      bindSubmit();
    }
  
    function bindKeyup() {
      let er = form.querySelectorAll('.error');
      console.log(er);
      
      er.forEach(it => {
        console.log(it);
  
        it.addEventListener('keyup', e => {
          if (e.key != 'Enter' || e.key != 'Esc')
            it.classList.remove('error');
            
        })
      })
    }
  
    function bindSubmit() {
  
      form.addEventListener('submit', e => {
        e.preventDefault();
  
        data.name = form.querySelector('[name=username]').value;
        data.password = form.querySelector('[name=password]').value;
        data.email = form.querySelector('[name=email]').value;
        data.phone = form.querySelector('[name=phone]').value;
  
        validate(data) ? hideError() : showError();
        bindKeyup();
  
      })
    }
  
    function showError() {
  
      errorContainer.innerHTML = '';
      errorContainer.hidden = false;
  
      for (let key in error) {
        let it = error[key];
  
        let klass = form.querySelector(`[name=${key}]`);
  
  
        if (it.length != 0) {
          klass.classList.add('error');
        }
  
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
  
    function validate(data) {
      error = {
        username: [],
        password: [],
        phone: [],
        email: []
      };
      if (!isUsername(data.name, 4, 12)) {
        error.username.push('用户名格式错误，应在4-12字符之间');
      }
      if (!isEmail(data.email)) {
        error.email.push('邮箱格式错误');
      }
      if (!isPhone(data.phone)) {
        error.phone.push('手机号码格式错误');
      }
      if (!isPassword(data.password, 6, 12)) {
        error.password.push('密码格式错误，应在6-12字符之间');
      }
    }
  
    function isUsername(str) {
      if (!betweenLength(str, 4, 12))
        return false;
      return true;
    }
  
    function isEmail(str) {
      if (!str.includes('@') || !str.includes('.'))
        return false;
      return true;
    }
  
    function isPhone(num) {
      if ((num.length != 11 && num.length != 13 && num.length != 14) || !num.startsWith('1'))
        return false;
      return true;
    }
  
    function isPassword(str, min, max) {
      if (!betweenLength(str, min, max))
        return false;
      return true;
    }
  
    function between(num, min, max) {
      return num <= max && num >= min;
    }
  
    function betweenLength(str, min, max) {
      return between(str.length, min, max)
    }
  })();
})();