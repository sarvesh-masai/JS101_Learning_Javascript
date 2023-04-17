//Print all the prime number between 1 - 25
for (let i=1;i<=25;i++){
  let n=i,count=0;
  for(let i=1;i<=n;i++){
    if(n%i==0){
      count++;
    }
  }
(count==2)?console.log(n,'is a prime number'):console.log(n,'is not a prime number');
}




