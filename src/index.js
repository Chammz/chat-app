import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

var admin = require("firebase-admin");

admin.initializeApp({
  credential: admin.credential.cert("/Users/chris/sites/bloc/chat-app/chat-app-f7523-firebase-adminsdk-fq7ol-1171517a46.json"),
  databaseURL: "https://chat-app-f7523.firebaseio.com"
});
