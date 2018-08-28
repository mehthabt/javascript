//Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8.

let dash=(input)=>{
  
  let arr1=Array.from(input.toString());
  console.log(arr1)
  let i;
  let j;
  for(i=0;i<arr1.length;++i)
    { 
 
      if(arr1[i]%2==0 && arr1[i+1]%2==0)
      {arr1.splice(i+1,0,'-')
      }
    }
  console.log(arr1.join(''));
}
dash(025468);


