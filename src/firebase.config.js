// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyCbjI3g7a1EafkQO4O0aBgy8ENFCcXNZnQ',
	authDomain: 'ramalaso-house-marketplace-app.firebaseapp.com',
	projectId: 'ramalaso-house-marketplace-app',
	storageBucket: 'ramalaso-house-marketplace-app.appspot.com',
	messagingSenderId: '460122350384',
	appId: '1:460122350384:web:0d0f49f8f6d852aeae9ef5',
	measurementId: 'G-XSSGXT6ZNL',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
