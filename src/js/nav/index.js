const singUp = require('../singUp');

const navBar = {
  init(){
    console.log('hey bundle');
    $(document).ready(function(){
      $('.sidenav').sidenav();
    });
    singUp.msj;
  }
}

module.exports = navBar;
