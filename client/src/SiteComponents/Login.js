// import image from "src/assets/bamfs_login_screen.png"
import SignUpForm from "./SignUp"
import SignInForm from "./SignIn"
import { useState } from "react";
// import { Route } from "react-router-dom";
// import Admin from "./Admin";

import Console from "../ConsoleComponents/Console";
function Login({onLogin}){
    
    const [showLogin, setShowLogin] = useState(true);




    return(
        
        <div>

            
            <h1>The BAMFS</h1>

    <img src="/bamfs_login_screen.png" alt="not working" />
      {showLogin ? (
        <>
          <SignInForm onLogin={onLogin} />
          <div />
          <p>
            Don't have an account? &nbsp;
            <button color="secondary" onClick={() => setShowLogin(false)}>
              Sign Up
            </button>
          </p>
        </>
      ) : (
        <>
          <SignUpForm onLogin={onLogin} />
          <div />
          <p>
            Already have an account? &nbsp;
            <button color="secondary" onClick={() => setShowLogin(true)}>
              Log In
            </button>
          </p>
        </>
      )}


        </div>
    )
}

export default Login