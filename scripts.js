function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");
  // Validar que el texto solo contenga letras minúsculas y no tenga números ni acentos
  let regex = /^[a-z\s]+$/;

  if (!regex.test(texto)) {
    // Si la validación falla, mostrar el mensaje de advertencia en el textarea
    mensaje.value = "Solo se permiten letras minúsculas sin acentos, ni números.";
    tituloMensaje.textContent = "Ningún mensaje fue encontrado";
    muñeco.src = "./img/ATTENTION.jpg";
    //return;  // Salir de la función para no continuar con el cifrado
}
    let textoCifrado = texto
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
  
    if (texto.length != 0) {
      document.getElementById("mensaje").value = textoCifrado;
      tituloMensaje.textContent = "Texto encriptado con éxito";
      muñeco.src ="./img/encriptado.jpg";
    } else {
      muñeco.src = "./img/muñeco.png";
      tituloMensaje.textContent = "Ningún mensaje fue encontrado";
    }
  }
  
  function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    
    let muñeco = document.getElementById("muñeco");
  
    let textoCifrado = texto
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
    
      if (texto.length != 0) {
        document.getElementById("mensaje").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        muñeco.src = "./img/desencriptado.jpg";
      } else {
        muñeco.src = "./img/muñeco.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
      }
  }
  function limpiar() {
    document.getElementById("texto").value = '';
    document.getElementById("mensaje").value = '';
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");
    muñeco.src = "./img/muñeco.png";
    tituloMensaje.textContent = "Ningún mensaje fue encontrado";
  }
  
  function copiar() {
    var text = document.getElementById("mensaje").value;
    copyToClipboard(text);
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text)
      .then(() => {          
      })
      .catch(err => {
          });
     }


