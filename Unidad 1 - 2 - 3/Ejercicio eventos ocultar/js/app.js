//Función definida, que retorna el estilo del cursor a su aspecto normal y esconde el mensaje.
function cursorNormal(){
  $("body").removeClass("cursorCorte");
  $("body").removeClass("cursorConstruir");
  $("#mensaje").hide("fast");
}

$(function(){
  $("#btn-vaca").on("click",function(){
    cursorNormal();
    $("#vaca").toggle(2000,function(){
      $("#mensaje").show();
      $("#mensaje").text("La vaca hace MUUUUUUUU");
    });
  });

  $("#btn-cerdo").on("click",function(){
    cursorNormal();
    $("#cerdo").toggle(2000,function(){
      $("#mensaje").show();
      $("#mensaje").text("El cerdo hace OINK");
    });
  });

  $("#btn-gallina").on("click",function(){
    cursorNormal();
    $("#gallina").toggle(2000,function(){
      $("#mensaje").show();
      $("#mensaje").text("La gallina hace CLOAC");
    });
  });

  $("#btn-oveja").on("click",function(){
    cursorNormal();
    $("#oveja").toggle(2000,function(){
      $("#mensaje").show();
      $("#mensaje").text("La oveja hace BEEEEEEE");
    });
  });

  $("#bCorte").on("click", function(){
    $(".animal, #mensajes").hide("fast","linear");
    $("body").removeClass("cursorConstruir");
    $("body").addClass("cursorCorte");
    $(".animal, #mensaje").hide("fast","linear");
  });

  $("#bConstruir").on("click", function(){
    $(".animal, #mensajes").hide("fast","linear");
    $("body").removeClass("cursorCorte");
    $("body").addClass("cursorConstruir");
    $(".cerca").show(5000,function(){
      $("h1").text("Contruye una cerca");
    });
    $(".animalP").show(5000);
  });

  $(".arbusto").hover(function(){
    if($("body").hasClass("cursorCorte")){
      $(this).hide(250);
    }
  });

  $(".cerca, .animalP").mousedown(function(){
    var self = $(this);
    $(this).on('dragstart', function(event){
      event.preventDefault();
  });

  $("body").mousemove(function(event){
      self.css("left",function(){
        var newLeft = event.pageX;
        return newLeft+"px";
      });
      self.css("top", function(){
        var newLeft = event.pageY;
        return newLeft+"px";
      });
    });
  });

  //Función que posiciona el elemento en la ubicación en que el mouse se levanta
  $("body").mouseup(function(event){
    $(this).off("mousemove");
    var x = $(event.target).css("left");
    var y = $(event.target).css("top");
    $(event.target).css("left",x);
    $(event.target).css("top",y);
  });

  //Acción que termina el juego con el mensaje Muy Bien
  $("#bCursor").on("click", function(){
    cursorNormal();
    $(".cerca, .animalP, .animal, #mensaje").hide(1000, function(){
      $("h1").text("Muy Bien!");
    })
  });
});
