var $j = jQuery.noConflict();

document.observe("dom:loaded", function(){
  var sTituloSAN = $$('.img-thumbnail')[5].next().select('h4')[0];
  var buttonHide = $('logoImg').ancestors()[1].select('button')[0];
  var pasto = $$('p:last')[0].ancestors()[0].previous();
  var buttonexternal = $$('footer')[0].childElements()[0].childElements()[1].select('.btn')[0];

  console.log("Santade  Martha  "+sTituloSAN.inspect());
  console.log("Buton Hide "+buttonHide.inspect());
  console.log("Imagen pasto"+pasto.inspect());
  console.log("Boton external  "+buttonexternal.inspect());
})
