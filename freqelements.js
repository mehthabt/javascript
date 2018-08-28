/*Write a JavaScript program to find the most frequent item of an array. 
Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
Sample Output : a ( 5 times ) 
*/

let count=(input)=>{
  let c=0;
  let item;
  let max=1;
  for(let i=0;i<input.length;++i){
    c=0;
    for(let j=0;j<input.length;++j){
      if(input[i]==input[j]){
        ++c;
      }}
      if(c>max){
        max=c;
        item=input[i];
      }
    }
  console.log(item+"("+max+"times)");
  }
  
count([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]);


