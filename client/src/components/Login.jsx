import { Room,Cancel } from "@material-ui/icons"
import "./login.css"
import { useState,useRef } from 'react';
import axios from "axios";
export default function Login({setShowLogin,myStorage,setCurrentUser}) {

    const [success,setSuccess] = useState(false) ;
    const [error,setError]=useState(false) ;
    const nameRef=useRef() ;
    // const emailRef=useRef() ;
    const passwordRef= useRef() ;

    const handleSubmit = async(e)=>{
        e.preventDefault() ;

        const user = {
         username:nameRef.current.value ,
        //  email:emailRef.current.value,
         password:passwordRef.current.value ,
             
        } ;

        try{
               const res= await axios.post("/users/login",user) ;
               myStorage.setItem("user",res.data.username) ;
               setCurrentUser(res.data.username) ;
               setShowLogin(false) ;
                setError(false) ;
                setSuccess(true) ;

        }
        catch(error)
        {
            setError(true) ;
        }


    } ; 


    return (
        <div className="loginContainer">
            <div className="logol">
                <Room/>
                Travel Pin 
            </div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="username"  ref={nameRef}/>
                {/* <input type="email" placeholder="email"  ref={emailRef} /> */}
                <input type="password" placeholder="password"  ref={passwordRef}/>

                <button className="loginBtn">Login</button>
                 { success && (
                <span className="successl">You are logged in now!</span>
                 )}
                 {error && <span className="failurel">Something went wrong!</span> }
            </form>

            <Cancel className="loginCancel" onClick={()=>setShowLogin(false)}/>
            
        </div>
    )
}
