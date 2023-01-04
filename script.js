const bClear= document.getElementById('bClear');
const bDelete= document.getElementById('bDelete');
const bPosNeg= document.getElementById('bPosNeg');
const b7= document.getElementById('b7');
const b8= document.getElementById('b8');
const b9= document.getElementById('b9');
const b1= document.getElementById('b1');
const b2= document.getElementById('b2');
const b3= document.getElementById('b3');
const b4= document.getElementById('b4');
const b5= document.getElementById('b5');
const b6= document.getElementById('b6');
const b0= document.getElementById('b0');
const bDivide= document.getElementById('bDivide');
const bMultiply= document.getElementById('bMultiply');
const bAdd= document.getElementById('bAdd');
const bSubtract= document.getElementById('bSubtract');
const bEquals= document.getElementById('bEquals');
const bDecimal= document.getElementById('bDecimal');

const add = function(a,b) {
	return (a+b);
};
const subtract= function(a,b) {
	return (a-b);
};
const divide= function(a,b){
    return (a/b)
};
const multiply= function(a,b){
    return (a*b)
};
const power = function(a,b) {
    return a**b;
};
const operator= function(string){//am i giving this an array or a string?
    let array = string.split(' ');
    if (array.includes('+'){} )
}
const sumArray = function(array) {
  let answer= array.reduce(
    (total, current)=> total + current,0);
    return answer;
  //return array.reduce((total, current) => total + current, 0)
};
const multiplyArray = function(array) {
  return array.reduce(
    (total,current) => total*current,1);
};