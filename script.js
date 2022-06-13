const Calculator = (() => {
    const scriptLinkInHTML = document.getElementById('script-link');


    const operations = ["plus", "minus", "devide", "multiply"];
    const numbers = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    
    const mainInputDisplay = document.getElementById('main-screen-input');
    let mainScreenCurrentInput = "";

    const firstValueSavedDisplay = document.getElementById('first-part-of-operation');
    let upperScreenCurrentInput = "";

    const currentOperatorDisplay = document.getElementById('operation-that-will-run');
    let currentOperator = "";
    
    console.log(operations)
    console.log(numbers)

    function render() {

        scriptLinkInHTML.addEventListener('click', (e) => {
            evaluateClick(e);
        })
    }
    
    
    function evaluateClick(e) {
        if (e.target.id == "decimal") {
            checkForDecimal();
        }
        if (numbers.includes(parseInt(e.target.id))) {
            console.log("numbers match")
            mainScreenCurrentInput = mainScreenCurrentInput + e.target.id;
            updateInputNumbers();
        }
        if (operations.includes(e.target.id)) {
            console.log("operations match")
            currentOperator = e.target.id;
            updateRunOperation();
        }
    }

    function checkForDecimal() {
        if (mainScreenCurrentInput.includes(".")) {
            return;
        }
        if (mainScreenCurrentInput === "") {
            mainScreenCurrentInput = "0.";
            updateInputNumbers();
            return;
        }
        mainScreenCurrentInput = mainScreenCurrentInput + '.';
        updateInputNumbers();
    }
    
    function updateInputNumbers() {
        mainInputDisplay.innerText = mainScreenCurrentInput;
    }

    function updateOperator() {
        currentOperatorDisplay.innerText = currentOperator;
    }
    
    function updateUpperScreen() {
        firstValueSavedDisplay.innerText = upperScreenCurrentInput;
    }

    function updateRunOperation() {
        if (upperScreenCurrentInput === "") {
            upperScreenCurrentInput = mainScreenCurrentInput;
            updateOperator();
            updateUpperScreen();
            mainScreenCurrentInput = "";
            updateInputNumbers();
            return;
        }

        mainScreenCurrentInput = mathOperations(currentOperator, parseInt(upperScreenCurrentInput), parseInt(mainScreenCurrentInput));
        currentOperator = "";
        updateOperator();
        upperScreenCurrentInput = ""
        updateUpperScreen();
        updateInputNumbers();
    }
    
    function mathOperations(operator, a, b) {
        if (operator == "plus") {
            return a + b;
        }
        if (operator == "minus") {
            return a - b;
        }
        if (operator == "devide") {
            return a / b;
        }
        if (operator == "multiply") {
            return a * b;
        }
    }


    render();


    return {
        mathOperations
    }


})();