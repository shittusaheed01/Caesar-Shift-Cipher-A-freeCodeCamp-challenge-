const str= document.getElementById("text").value;
console.log(str);
const btn = document.getElementById("btn")
const results= document.getElementById("result")
const alphabets= ["a", "b", "c", "d", "e", "f","g", "h", "i","j", "k", "l","m", "n", "o","p", "q", "r","s", "t", "u","v", "w", "x","y", "z"];
btn.addEventListener("click", function () {
  const str= document.getElementById("text").value;
  let lstr= str.toLowerCase();
  let result="";
  for(let i=0; i<lstr.length; i++){ 
    let index= alphabets.indexOf(lstr[i]);
    if(!lstr[i].match(/^[a-z]+$/))
    {
     result+= lstr[i]; 
       } else if(index >= 13) 
       {
       let rem= index + 13 - 26;
       result+=alphabets[rem];
      }else{
       result += alphabets[index+13];
     }
    
  }
  let ures= result.toUpperCase();
  results.textContent= ures;
})
