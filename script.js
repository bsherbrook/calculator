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
let numBox= '';
let opBox='';
screenCheck=0;  //error when numbers right after sum calculation
const allButtons= document.getElementById('allButtons');
const test= function(element){
    if(element.target.className==='decimal' ||
       element.target.className==='number' ||
       element.target.className==='operator'){
        let userInput= element.target.id;
    if (element.target.className==='number'){
        numBox+= userInput;
        if (screen.innerHTML===answer.toString() ||
            screenCheck===1){screen.innerHTML='';}//dont concat on numbers onto screen answer
        screen.innerHTML+= userInput;  //show numbers on screen
        screenCheck=0;
    }
    if (element.target.className==='operator'){    
        if (numBox !== ''){//dont push empty values into array
        calcArray.push(Number(numBox));//put number in array
        console.log(calcArray);
        numBox='';
        screenCheck=1;
        }if (opBox!== '' && calcArray[1]){
            operate();
            };
        opBox= userInput;
        console.log(opBox)
        }
    }
} 
let answer=0;
const operate= function(){
    let x= calcArray[0];
    let y= calcArray[1];
    if (opBox==='+'){answer = x+y}
    if (opBox==='-'){answer= x-y}
    if (opBox==='x'){answer= x*y}
    if (opBox==='/'){answer= x/y}
    console.log(answer);
    screen.innerHTML= answer; 
    calcArray= [];
    calcArray[0]= answer;
};
clearField= function(){
    calcArray=[];
    numBox='';
    opBox='';
    answer=0;
    screen.innerHTML='0';
}
let tempArray;
deleteNum= function(){
    if (answer){return}; //doesnt allow for delete after calculating sum...
    tempArray=[];
    tempArray= numBox.split('');
    tempArray.pop();
    numBox=tempArray.join('');
    screen.innerHTML=numBox;
}
allButtons.addEventListener('click', test);
bClear.addEventListener('click', clearField);
bDelete.addEventListener('click', deleteNum);