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