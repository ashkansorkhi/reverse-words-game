let health = 3;
let index = 0 ;
   alert("welcome to the game please revese the words");
   const words =["zebra","ashkan","hanie","cat","tehran","mahsa","fashist","kord","gilak"];
while(health >0){  
index =Math.ceil(Math.random()*9)-1;
     let word = words[index];
let get = prompt(`the word is ${word}`);
   let reversedWord = "";
   for(let i = word.length-1 ; i >=0; i--){
      reversedWord= reversedWord.concat(word[i]); 
   }
   if(reversedWord === get){
      alert("thats correct");
      
   }
   else{
      health = health-1;
      health >=1 &&  alert("thats not the correct answer please try again!"); 
      health >=1 && alert(`you have ${health} more shots!`);
   }
}
alert("You lose :(");



