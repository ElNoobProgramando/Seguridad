
var cadena = "";
var cadena1 = "";
function cifrar() {
  var SIZE_ALF = 26;
  
  var clave = document.getElementById("clave").value;
  clave=clave.toLowerCase();
  var size_clave = clave.length;
  var mensaje = document.getElementById("mensaje").value;
  mensaje=mensaje.toLowerCase();
var mensaje_espacios = new Array();
for(var i =0 ; i<mensaje.length;i++)
{
  if(mensaje[i]==" ")
  {
    mensaje_espacios.push(i); 
    mensaje=mensaje.replace(" ", ""); 
  }
}


console.log(mensaje_espacios + "esta es  mensaje" ); 

var llave_espacios = new Array();
for(var i =0 ; i<clave.length;i++)
{
  if(clave[i]==" ")
  {
    llave_espacios.push(i);
    clave=clave.replace(" ", ""); 
  }
}
console.log(llave_espacios + "esta es pana llave" ); 

  var size_mensaje = mensaje.length;
  



  // Guardar alfabeto
	var alfabeto = new Array();

if(clave.length<mensaje.length){

  
  for(i = 0; i < SIZE_ALF; i++){
    alfabeto[i] = String.fromCharCode(97 + i);
  }

  
  // Guardar valores de la clave
  var valores_clave = new Array();
  for(i = 0; i < size_clave; i++){
    for(j = 0; j < alfabeto.length; j++){
      if(clave[i] == alfabeto[j]){
      	valores_clave[i] = j;
      }
    }
  }
  
  // Cifrar
  var mensaje_cifrado = new Array();
  for(i = 0; i < size_mensaje; i++){
    var pos_letra;
    for(j = 0; j < alfabeto.length; j++){
      if(mensaje[i] == alfabeto[j]){
        pos_letra = j;
      }
    }
    mensaje_cifrado[i] = alfabeto[(valores_clave[i%size_clave] + pos_letra) % alfabeto.length];
    console.log(mensaje_cifrado); 
  }
  
  // Escribir el resultado en el HTML
  div = document.getElementById("resultado");
  
  var contador  = 0 ; 
  for(i = 0; i < size_mensaje; i++){
    if(i == mensaje_espacios[contador])
    {
      cadena += " "; 
      contador ++; 
    }
    cadena += mensaje_cifrado[i];
    console.log("|:" + cadena); 
  }
console.log(mensaje_cifrado + "| noob"); 
console.log(mensaje); 

  div.textContent = 'Mensaje cifrado: ' + cadena;
}

}
function modNeg(n1, n2){
  var mod = n1;
  while(mod < 0){
    mod += n2;
  }
  return mod;
}

function descifrar() {
  var SIZE_ALF = 26;
  
  var clave = document.getElementById("clave").value;
  clave=clave.toLowerCase();
  var size_clave = clave.length;
  var mensaje = document.getElementById("mensaje").value;
  var size_mensaje = mensaje.length;
  mensaje=mensaje.toLowerCase();
  var mensaje_espacios = new Array();
  for(var i =0 ; i<mensaje.length;i++)
  {
    if(mensaje[i]==" ")
    {
      mensaje_espacios.push(i); 
      mensaje=mensaje.replace(" ", ""); 
    }
  }
  console.log(mensaje_espacios + "esta es mensaje");
  
  
  // Guardar alfabeto
	
  var size_mensaje = mensaje.length;
  
    var alfabeto = new Array();
  if(clave.length<mensaje.length){
  
    
    for(i = 0; i < SIZE_ALF; i++){
      alfabeto[i] = String.fromCharCode(97 + i);
    }
    
  
  
  // Guardar valores de la clave
  var valores_clave = new Array();
  for(i = 0; i < size_clave; i++){
    for(j = 0; j < alfabeto.length; j++){
      if(clave[i] == alfabeto[j]){
      	valores_clave[i] = j;
      }
    }
  }
  
var mensaje_descifrado = new Array();
  for(i = 0; i < size_mensaje; i++){
    var pos_letra;
    for(j = 0; j < alfabeto.length; j++){
      if(mensaje[i] == alfabeto[j]){
        pos_letra = j;
      }
    }
    mensaje_descifrado[i] = alfabeto[modNeg((pos_letra - valores_clave[i%size_clave]), alfabeto.length)];
    console.log(mensaje_descifrado);
  }

  
  // Escribir el resultado en el HTML
  div = document.getElementById("resultado");
  var contador  = 0 ; 
  for(i = 0; i < size_mensaje; i++){
    if(i == mensaje_espacios[contador])
    {
      cadena1 += " "; 
      contador ++; 
    }
    cadena1 += mensaje_descifrado[i];
    console.log("|:" + cadena1); 
  }
   
  console.log(mensaje); 

  div.textContent = 'Mensaje descifrado: ' + cadena1;

}
}
