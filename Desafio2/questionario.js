/*
- Qual o seu nome ?
- Quantos anos você tem?
- Qual linguagem de programação você está estudando?

no final
"Olá [nome], você tem [idade] anos e já está aprendendo [linguagem]!"


*/


let button = document.querySelector("button")
button.onclick = function () {

    let nome = prompt("Qual seu nome?")
    let idade = prompt("Qual sua idade?")
    let lipr = prompt("Qual linguagem esta estudando?")
    alert("Olá, " +nome+"! Você tem " +idade+ " anos. E esta aprendendo " +lipr+"!")
    let contin = prompt(nome + ", você pretende aprender outra linguagem? (DIGITE [1] PARA SIM E [2] PARA NÃO) ")
    
    if (contin == 1) {
        alert("Certo! se aprofunde em " + lipr)
    } if(contin == 2) {
        prompt("E qual linguagem esta avistando?")
    }
        
    
}


