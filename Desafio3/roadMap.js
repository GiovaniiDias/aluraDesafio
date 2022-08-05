var button = document.querySelector(".bb1");
var button1 = document.querySelector(".f1");
var button01 = document.querySelector(".b1");
var button2 = document.querySelector(".f2");
var button02 = document.querySelector(".b2");
var button3 = document.querySelector(".f3");
var button03 = document.querySelector(".b3");
var button4 = document.querySelector(".f4");
var button04 = document.querySelector(".b4");
var parag = document.querySelector("p");
var letra = document.querySelector("h4")
var final = document.querySelector("h6")


button.onclick = function () {
    button1.style.display = "block"; 
    button01.style.display = "block"; 
    parag.textContent = ("Qual linguagem?")
}

button1.onclick = function () {
    button2.style.display = "block";
    button3.style.display = "block";
    
}

button2.onclick = function () {
    button4.style.display = "block";
    button04.style.display = "block";
    letra.textContent = ("Vai se especializar ou ser FullStack")
}
button3.onclick = function () {
    button4.style.display = "block";
    button04.style.display = "block";
    letra.textContent = ("Vai se especializar ou ser FullStack")
}




button01.onclick = function () {
    button02.style.display = "block";
    button03.style.display = "block";
    
}

button02.onclick = function () {
    button4.style.display = "block";
    button04.style.display = "block";
    letra.textContent = ("Vai se especializar ou ser FullStack")
}
button03.onclick = function () {
    button4.style.display = "block";
    button04.style.display = "block";
    letra.textContent = ("Vai se especializar ou ser FullStack")
}

const area = prompt("Você quer seguir para área de 'Front-End' ou de 'Back-End'? Digite o nome da área:");
let linguagem = "";
if (area === "Front-End"){
    linguagem = prompt("Você quer aprender React ou Vue?");
}
else if (area === "Back-End"){
    linguagem = prompt("Você quer aprender C# ou Java?");
}
else {
    alert("Você não inseriu uma área válida!");
}

const especialidadeOuFullstack = prompt("Digite 1 para seguir se especializando na área escolhida ou 2 para seguir se desenvolvendo para se tornar Fullstack");
if (especialidadeOuFullstack == 1){
    alert(`Continue se especializando em ${linguagem} para dominar a área de ${area}!`);
}
else if (especialidadeOuFullstack == 2){
    alert(`Chegou a hora de começar a aprender outras linguagens além de ${linguagem} se você quer se tornar Fullstack!`);
}
else {
    alert("Você não inseriu um valor válido!");
}

let msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo.");
while (msg === "ok"){
    let novaTecnologia = prompt("Qual?");
    alert(`${novaTecnologia} é realmente uma tecnologia muito legal!`)
    msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo.");
}
