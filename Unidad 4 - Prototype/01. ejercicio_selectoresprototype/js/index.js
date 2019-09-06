var $j = jQuery.noConflict();

document.observe("dom:loaded", function(){
  var sTitulo = $('tituloInicio');
  var botonesRed= $$('.botonRedondo');
  var childrenMenu = $$('footer div div div')[2].childElements()[0].next();
  var contact = $$("a[href='contacto.html']")[0].ancestors();
  var textpreviuos = $('textoQueEs').previous();

  console.log("Titulo "+sTitulo.inspect());
  console.log("Botones "+botonesRed.inspect());
  console.log("Menu Children "+childrenMenu.inspect());
  console.log("Contacto "+contact.inspect());
  console.log("Previus "+textpreviuos.inspect());
})
