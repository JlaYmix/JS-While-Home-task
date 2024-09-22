// task_1

const calculator = function(num1, num2, operator) {
    let sum;
    switch(operator) {
    case '+':
        sum = num1 + num2;
        break;
    case '-':
        sum = num1 - num2;
        break;
    case '*':
        sum = num1 * num2;
        break;
    case '/':
        sum = num1 / num2;
        break;
    }
    return sum;
}
const num1 = +prompt('Введіть перше число: ');
const num2 = +prompt('Введіть друге число: ');
const operator = prompt('Виберіть будь-який символ(+, -, /, *): ');
const result = calculator(num1, num2, operator);
alert('Result: ' + result);

// task_2

let sum = 0;
while(sum++ < 100) {
    console.log(sum);
}

// task_3

let rightAnswer = 6;
let userAnswer;
let AllowAnswer = 3;
while(userAnswer !== rightAnswer) {
    userAnswer = +prompt("розв'яжи рівняння (2 + 2 * 2), в тебе 3 спроби: ");
    if(userAnswer === rightAnswer) {
        console.log('Правильно');
    } else {
        console.log('Не правильно');
	    AllowAnswer--;
    }
    if(AllowAnswer == 0) {
	    console.log('Твої 3 спроби було втрачено (Правильна відповідь - це 6)');
	    break;
    }
}

// task_4 

const takesum = function(num1, num2) {
    let sum = 1;
    let while_number = 0;
    
    while(while_number < num2) {
        sum = sum * num1;
        while_number++;
    }
    return sum;
}

const num1 = +prompt('First number: ');
const num2 = +prompt('Stepin number: ');
const result = takesum(num1, num2);
console.log('Result First Number with Stepin: ' + result);