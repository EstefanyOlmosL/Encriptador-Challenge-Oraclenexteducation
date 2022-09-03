const inputtexto = document.querySelector(".input-texto ")
 const mensaje = document.querySelector(".mensaje")

 var cifrado = [["e", "enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

 function encriptar(stringEncriptada){
    //para que validar solo minusculas
    stringEncriptada = stringEncriptada.toLowerCase()

    for (var i=0; i < cifrado.length; i++){
       

       if (stringEncriptada.toLowerCase().includes(cifrado[i][0])){

         //reemplazar letras
         stringEncriptada=stringEncriptada.replaceAll(cifrado[i][0],cifrado[i][1])
       }
         
    } 
     return stringEncriptada;
  
   } 
   //para llamar funcion anterior

   function btnencriptar(){
    var textoEncriptado = encriptar(inputtexto.value)
    mensaje.value=textoEncriptado;

   // Para eliminar mensaje e imagen despues de encriptar
    mensaje.style.backgroundImage="none"
    inputtexto.value="";
 }
//
function descencriptar(stringEncriptada){
  //para que validar solo minusculas
  stringEncriptada = stringEncriptada.toLowerCase()

  for (var x=1; x < cifrado.length; x++){
     

     if (stringEncriptada.toLowerCase().includes(cifrado[x][1])){
      
      stringEncriptada=stringEncriptada.replaceAll(cifrado[x][1],cifrado[x][0])

     }

           
  } 
   return stringEncriptada;

  }
 
//para llamar la funcion descenciptar
 function btnDescencriptar(){
  const mensajeEncriptado=descencriptar(inputtexto.value)
  mensaje.value=mensajeEncriptado
  inputtexto.value=" "; }
 

  

 //botoncopiar
  function btnCopiar(){
    mensaje.select()
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value="";
  }


  
 console.log();
 
  