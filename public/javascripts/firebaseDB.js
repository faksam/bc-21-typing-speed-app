(function() {
	// body...
	//Initialize Firebase
	var config = {
    apiKey: "AIzaSyCEfLxj_EQQRWvM3ZiQBaK_T41-9HoT77Q",
    authDomain: "typing-speed-app.firebaseapp.com",
    databaseURL: "https://typing-speed-app.firebaseio.com",
    storageBucket: "typing-speed-app.appspot.com",
    messagingSenderId: "574207430377"
  };
  firebase.initializeApp(config);

//get elements
const txtFullName = document.getElementById('txtFullName');

const txtUsername = document.getElementById('txtUsername');

const txtEmail = document.getElementById('txtEmail');

const txtPassword = document.getElementById('txtPassword');

const btnLogin = document.getElementById('btnLogin');

const btnSignUp = document.getElementById('btnSignUp');

const btnLogOut = document.getElementById('btnLogOut');


//Add login event
btnLogin.addEventListener('click', e =>{
  //Get username and pass
  const email = txtEmail.value;
  const pass = txtPassword.value;
  const auth = firebase.auth();
  //Sign in

  const promise = auth.signInWithEmailAndPassword(email,pass);

	promise.catch(e => console.log(e.message));
})
/*
//Get element
const preObject = document.getElementById('object');
//create refrence
const dbRefObject = firebase.database().ref().child('object');
//Syn object changes
dbRefObject.on('value', snap => {
  preObject.innerText = JSON.stringify(snap.val(), null,3);
  //console.log(snap.val())

});
usersRef = ref.child("users");
usersRef.set({
  alanisawesome: {
    date_of_birth: "June 23, 1912",
    full_name: "Alan Turing"
  },
  gracehop: {
    date_of_birth: "December 9, 1906",
    full_name: "Grace Hopper"
  }
});




<p>A function is triggered when the user is pressing a key in the input field.</p>

<input type="text" onkeypress="myFunction()">

<pre id="object"></pre>

<script>
    var count =0 ;
function myFunction() {
    //alert("You pressed a key inside the input field");
    count++;
    console.log(count);
}
</script>


<script src ="public/javascripts/app1.js"></script>

*/

}());
