$(document).ready(function(){

    //adicionar css
    $("#lista").css("color","red");

    //adicionando html
    $('.element').html("Meu texto via jquery");

    //disparar no click 
    $("a").click(function(){
        alert("Olá mundo")
    })
    

});
//criando funcao


function pegarvalor(){
    var nome = document.querySelector('.nome').value;
    var sobrenome = document.querySelector('.sobrenome').value;

    alert("Seja bem vindo " + nome + " " + sobrenome );//Seja bem vindo Nome Sobrenome
    console.log(nome);

}