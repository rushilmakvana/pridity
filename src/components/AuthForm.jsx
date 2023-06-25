import React, { Fragment , useState } from 'react'
import Button from './Button'
import Input from './Input'
// import  {createUserWithEmailAndPassword, getAuth} from 'firebase/auth'
// import { auth } from '../firebase'
// import user from '../model/user.jsx'
// import { collection, addDoc } from "firebase/firestore"; 
// import { db } from '../firebase'

const AuthForm = ({signup }) => {
  const [firstName , setFirstName]=useState();
  const [lastName ,setLastName]=useState();
  const [email,setEmail]=useState();
  const[password,setPassword]=useState();
    
  // const auth =getAuth();
//   const register= async()=>{ 
//     console.log('hello')
//     console.log(auth)
//     console.log(email)
//     console.log(password)
//     try {

//     createUserWithEmailAndPassword(auth,email,password).then(async(data)=>{
//         const userData = new user(firstName,lastName,email,data.user.accessToken)
//         await addDoc(collection(db,"user"),{...userData})

//         console.log(userData)
//         console.log(data.user)
//         console.log(data.user.accessToken          )
//       })
//     } catch (error) {
//       console.log(error)
//     }
   
    
//     console.log(user)
//   }
//   const login=async()=>{ }
  return (
    <div className='form'>
        {signup && <> 
        <Input  icon="fa-solid fa-user" type="text" placeholder="first name "
        onChange={(e)=>{
          setFirstName(e.target.value)
        }}/>
      <Input icon="fa-solid fa-user" type="text" placeholder="last name "
      onChange={(e)=>{
        setLastName(e.target.value)
      }}/>
      </>}
      <Input icon ="fa-solid fa-envelope" type="email" placeholder="enter email"
      onChange={(e)=>{
        setEmail(e.target.value)
      }}/>
      <Input icon="fa-solid fa-lock" type="password" placeholder="enter password"
      onChange={(e)=>{
        setPassword(e.target.value)
      }}/>
      <Button value={`${!signup ? 'Log in' : 'Sign up'}` }  />
    </div>
  )
}

export default AuthForm
