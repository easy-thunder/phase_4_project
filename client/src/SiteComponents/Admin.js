import { useEffect, useState } from "react"
import WeaponCardAdmin from "./WeaponCardAdmin"

import CreateWeaponForm from "./CreateWeaponForm"




function Admin(){

    const [weapons, setWeapons]= useState([])
    

useEffect(()=>{
    fetch('/weapons')
    .then(r=>{
        if(r.ok){
            r.json().then(setWeapons)
        }
    })
},[])


    return (
        <div>
            <p>admin</p>
            <CreateWeaponForm />
            <h2>weapons</h2>
            {weapons.map(weapon=>
                <WeaponCardAdmin weapon={weapon} key={weapon.id}/>
            )}


            
        </div>
    )
}

export default Admin