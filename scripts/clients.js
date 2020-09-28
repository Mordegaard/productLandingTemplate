$(document).ready(function(){
  var scr = document.getElementById("scroller");
  var wd = scr.children[0].offsetWidth;
  $('#scrollerBtn div').click(function(){
    var index = [].indexOf.call(this.parentElement.children, this);
    for (var i=0; i<scr.children.length; i++) {
      scr.children[i].classList.remove("showed");
      this.parentElement.children[i].style.transform = "";
    }
    scr.children[index].classList.add("showed");
    this.style.transform = "scale(1.5)";
    $(scr).animate({scrollLeft:wd*index},500);
  });
});
