//Gifcard

const giftcard = document.querySelector('.giftcard__estructura'),
  nombreDestinatario = document.querySelector('#inputNombre'),
  destinatario = document.querySelector('.giftcard__info h1'),
  precioGiftcard = document.querySelector('#monto input'),
  precio = document.querySelector('.giftcard__precio'),
  posicionPrecio = document.querySelector('.t-right');

nombreDestinatario.addEventListener('keyup', (e) => {
  let valorInput = e.target.value;

  //eliminar numeros
  nombreDestinatario.value = valorInput.replace(/[0-9]/g, '');

  destinatario.textContent = valorInput;

  if (valorInput == '') {
    destinatario.textContent = 'Destinatario';
    precio.textContent = '$0000.-';

  }
});

//precio
precioGiftcard.addEventListener('keyup', (e) => {
  let valorInput = e.target.value;

  //eliminar letras
  precioGiftcard.value = valorInput.replace(/\D/g, '');

  precio.textContent = "$" + valorInput;

  if (valorInput == '') {
    precio.textContent = '$0000.-';
  }

});

//colores de letra

function cambiarColor() {
  var opciones = document.getElementsByName("color");

  for (i in opciones) {

    if (opciones[i].checked) {
      switch (opciones[i].value) {
        case 'red':
          destinatario.style.color = "red";
          break;

        case 'blue':
          destinatario.style.color = "blue";
          break;

        case 'black':
          destinatario.style.color = "#000000";
          break;

        case 'yellow':
          destinatario.style.color = "#ffb000";
          break;

        case 'pink':
          destinatario.style.color = "#ff00f5";
          break;
      }
    }
  }
}

function cambiarTamaño() {
  var opciones = document.getElementsByName("size");

  for (i in opciones) {

    if (opciones[i].checked) {
      switch (opciones[i].value) {
        case '20':
          destinatario.style.fontSize = "2rem";
          break;

        case '28':
          destinatario.style.fontSize = "2.8rem";
          break;

        case '32':
          destinatario.style.fontSize = "3.2rem";
          break;

        case '48':
          destinatario.style.fontSize = "4.8rem";
          break;

        case '60':
          destinatario.style.fontSize = "6rem";
          break;
      }
    }
  }
}

function cambiarFondo() {
  var opciones = document.getElementsByName("background");

  for (i in opciones) {

    if (opciones[i].checked) {
      switch (opciones[i].value) {
        case '1':
          giftcard.style.backgroundImage = "url(img/fondos/1.jpg)";
          break;

        case '2':
          giftcard.style.backgroundImage = "url(img/fondos/2.jpg)";
          break;

        case '3':
          giftcard.style.backgroundImage = "url(img/fondos/3.jpg)";
          break;

        case '4':
          giftcard.style.backgroundImage = "url(img/fondos/4.jpg)";

          break;

        case '5':
          giftcard.style.backgroundImage = "url(img/fondos/5.jpg)";

          break;
      }
    }
  }
}


//posicion

function cambiarPosicion() {
  var opciones = document.getElementsByName("location");

  for (i in opciones) {

    if (opciones[i].checked) {
      switch (opciones[i].value) {
        case 'bot_right':
          posicionPrecio.className = ('b-right');
          break;

        case 'top_left':
          posicionPrecio.className = ('t-left');

          break;

        case 'top_right':
          posicionPrecio.className = ('t-right');

          break;
      }
    }
  }
}
