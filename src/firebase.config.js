import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDCq-VB0tMG8cztZQC44CjYdg-qLTrr_PU",
  authDomain: "online-grocery-store-a.firebaseapp.com",
  databaseURL: "https://online-grocery-store-a-default-rtdb.firebaseio.com",
  projectId: "online-grocery-store-a",
  storageBucket: "online-grocery-store-a.appspot.com",
  messagingSenderId: "571360087475",
  appId: "1:571360087475:web:2ec52c2a6d61e120b58fc6",
};

const app = getApps.Length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
