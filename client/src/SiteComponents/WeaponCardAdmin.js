import { useState } from "react"



function WeaponCardAdmin({weapon}){
    const [hidden, setHidden] = useState(false)

    function updateWeapon(e){
        e.preventDefault()
        const weaponUpdate = {
    
            name: e.target.name.value, 
            damage: e.target.damage.value,
            fire_rate: e.target.fire_rate.value,
            area_of_effect: e.target.area_of_effect.value,
            pierce: e.target.pierce.value,
            weapon_reload: e.target.reload.value,
            bullet_width: e.target.bullet_width.value,
            critical_rate: e.target.critical_rate.value,
            bullet_speed: e.target.bullet_speed.value,
            magazine: e.target.magazine.value,
            accuracy: e.target.accuracy.value
        }
    
        fetch(`/weapons/${weapon.id}`,{
            method:"PATCH",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify(weaponUpdate)
        })
    
    }


function hide(){
    setHidden(hidden => !hidden)
}
    function deleteWeapon(){
    fetch(`/weapons/${weapon.id}`, {method: "DELETE"})
    }
    return(
        <div className="card">
            <button onClick={deleteWeapon}>delete</button>

            <button onClick={hide} >edit form</button>

            <form className={hidden ? "hidden": "block"} onSubmit={updateWeapon}>
            <label>name</label>
<input type="text" id="name" placeholder="name" />
<br />
            <label>damage</label>
<input type="text" id="damage" placeholder="damage" />
<br />

            <label>fire_rate</label>
<input type="text" id="fire_rate" placeholder="fire_rate" />
<br />
            <label>area_of_effect</label>
<input type="text" id="area_of_effect" placeholder="area_of_effect" />
<br />
            <label>pierce</label>
<input type="text" id="pierce" placeholder="pierce" />
<br />
            <label>reload</label>
<input type="text" id="reload" placeholder="reload" />
<br />
            <label>bullet_width</label>
<input type="text" id="bullet_width" placeholder="bullet_width" />
<br />
            <label>critical_rate</label>
<input type="text" id="critical_rate" placeholder="critical_rate" />
<br />
            <label>bullet_speed</label>
<input type="text" id="bullet_speed" placeholder="bullet_speed" />
<br />
<label>magazine</label>
<input type='text' id="magazine" placeholder="magazine" />
<br />
<label>accuracy</label>
<input type='text' id="accuracy" placeholder="accuracy" />
<br />
<input type='submit' style={{cursor: "pointer"}}/>
<br />
                 </form>
            <p>name: {weapon.name}</p>
            <p>damage: {weapon.damage}</p>
            <p>fire rate: {weapon.fire_rate}</p>
            <p>area of effect: {weapon.area_of_effect} </p>
            <p>pierce: {weapon.pierce}</p>
            <p> reload: {weapon.weapon_reload}</p>
            <p>width: {weapon.bullet_width}</p>
            <p>critical_rate: {weapon.critical_rate}</p>
            <p>bullet_speed: {weapon.bullet_speed}</p>
            <p>magazine: {weapon.magazine}</p>
            
        </div>
    )
}
export default WeaponCardAdmin