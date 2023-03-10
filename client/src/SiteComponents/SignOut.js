import { useHistory } from "react-router-dom";



function SignOut({ setUser, user}){
  const history = useHistory()

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(()=>null);
        history.push('/')

      }
      else{ console.log("didn't work") }
    });
  }

    return(<button onClick={handleLogoutClick}>
        SignOut
 
    </button>)
}
export default SignOut 