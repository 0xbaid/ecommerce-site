import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyAgT8-3XpKzjphgS5tlDLZc2EB6Y_xR56g",
    authDomain: "crwn-db-87bd5.firebaseapp.com",
    databaseURL: "https://crwn-db-87bd5.firebaseio.com",
    projectId: "crwn-db-87bd5",
    storageBucket: "crwn-db-87bd5.appspot.com",
    messagingSenderId: "485379168649",
    appId: "1:485379168649:web:815f280098e8001ecf2958",
    measurementId: "G-0KE8QFXNPN"
  };

export const createUserProfileDocument = async (userAuth, additionalData ) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();
    try {
        await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
        })
    }
    catch (error) {
        console.log('error creating user', error.message)
    }
    }
    return userRef;
}

firebase.initializeApp(config); 

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters(
    {
        prompt: 'select_account'
    }
);

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;