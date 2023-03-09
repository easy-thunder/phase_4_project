import { useEffect, useState } from "react"
import WeaponCard from "./WeaponCard"



function WeaponStore({user}){
    

const [weapons, setWeapons] = useState([])

useEffect(()=>{
    fetch('/weapons')
    .then(r=>{
        if(r.ok){r.json().then(weapons =>setWeapons(weapons))}
    })
},[])

    return(
        <div>
        {weapons.map(weapon => <WeaponCard user={user} weapon={weapon} key={weapon.id} />)}
        </div>
    )
}

export default WeaponStore