import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyD-Qd1P8JHnEmVTK9WGFB2emCsPWtzkrU0",
  authDomain: "rick-and-morty-f677a.firebaseapp.com",
  databaseURL: "https://rick-and-morty-f677a.firebaseio.com",
  projectId: "rick-and-morty-f677a",
  storageBucket: "rick-and-morty-f677a.appspot.com",
  messagingSenderId: "616561385583",
  appId: "1:616561385583:web:e2158fb8d09113cb172d9a",
  measurementId: "G-R8BGP5GX4J"
};
//Initialize Firebase
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore().collection('favs')

export function getFavs(uid) {
    return db.doc(uid).get()
        .then(snap => {
            return snap.data().array
        })
}

export function updateDB(array, uid) {
    return db.doc(uid).set({ array })
}

export function signOutGoogle() {
    firebase.auth().signOut()
}

export function loginWithGoogle() {
    let provider = new firebase.auth.GoogleAuthProvider()
    return firebase.auth().signInWithPopup(provider)
        .then(snap => snap.user)
}