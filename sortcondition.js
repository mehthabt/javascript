/*. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. 
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 */

let sign=(a,b,c)=>{
  let arr=Array.of(a,b,c);
  for(let j=0;j<arr.length;j++)
    for(let i=0;i<arr.length;i++)
    if(arr[i]<arr[i+1])
      {
        temp=arr[i];
        arr[i]=arr[i+1]
        arr[i+1]=temp
      }
 alert(arr.join(' '))

}

sign(0,-1,4);
