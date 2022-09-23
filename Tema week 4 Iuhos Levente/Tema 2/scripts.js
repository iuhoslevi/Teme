var myArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
var sum=0;
console.log(myArray);
for (var i=1; i<=20; i++){
    if(i%2 ==1){
      console.log(i);
    }
  }
  for (var i=1; i<=myArray.length; i++){
    sum=sum+i;
  }
  console.log("Sum is: "+sum);
  console.log("Max number is: "+Math.max(...myArray));
