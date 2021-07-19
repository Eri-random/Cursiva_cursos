
//que se cargue todo el html primero
$(document).ready(function() {

  //expresion regular para validar email
  var regexemail = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;

  $(".boton").click(function() {

    //depositar valores de elementos en una variable

    var nombre = $(".nombre").val();
    var apellido = $(".apellido").val();
    var email = $(".email").val();

    //si el valor esta vacion
    if (nombre== "" || apellido == "" || email == "") {
      $("#error").fadeIn(); //mensaje animado //mostrar msj
      $("#error").html('<i class="fas fa-exclamation-circle fa-2x"></i> completa todos los campos');

      //tiempo en que va a aparecer msj en pantalla
      setTimeout(function() {
        $("#error").fadeOut();
      }, 3000);

      return false;

    } else {

      if (!email.match(regexemail)) {
        $("#error").fadeIn();
        $("#error").html('<i class="fas fa-exclamation-circle fa-2x"></i> correo invalido');

        setTimeout(function() {
          $("#error").fadeOut();
        }, 3000);

        return false;
      }
    }

  });

  precioInscripcion();

//precio inscripcion
function precioInscripcion(){
    var num = 0;

    $('.formulario-campos').each(function(){
        num++;
    });
    $(".precio").html("US$"+num*12,99+".-");
}

  //clonar
  $(".boton-sumar").click(function() {
    var clonar = $(this).parent(".formulario-campos").clone(true); //clonar
    $(this).parent(".formulario-campos").after(clonar); //mostrar

    precioInscripcion();

  });

  //remover
  $(".formulario-inscripcion .boton-resta").click(function() {
    var padre = $(this).parent();
    var campo1= $(".formulario-campos").first();
    var campo2= $(".formulario-campos:nth-child(2)");
    var campo3= $(".formulario-campos:nth-child(3)");
    if(!padre.is(campo1) && !padre.is(campo2) && !padre.is(campo3)){
    padre.remove();
  }else{
    padre.children().val("");
  }

  precioInscripcion();

});

});
