let someValue;

function scuberGreetingForFeet(someValue){
  
  if (someValue < 401){
    return  'This one is on me!';

}
  else if (someValue > 400 && someValue < 2001){

    return  'That will be twenty bucks.';
}
  else if (someValue > 2000 && someValue < 2500 ){

  return  'I will gladly take your thirty bucks.';
}
  else return 'No can do.';
}

let city
function ternaryCheckCity(city){
   let greeting = city === 'NYC'?  'Ok, sounds good.' :  "No go." 
    return greeting;
}

//let tip;
function switchOnCharmFromTip(tip){
  switch (tip){
    case 'generous' : return 'Thank you so much.';
    case 'not as generous' : return 'Thank you.';
    default : return 'Bye.';

  }
}