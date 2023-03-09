import { NavLink } from "react-router-dom"
import SignOut from "./SignOut"


function Header({user, setUser}){
    return(<div>
<NavLink to={`/profile/${user.username}`} exact >
<button className={`miniGlow bg-teal-200 text-stone-900`} >profile</button>
</NavLink>

<NavLink to={`/console/${user.username}`} exact >
    <button>PlayGame</button>
</NavLink>
<NavLink to={`/weaponStore/${user.username}`}>
    <button>Store</button>
</NavLink>

<SignOut setUser={setUser} user={user} />


    </div>)
}


export default Header
