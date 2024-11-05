"use strict"

document.addEventListener('DOMContentLoaded',function(){

    let button= document.querySelector('.signIn');

    button.addEventListener('click',function(){
        console.log("entro");
        window.location.href = "index.html";
    });

    let buttonRegister=document.getElementById('btn-signUp');
    buttonRegister.addEventListener('click',function(){
        window.location.href = "index.html";
    })









})