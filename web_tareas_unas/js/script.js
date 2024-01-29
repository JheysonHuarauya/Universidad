const loginsec=document.querySelector('.login-section')
const loginlink=document.querySelector('.login-link')
const registerlink=document.querySelector('.register-link')
registerlink.addEventListener('click',()=>{
    loginsec.classList.add('active')
})
loginlink.addEventListener('click',()=>{
    loginsec.classList.remove('active')
})
function redirigir_jhon(){
    window.open('https://www.instagram.com/ihon.x/', '_blank');
}
function redirigir_jheyson(){
    window.open('https://www.instagram.com/iordi.exe/', '_blank');
}
function redirigir_adrian(){
    window.open('https://www.instagram.com/adrian22.11/', '_blank');
}
/*document.getElementById('ingresarBtn').addEventListener('click', function() {

}); otro metodo para registrar el click */
/*por mientras*/
function validar_ingreso(){
    var usuario=document.getElementById("email").value;
    var contraseña=document.getElementById("password").value;
    if(usuario=="admin" && contraseña=="1234"){
        /*window.open("home.html");*/
        setTimeout(function() {
            window.location.replace("../repoexamenes/index.html");
        }, 100);
        alert("desea continuar");
    }else{
        alert("Usuario o contraseña incorrectos");
    }
}