const calculator = document.querySelector(".bodycal");
const display = document.querySelector(".display");

let number1 = "";
let operation = "";
let number2 = "";
let isFirstNumber = true;

calculator.addEventListener("click", (e) => {
    // проверка на действие
    if (!e.target.className.includes("number")) {
        // окончание записи первого числа
        if (isFirstNumber) {
            
            isFirstNumber = !isFirstNumber;
            number1 = parseInt(number1);
        } else {
            operation = e.target.value
            console.log(operation);
            if (operation == "*" || operation == "%" || operation == "/" || operation == "-" || operation == "+") {
                if (e.target.tagName == "INPUT") {
                    number2 += e.target.value;
                    display.innerHTML = number2;
                }
            }
        }
    }
    // Нажатие ИМЕННО на кнопки
    if (e.target.tagName == "INPUT") {
        number1 += e.target.value;
        display.innerHTML = number1;
    }
    console.log(number1);
    console.log(number2);
});
