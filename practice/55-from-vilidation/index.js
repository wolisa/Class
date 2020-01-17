;(function(){
  'use strict';

  window.vali={
    isUsername,
    isEmail,
    isPassword,
    isPhone
  }
  function isUsername(str){
    if(!betweenLength(str,4,12) || str.includes('渣渣')  || !isNaN(str))
      return false;
    
    return true;
  }

  function isEmail(str){
    if(!str.includes('@') || !str.includes('.'))
      return false;
    return true;
  }

  function isPhone(str){
    
    if((str.length != 11 && str.length != 13 && str.length != 14) || !str.startsWith('1'))
      return false;
    return true;
  }

  function isPassword(str){
    if(!betweenLength(str,6,18))
      return false;
    return true;
  }
  
  function between(num,min,max){
    return num >= min&& num <= max;
  }
  function betweenLength(str,min,max){
    return between(str.length,min,max);
  }


})();