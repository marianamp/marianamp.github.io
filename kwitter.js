// ADICIONE SUS LINKS FIREBASE AQUI
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

function addUser() {

  userName = document.getElementById("userName").value;

  localStorage.setItem("userName", userName);  
  window.location = "kwitterRoom.html";
}

