document.getElementById('btn-registrarse').addEventListener('click', register);
document.getElementById('btn-i-sesion').addEventListener('click', iniciarSesion);
window.addEventListener('resize', anchoPag);



var contenedorLogReg = document.querySelector(".contenedor-login-reg");
var formularioLog = document.querySelector('.formulario-login');
var formularioReg = document.querySelector('.formulario-register');
var cajaTLog = document.querySelector(".caja-trasera-login");
var cajaTReg = document.querySelector(".caja-trasera-register");

function anchoPag(){
    if(window.innerWidth > 850){
        cajaTLog.style.display = 'block';
        cajaTReg.style.display = 'block'
    }else {
        cajaTReg.style.display = 'block';
        cajaTReg.style.opacity = '1';
        cajaTLog.style.display = 'none';
        formularioLog.style.display = 'block';
        formularioReg.style.display = 'none';
        contenedorLogReg.style.left = '0px';
    }
}

anchoPag();

function iniciarSesion(){
    if(window.innerWidth > 850){
        formularioReg.style.display = 'none';
        contenedorLogReg.style.left = '10px';
        formularioLog.style.display = 'block';
        cajaTReg.style.opacity = '1';
        cajaTLog.style.opacity = '0';
    }else {
        formularioReg.style.display = 'none';
        contenedorLogReg.style.left = '0px';
        formularioLog.style.display = 'block';
        cajaTReg.style.display = 'block';
        cajaTLog.style.display = 'none';

    }
}


function register(){
    if(window.innerWidth >  850){
        formularioReg.style.display = 'block';
        contenedorLogReg.style.left = '410px';
        formularioLog.style.display = 'none';
        cajaTReg.style.opacity = '0';
        cajaTLog.style.opacity = '1';
    }else {
        formularioReg.style.display = 'block';
        contenedorLogReg.style.left = '0px';
        formularioLog.style.display = 'none';
        cajaTReg.style.display = 'none';
        cajaTLog.style.display = 'block';
        cajaTLog.style.opacity = '1';
    }
}
