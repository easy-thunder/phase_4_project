
// import Console from "../ConsoleComponents/Console"
// import Profile from "./Profile"
// import { Switch, Route} from "react-router-dom"
import Header from "./Header"
// import WeaponStore from "./WeaponStore"
import { useState } from "react"


function Home({user, setUser}){
    const [currentWeapon, setCurrentWeapon] = useState({})

    function checkWeapon(){
        console.log(currentWeapon)
    }

    return(<div>
      <button onClick={checkWeapon}>check weapon</button>

        <Header user={user} setUser={setUser}/>




    </div>)
}


export default Home