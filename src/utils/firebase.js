// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
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
const db = getDatabase(app)
export default db