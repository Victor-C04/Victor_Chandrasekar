class Calculator{
    constructor(a,b,operation){
        this.a = a;
        this.b = b;
        this.operation = operation;
    }
    operate(){
        switch(this.operation){
            case 'add':
                return this.a + this.b;
            case 'subtract':
                return this.a - this.b;
            case 'multiply':
                return this.a * this.b;
            case 'divide':
                if(this.b === 0) return "cannot divide by zero"
                return this.a / this.b;
        }
    }
};

var calculator = function(a,b,operation) {
    const calc = new Calculator(a,b,operation);
    return calc.operate();
};

console.log(calculator(2,3,'add'));