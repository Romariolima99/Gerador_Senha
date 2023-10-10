let sliderElement = document.querySelector("#slider");
let buttonElement  = document.querySelector("#button");

let sizePassword  = document.querySelector("#valor");
let password  = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@!#$%"
let = NovaSenha = "";

sizePassword.innerHTML = sliderElement.value;

sliderElement.oninput = function(){

    sizePassword.innerHTML = this.value;

}

function GeneratePassword(){

let pass = "";

for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
pass += charset.charAt(Math.floor(Math.random() * n));

    }

    containerPassword.classList.remove("hide")
    password.innerHTML  = pass;
    NovaSenha = pass;

}

function CopyPassword(){
alert("Sua senha foi copiada")
navigator.clipboard.writeText(NovaSenha);

}




