
var juegoDulces = {
animacionTitulo: function(){
  setInterval(function(){
    $(".main-titulo").switchClass("main-titulo","main-titulo-efecto", 200),
    $(".main-titulo").switchClass("main-titulo-efecto","main-titulo", 200)
  }, 1000);
}
}

$(document).ready(function(){
  juegoDulces.animacionTitulo();
});
