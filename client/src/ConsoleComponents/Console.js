// bullet arcing master fighter's
import Grid from "./Grid"
import { useState, useEffect, useRef } from "react"
import Zombie from "./zombies";
import Bullet from "./PlayerComponents/Bullets";
import { matchPath } from "react-router-dom";


function Console({currentWeapon}){
    const myRef = useRef();
    const [xMouse, setXMouse] = useState()
    const [yMouse, setYMouse] = useState()
    const [xPlayer, setXPlayer] = useState(31)
    const [yPlayer, setYPlayer] = useState(0)
    const [bullets, setBullets] = useState(0)
    // const [bulletsX, setBulletsX] = useState([])
    // const [bulletsY, setBulletsY] = useState([])
    const [level, setLevel] = useState(1)
    const [firing, setFiring]= useState(false)
    // const firedBullets = []
    const zombies = []



        const testWeapon = {
            name: "pistol", 
            damage: 1,
            fire_rate: 1,
            area_of_effect: 1,
            pierce: 1,
            weapon_reload: 3,
            bullet_width: 1,
            critical_rate: 5,
            bullet_speed: 10,
            magazine: 7
        }


// function handleBullet(bulletXPosition, bulletYPosition){
    
// setBulletsX(()=>bulletXPosition)
// setBulletsY(()=>bulletYPosition)

// }
    useEffect(
        () => {
       function update (e){
            setXMouse(e.clientX/16)
            setYMouse(e.clientY/16-15)
        }
        document.addEventListener('mousemove', update)
        return () => {
            document.removeEventListener('mousemove', update)
        }
        },
        [setXMouse, setYMouse]
    )

    function handleKeyDown(e){
        if(e.key=== 'w'){
        
        setYPlayer(y=>y-.5)
      myRef.current.style.marginTop=`${yPlayer}em`
        }

        if(e.key=== 's'){
            
        setYPlayer(y=>y+.5)
      myRef.current.style.marginTop=`${yPlayer}em`
        }

        if(e.key==='a'){
            setXPlayer(x=>x-.5)
            myRef.current.style.marginLeft=`${xPlayer}em`
        }
        if(e.key==='d'){
            setXPlayer(x=>x+.5)
            myRef.current.style.marginLeft=`${xPlayer}em`
        }

        if(e.key==='q'){
            setXPlayer(x=>x-.5)
            setYPlayer(y=>y-.5)
            myRef.current.style.marginLeft=`${xPlayer}em`
            myRef.current.style.marginTop=`${yPlayer}em`
        }

        if(e.key==='e'){
            setXPlayer(x=>x+.5)
            setYPlayer(y=>y-.5)
            myRef.current.style.marginLeft=`${xPlayer}em`
            myRef.current.style.marginTop=`${yPlayer}em`
        }
        if(e.key==='z'){
            setXPlayer(x=>x-.5)
            setYPlayer(y=>y+.5)
            myRef.current.style.marginLeft=`${xPlayer}em`
            myRef.current.style.marginTop=`${yPlayer}em`
        }
        if(e.key==='c'){
            setXPlayer(x=>x+.5)
            setYPlayer(y=>y+.5)
            myRef.current.style.marginLeft=`${xPlayer}em`
            myRef.current.style.marginTop=`${yPlayer}em`
        }


      }

    function handleGameOver(key){
        if(key === "killed"){
            alert("gameOver")

        }
    }

    for(let i=1; i <= 2**level; i++){

        let divisor = 1/(2**level)
        zombies.push(
        <Zombie 
        key={i}
        number={i+1}
        damage={testWeapon.damage} 
        xPlayer={xPlayer}
        yPlayer={yPlayer}
        xMouse = {xMouse}
        yMouse = {yMouse}
        handleGameOver={handleGameOver}
        // firedBullets= {firedBullets}
        testWeapon={testWeapon}
        bullets={bullets}
        divisor={divisor}

        />
        
        )}
function shot(key){
    console.log("shot")
}





    const grids = []
for(let i=0; i <= 783; i++){
    grids.push(
    <Grid key={i}
    number={i+1}
    />
    
    )
}


function fire(){
    setFiring(()=>true)
}

function stopFire(){
    setFiring(()=>false)
}


useEffect(()=>{
    if(firing){
            const shootingInterval = 
            setInterval(
                function(){
                    setBullets(bullets => bullets+=1)

                        
                }, 1000*testWeapon.fire_rate
                )
                if(!firing){return()=>clearInterval(shootingInterval)}
                return()=>clearInterval(shootingInterval)
        }
      },[firing])

    








function startGame(){
    setLevel(()=>level+1)
    console.log(level)
}

    return(
        <div className="console" tabIndex={0} 
        onKeyDown={handleKeyDown}
        onMouseDown={fire}
        onMouseUp={stopFire}
        
> 
{/* {xMouse ? <h1>{`x: ${xMouse} y: ${yMouse}`}</h1> : null} */}
<button className="start" onClick={startGame}>nextLevel{level}</button>
        {grids}


{zombies}

<div className="player" 
 ref={myRef}
  >

{/* {firedBullets}  */}
 </div>


</div>

    )
}


export default Console


