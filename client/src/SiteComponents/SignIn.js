
import { useState, useEffect, useRef } from "react"


function SignInForm({onLogin}){

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [errors, setErrors] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } 
      // else {
      //   r.json().then((err) => setErrors(err.errors));
      // }
    });
  }



    return (
      <form onSubmit={handleSubmit}>

          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            autoComplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
    
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
  

        <input type='submit' style={{"cursor":"pointer"}}/>
  

          {/* {errors.map((err) => (
            <ul key={err}>{err}</ul>
          ))} */}
  
      </form>
    );
  }
  
  



export default SignInForm