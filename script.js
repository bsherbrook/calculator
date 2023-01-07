const screen= document.getElementById('screen');
const bClear= document.getElementById('bClear');
const bDelete= document.getElementById('bDelete');
const bPosNeg= document.getElementById('bPosNeg');
const bEquals= document.getElementById('=');
const bDecimal= document.getElementById('.');
let calcArray=[];
let numBox= '';
let opBox='';
let opCheck;
screenCheck=0; 
const allButtons= document.getElementById('allButtons');
const test= function(element){
    if(element.target.className==='decimal' ||
       element.target.className==='number' ||
       element.target.className==='operator' ||
       element.target.className==='equals'){
        let userInput= element.target.id;
    
    if (element.target.className==='number'){  
        if (screen.innerHTML===answer.toString() ||
            screenCheck===1){screen.innerHTML='';}//dont concat on numbers onto screen answer
        if (equals===true && opCheck===false){numBox='';opBox='';calcArray=[]; answer=0}    
        numBox+= userInput;
        screen.innerHTML+= userInput;  //show numbers on screen
        screenCheck=0;
        equals=false;
        opCheck=false;
    }
    if (element.target.className==='operator' ||
        element.target.className==='equals'){ 
        if (numBox !== ''){//dont push empty values into array
        calcArray.push(Number(numBox));//put number in array
        numBox='';
        screenCheck=1;
        }if (opBox!== '' && calcArray[1]){
            operate();
            };
        opBox= userInput;
        }
    if (element.target.className==='operator'){
        if (equals===true){opCheck=true}
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
    tempArray=[];
    tempArray= numBox.split('');
    tempArray.pop();
    numBox=tempArray.join('');
    screen.innerHTML=numBox;
}
let equals;
let newNum = function(){
    equals=true
};
allButtons.addEventListener('click', test);
bClear.addEventListener('click', clearField);
bDelete.addEventListener('click', deleteNum);
bEquals.addEventListener('click', newNum)