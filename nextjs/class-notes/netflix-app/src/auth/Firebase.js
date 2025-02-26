// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";



// //* https://firebase.google.com/docs/auth/web/start
// //* https://console.firebase.google.com/ => project settings
// //! firebase console settings bölümünden firebaseconfig ayarlarını al
// // TODO: Replace the following with your app's Firebase project configuration
// //!.env dosyası hazırladıktan sonra projeyi durdurup tekrar çalıştırmak lazım
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_apiKey,
//     authDomain: process.env.REACT_APP_authDomain,
//     projectId: process.env.REACT_APP_projectId,
//     storageBucket: process.env.REACT_APP_storageBucket,
//     messagingSenderId: process.env.REACT_APP_messagingSenderId,
//     appId: process.env.REACT_APP_appId,
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app)

// src/auth/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // getAuth doğru şekilde import edilmeli

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_apiKey,
    authDomain: process.env.NEXT_PUBLIC_authDomain,
    projectId: process.env.NEXT_PUBLIC_projectId,
    storageBucket: process.env.NEXT_PUBLIC_storageBucket,
    messagingSenderId: process.env.NEXT_PUBLIC_messagingSenderId,
    appId: process.env.NEXT_PUBLIC_appId,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // auth nesnesini export edin