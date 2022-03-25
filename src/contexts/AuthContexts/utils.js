import { auth } from "../../services/firebase";
import { db } from "../../services/firebase";
import { ref, child, get, set } from 'firebase/database'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'

//FUNÇÕES AUTH
export async function authenticateUser(email, password) {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password)
    const name = await getUserName(user.uid)
    const data = {
      name,
      email,
      uid: user.uid,
      token: user.accessToken
    }
    return (data)
  } catch (err) {
    throw err.code
  }
}
export async function CreateUser(name, email, password) {
  try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password)
    set(ref(db, `users/${user.uid}`), {
      name,
      email,
      uid: user.uid
    })
    const data = {
      name,
      email,
      uid: user.uid,
      token: user.accessToken
    }
    return (data)
  } catch (err) {
    throw err.code
  }
}

//FUNÇÕES LOCAL STORAGE
export function getUserLocalStorage() {
  const json = localStorage.getItem('u')
  if (!json) {
    return null
  }
  const user = JSON.parse(json)
  return (user)
}
export function setUserLocalStorage(user) {
  localStorage.setItem('u', JSON.stringify(user))
}
export function deleteUserLocalStorage() {
  localStorage.removeItem('u')
}

//FUNÇÕES DABASE
const dbRef = ref(db)

export async function getUserName(uid) {
  const name = await get(child(dbRef, `users/${uid}/name`))
  return name.val()
}