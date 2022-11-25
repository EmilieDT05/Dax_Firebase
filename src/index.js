import { initializeApp } from 'firebase/app'
import { 
    getFirestore, collection, onSnapshot, getDocs,
    addDoc, doc, deleteDoc,
    query, where,
    updateDoc
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCYHTWNsp_MnRT6WWsUyBoM_uwSpvWklxg",
  authDomain: "emiliedax-6369b.firebaseapp.com",
  projectId: "emiliedax-6369b",
  storageBucket: "emiliedax-6369b.appspot.com",
  messagingSenderId: "9316654664",
  appId: "1:9316654664:web:6005a1bb6a18be180bc27d"
}


initializeApp(firebaseConfig)


const db = getFirestore()


const colRef = collection(db, 'user')
let localNumber = 0

onSnapshot(colRef, (snapshot) => {
        let user = []
        snapshot.docs.forEach((doc) => {
        user.push({ ...doc.data(), id: doc.id })
        })
        console.log(user)
        user.forEach((item)=>{
          if(item.number){
            localNumber = item.number
            number.innerHTML = localNumber
          }
        })
    })

// adding docs
const addUserForm = document.querySelector('.add')
const loginSite = document.querySelector('.login-site')
const tall = document.querySelector('.tall')
const number = document.querySelector('.number')
addUserForm.addEventListener('submit', (e) => {
  e.preventDefault()

  getDocs(colRef)
  .then((snapshot) => {
    let users = []
    snapshot.docs.forEach((doc) => {
      users.push({ ...doc.data(), id: doc.id })
      })
      users.forEach((item)=>{
        if(addUserForm.username.value == item.username && addUserForm.password.value == item.password){
          console.log(loginSite)
          loginSite.classList.add("d-none")
          tall.classList.remove("d-none")
      }
    })
  })
})


tall.addEventListener('click', (e) => {
const docRef = doc(db, 'user', 'MW0ulmEkC3V2yiKzy9GF')

  switch (e.target.classList[0]) {
    case "pluss":
      updateDoc(docRef, {
        number: localNumber +1
      })
      console.log("pluss")
      break;
      
    case "minus":
      updateDoc(docRef, {
        number: localNumber -1
      })
      console.log("minus");
      break
    default:
      break;
  }
})

