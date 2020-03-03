;(function(){
'use strict';

  let is = {
    numeric(value){
      return (!isNaN(value));
    },

    positive(value) {
      if(!this.numeric(value))
        return false;

      return value > 0;
    },

    integer(value){
      if(!this.numeric(value))
        return false;

      return Number.isInteger(value);
    },

    in(value,arr){
      return arr.indexOf(value) !=-1;
    },

    min(value,guide){
      return value >= guide;
    },
    max(value,guide){
      return value <= guide;
    },

    minLength(value,guide){
      return value.length>=guide;
    },
    maxLength(value,guide){
      return value.length <=guide;
    },

    regex(value,re){
      if(typeof re == 'string')
        re = new RegExp(re);

      return re.test(value);
    },

    phone(value){
      let re = /^(?:\+86)?1(80|86|88)\d{8}$/;
      return re.test(value);
    },
    email(value){
      let re = /^[a-zA-Z0-9][\w.]+\w@\w+\.\w+$/;
      return re.test(value);
    }
  }

  function praseRule(str){
    let ruleArr = str.split('|');
    let rule = {};
    ruleArr.forEach(it=>{
      let itArr = it.split(':');
      let key = itArr[0];
      let guide = itArr[1];
      if(!guide)
        guide = true;
      rule[key] = guide;
    });
    return rule;
  }
  
  

})();