//---------------Códogo de la página de "venta de tickets" para conferencia ficticia-------Ariel Blatman------------------ 

//------------------------------------------------------------------------------------------------------------------------
const precio=200, factorDescuento=[1, .2, .5, .85];                      //Configuración de precios y descuentos//
//------------------------------------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------------------------------------
let tarjeta=document.getElementsByClassName('tarjetaDescuento');
let nombre=document.getElementById('nombre');                           //////////////////////////
let apellido=document.getElementById('apellido');                       //Elementos de la página//
let correo=document.getElementById('correo');                           //////////////////////////
let cantidad=document.getElementById('cantidad');
let categoria=document.getElementById('categoria');
let totalAPagar=document.getElementById('totalAPagar');
let btnBorrar=document.getElementById('borrar');
let btnResumen=document.getElementById('resumen');
//------------------------------------------------------------------------------------------------------------------------

//---------------------------------------------------Validación de campos-------------------------------------------------
function nombreValido(n){nOK=/^[a-zA-zÀ-ÿ]+(\s{1}[a-zA-zÀ-ÿ]+)*$/; if(nOK.test(n.value)){return true;} else return false}
function apellidoValido(a){aOK=/^[a-zA-zÀ-ÿ]+(\s{1}[a-zA-zÀ-ÿ]+)*$/; if(aOK.test(a.value)){return true;} else return false}
function eMailValido(e){mailOK=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/; if(mailOK.test(e.value)){return true;} else return false}
function cantidadValida(c){cantOK=/^\d+$/; if(cantOK.test(c.value)){return true;} else return false}
//------------------------------------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------------------------------------
function validarYMostrar(n, a, e, c){           //Si todos los campos contienen valores válidos, muestra el resumen de los
    if(nombreValido(n)){                        //datos ingresados para que el usuario los controle, y continúe o cancele la compra.
        if(apellidoValido(a)){                  //Si no, selecciona el primer campo con datos inválidos para su corrección.
            if(eMailValido(e)){
                if(cantidadValida(c)){
                    s=(c.value>1)? "s":"";
                    r="Por favor, verifique si la información ingresada es correcta:\n\nYo, " + n.value+" "+ a.value + ", deseo comprar " + c.value +  " entrada"+ s +" de la categoría \""+categoria.value+"\" para la conferencia Bs As, por un precio total de $" +valorCalculado(c,categoria)+ ". Enviar entradas y comprobante de pago a la dirección de eMail "+ e.value;
                    vendidas=confirm(r);
                    return vendidas;
                } else {c.focus(); c.select();}
            } else {e.focus(); e.select();}
        } else {a.focus(); a.select();}
    } else {n.focus(); n.select();}
}//-----------------------------------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------------------------------------
function resaltarCategoria(c){ //Resalta la tarjeta de descuento correspondiente a la categoría seleccionada
    for(i=0; i<=2; i++){
        estilo=window.getComputedStyle(tarjeta[i]); color=estilo.getPropertyValue('border-color');
        if(c.selectedIndex==i+1) {tarjeta[i].style.backgroundColor=color; tarjeta[i].style.color='white';} 
        else {tarjeta[i].style.backgroundColor='transparent';tarjeta[i].style.color='black';}
    }               
}//-----------------------------------------------------------------------------------------------------------------------

//--------------------------------------------Cálculo del total a pagar---------------------------------------------------
function valorCalculado(cant, cat) {
    if(cantidadValida(cant)) return factorDescuento[cat.selectedIndex]*precio*cant.value; else return "";
}
//------------------------------------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------------------------------------
function actualizarValor(){                                                         //Escribe el total a pagar. 
    totalAPagar.value='Total a Pagar: $' + valorCalculado(cantidad, categoria); 
}//----------------------------------------------------------------------------------------------------------------------

//-------------------------------------Por fin, lo que hace el programa---------------------------------------------------
cantidad.oninput=function() {actualizarValor();};
categoria.oninput=function() {actualizarValor(); resaltarCategoria(this);};
btnBorrar.onclick=function(){for(i=0; i<=2; i++){tarjeta[i].style.backgroundColor='transparent';tarjeta[i].style.color='black';}}
btnResumen.onclick=function() {validarYMostrar(nombre, apellido, correo, cantidad)};
//------------------------------------------------------------------------------------------------------------------------