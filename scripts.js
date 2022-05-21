const precio=200;

let tarjeta=document.getElementsByClassName('tarjetaDescuento');
let nombre=document.getElementById('nombre');
let apellido=document.getElementById('apellido');
let correo=document.getElementById('correo');
let cantidad=document.getElementById('cantidad');
let categoria=document.getElementById('categoria');
let totalAPagar=document.getElementById('totalAPagar');

var resumen="";

function nombreValido(n){nOK=/^[a-zA-z]+(\s{1}[a-zA-z]+)*$/; if(nOK.test(n.value)){return true;}} //solo letras y espacios
function apellidoValido(a){aOK=/^[a-zA-z]+(\s{1}[a-zA-z]+)*$/; if(aOK.test(a.value)){return true;}} //solo letras y espacios
function eMailValido(e){mailOK=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/; if(mailOK.test(e.value)){return true;}}
function cantidadValida(c){cantOK=/^\d+$/; if(cantOK.test(c.value)){return true;}} //uno o más dígitos

function validarYMostrar(n, a, e, c){
    if(nombreValido(n)){
        if(apellidoValido(a)){
            if(eMailValido(e)){
                if(cantidadValida(c)){
                    r="Por favor, verifique la información ingresada:\n\nYo, " + n.value+" "+ a.value + ", deseo comprar " +c.value+  " entradas de la categoría \""+categoria.value+"\" para la conferencia Bs As, por un precio total de $"  +valorCalculado()+ ". Enviar entradas y comprobante de pago a la dirección de eMail "+ e.value;
                    vendidas=confirm(r);
                    return vendidas;
                } else {c.focus(); c.select();}
            } else {e.focus(); e.select();}
        } else {a.focus(); a.select();}
    } else {n.focus(); n.select();}
}

// function resaltarCategoria(c){
//     if(c.value=='Estudiante'){tarjeta[0].style.backgroundColor='#FFFF99'}
//     else if(c.value=='Trainee'){tarjeta[1].style.backgroundColor='#FFFF99'}
//     else if(c.value=='Junior'){tarjeta[2].style.backgroundColor='#FFFF99'}
// }

function valorCalculado() {
    if(categoria.value =='Público general'){vC=precio*cantidad.value}
    else if(categoria.value =='Estudiante'){vC=.2*precio*cantidad.value}
    else if(categoria.value =='Trainee'){vC=.5*precio*cantidad.value}
    else if(categoria.value =='Junior'){vC=.85*precio*cantidad.value}
    return vC
}

function actualizarValor(){
    totalAPagar.value='Total a Pagar: $' + valorCalculado();
}


function mostrarResumen(r){//no está en uso.
    //ventanaResumen=window.open("enConstruccion.png","width=300,height=200")
    confirm(r);
}

cantidad.oninput=function() {actualizarValor();};
categoria.oninput=function() {actualizarValor(); /*resaltarCategoria(this);*/};

document.getElementById('resumen').onclick=function() {validarYMostrar(nombre, apellido, correo, cantidad)
};