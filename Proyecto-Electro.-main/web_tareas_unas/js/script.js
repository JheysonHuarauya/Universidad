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
document.getElementById('ingresarBtn').addEventListener('click', function() {
    event.preventDefault()
    validar_ingreso();
    setTimeout(function() {alert("hi");}, 200);
    alert("hola");
});
/*por mientras*/
function validar_ingreso(){
    var usuario=document.getElementById("email").value;
    var contraseña=document.getElementById("password").value;
    console.log("Usuario:", usuario);
    console.log("Contraseña:", contraseña);
    alert("Usuario: "+usuario+"\nContraseña: "+contraseña);
    if(usuario=="victor.orihuela@unas.edu.pe" && contraseña=="db1235879"){
        setTimeout(function() {window.location.replace("home.html");}, 200);
    }else{
        alert("Usuario o contraseña incorrectos");
    }
}