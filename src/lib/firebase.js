// You will need Firebase this to send the data to firebase
// import Firebase from 'firebase'

// You need to set your headers to true to allow: https://firebase.google.com/docs/database/security/
const config = {
  apiKey: "AIzaSyCeKpq9Y35-o0-ZrgDIqA4S_Knkvt4xg9E",
  authDomain: "chat-app-f7523.firebaseapp.com",
  databaseURL: "https://chat-app-f7523.firebaseio.com",
  storageBucket: "chat-app-f7523.appspot.com",
  messagingSenderId: "827194438724"
};

// const store = Firebase.initializeApp(config)

// exporting the fetchRooms function and return
// the response after converting it to a json/javascript object
export default function fetchRooms() {
  // fetch is available in JavaScript to fetch data from
  // REST APIs from a URL, like firebase. Also calling the json 
  // directly from the firebase url. Note I am adding /rooms to the url
  return fetch(`${config.databaseURL}/rooms.json`).then(
    // "then" is how you handle Promises, part of the native
    // JavaScript API, never used in Angular, but used vanilla 
    // JavaScript pretty heavily.
    function(res) {
      // the fetch returns a Promise, which can be parsed and return
      // from a function. Ask me to explaine promises in our meeting
      return res.json()
      // converting that reponse of room data to JSON
    })
}

