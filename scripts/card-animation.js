function Parallax(options){
    options = options || {};
    this.nameSpaces = {
        wrapper: options.wrapper || '.scene',
        layers: options.layers || '.card',
        deep: options.deep || 'data-parallax-deep'
    };
    this.init = function() {
        var self = this,
            parallaxWrappers = document.querySelectorAll(this.nameSpaces.wrapper);
       for(var i = 0; i < parallaxWrappers.length; i++){
   (function(i){
    parallaxWrappers[i].addEventListener('mousemove', function(e){
     var rect = e.target.getBoundingClientRect();
     var x = e.clientX - rect.left - rect.width/2,
      y = e.clientY - rect.top - rect.height/2,
      layers = parallaxWrappers[i].querySelectorAll(self.nameSpaces.layers);
     for(var j = 0; j < layers.length; j++){
            (function(j){
              var deep = layers[j].getAttribute(self.nameSpaces.deep),
                  disallow = layers[j].getAttribute('data-parallax-disallow'),
                  itemX = (disallow && disallow === 'x') ? 0 : x / deep,
                  itemY = (disallow && disallow === 'y') ? 0 : y / deep;
                  if(disallow && disallow === 'both') return;
                  layers[j].style.transform = 'rotateY(' + itemX + 'deg) rotateX(' + -itemY + 'deg)';
            })(j);
     }
    })
   })(i);
       }
    };
    this.init();
    return this;
}

window.addEventListener('load', function(){
    new Parallax();
});

$(document).ready(function(){
  var hovred = 0;
  document.getElementById("hd").onmouseleave = function() {hovred = 1;};
  $(document).mousemove(function() {
    if (hovred == 1) {    $('#card').css('transform', 'none'); $('.card').css('transition', 'transform 0.2s'); hovred = 0;} else {$('#card').css('transition', '0s');}
  });
});
