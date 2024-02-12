class Calculator{
    constructor(operands1Element, operands2Element){
        this.operands1Element = operands1Element;
        this.operands2Element = operands2Element;
        this.clear();
    }

    clear(){
        this.operand1 = 0;
        this.operand2 = 0;
        this.operator = '';
        this.updateUI();
    }

    updateUI(){
        this.operands1Element.innerHTML = this.operand1 + this.operator;
        this.operands2Element.innerHTML = this.operand2;
    }

    appendNumber(number){
        if(number === "." && this.operand2.includes('.')) return;
        this.operand2 = this.operand2 === 0
                                        ? number
                                        : this.operand2.toString() + number;

        this.updateUI();
    }

    delete(){
        if(this.operand2 === 0) return
        this.operand2 = +this.operand2.toString().slice(0, -1)
        this.updateUI();
    }

    oparation(operator){
        if(this.operator){
            this.calc()
        }
        this.operator = operator;
        this.operand1 = +this.operand2 === 0 ? this.operand1: this.operand2;
        this.operand2 = 0;

        this.updateUI();
    }

    calc(){
        switch(this.operator){
            case "+":
                this.operand1 = +this.operand1 + +this.operand2
            break;

            case "-":
                this.operand1 = +this.operand1 - +this.operand2
            break;

            case "*":
                this.operand1 = +this.operand1 * +this.operand2
            break;

            case "/":
                this.operand1 = +this.operand1 / +this.operand2
            break;
        }
        this.operator = "";
        this.operand2 = 0;
        this.updateUI();
    }

}

const operands1Element = document.querySelector("[data-operand-1]");
const operands2Element = document.querySelector("[data-operand-2]");
const clearButton = document.querySelector("[data-clear]")
const numberButtons = document.querySelectorAll("[data-number]")
const deleteButton = document.querySelector("[data-delete]")
const oparationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");



const calculator = new Calculator(operands1Element, operands2Element);

clearButton.addEventListener("click", () =>{
    calculator.clear();
})

numberButtons.forEach(button =>{
    button.addEventListener("click", ()=>{
        calculator.appendNumber(button.innerHTML);
    })
})

deleteButton.addEventListener("click", () =>{
    calculator.delete();
})

oparationButtons.forEach(operation =>{
    operation.addEventListener("click", ()=>{
        calculator.oparation(operation.innerHTML)
    })
})

equalsButton.addEventListener("click", () =>{
    calculator.calc()
})