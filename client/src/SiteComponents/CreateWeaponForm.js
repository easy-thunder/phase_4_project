


function CreateWeaponForm(){
function createWeapon(e){
    e.preventDefault()
    const weapon = {

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

    fetch('/weapons',{
        method:"POST",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify(weapon)
    })

}

    return(
        <div>
            <h2>create new Weapon</h2>

            <form onSubmit={createWeapon}>
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
<input type='submit' />
<br />
            </form>
        </div>
    )
}


export default CreateWeaponForm