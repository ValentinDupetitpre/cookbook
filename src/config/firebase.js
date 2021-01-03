import firebase from 'firebase/app'
import 'firebase/analytics'
import 'firebase/firestore'
import 'firebase/storage'
import 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGIa99X4OR2uOaBigSuiJ4oAmRITBeUGY",
  authDomain: "cookbook-9fadb.firebaseapp.com",
  projectId: "cookbook-9fadb",
  storageBucket: "cookbook-9fadb.appspot.com",
  messagingSenderId: "918002307390",
  appId: "1:918002307390:web:b792925de0e9d2931b1c6f",
  measurementId: "G-DQQ9TYXBZ8"
}

  // Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.analytics()
const storage = firebase.storage()
const auth = firebase.auth()

export {storage, auth, firebase as default}