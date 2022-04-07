// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, get } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "react-storefront-360a4.firebaseapp.com",
  databaseURL:
    "https://react-storefront-360a4-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-storefront-360a4",
  storageBucket: "react-storefront-360a4.appspot.com",
  messagingSenderId: "1057642846923",
  appId: "1:1057642846923:web:c85c52c3f62d46d293994e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export function writeProductData(id, product) {
  set(ref(database, `products/${id}`), product);
}

export function readProductData(id) {
  const productRef = ref(database, `products/${id - 1}`);
  get(productRef)
    .then((snapshot) => {
      const data = snapshot.exists() ? snapshot.val() : "No data available";
      console.log(data);
    })
    .catch((error) => console.error(error));
}
