


function WeaponCardProfile({weapon, setCurrentWeapon, user}){

    function addWeapon(){
        setCurrentWeapon(weapon)
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
                <button onClick={addWeapon}>make main weapon</button>
            </div>
        )
    }
    
    export default WeaponCardProfile