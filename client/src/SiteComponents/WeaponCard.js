


function WeaponCard({weapon, user}){

function addWeapon(){
    const userWeapon = {
        weapon_id: weapon.id,
        user_id: user.id
    }
    fetch(`/user_weapons`,{
        method: "POST",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify(userWeapon)
    })
}


    return(
        <div className="card">
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
            <button onClick={addWeapon}>purchase</button>
        </div>
    )
}

export default WeaponCard