//tooltip//

var tooltipTriggerList =
[].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
return new bootstrap.Tooltip(tooltipTriggerEl)
})

//alerta enviar//
document.getElementById('boton1').onclick = function(){
    alert('¡Mensaje enviado!');
}