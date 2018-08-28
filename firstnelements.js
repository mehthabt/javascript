/*Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array. 
Test Data : 
console.log(first([7, 9, 0, -2])); 
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));
Expected Output : 
7
[] 
[7, 9, 0] 
[7, 9, 0, -2] 
[] */


let first=(arr,param)=>
{
  
  
  if(param==null)
    param=1;
   if(param<0)
    param=0;
  console.log(arr.slice(0,param));
}
first([7,9,0,-2]);
first([],3)
first([7,9,0,-2],3)
first([7,9,0,-2],6)
first([7,9,0,-2],-3)



