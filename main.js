var input1 = document.querySelector("#number-1");
var input2 = document.querySelector("#number-2");
var adding = document.querySelector("#adding");
var subtract = document.querySelector("#subtract")
var multiply = document.querySelector("#multiply")
var divide= document.querySelector("#divide")

adding.addEventListener("click", calculator);
subtract.addEventListener("click", calculator2);
multiply.addEventListener("click", calculator3);
divide.addEventListener("click", calculator4);

function calculator () {
var sum = parseFloat(input1.value) + parseFloat(input2.value);
document.querySelector("#total").innerHTML = sum;
}

function calculator2 () {
var difference = parseFloat(input1.value) - parseFloat(input2.value);
document.querySelector("#total").innerHTML = difference;
}

function calculator3 () {
var product = parseFloat(input1.value) * parseFloat(input2.value);
document.querySelector("#total").innerHTML = product;
}

function calculator4 () {
var product = parseFloat(input1.value) / parseFloat(input2.value);
document.querySelector("#total").innerHTML = product;
}
