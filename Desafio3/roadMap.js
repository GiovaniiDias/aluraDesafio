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
