;(function(){
  'use strict';

  let is = {
    numeric(value){
      return (!isNaN(value));
    },

    positive(value){
      if(!this.numeric(value))
        return false;

      return value > 0;
    },

    integer(value){
      if(!this.numeric(value))
        return false;

      return Number.isInteger(value);
    },

    min(value, guide){
      return value>=guide;
    },
    max(value, guide){
      return value <= guide;
    },

    minLength(value,guide){
      return value.length>=guide;
    },
    maxLength(value,guide){
      return value.length<=guide;
    },

    in(value,arr){
      return arr.indexOf(value) != -1;
    },

    email(value){
      let re = /^\w+@\w+\.\w+$/;
      return re.test(value);
    },

    phone(value){
      let re = /^(?:\+?86)?1(80|86|88)\d{8}$/;
      return re.test(value);
    },

    regex(value,reg){
      if(typeof value == 'string')
        reg = new RegExp(reg);
      return re.test(value);
    }
  }
    
  function praseRule(value){
    let ruleArr = value.split('|');
    let rule = {};
    ruleArr.forEach(it=>{
      let itArr = it.split(':');
      let key = itArr[0];
      let guide = itArr[1];
      if(!guide){
        guide = true;
      }
      rule[key] = guide;
    });
    return rule;
  }
})();