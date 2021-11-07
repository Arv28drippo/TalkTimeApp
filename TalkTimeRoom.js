var firebaseConfig = {
  apiKey: "AIzaSyChxEVDk3sITfWoMOhAIgJj3dEWY3R3WkY",
  authDomain: "talktime-1b1e1.firebaseapp.com",
  databaseURL: "https://talktime-1b1e1-default-rtdb.firebaseio.com",
  projectId: "talktime-1b1e1",
  storageBucket: "talktime-1b1e1.appspot.com",
  messagingSenderId: "9188142270",
  appId: "1:9188142270:web:8c885f84c44e8ac09142ef"
};

firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
  {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update
    ({
        purpose: "adding room name"
    });
    localStorage.setItem("room_name", room_name);

    window.location = "TalkTimePage.html";
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
     console.log("Room Name - " + Room_names);
     row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
     document.getElementById("output").innerHTML += row;
    });
    });
    }
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "TalkTimePage.html"; 
}

function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}