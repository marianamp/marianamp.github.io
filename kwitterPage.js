//LINKS FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyCLT9cHzmjrOcjlJQZAC6SUu3z5PJub8X0",
  authDomain: "kwitter-c7d63.firebaseapp.com",
  databaseURL: "https://kwitter-c7d63-default-rtdb.firebaseio.com",
  projectId: "kwitter-c7d63",
  storageBucket: "kwitter-c7d63.appspot.com",
  messagingSenderId: "401007870697",
  appId: "1:401007870697:web:ae4b71cc759e57516d2678"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

userName = localStorage.getItem("userName");
roomName = localStorage.getItem("roomName");

function send()
{
  msg = document.getElementById("msg").value;
  firebase.database().ref(roomName).push({
    name:userName,
    message:msg,
    like:0
   });

  document.getElementById("msg").value = "";
}

function getData() { 
  firebase.database().ref("/"+roomName).on('value', function(snapshot) { 
    document.getElementById("output").innerHTML = ""; 
    snapshot.forEach(function(childSnapshot) { 
      childKey  = childSnapshot.key; 
      childData = childSnapshot.val(); 
      if(childKey != "purpose") {
         firebaseMessageId = childKey;
         messageData = childData;
//Início do código
         console.log(firebaseMessageId);
	       console.log(messageData);
	       name = messageData['name'];
	       message = messageData['message'];
         like = messageData['like'];
         nameWithTag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
         messageWithTag = "<h4 class='message_h4'>" + message + "</h4>";
         like_button ="<button class='btn btn-warning' id="+firebaseMessageId+" value="+like+" onclick='updateLike(this.id)'>";
         spanWithTag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

        row = nameWithTag + messageWithTag +like_button + spanWithTag;       
        document.getElementById("output").innerHTML += row;
//Fim do código
      } });  }); }
getData();

function updateLike(messageId)
{
  console.log("botão de like pressionado - " + messageId);
	buttonId = messageId;
	likes = document.getElementById(buttonId).value;
	updatedLikes = Number(likes) + 1;
	console.log(updatedLikes);

	firebase.database().ref(roomName).child(messageId).update({
		like : updatedLikes  
	 });

}

function logout() {
localStorage.removeItem("userName");
localStorage.removeItem("roomName");
window.location.replace("kwitter.html");
}
