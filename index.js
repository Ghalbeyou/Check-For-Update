// main
const config = require('./config.js');
function main(){
  if (ChkUpdate(config.version) == true){
     console.log("Checking update finished. Your version is up to date!");
     app();
  }else{
     console.error("you are not up to date ;(");
     out();
     }
}
function ChkUpdate(a){
  if (a == config.lastet){
     return true;
  } else {
     return false;
  }
}
function app()
{
   // your app here!
}
function out()
{
  // do the code when it was not up to date.
}
//
/*
Replace app function to your app.
replace lastetver varible to lastet version of your app.
Warning! This app is a checker for updates.
We are updating it. 
Thanks!!
*/
