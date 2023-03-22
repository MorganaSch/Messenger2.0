//adicione o código do seu banco de dados
const firebaseConfig = {
  apiKey: "AIzaSyAnDxdLiNuAcuZPoagSb9NcwNvUWpZinas",
  authDomain: "menssager-41dbf.firebaseapp.com",
  databaseURL: "https://menssager-41dbf-default-rtdb.firebaseio.com",
  projectId: "menssager-41dbf",
  storageBucket: "menssager-41dbf.appspot.com",
  messagingSenderId: "694393516025",
  appId: "1:694393516025:web:ade80870da815dd88bd728",
  measurementId: "G-MJ6S3JD57G"
};

//// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Bem vindo(a) " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose: "adicionando nome da sala"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "menssager_page.html";
}

function getData() 
{  
    firebase.database().ref("/").on('value', function(snapshot) 
    { 
        document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) 
        { 
            childKey  = childSnapshot.key;
            Room_names = childKey;
            //Comece a programar 
            console.log("Nome da sala: " + Room_names);
            row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
            document.getElementById("output").innerHTML += row;
            //Programe até aqui
        });
    });
}

getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "menssager_page.html";
}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}
