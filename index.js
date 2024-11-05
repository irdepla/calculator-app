const nightBtn = document.querySelector(".night-mode-btn");
const display = document.querySelector(".display");
const calculator = document.querySelector(".calculator");

calculator.addEventListener("click", (e) => {
    const element = e.target;
    const elementValue = element.dataset.num;

    if (elementValue === "=") {
        if (display.innerText.trim()) {
            try {
                display.innerText = eval(display.innerText);
            } catch (error) {
                display.innerText = "Error";
            }
        }
    } else if (elementValue === "C") {
        display.innerText = ""; 
    } else if (elementValue) {
        display.innerText += elementValue;
    }
});

let isNightMode = localStorage.getItem("nightMode") === "true"; 
applyMode(isNightMode);

nightBtn.addEventListener("click", () => {
    isNightMode = !isNightMode;
    applyMode(isNightMode);
    localStorage.setItem("nightMode", isNightMode.toString());
});

function applyMode(isNight) {
    if (isNight) {
        document.body.style.backgroundColor = "#000000";
        document.body.style.color = "#E0E0E0";
        nightBtn.textContent = "Light Mode";
    } else {
        document.body.style.backgroundColor = "#FFFFFF";
        document.body.style.color = "#333333";
        nightBtn.textContent = "Night Mode";
    }
}
