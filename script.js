const screen= document.getElementById('screen');
const bClear= document.getElementById('bClear');
const bDelete= document.getElementById('bDelete');
const bPosNeg= document.getElementById('bPosNeg');
const b7= document.getElementById('7');
const b8= document.getElementById('8');
const b9= document.getElementById('9');
const b1= document.getElementById('1');
const b2= document.getElementById('2');
const b3= document.getElementById('3');
const b4= document.getElementById('4');
const b5= document.getElementById('5');
const b6= document.getElementById('6');
const b0= document.getElementById('0');
const bDivide= document.getElementById('/');
const bMultiply= document.getElementById('x');
const bAdd= document.getElementById('+');
const bSubtract= document.getElementById('-');
const bEquals= document.getElementById('=');
const bDecimal= document.getElementById('.');
let calcArray=[];
let a= '';
let b='';
const allButtons= document.getElementById('allButtons');
const test= function(element){
    if(element.target.className==='decimal' ||
       element.target.className==='number' ||
       element.target.className==='operator'){
        let userInput= element.target.id;
        screen.innerHTML+= userInput;  //show numbers on screen
    if (element.target.className==='number'){
        a+= userInput;
    }
    if (element.target.className==='operator'){    
        calcArray.push(Number(a));//put number in array
        console.log(calcArray);
        a='';
        if (b!== ''){
            operate();
            };
        b= userInput;
        console.log(b)
        }
    }
} 
let answer;
const operate= function(){
    let x= calcArray[0];
    let y= calcArray[1];
    if (b==='+'){answer = x+y}
    if (b==='-'){answer= x-y}
    if (b==='x'){answer= x*y}
    if (b==='/'){answer= x/y}
    console.log(answer)  
};
allButtons.addEventListener('click', test);