;
(function () {
  'use strict';

  let is = {
    numeric(value) {
      return !isNaN(parseFloat(value));
    },
    min(value, guide) {
      return value >= guide;
    },
    max(value, guide) {
      return value <= guide;
    },
    positive(value) {
      if (!this.numeric(value))
        return false;

      return value > 0;
    },
    negative(value) {
      if (!this.numeric(value))
        return false;
      return value < 0;
    },

    integer(value) {
      if (!this.numeric(value))
        return false;
      return Number.isInteger(value);
    },

    minLength(value, guide) {
      return value.length > guide;
    },
    maxLength(value, guide) {
      return value.length < guide;
    },

    startsWith(value, guide) {
      return value.startsWith(guide);
    },

    in (value, arr) {
      return arr.indexOf(value) !== -1;
    },

    email(value) {
      let re = /^\w+@?\w+\.\w+$/;

      return re.test(value);
    },

    phone(value) {
      let re =/^(?:\+?86)?1(38|39|80|86|88)\d{8}$/;

      return re.test(value);
    },
    username(value) {
      let re = /^[a-zA-Z0-9]\w+$/;
    },

    regex(value, reg) {
      if (typeof reg == 'string')
        reg = new RegExp(reg);

      return reg.test(value);
    },
  };
  console.log(is.phone('8618601231994'));


  function parseRule(str) {
    let ruleArr = str.split('|');

    let rule = {};

    ruleArr.forEach(it => {
      let itArr = it.split(':');

      let key = itArr[0];
      let guide = itArr[1];

      if (!guide)
        guide = true;

      rule[key] = guide;
    })
    return rule;
  };


})();