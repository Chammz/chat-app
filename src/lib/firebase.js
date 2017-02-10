// import Firebase from 'firebase'

const config = {
  apiKey: "AIzaSyCeKpq9Y35-o0-ZrgDIqA4S_Knkvt4xg9E",
  authDomain: "chat-app-f7523.firebaseapp.com",
  databaseURL: "https://chat-app-f7523.firebaseio.com",
  storageBucket: "chat-app-f7523.appspot.com",
  messagingSenderId: "827194438724"
};

// const store = Firebase.initializeApp(config)
// console.log(store)
const db = {
  readData() {
    // store.database().ref('/room')
    return fetch(`${config.databaseURL}.json`).then(function(res) {
      console.log(res)
      return res.json();
    })
  }
}

export default db
