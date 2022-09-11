// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";
import { getMessaging,getToken } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9ocMsNODFmK2Qj6i_8IHDmOb5etKz6FQ",
  authDomain: "bmical-4b93b.firebaseapp.com",
  projectId: "bmical-4b93b",
  storageBucket: "bmical-4b93b.appspot.com",
  messagingSenderId: "78029046564",
  appId: "1:78029046564:web:2f361fb3dc6a542b8069b1",
  databaseURL:"https://bmical-4b93b-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app)
const ms = getMessaging(app);

export default db

// const requestPermission = ()=>{
//   console.log("requesting permission")
//   Notification.requestPermission().then(permission=>{
//     if (permission === "granted"){
//       console.log("permission granted")
//       getToken(ms,{vapidKey: "key"})
//       .then(currentToken=>{
//         if(currentToken){
//           console.log("token = ",currentToken)
//         }
//         else{
//           console.log("cannot get token")
//         }
//       })
//     }
//     else{
//       console.log("didn't get permission")
//     }
//   })
// }
// requestPermission()