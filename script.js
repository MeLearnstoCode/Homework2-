 //1
 function squareNumber(x){
  let result =   Math.pow(x,2);
  console.log(`The result of squaring the number ${x} is ${result}`);
  return result;
 
}

squareNumber(3);


//2 
function halfNumber(y){
  let result = (y/2);
  console.log(`Half of ${y} is ${result}.`);
  return result;
 
}
halfNumber(5);

//3 
function percentOf(a,b){
  let result = ((a/b)*100);
  console.log(`${a} is ${result}% of ${b}`);
  return result;
}
percentOf(2,4);              

//4 
function areaOfCircle(radius){
  let area = (Math.PI)*Math.pow(radius,2);
  let rounded = area;
  let a = rounded.toFixed(2);
  console.log(`The area for a circle with radius ${radius} is ${a}.`);
  return radius;
 
}

areaOfCircle(2);



function myFunc(num){
  const x = halfNumber(num);
  const y = squareNumber(x);
  const z = areaOfCircle(y);
  const res = percentOf(y,z); 
  console.log(`The final result is ${res}`);
  return res;
}

myFunc(5);



