//Write a JavaScript program to compute the sum and product of an array of integers.
let sum=(input)=>{
 let sum1=0;
 let product=1;
  for(let i=0;i<input.length;i++)
    {
      sum1+=input[i];
      product*=input[i];
    }
  console.log("sum="+sum1)
  console.log("product="+product)
}

sum([2,3,5]);

