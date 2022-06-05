const calculator = document.querySelector(".bodycal");
const display = document.querySelector(".display");

let number1 = "";
let operation = "";
let number2 = "";
let isFirstNumber = true;

calculator.addEventListener("click", (e) => {
    if (operation == "") {
        if (e.target.tagName == "INPUT") {
            // console.log(e.target);
            number1 += e.target.value;
            display.innerHTML = number1;
            if (!e.target.className.includes("number") && number1 == "") {
                return;
            } else if (!e.target.className.includes("number")) {
                operation = e.target.value;
                if (isFirstNumber) {
                    isFirstNumber = !isFirstNumber;
                    number1 = parseInt(number1);
                } else {
                    // console.log(operation);
                    if (
                        operation == "*" ||
                        operation == "%" ||
                        operation == "/" ||
                        operation == "-" ||
                        operation == "+"
                    ) {
                        if (e.target.tagName == "INPUT") {
                            number2 += e.target.value;
                            display.innerHTML = number2;
                        }
                    }
                }
            }
        }
    } else if (e.target.tagName == "INPUT") {
        if (typeof(number2)!="String") {
            
        }
        number2 += e.target.value;
        display.innerHTML = number2;
    }
    // проверка на действие
    // Нажат;ие ИМЕННО на кнопки

    console.log({ number1, number2, operation });
});
/*
    if (number2!="") {
        if (e.target.tagName == "INPUT") {
            console.log(e.target);
            number2 += e.target.value;
            display.innerHTML = number1;
            if (!e.target.className.includes("number") && number2 == "") {
                return;
            } else if (!e.target.className.includes("number")) {
                if (isFirstNumber) {
                    isFirstNumber = !isFirstNumber;
                    number1 = parseInt(number1);
                } else {
                    operation = e.target.value;
                    console.log(operation);
                    if (
                        operation == "*" ||
                        operation == "%" ||
                        operation == "/" ||
                        operation == "-" ||
                        operation == "+"
                    ) {
                        if (e.target.tagName == "INPUT") {
                            number2 += e.target.value;
                            display.innerHTML = number2;
                        }
                    }
                }
            }
        }
    }
*/
