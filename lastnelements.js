/*Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.
Test Data : 
console.log(last([7, 9, 0, -2])); 
console.log(last([7, 9, 0, -2],3)); 
console.log(last([7, 9, 0, -2],6));
Expected Output : 
-2 
[9, 0, -2] 
[7, 9, 0, -2]*/


let last=(arr1,param1)=>{
  if(param1==null)
    param1=1;
  arr1.reverse();
  let arr2=arr1.slice(0,param1);
  console.log(arr2.reverse())}
last([7,9,0,-2]);
last([7,9,0,-2],3);
last([7,9,0,-2],6);





