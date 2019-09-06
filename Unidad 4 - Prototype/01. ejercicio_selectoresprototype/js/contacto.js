var $j = jQuery.noConflict();

document.observe("dom:loaded", function(){
  var inputs = new Selector('input');

  var inputNombre = $F(inputs.findElements()[0]);
  var inputEmail =  $F(inputs.findElements()[1]);
  var inputMasc =   $F(inputs.findElements()[2]);
  var inputFeme =   $F(inputs.findElements()[3]);

  var submitInput = inputs.match($$('form')[0].select('div:last')[0].childElements());

  console.log("Nombre  "      +inputNombre);
  console.log("Email "        +inputEmail);
  console.log("Masculino"     +inputMasc);
  console.log("Femenino  "    +inputFeme);
  console.log("Boton submit " +submitInput);
})
