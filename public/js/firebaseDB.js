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

	const dbRef = firebase.database().ref().child('LeaderBoard');

	dbRef.on('value',snapshot =>{
		this.setState({
			LeaderBoard: snapshot.val()
		})
	})

	dbRef.on('value', snap =>{
		var leaderBoard = JSON.stringify(snap.val(), null,3);
		//var leaderBoard = snap.val();
		var parsed = JSON.parse(leaderBoard);
		var arr = [];

		for(var x in parsed){
		  arr.push(parsed[x]);
		}
		arr = arr.sort(function (a,b) {
			return a.speed - b.speed;
		});
		arr.reverse();
		var ul = document.getElementById("leaderBoardList");
		ul.innerHTML = "";
		var li = document.createElement("li");
		var h3=document.createElement("h3");
		h3.innerHTML="Top 20";
		li.setAttribute("class", "collection-header");
		li.appendChild(h3)
		ul.appendChild(li);
		for(var i = 0;i<20;i++){
		li = document.createElement("li");
			console.log(arr[i]["username"]+" "+arr[i]["speed"]);
			li.appendChild(document.createTextNode(arr[i]["username"] +" - "+arr[i]["speed"]));
			li.setAttribute("class", "collection-item");
			ul.appendChild(li);
		}
		console.log(leaderBoard);
		console.log(arr);
	});


//get elements
const txtFullName = document.getElementById('txtFullName');

const txtUsername = document.getElementById('txtUsername');

const txtEmail = document.getElementById('txtEmail');

const txtPassword = document.getElementById('txtPassword');

const btnLogin = document.getElementById('btnLogin');


const txtUsername_SU = document.getElementById('txtUsername_SU');

const txtEmail_SU = document.getElementById('txtEmail_SU');

const txtPassword_SU = document.getElementById('txtPassword_SU');
const btnSignUp = document.getElementById('btnSignUp');

const btnLogOut = document.getElementById('btnLogOut');

const btnSubmitTyping = document.getElementById('btnSubmitTyping');


//Add login event
btnLogin.addEventListener('click', e =>{
  //Get username and pass
  const email = txtEmail.value;
  const pass = txtPassword.value;
  const auth = firebase.auth();
  //Sign in

  const promise = auth.signInWithEmailAndPassword(email,pass);
	promise.then(user => console.log(user))
	.catch(e => console.log(e.message)).then(function() {
		window.location.reload();
	});
});

firebase.auth().onAuthStateChanged(firebaseUser =>{
	if(firebaseUser){
		console.log(firebaseUser);
		btnSignUp0.style.display = "none";
		btnLogin0.style.display = "none";
		btnLogOut.style.display = "block";
	}else {
		console.log('not logged in');
		SignUp.style.display = "block";
		Login.style.display = "block";
		btnLogOut.style.display = "none";
	}
});

//Add signUp event window.location.reload();
btnSignUp.addEventListener('click', e =>{
  //Get username and pass
  const username = txtUsername_SU.value;
  const email = txtEmail_SU.value;
  const pass = txtPassword_SU.value;
  const auth = firebase.auth();
  //Sign in
console.log(email);
console.log(username);
	const promise = auth.createUserWithEmailAndPassword(email, pass)
	.then(function(user){
		if(user ===firebase.auth().currentUser)
		{
			user.updateProfile({
				displayName: username
			});
		}
	}).then(function() {
		window.location.reload();
	})
	});

btnLogOut.addEventListener('click', e =>{
	firebase.auth().signOut();
	window.location.reload();
});


	btnSubmitTyping.addEventListener('click', e =>{
	var user = firebase.auth().currentUser;
		if (user != null) {
			console.log("in btnSubmitTyping ");


			var Username = "";
			  Username = user.displayName;
	var userSpeed = document.getElementById("speedResult1").innerHTML+"";
		var newUserTyping =
		{
			username: Username,
			speed: userSpeed,
			email: user.email
		};
console.log('Username: '+Username+' userSpeed: '+userSpeed);
		var newSpeedKey = firebase.database().ref().child('LeaderBoards').push().key;

		var updates = {};
		updates['/LeaderBoard/' + newSpeedKey] = newUserTyping;

		firebase.database().ref().update(updates);
			showTypingDiv();
		}
		else {
			console.log("in btnSubmitTyping else ");
			showTypingDiv();
		}
	});

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
