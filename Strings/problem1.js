let string = "My name is Gohan", count=0;
for(let i=0;i<string.length-1;i++){
  if(string[i] == " "){
    count++
  }
}
console.log('Words:',count+1)
