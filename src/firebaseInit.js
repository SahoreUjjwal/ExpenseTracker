import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCcVV_74FD524jDSyLqJBazWozlKnzz58o",
  authDomain: "blog-007-411518.firebaseapp.com",
  projectId: "blog-007-411518",
  storageBucket: "blog-007-411518.appspot.com",
  messagingSenderId: "421789584415",
  appId: "1:421789584415:web:ee8e0844654816aba1992a"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
