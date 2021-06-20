var firebaseConfig = {
    apiKey: "AIzaSyAtcMrWeXalZjRqkahcS0iBmcxV7KVXbR8",
    authDomain: "kwitter2-8d777.firebaseapp.com",
    databaseURL: "https://kwitter2-8d777-default-rtdb.firebaseio.com",
    projectId: "kwitter2-8d777",
    storageBucket: "kwitter2-8d777.appspot.com",
    messagingSenderId: "204396144736",
    appId: "1:204396144736:web:76d842f47158582362bb05"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

var user_name=localStorage.getItem("user_name");
var room_name=localStorage.getItem("room_name");

function getData() { 
    firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}
function send(){
    var msg=document.getElementById("text").value;
    firebase.database().ref(room_name).push({name:user_name,message:msg,like:0});
    document.getElementById("text").value="";
}