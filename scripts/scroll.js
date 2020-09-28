$(document).ready(function(){
  var header = document.getElementsByTagName("header")[0];
  var navbar = document.getElementById("navbar");
  document.onscroll = function() {
    var scr = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (scr < header.offsetHeight) {
      document.getElementById("card").style.marginTop = scr/1.5 + 'px';
      document.getElementById("main").style.marginTop = "";
      navbar.classList.remove("move");
    }
    else {
      navbar.classList.add("move");
      document.getElementById("main").style.marginTop = navbar.offsetHeight + 'px';
    }
  }
});
