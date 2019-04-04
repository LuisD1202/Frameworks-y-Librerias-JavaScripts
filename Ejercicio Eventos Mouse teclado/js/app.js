$(function(){
  //Función que cambia la imagen de fondo al hacer scroll
  $(window).scroll(function(){
    if($(document).scrollTop()>=200){
      $(".fondo").css("background-image","url('img/background2.jpg')");
    }
    else {
      $(".fondo").css("background-image","url('img/background.jpg')");
    }
  });
  //Función que cambia el color del cuadrado del formulario al cambiar la selección del elemento select
  $("#color-favorito").change(function(event){
    var seleccionado = $("#color-favorito option:selected").text();

    if(seleccionado == "Azul"){
      $(".cuadrado-color").css("background","#4786F5");
    }
    if(seleccionado == "Verde"){
      $(".cuadrado-color").css("background","#47F547");
    }
    if(seleccionado == "Amarillo"){
      $(".cuadrado-color").css("background","#E9F547");
    }
    if(seleccionado == "Rojo"){
      $(".cuadrado-color").css("background","#F54747");
    }
    if(seleccionado == "Morado"){
      $(".cuadrado-color").css("background","#BB47F5");
    }
    if(seleccionado == "Café"){
      $(".cuadrado-color").css("background","#A97E35");
    }
  });
  //Función que muestra el elemento informativo al seleccionar un campo del formulario
  $("input, select").focus(function(){
    $(this).siblings(".info").css("display","block");
    $(this).siblings(".error").css("display","none");
    $(this).siblings(".errPswRepeat").css("display","none");
  });
  //Función que muestra error al dejar la selección de un campo y dejarlo vacío
  $("input, select").blur(function(){
    $(this).siblings(".info").css("display","none");
    if(!$(this).val()){
      $(this).siblings(".error").css("display","block");
      $(this).addClass("campoError");
    }
    else {
      $(this).removeClass("campoError");
    }
  });
  //Función que muestra error en el campo mail al no ingresar un mail correcto
  $("input[type='email']").blur(function(){
    var emailIngresado = $(this).val();
    if(!emailIngresado.includes("@")||!emailIngresado.includes(".")){
      $(this).siblings(".info").css("display","none");
      $(this).siblings(".errMail").css("display","block");
      $(this).siblings("campoError");
    }
    else {
      $(this).siblings(".errMail").css("display","none");
      $(this).removeClass("campoError");
    }
  });
  //Función que evita que se seleccione el texto en la contraseña y evita que sea copiada
  $("#psw").select(function(){
    alert("No puedes copiar la contraseña");
    $(this).attr("oncopy","return false");
    $(this).contextmenu(function(){
      event.preventDefault();
    });
  });
  //Función que evita que se ingresen símbolos en el campo de la contraseña
  $("#psw").select(function(event){
    var key = event.which;
    if ((key>32&&key<48)||(key>57&&key<65)||(key>90&&key<97)||(key>122&&key<127)||(key>160&&key<256))
    {
      $(this).siblings(".info").css("display","none");
      $(this).siblings(".errPsw").css("display","block");
      event.preventDefault();
    }
    else
    {
        $(this).siblings(".errPsw").css("display","none");
    }
  });
});
