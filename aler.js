/*Write a JavaScript conditional statement to find the sign of product of three numbers. Display an alert box with the specified sign. Go to the editor 
Sample numbers : 3, -7, 2 
Output : The sign is - */

let sign=(a,b,c)=>{
 let p=a*b*c;
  if(p<0)
alert("the sign is -")
  else
    alert("the sign is +")
}

sign(3,-7,2)