const precio=200;
//ver cómo guardar referencias en estos nombres
//var categoria=[document.getElementById('categoria').value];
//var cantidad=[document.getElementById('cantidad').value];

function nombreValido(){return true}
function apellidoValido(){return true}
function eMailValido(){return true}
function cantidadValida(){return true}
function resaltarCategoria(c){c.back}
//function formCompleto() {if(todoBien){return true;}}

function valorCalculado() {
    if(document.getElementById('categoria').value=='Público general'){vC=precio*parseInt(document.getElementById('cantidad').value)}
    else if(document.getElementById('categoria').value=='Estudiante'){vC=.2*precio*parseInt(document.getElementById('cantidad').value)}
    else if(document.getElementById('categoria').value=='Trainee'){vC=.5*precio*parseInt(document.getElementById('cantidad').value)}
    else if(document.getElementById('categoria').value=='Junior'){vC=.85*precio*parseInt(document.getElementById('cantidad').value)}
    return vC
}

/*function valorCalculado() {
    if(categoria[0]=='Público general'){vC=precio*cantidad[0]}
    else if(categoria[0]=='Estudiante'){vC=.2*precio*cantidad[0]}
    else if(categoria[0]=='Trainee'){vC=.5*precio*cantidad[0]}
    else if(categoria[0]=='Junior'){vC=.85*precio*cantidad[0]}
    return vC
}
*/

function actualizarValor(){
    document.getElementById('totalAPagar').value='Total a Pagar: $' + valorCalculado();
}

var resumen="";
function mostrarResumen(){
    ventanaResumen=window.open("enConstruccion.png","width=300,height=200")
}

document.getElementById('cantidad').oninput=function() {actualizarValor();};
document.getElementById('categoria').oninput=function() {c=document.getElementById('categoria').value; actualizarValor(); resaltarCategoria(c);};
document.getElementById('resumen').onclick=function() {mostrarResumen();};

