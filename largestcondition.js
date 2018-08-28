/*  Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the result. 
Sample numbers : -5, -2, -6, 0, -1 
Output : 0 
 */



let sign=(a,b,c,d,e)=>{
  let max;
  let arr=Array.of(a,b,c,d,e);
  max=arr[0];
    for(let i=0;i<arr.length;i++)
    if(arr[i]>arr[i+1] && arr[i]>max)
      max=arr[i];
      
        
      
 alert("largest is "+max);

}

sign(-5,-2,-6,0,-1);

