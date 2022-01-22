// main
const fs = require('fs');
const cons = console();
function main(){
  if (ChkUpdate(1,0,0.5) == true){
     cons.log("Checking update finished. Your version is up to date!");
     app();
  }else{
     cons.error("you are not up to date ;(");
     procces.quit();
     }
}
function ChkUpdate(a){
  var lastetver = "1.0.2";
  if (a = lastetver){
     return true;
  } else {
     return false;
  }
}
function app()
{
   // your app here!
}

/*
Replace app function to your app.
replace lastetver varible to lastet version of your app.
Warning! This app is a checker for updates.
We are updating it. 
Thanks!!
*/
