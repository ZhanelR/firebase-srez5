import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3ki92nMRT-q4D_t0Wl-dyckXftQ7HVu8",
  authDomain: "todo-app-414dd.firebaseapp.com",
  projectId: "todo-app-414dd",
  storageBucket: "todo-app-414dd.appspot.com",
  messagingSenderId: "136472239516",
  appId: "1:136472239516:web:b87f9f21220d7e45423c59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); // авториз в файрбэйз и получ соединение 
export const db = getFirestore(app) //запис в app соединение. Вместо app могу задать любое имя 