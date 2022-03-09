//ADICIONE SEUS LINKS FIREBASE
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
document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";

function addRoom()
{
  roomName = document.getElementById("roomName").value;

  firebase.database().ref(roomName).update({
    purpose : "Adicionando nome de sala"
  });

  localStorage.setItem("roomName", roomName);    
  window.location = "kwitterPage.html";
}

function getData() {  
  firebase.database().ref("/").on('value', function(snapshot) {
     document.getElementById("output").innerHTML = ""; 
     snapshot.forEach(function(childSnapshot) {
      childKey  = childSnapshot.key;
      roomNames = childKey;
      console.log("Nome da Sala - " + roomNames);
      row = "<div class='roomName' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ roomNames +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("roomName", name);
    window.location = "kwitterPage.html";
}

function logout() {
  localStorage.removeItem("userName");
  localStorage.removeItem("roomName");
    window.location = "kwitter.html";
}
