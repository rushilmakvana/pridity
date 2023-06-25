import React from 'react'
import AuthForm from './AuthForm'
import "./css/login.css"
import Input from './Input'
import { useState } from 'react'

const Login = () => {
  const[signup , setSignup] = useState(false)
  const stateChange=()=>{
  setSignup(!signup);
  // console.log(signup)
  } 

  return (
    
  <div className='LoginMain'>
    <div className='login'>
      <div className='create'>

<lottie-player src="https://assets7.lottiefiles.com/private_files/lf30_5bwjk0.json"  background="transparent"  speed="1"  style={{width: '350px', height: '300px'}}  loop autoplay></lottie-player>
    {/* <lottie-player src="https://lottiefiles.com/24156-pride-rainbow"  background="transparent"  speed="1"  style={{width: '350px', height: '300px'}}  autoplay></lottie-player> */}
    <span onClick={stateChange}>{`${!signup ? 'create a new account' : 'sign in'}`}</span>
    </div>
    <div>
    <div className='form-title'>
            <span>{`${!signup ?'Sign in ' : 'sign up'}`}</span>
    </div>
     
       <AuthForm signup={signup}/>
       </div>
    </div>
  </div>   
  )
}




export default Login
