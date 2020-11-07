class Calculatrice {
    
    constructor(array,elements) {
        this.array = array;
        this.elements = elements;
    }

    addElementsOnClick() {
        for(let i = 0; i < elements.length; i++) {
            this.elements[i].addEventListener("click", (event) => {
                if(event.target.value !== '<' && event.target.value !== '=' && event.target.value !== '%') {
                    span.value += event.target.value;
                }
            });
        }
    }

    calculation() {

        for (let i = 0; i < elements.length; i++) {

            this.elements[i].addEventListener("click", (event) => {

                let count = 0;

                this.array += event.target.value;

                for(let j = 0; j < this.array.length; j++) {
                    if(this.array[j] !== '=') {
                        count++;
                    } else {
                        break;
                    }
                }

                equalSign = this.array.indexOf('=') !== -1 ? true : false;

                if(event.target.value === '%' && this.array.indexOf('+') === -1 && 
                   this.array.indexOf('-') === -1 && this.array.indexOf('*') === -1 &&
                   this.array.indexOf('/') === -1) {

                    this.array = this.array.substring(0,this.array.length-1);
                    this.array = this.array / 100;
                    span.value =  this.array;
                    
                } else {
                    if(this.array.indexOf('%') !== -1) {
                        this.array = this.array.substring(0,this.array.length-1)
                    }
                }

                res = this.array.slice(0,count);

                btnEgale.addEventListener("click", () => {
                    switch (event.target.value) {
                        case '+':
                            this.array = eval(res);
                            span.value = eval(res);
                            break;
                        case '-':
                            this.array = eval(res);
                            span.value = eval(res);
                            break;
                        case '*':
                            this.array = eval(res);
                            span.value = eval(res);
                            break;
                        case '/':
                            this.array = eval(res);
                            span.value = eval(res);
                            break;
                    }
                });   
            });            
        }
    }

    reset() {

        for (let i = 0; i < elements.length; i++) {

            this.elements[i].addEventListener("click", (event) => {

                if(event.target.value === 'AC') {
                    this.array = [];
                    span.value = '';
                }

            });
        }

    }

    removeValue() {

        remove.addEventListener("click", () => {

            if(equalSign === true) {
                this.array = [];
                span.value = '';
            } else {
                this.array = this.array.substring(0,this.array.length-1);
                span.value = this.array;              
            }
            
        });

    }

}

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");
const btn9 = document.getElementById("btn9");
const btn0 = document.getElementById("btnZero");
const btnPlus = document.getElementById("btnPlus");
const btnMoins = document.getElementById("btnMoins");
const btnFois = document.getElementById("btnFois");
const btnDiv = document.getElementById("btnDiv");
const btnEgale = document.getElementById("btnEgale");
const point = document.getElementById("point");
const reset = document.getElementById("reset");
const remove = document.getElementById("remove");
const btnPlusMoins = document.getElementById("btnPlusMoins");
const btnModulo = document.getElementById("btnModulo");

const span = document.getElementById("span");

let elements = [
    btn1,btn2,btn3,btn4,btn5,btn6,btn7,btn8,btn9,btn0,
    btnPlus,btnMoins,btnFois,btnDiv,btnEgale,reset,point,btnModulo
];

const array = new Array();

let res = '';

let equalSign;

calculatrice = new Calculatrice(array,elements);

calculatrice.addElementsOnClick();

calculatrice.calculation();

calculatrice.reset();

calculatrice.removeValue();