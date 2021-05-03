import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "",
  authDomain: "ncr-ytc.firebaseapp.com",
  projectId: "ncr-ytc",
  storageBucket: "ncr-ytc.appspot.com",
  messagingSenderId: "33046587106",
  appId: "1:33046587106:web:a7266799fc5bc27caf20bb",
  measurementId: "G-LG15DVR0Q0",
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth();
