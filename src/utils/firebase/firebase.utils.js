import { initializeApp } from 'firebase/app';
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDpXEUdy4MfM-oYNMgZma5DIU-qLzfOz3s",
    authDomain: "ecom-clothing-a0e30.firebaseapp.com",
    projectId: "ecom-clothing-a0e30",
    storageBucket: "ecom-clothing-a0e30.appspot.com",
    messagingSenderId: "66853630321",
    appId: "1:66853630321:web:ad5f64c8153112f4ff06d0"
};
  
  // Initialize Firebase
const app = initializeApp(firebaseConfig); 

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef)

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot)

    if(!userSnapshot.exists()) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }
}

