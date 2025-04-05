
    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyDR_vXAjqgS_a3JygcLTeIPleWgxoTtPl8",
      authDomain: "mobile-world-5dff6.firebaseapp.com",
      projectId: "mobile-world-5dff6",
      storageBucket: "mobile-world-5dff6.firebasestorage.app",
      messagingSenderId: "490497695258",
      appId: "1:490497695258:web:aa62c5dfd7d1ba3ec5bba3",
      measurementId: "G-Z4N0Q7QRYK"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

    if(app){
        console.log("firebase intit done");
    }
    else{
        console.log("firebase intit eror");
    }
 