import React, { Fragment, useState } from "react";
import Button from "./Button";
import Input from "./Input";
import { useNavigate } from "react-router-dom";
// import  {createUserWithEmailAndPassword, getAuth} from 'firebase/auth'
// import { auth } from '../firebase'
// import user from '../model/user.jsx'
// import { collection, addDoc } from "firebase/firestore";
// import { db } from '../firebase'

const AuthForm = ({ signup }) => {
  // const [firstName, setFirstName] = useState();
  // const [lastName, setLastName] = useState();
  // const [email, setEmail] = useState();
  // const [password, setPassword] = useState();
  const [username, setusername] = useState();
  const [mobile, setmobile] = useState();
  const [otp, setotp] = useState();
  const [isOtp, setisOtp] = useState(false);

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
  const navigate = useNavigate();
  if (isOtp) {
    return (
      <>
        <Input
          icon="fa-solid fa-envelope"
          type="text"
          placeholder="enter OTP"
          onChange={(e) => {
            setotp(e.target.value);
          }}
        />
        <Button
          value="verify OTP"
          onClick={async () => {
            console.log("called verify", otp, "dfkjhkdjf ", mobile);

            var res = await fetch(
              "https://kevalprideserver.vinit07.repl.co/auth/otp/verify",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  "Access-Control-Allow-Origin": "*",
                },
                body: JSON.stringify({
                  mobileNumber: mobile,
                  otp: otp,
                }),
              }
            );
            var data = await res.json();
            console.log("data = ", data);
            localStorage.setItem("token", data.data.token);
            navigate("/home");
            // console.log("called");
          }}
        />
      </>
    );
  }
  return (
    <div className="form">
      {signup && (
        <>
          <Input
            icon="fa-solid fa-user"
            type="text"
            placeholder="Username"
            onChange={(e) => {
              setusername(e.target.value);
            }}
          />
          {/* <Input
            icon="fa-solid fa-user"
            type="text"
            placeholder="last name "
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          /> */}
        </>
      )}
      {/* <Input
        icon="fa-solid fa-lock"
        type="text"
        placeholder="enter username"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      /> */}
      <Input
        icon="fa-solid fa-envelope"
        type="text"
        placeholder="enter Mobile"
        onChange={(e) => {
          setmobile(e.target.value);
        }}
      />

      <Button
        value={`${!signup ? "Log in" : "Sign up"}`}
        onClick={async () => {
          console.log("called");
          var res = await fetch(
            "https://kevalprideserver.vinit07.repl.co/auth/register",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
              },
              body: JSON.stringify({
                mobileNumber: mobile,
                username: username,
                isRegister: true,
              }),
            }
          );
          var data = await res.json();
          setisOtp(true);
          console.log("data = ", data);
          // console.log("called");
        }}
      />
    </div>
  );
};

export default AuthForm;
