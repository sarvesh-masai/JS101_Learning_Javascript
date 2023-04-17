// Print the Calendar date in the format(month - day) for all the months in a year
let month,day,count;
for(month=1;month<=12;month++){
  if(month==2){
    count=28;
  }else if(month==4||month==6||month==9||month==11){
    count=30;
  }else{
    count=31;
  }
  for(day=1;day<=count;day++){
    console.log(month+" - "+day);
  }
}