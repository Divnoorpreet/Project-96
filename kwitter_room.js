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
  document.getElementById("user_name").innerHTML="Welcome " + user_name +"!";

  function getData() {firebase.database().ref("/").on('value',function(snapshot) {document.getElementById("output").innerHTML ="";snapshot.forEach(function(childSnapshot) {childKey =childSnapshot.key;
    Room_names = childKey;
    //Start code
    console.log("room_name"+Room_names);
    var row="<div class='room' id="+ Room_names +" onclick='redirecttoroom(this.id)'>" + Room_names + "</div><hr>";
    document.getElementById("output").innerHTML+=row;
    //End code
    });});}
    getData();

    function redirecttoroom(name){
        localStorage.setItem("room_name",name);
        console.log(name);
        window.location="kwitter_page.html";
  } 

    function logout(){
        localStorage.removeItem("user_name");
        localStorage.removeItem("room_name");
        window.location="index.html";
  }
  
    function addroom(){
        var room_name=document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({purpose:"adding room"});
        localStorage.setItem("room_name",room_name);
        window.location="kwitter_page.html";
  }
  