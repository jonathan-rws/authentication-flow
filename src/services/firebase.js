import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCgOgv08qMiobyVwsyJA03C2EExVHD0Jls",
  authDomain: "finlevme.firebaseapp.com",
  databaseURL: "https://finlevme-default-rtdb.firebaseio.com",
  projectId: "finlevme",
  storageBucket: "finlevme.appspot.com",
  messagingSenderId: "264635002505",
  appId: "1:264635002505:web:c7c7f90f4c9f44e2902058"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getDatabase(app)