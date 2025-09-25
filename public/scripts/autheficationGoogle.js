import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js";
import { GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js";
import { signInWithPopup } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBtTh_Gg4oDI0wLn232f4ftJsefhcAXsvw",
    authDomain: "coffee-e65d7.firebaseapp.com",
    projectId: "coffee-e65d7",
    storageBucket: "coffee-e65d7.firebasestorage.app",
    messagingSenderId: "230845827928",
    appId: "1:230845827928:web:c708d218488123adf8332d",
    measurementId: "G-10ZGEYF5XT",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
auth.languageCode = "en";
const provider = new GoogleAuthProvider();

const google = document.getElementById("google");
google.addEventListener("click", (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const user = result.user;

            console.log(user);

            const rating = {
                nickname: user.displayName,
                text: $("#text").val(),
                img: user.photoURL || "img/5856.jpg",
                stars: $(
                    "input[type='radio'][name='star-radio']:checked"
                ).val(),
            };
            console.log(rating);

            if (rating.nickname && rating.text && rating.img) {
                axios
                    .post("/customer", rating)
                    .then((response) => {
                        console.log(response.data);
                        alert("Дані надіслено");
                    })
                    .catch((error) => {
                        console.error("Сталася помилка:", error);
                    });
            } else {
                alert("Будь ласка, заповніть усі поля.");
            }
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            const email = error.customData.email;

            const credential = GoogleAuthProvider.credentialFromError(error);
        });
});
