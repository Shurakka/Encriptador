//Seleccionar todos los elementos
const botonEncriptar = document.querySelector(".boton_encriptar");
const encriptarTexto = document.querySelector(".encriptar_texto");
const texto_alerta = document.querySelector(".texto_alerta");
const copiarTexto = document.querySelector(".copiar_texto");
const cuadroResultado = document.querySelector(".cuadro_resultado_encriptador");
const botonCopiar = document.querySelector(".boton_copiar");
const botonDesencriptar = document.querySelector(".boton_desencriptar");

//boton encriptar
botonEncriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = encriptarTexto.value;
    let textoIngresado = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    
    if(texto == ""){
        texto_alerta.style.background = "#0a3871";
        texto_alerta.style.color = "#FFFF";
        texto_alerta.style.fontWeight = "800";
        texto_alerta.textContent = "Campo de texto vacio, ingrese un texto";

        setTimeout(()=>{
            texto_alerta.removeAttribute("style");
        },2000);
    }
    else if(texto !== textoIngresado){
        texto_alerta.style.background = "#0a3871";
        texto_alerta.style.color = "#FFFF";
        texto_alerta.style.fontWeight = "800";
        texto_alerta.textContent = "No se admiten caracteres especiales ni tildes";

        setTimeout(()=>{
            texto_alerta.removeAttribute("style");
        },2000);
    }
    else if(texto !== texto.toLowerCase()){
        texto_alerta.style.background = "#0a3871";
        texto_alerta.style.color = "#FFFF";
        texto_alerta.style.fontWeight = "800";
        texto_alerta.textContent = "No se admiten mayúsculas";

        setTimeout(()=>{
            texto_alerta.removeAttribute("style");
        },2000);
    }
    else{
        texto = texto.replace(/e/mg, "enter");
        texto = texto.replace(/i/mg, "imes");
        texto = texto.replace(/a/mg, "ai");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/u/mg, "ufat");

        copiarTexto.innerHTML = texto;
        botonCopiar.style.visibility = "inherit";
        cuadroResultado.remove();
    }
    
});

//boton desencriptar
botonDesencriptar.addEventListener("click", e=>{
    e.preventDefault();
    let texto = encriptarTexto.value;
    let textoIngresado = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    
    if(texto == ""){
        texto_alerta.style.background = "#0a3871";
        texto_alerta.style.color = "#FFFF";
        texto_alerta.style.fontWeight = "800";
        texto_alerta.textContent = "Campo de texto vacio, ingrese un texto";

        setTimeout(()=>{
            texto_alerta.removeAttribute("style");
        },2000);
    }
    else if(texto !== textoIngresado){
        texto_alerta.style.background = "#0a3871";
        texto_alerta.style.color = "#FFFF";
        texto_alerta.style.fontWeight = "800";
        texto_alerta.textContent = "No se admiten caracteres especiales ni tildes";

        setTimeout(()=>{
            texto_alerta.removeAttribute("style");
        },2000);
    }
    else if(texto !== texto.toLowerCase()){
        texto_alerta.style.background = "#0a3871";
        texto_alerta.style.color = "#FFFF";
        texto_alerta.style.fontWeight = "800";
        texto_alerta.textContent = "No se admiten mayúsculas";

        setTimeout(()=>{
            texto_alerta.removeAttribute("style");
        },2000);
    }
    else{
        texto = texto.replace(/enter/mg, "e");
        texto = texto.replace(/imes/mg, "i");
        texto = texto.replace(/ai/mg, "a");
        texto = texto.replace(/ober/mg, "o");
        texto = texto.replace(/ufat/mg, "u");

        copiarTexto.innerHTML = texto;
        botonCopiar.style.visibility = "inherit";
        cuadroResultado.remove();
    }
    
});

//boton copiar
botonCopiar.addEventListener("click", e=>{
    e.preventDefault();
    let copiar = copiarTexto;
    copiar.select();
    document.execCommand("copy");
});