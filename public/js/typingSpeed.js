//document.getElementById("intro");
/*
 keyboard in the input field to get the Unicode character code of the pressed key.


*/
//Change nameOf Functions
var wrongChars = "";
var typedSoFar = "";
var timerStart = false;
var startedTyping = "";
var stoppedTyping = "";
var typedPercent = 0;
var totalKeyStroke = 0;
var time = 0;
var timer;
var theParagraph = document.getElementById("paragraph").innerHTML;

function stopWatch() {
  time++;
  var minutes = "0" + Math.floor(time / 60);
  var seconds = "0" + (time - minutes * 60);
  document.getElementById("displayTime").innerHTML = minutes.substr(-2) + ":" + seconds.substr(-2);
}

function myFunction(event) {

if(timerStart === false)
{
    timer = setInterval(function(){ stopWatch() }, 1000);
    document.getElementById("displayTime").style.display = "block";
    startedTyping = new Date().getTime();
    startedTyping = (startedTyping / 1000)  / 60;
}
  timerStart = true;//startTime
    console.log(startedTyping);
var typedString = document.getElementById("typedString").value;
var paragraph = document.getElementById("paragraph").innerHTML;
    var x = event.which || event.keyCode;
var currentChar = String.fromCharCode(x);
typedString += currentChar;
    //document.getElementById("currentChar").innerHTML = "The Unicode value is: " + x+" the char is "+String.fromCharCode(x) + " " +typedString;

    string_a= typedString;
 string_b= theParagraph;
 first_occurance=string_b.indexOf(string_a);
 if(first_occurance==-1)
 {
   totalKeyStroke++;
  //alert('Search string Not found');
    wrongChars += currentChar;
    //wrongChars = wrongChars.fontcolor("red");
    //document.getElementById("typedString").value = typedSoFar + wrongChars;

    document.getElementById("typedString").style.color = 'red';
    document.getElementById("typingNotify").style.color = 'red';
    document.getElementById("typingNotify").innerHTML = "error";
    document.getElementById("Notification").innerHTML = "Wrong input: "+wrongChars; //Notification
    document.getElementById("Notification").style.color = 'red';
    console.log(wrongChars);
 }
 else if(string_a.charAt(0) !== string_b.charAt(0))
 {
    totalKeyStroke++;
  //alert('Search string Not found');
    wrongChars += currentChar;
    //wrongChars = wrongChars.fontcolor("red");
    //document.getElementById("typedString").value = typedSoFar + wrongChars;

    document.getElementById("typedString").style.color = 'red';
    document.getElementById("typingNotify").style.color = 'red';
    document.getElementById("typingNotify").innerHTML = "error"; //
    document.getElementById("Notification").innerHTML = "Wrong input: "+wrongChars; //Notification
    document.getElementById("Notification").style.color = 'red';
    console.log(wrongChars);
 }
 else
 {
    totalKeyStroke++;
   wrongChars = "";
   string_a_length=string_a.length;
   if(first_occurance==0)
   {
    new_string=string_b.substring(string_a_length);
   }else
   {
    new_string=string_b.substring(0,first_occurance);
    new_string+=string_b.substring(first_occurance+string_a_length);
   }
   typedSoFar = typedString.fontcolor("#483D8B");
    document.getElementById("paragraph").innerHTML = typedSoFar+new_string;
    document.getElementById("typedString").style.color = 'green';
    document.getElementById("typingNotify").style.color = 'green';
    document.getElementById("typingNotify").innerHTML = "mode_edit";
    document.getElementById("Notification").innerHTML = ""; //Notification
    document.getElementById("Notification").style.color = 'green';
 if(string_a.length === string_b.length)
 {
    totalKeyStroke++;
    document.getElementById("btnSubmitTyping").disabled = false;
    document.getElementById("typedString").disabled = true;
    console.log(string_a +" equals\n "+string_b );
    stoppedTyping = new Date().getTime();
    stoppedTyping = (stoppedTyping / 1000)  / 60;
    console.log(stoppedTyping);
    console.log("Stopped: "+(stoppedTyping-startedTyping));
    document.getElementById("typingNotify").innerHTML = "done";
    document.getElementById("Notification").innerHTML = "Click submit button down below to view your speed"; //Notification
    document.getElementById("Notification").style.color = 'green';


    clearInterval(timer);
//Result
    console.log("totalKeyStroke: "+totalKeyStroke);
    document.getElementById("speedResult0").innerHTML = "Your test result";
    document.getElementById("speedResult1").innerHTML = (Math.round((totalKeyStroke/5)/(stoppedTyping-startedTyping)));


 }
    typedPercent = ((string_a.length/string_b.length)*100);
    console.log("typedPercent: "+typedPercent);
    var welcomeDiv  = document.getElementById("welcomeDiv");
    document.getElementById("typedProgress").style.width = typedPercent+"%";
    console.log(new_string);
 }}






//display and hide typing div


  var welcomeDiv  = document.getElementById("welcomeDiv");
  var signupDiv = document.getElementById("signupDiv");
  var loginDiv = document.getElementById("loginDiv");
  var typingDiv = document.getElementById("typingDiv");

function showTypingDiv()
{
if (typingDiv.style.display === "none") {
    typingDiv.style.display = "block";
    welcomeDiv.style.display = "none";
    loginDiv.style.display = "none";
    signupDiv.style.display = "none";
  }
  else {
    typingDiv.style.display = "none";
    welcomeDiv.style.display = "block";
  }
  /*
  else
  {
    typingDiv.style.display = "none";
    welcomeDiv.style.display = "block";
    loginDiv.style.display = "block";
    signupDiv.style.display = "block";
  }*/
 }

//display and hide login div

function showLoginDiv()
{
if (loginDiv.style.display === "none") {
    loginDiv.style.display = "block";
        welcomeDiv.style.display = "none";
        typingDiv.style.display = "none";
        signupDiv.style.display = "none";
  }
  else {
    welcomeDiv.style.display = "block";
    loginDiv.style.display = "none";
  }
  /*
  else
  {
    loginDiv.style.display = "none";
      welcomeDiv.style.display = "block";
      loginDiv.style.display = "block";
      signupDiv.style.display = "block";
  }*/
 }


//display and hide signUp div

function showSignupDiv()
{
if (signupDiv.style.display === "none") {
    signupDiv.style.display = "block";
      loginDiv.style.display = "none";
        welcomeDiv.style.display = "none";
        typingDiv.style.display = "none";
  }
  else {
    signupDiv.style.display = "none";
      welcomeDiv.style.display = "block";
  }
  /*
  else
  {
    signupDiv.style.display = "none";
      loginDiv.style.display = "block";
        welcomeDiv.style.display = "block";
        loginDiv.style.display = "block";
  }*/
 }


 const takeTest = document.getElementById('takeTest');

 //Add login event
 takeTest.addEventListener('click', e =>{
   if(timer>0)
   {
     alert(timer);
     window.location.reload();
   }
     typingDiv.style.display = "block";
     welcomeDiv.style.display = "none";
     loginDiv.style.display = "none";
     signupDiv.style.display = "none";
 });
