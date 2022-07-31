//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyDs4MdDOOH1036fxdWE1pypkhdjO5cWr2Y",
    authDomain: "gossipbase-148ad.firebaseapp.com",
    databaseURL: "https://gossipbase-148ad-default-rtdb.firebaseio.com",
    projectId: "gossipbase-148ad",
    storageBucket: "gossipbase-148ad.appspot.com",
    messagingSenderId: "536645051541",
    appId: "1:536645051541:web:b1e654a5e595ba9d90e79c"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig)





user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";


function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          likes:0
    });
     document.getElementById("msg").value = "";
}


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();


function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
          window.location = "index.html";

}

