import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDl7K06awgjyOqiQBbphEMU9mSJPkpLz2s",
  authDomain: "nwitter-bde31.firebaseapp.com",
  projectId: "nwitter-bde31",
  storageBucket: "nwitter-bde31.appspot.com",
  messagingSenderId: "192617169441",
  appId: "1:192617169441:web:a4f8ba05f90c6a19575960"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);