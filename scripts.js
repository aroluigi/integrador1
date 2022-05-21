const precio=200;

let tarjeta=document.getElementsByClassName('tarjetaDescuento');
let nombre=document.getElementById('nombre');
let apellido=document.getElementById('apellido');
let correo=document.getElementById('correo');
let cantidad=document.getElementById('cantidad');
let categoria=document.getElementById('categoria');
let totalAPagar=document.getElementById('totalAPagar');
let btnBorrar=document.getElementById('borrar');

function nombreValido(n){nOK=/^[a-zA-z]+(\s{1}[a-zA-z]+)*$/; if(nOK.test(n.value)){return true;}} //solo letras y espacios
function apellidoValido(a){aOK=/^[a-zA-z]+(\s{1}[a-zA-z]+)*$/; if(aOK.test(a.value)){return true;}} //solo letras y espacios
function eMailValido(e){mailOK=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/; if(mailOK.test(e.value)){return true;}}
function cantidadValida(c){cantOK=/^\d+$/; if(cantOK.test(c.value)){return true;}} //uno o más dígitos

function validarYMostrar(n, a, e, c){
    if(nombreValido(n)){
        if(apellidoValido(a)){
            if(eMailValido(e)){
                if(cantidadValida(c)){s=(c.value>1)? "s":"";
                    r="Por favor, verifique si la información ingresada es correcta:\n\nYo, " + n.value+" "+ a.value + ", deseo comprar " + c.value +  " entrada"+ s +" de la categoría \""+categoria.value+"\" para la conferencia Bs As, por un precio total de $" +valorCalculado(c)+ ". Enviar entradas y comprobante de pago a la dirección de eMail "+ e.value; console.log('mensaje generado');
                    vendidas=confirm(r);
                    return vendidas;
                } else {c.focus(); c.select();}
            } else {e.focus(); e.select();}
        } else {a.focus(); a.select();}
    } else {n.focus(); n.select();}
}

function resaltarCategoria(c){
    for(i=0; i<=2; i++){
        estilo=window.getComputedStyle(tarjeta[i]); color=estilo.getPropertyValue('border-color');
        if(c.selectedIndex==i+1) {tarjeta[i].style.backgroundColor=color; tarjeta[i].style.color='white';} 
        else {tarjeta[i].style.backgroundColor='transparent';tarjeta[i].style.color='black';}
    }
}

function valorCalculado(c) {
    if(cantidadValida(c)){
    if(categoria.value =='Público general'){vC=precio*c.value}
    else if(categoria.value =='Estudiante'){vC=.2*precio*c.value}
    else if(categoria.value =='Trainee'){vC=.5*precio*c.value}
    else if(categoria.value =='Junior'){vC=.85*precio*c.value}
    return vC} else return "";
}

function actualizarValor(){
    totalAPagar.value='Total a Pagar: $' + valorCalculado(cantidad);
}

cantidad.oninput=function() {actualizarValor();};
categoria.oninput=function() {actualizarValor(); resaltarCategoria(this);};

btnBorrar.onclick=function(){for(i=0; i<=2; i++){tarjeta[i].style.backgroundColor='transparent';tarjeta[i].style.color='black';}}
    
document.getElementById('resumen').onclick=function() {validarYMostrar(nombre, apellido, correo, cantidad)};