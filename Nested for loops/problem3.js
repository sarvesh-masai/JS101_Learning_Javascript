// Print a box patterns using *
let h,v;
for(h=1;h<=10;h++){
  let s='';
  for(v=1;v<=10;v++){
    if(h==1||h==10){
      s= s+'*';
    }else if(v==1||v==10){
      s= s+'*';
    }else{
      s= s+' ';
    }
  }
  console.log(s)
}