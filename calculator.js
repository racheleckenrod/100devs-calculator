// Pseudocode:
// set up event listeners for each button
// give each button a value or an operation. They each have an Id. 
// set up the functions for the operations using the values from each button.

// pass in the values from the clicks and innerText both the numbers as they are clicked, and the resilt of the operations. Would be nice if the button changed color on the click too as the screen wont be printing out the operation. the buttons already change color with the hovering.

// For the functioning of the calculator, I think it would be most doable to work in loops. the calculator would give an output after completing each operation, and maybe only print it out if the equals button is pushed. it will have to keep a running total, so that for a calculate function, it will need input a, which will be all the numbers until an operand is clicked. so that would be 'a'. let a = all the numbers clicked before an operand. as soon as an operand is clicked, it (and 'a') are passed into the calculate function, and 'b' is up next. if another operand is clicked, it will override the last one, but 'a' remains unchanged. equals will print out 'a' in the case that it is pressed, and won't clear untill it is pressed two times in a row. So, after the last operand (before more numbers) the value of 'b'. there will need to be a place holder of data- "subtotal" might be a good choice. subtotal = a, then operand is passed in when 'b' starts being given value. total will then be total = subtotal operand b . 0r a operand b in the first case. 
// I'll have to find out how to tally all the numbers clicked. each click will have two things happen. one is the value sent to the screen, and the other to be added in a string to a. a is then converted to a number when it goes to the calculate function and waits til it has an operand and another number passed into it by either the equals button or another operand. If it is another operand, subtotal is sent to the screen, same as it would be with equals., but the subtotal is passed into the calculate function and waiting for a new b. while the equals being pressed is going to clear if the equals is pressed again and the total and subtotal and a and b and all reset to zero. Again, have to check to see how to capture the click- seems that all I know it does is call a function. on 'click' - function something runs. 
// so with numbers, the click will do different things, based on where the calculate function is in it's process. I'm not sure that that will work. 
// when operands and clicked, it will do different things too.- this approach may not be going to work. for example, a '+' pushed when there are no numbers in the cue, it wont do anything.




// constants
// let one =  document.querySelector('.number').addEventListener('click',addValue1)

// let two = document.querySelector('#two').addEventListener('click',addValue2)


const numbers = document.getElementsByClassName("number")
for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', addValue)
}

const buttons = document.querySelectorAll('.operator')
for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', calculate)
}

const equal =  document.querySelector('#equals')
// equal.addEventListener('dblclick', equals)
equal.addEventListener("click", equals)

const point = document.querySelector('#point')
point.addEventListener('click', decPoint)



let a = ""
let b = a
let X
let subtotal = X
let firstNumber = true
function addValue() {
    if(firstNumber === true){
        a = ""
        document.querySelector('h1').innerText = ""
        firstNumber = false
    }//if there is a decimal point, "." = null
    
    if(a.includes(".")){
        decPoint()
    }
    // console.log(document.querySelector('h1').innerText)
    document.querySelector('h1').innerText += this.innerText
    // console.log(this.innerText)
    a += this.innerText
    b += this.innerText
    console.log(a)
    console.log(b)
}

function decPoint(){
    // for(let i = 0;i< 1; i++){
    //     console.log(i)
    //     if(i > 0){
    //         point.addEventListener('click', addValue).disabled = true
    //         alert("Too many decimals!!!!!!")
    //     }
    // }
    if(a.includes(".")){
        return
    }else{
        a += "."
        document.querySelector('h1').innerText += "."
    }
}
let sum
function calculate(){

    firstNumber = true //should go at the end?
    
    if(subtotal === X){
        subtotal = Number(a)
        console.log("sub=", subtotal)
    }else{
        currentValue =  Number(a)
    console.log("test", a, this.innerText, "currentVale=", currentValue, "subtot=", subtotal)
    if(this.innerText === "+"){
        let sum
        sum = subtotal + currentValue
        console.log(sum, 'winning', subtotal,currentValue)
        document.querySelector('h1').innerText = sum

    
        // ok so if "+"" is clicked, the value,"a" should only get ready to be added to. then the next value of a should be added to the first value of a and then stored in the running memory until equals is clicked, or another operator. so, no matter what operator is clicked the first time, we want the value to be += added to zero held in the subtotal. but after the first time, and there is a running total going, we want the operand click to perform whatever operation on the subtotal(necessary to take into consideration because of the zero and multiplication and division). so maybe first is to  if first time, because we still want to be able to multiply by zero and have zero be the result. so 'Enter a value' may be the correct way to approach this problem, like you could enter zero if you wanted to .. 
    }else if(this.innerText === "-"){
        let difference =
        subtotal -= currentValue
        document.querySelector('h1').innerText = difference
        total = difference
    }else if(this.innerText === "x"){
        let product = 
        subtotal *= currentValue
        document.querySelector('h1').innerText = product
        total = product
    }else if(this.innerText === "/"){
        let quotient =
        subtotal /= currentValue
        document.querySelector('h1').innerText = quotient
        total = quotient
        
    }
    console.log('Bigtest',"total=", total, "sub=",subtotal, a, "Current=", currentValue)

}
}
// function divide(a,b){
//     document.querySelector('h1').innerText = Number(x) / Number(b)

// }

function equals(){
    
    if(document.querySelector('h1').innerText != (subtotal) ){
    
    document.querySelector('h1').innerText = sum
    console.log(b + "equals")
    
    }else{
        first = true
        a = ""
        b = ""
        subtotal = 0
        currentValue = 0
        document.querySelector('h1').innerText = "zero"
    }
}


    
    


// function addValue1(){
//     document.querySelector("h1").innerText += 1
// }

// function addValue2
// console.log(one)



// 

// eventListeners

// button.addEventListener('click', enterValue)

// // functions
// function enterValue(){
//     document.getElementById("")
//     return #id
// }

   
function getValue(){
    if(Number(button) !== NaN ){
        // give it the value
    }else if(button === "="){
        // this will have more than one result. pressed two times(or more specifically the second time) it will clear the total and print a zero
    }else if(button === "+"){
        // 
    }else if(button === "-"){
        // 
    }else if(button === "x"){
        // 
    }else if(button === "/"){
        // 
    }
}

// let calc = new Calculator;

// function Calculator() {
//     this.methods = {
//         "-": (a, b) => a - b,
//         "+": (a, b) => a + b
//     }

//     this.calculate = function(str) {

//         let split = str.split(' '),
//          a = +split[0],
//          op = split[1],
//          b = +split[2]
//         if(!this.methods[op] || isNaN(a) || isNaN(b)){
//             return NaN
//         }

//         return this.methods[op](a,b)
//     }
    
//     this.addMethod = function(name, func) {
//         this.methods[name] = func
//     }
// }


// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);

// let result = powerCalc.calculate("2 ** 3");
// alert( result ); // 8

// console.log(powerCalc)


// alert( calc.calculate("3 + 7") ); // 10
// Then add the method addMethod(name, func) that teaches the calculator a new operation. It takes the operator name and the two-argument function func(a,b) that implements it.

// For instance, let’s add the multiplication *, division / and power **:

// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);

// let result = powerCalc.calculate("2 ** 3");
// alert( result ); // 8
// No parentheses or complex expressions in this task.
// The numbers and the operator are delimited with exactly one space.
// There may be error handling if you’d like to add it.
// Open a sandbox with tests.
