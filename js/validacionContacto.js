
$(document).ready(function(){
	$("#mensaje").hide();
	$("#form").validate({
		event: "blur",rules:
		{
			'nombre': "required",
      'telefono': {
        digits: true,
        minlength: 10
      },
			'email':
		    {
				required: true,
				email:true
			},
			'consulta': {
        required : true,
        maxlength : 300
      }
		},
		messages: {'nombre': "Ingrese su nombre", 'telefono' : { digits:"Solo se permiten digitos", minlength: "El numero debe ser de 10 digitos"},'email': { required: 'Debe ingresar un email', email: 'Debe ingresar un email valido' },'consulta': {requiered:'Debe ingresar su consulta', maxlength: 'Su consulta debe tener como maximo 300 letras'}},
		debug: true,errorElement: "label",errorContainer: $("#errores"),
		submitHandler: function(form){
			$("#mensaje").show();
			$("#mensaje").html("<p class='pensando'>Enviando el formulario, por favor espere...</p>");
			$.ajax({
				type: "GET",
				url:"formulario/formcontacto.php",
				contentType: "application/x-www-form-urlencoded",
				processData: true,
				data: "&nombre="+escape($('#nombre').val())+"&telefono="+escape($('#telefono').val())+"&email="+escape($('#email').val())+"&consulta="+escape($('#consulta').val()),
				success: function(msg){
					$("#mensaje").html("<p class='ok'>El mensaje ha sido enviado correctamente.Gracias!</p>");
					document.getElementById("nombre").value="";
          document.getElementById("telefono").value="";
					document.getElementById("email").value="";
					document.getElementById("consulta").value="";
					setTimeout(function() {$('#mensaje').fadeOut('fast');}, 6000);

				}
			});
		}
	});;
});
