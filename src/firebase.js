import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCY7SLPTfC349LyuCx_2S-htdjI93OV_Mw",
    authDomain: "robinhood-nick.firebaseapp.com",
    projectId: "robinhood-nick",
    storageBucket: "robinhood-nick.appspot.com",
    messagingSenderId: "844917595750",
    appId: "1:844917595750:web:92a968ec2360b31b3ad7a7",
    measurementId: "G-3BDYG8D9QM"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };