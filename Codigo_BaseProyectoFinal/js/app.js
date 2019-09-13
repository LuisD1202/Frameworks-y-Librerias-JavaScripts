var juegoActivo = 0
    totalColumnas = 7
    totalFilas = 5
    movimientos = 1
var data = [];
var juegoDulces = {

  animacionTitulo: function(){
    console.log("funcion animacion de titulo  ");
    setInterval(function(){
      $(".main-titulo").switchClass("main-titulo","main-titulo-efecto", 200),
      $(".main-titulo").switchClass("main-titulo-efecto","main-titulo", 200)
    }, 1000);
  },
  initializeGame: function(){
    console.log("funcion Initialize");
    $(".btn-reinicio").on("click",function(){
      switch (juegoActivo) {
        case 0:
          console.log("Se iniciara el juego");
          break;
          case 1:
            console.log("se terminara el juego ");
            break;
            case 2:
              console.log("reincio del juego");
              break;
        default:
        console.log("error en el estado del juego ");
      }
    });
    this.animacionTitulo();
    this.loadPicture();
  },
  loadPicture: function(){
    var num = 1;
    var numImg = 1;
    for (var i = 0; i < totalColumnas; i++) {
      for (var j = 0; j < totalFilas; j++) {
        var imagen = new this.imagenes;
        var sourceImg = imagen[Math.floor(Math.random() * imagen.total)];
        $(".col-" + num).append("<div id='item-"+ numImg +" img-"+ j +"'>" +
                                    "<img src="+ sourceImg +" class='imagen-"+ numImg +"'>" +
                                  "</div>");
        $(".imagen-"+numImg).draggable({
          revert: true,
          containment: ".panel-tablero",
          start: function(){
            if (juegoActivo == 1) {
              $("#movimientos-text").html(movimientos++);
            }
          },
          stop: function (){
            if (juegoActivo == 1) {
              if (bloqueo == 0) {
                console.log("el juego es activo y no hay bloqueo de dulces");
              }
            }
          },
          drag: function(event, ui){}
        });
        $("[id='item-" + numImg + "img-"+j + "'").droppable({
          drop: function(event,ui){
            if (juegoActivo == 1) {
              if (bloqueo == 0) {
                imagenUno = event.target.lastChild;
                imagenDos = ui.draggable[0];
                imgUno = $(imagenUno).attr("src");
                imgDos = $(imagenDos).attr("src");
                $(imagenUno).attr("src",imgUno);
                $(imagenDos).attr("src",imgDos);
              }
            }
          }
        });
        numImg++
      }
      num++;
    }
  },
  imagenes: function(){
    console.log("funcion imagenes");
    var i = 0;
    this[i++] = "image/1.png";
    this[i++] = "image/2.png";
    this[i++] = "image/3.png";
    this[i++] = "image/4.png";
    this.total = i;
  },
  //startGame:function(){
    $(".btn-reinicio").html("Reiniciar");
    juegoActivo = 1;
  }

}

$(document).ready(function(){
  console.log("funcion ready Document ");
  juegoDulces.initializeGame();
});
