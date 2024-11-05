const display = document.querySelector(".display");
const calculator = document.querySelector(".calculator");

calculator.addEventListener("click", (e) => {
    const element = e.target;
    const elementValue = element.dataset.num;
    // display.innerText += elementValue; 
    if (elementValue == "=") {
        display.innerText = eval(display.innerText)
    }
    else{
        display.innerText += elementValue; 
    }
    if (elementValue == "C") {
        display.innerText = " "
    }
});
