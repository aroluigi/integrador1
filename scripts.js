const precio=200;

let nombre=document.getElementById('nombre');
let apellido=document.getElementById('apellido');
let correo=document.getElementById('correo');
let categoria=document.getElementById('categoria');
let cantidad=document.getElementById('cantidad');
let tarjeta=document.getElementsByClassName('tarjetaDescuento');

function nombreValido(n){if(n.value!=""){return true;}}
function apellidoValido(a){if(a.value!=""){return true;}}
function eMailValido(e){if(e.value!=""){return true;}}
function cantidadValida(c){if(c.value!=""){return true;}}

function validarYMostrar(n, a, e, c){
    if(nombreValido(n)){
        if(apellidoValido(a)){
            if(eMailValido(e)){
                if(cantidadValida(c)){
                    mostrarResumen();
                } else c.focus();
            } else e.focus();
        } else a.focus();
    } else n.focus();
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
    document.getElementById('totalAPagar').value='Total a Pagar: $' + valorCalculado();
}

var resumen="";
function mostrarResumen(){
    ventanaResumen=window.open("enConstruccion.png","width=300,height=200")
}

cantidad.oninput=function() {actualizarValor();};
categoria.oninput=function() {actualizarValor(); resaltarCategoria(this);};

document.getElementById('resumen').onclick=function() {validarYMostrar(nombre, apellido, correo, cantidad)
};