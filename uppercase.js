/*Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.*/

let str=(input)=>{
  let a=Array.from(input);
  for(let i=0;i<a.length;i++)
    {
      if(a[i]==a[i].toUpperCase())
        a[i]=a[i].toUpperCase();
      else
         a[i]=a[i].toLowerCase();}
  console.log(a.join(''));
    }
  str('tHE qUICK bROWN fOX')


