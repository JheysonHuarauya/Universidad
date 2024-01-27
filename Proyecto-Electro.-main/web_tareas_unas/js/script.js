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
