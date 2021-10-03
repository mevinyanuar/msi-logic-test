///1.Factorial

let j = 1

function factorial (n){
  for(i=1;i<=n;i++){
    j = j*i;
  }
  return j;
}

//input your number here
console.log(factorial(5))


///////////////////////////////////////

///2.Find Max

function findMax (str) {
  let max = 0,
      maxChar = '';
   str.split('').forEach(char => {
     if(str.split(char).length > max) {
         max = str.split(char).length;
         maxChar = char;
      }
   });
   return maxChar;
 };
 
 console.log(findMax('ABCC'))
 console.log(findMax('DCABAD'))
 console.log(findMax('EBC'))
 console.log(findMax('F'))