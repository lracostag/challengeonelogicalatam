function bEncriptar(){
  const encriptar = document.getElementById("encriptarse").value;
  const encriptado = encriptar.replace(/(e)/gi, "enter").replace(/(i)/gi, "imes").replace(/(a)/gi, "ai").replace(/(o)/gi, "ober").replace(/(u)/gi, "ufat");
  document.getElementById("textoEncriptado").value = encriptado
  document.getElementById("encriptarse").value=" ";
}

var button = document.getElementById("encriptarb");
button.onclick = bEncriptar; 

function bDesencriptar(){
  const desencriptar = document.getElementById('encriptarse').value;
  const desencriptado = desencriptar.replace(/(enter)/gi, 'e').replace(/(imes)/gi, 'i').replace(/(ai)/gi, 'a').replace(/(ober)/gi, 'o').replace(/(ufat)/gi, 'u');
  document.getElementById("textoEncriptado").value = desencriptado;
  document.getElementById("encriptarse").value;
}

var buttonpd = document.getElementById("encriptard");
buttonpd.onclick = bDesencriptar;
