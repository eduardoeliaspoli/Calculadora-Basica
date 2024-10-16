const display = document.getElementById("display");

function appendToDisplay(input){
        if (display.value === "0" && input !== ".") {
            return;
        }
        display.value += input;
}

function clearDisplay(){
    display.value = "";   
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }

}

document.addEventListener("keydown", function(event) {
    const key = event.key; // captura a tecla pressionada

    if (!isNaN(key)) {
        appendToDisplay(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        display.value = display.value.slice(0, -1);
    } else if (key === 'Escape') {
        clearDisplay();
    }
});