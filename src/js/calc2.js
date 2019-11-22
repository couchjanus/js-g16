let display = document.getElementById('viewer');

let leftOperand, 
    operation,
    rightOperand;
    let sum = 0;

    let b2 = document.getElementById('b2');
    let b1 = document.getElementById('b1');
    let plus = document.getElementById('plus');
    let equal = document.getElementById('equal');

    b2.onclick = function(){
        leftOperand  = b2.textContent;
        console.log(leftOperand);
        display.textContent  = leftOperand
    }

    b1.onclick = function(){
        rightOperand  = b1.textContent;
        console.log(rightOperand);
        display.textContent  = rightOperand
    }
    
    plus.onclick = function(){
        operation = '+';
        display.textContent  = operation
    }
