'use strict';

module.exports = {


  greeting(arg){
    if (arguments.length !== 1){
      return ("invalid argument length");
    } else if (typeof arg !== 'string'){
      return ("invalid input type");
    }
    return "Hello " + arg;
  }





};
