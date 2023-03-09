import { useState} from "react"
// import { useHistory } from "react-router-dom"

function SignUpForm({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [email, setEmail] = useState("")
    const [imageUrl, setImageUrl] = useState("");
    // const [errors, setErrors] = useState([]);
  
    function handleSubmit(e) {
      e.preventDefault();
      // setErrors([]);
      if (passwordConfirmation=== password){
      fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
          email
        }),
      }).then((r) => {
        if (r.ok) {
          r.json().then((user) => onLogin(user));
        } else {
          // r.json().then((err) => setErrors(err.errors));
        }
      })}
      else{alert("passwords don't match")}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />

           <label htmlFor="email">email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="current-email"
          />
        
    <br/>
          <label htmlFor="password">Password Confirmation</label>
          <input
            type="password"
            id="password_confirmation"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            autoComplete="current-password"
          />
          <input type="submit" style={{"cursor":"pointer"}} />
        
    
          {/* {errors.map((err) => (
            <Error key={err}>{err}</Error>
          ))} */}
        
      </form>
    );
  }
  
  export default SignUpForm;