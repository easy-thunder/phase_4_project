
import { useEffect, useState } from "react"

import WeaponCardProfile from "./WeaponCardProfile"


function Profile({user, setCurrentWeapon}){
const [weapons, setWeapons] = useState([])

useEffect(()=>{
    fetch(`/user_weapons/${user.id}`).then(r=>{
        if(r.ok){r.json().then(setWeapons)}
    })
    
},[])
    return(
    <div>
        
        <h3>{user.email}</h3>
        <h3>{user.username}</h3>
        {weapons.map(weapon => <WeaponCardProfile setCurrentWeapon ={setCurrentWeapon} weapon={weapon} key={weapon.index} />
        )}

    </div>)
}

export default Profile