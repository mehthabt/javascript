/*Write a simple JavaScript program to join all elements of the following array into a string. 
Sample array : myColor = ["Red", "Green", "White", "Black"];
Expected Output : 
"Red,Green,White,Black"
"Red,Green,White,Black"
"Red+Green+White+Black"*/


let join1=(arr1)=>{
  console.log(arr1.join(','));
  console.log(arr1.join('+'));
}
join1(['red','green','blue']);

