import firebase from "firebase/app";
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyC7H7Fc7HCn_fLNW_PdXAJyGKA9qZ2-wSo",
//     authDomain: "flavor-saver-development.firebaseapp.com",
//     databaseURL: "https://flavor-saver-development.firebaseio.com",
//     projectId: "flavor-saver-development",
//     storageBucket: "flavor-saver-development.appspot.com",
//     messagingSenderId: "448249107923",
//     appId: "1:448249107923:web:d406030effef7dee61cb26",
//     measurementId: "G-TZWBNK58Y5"
//   };

//   firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();

  export { storage, firebase as default };

