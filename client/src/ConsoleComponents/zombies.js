import { useState, useEffect, useRef } from "react"
import Bullet from "./PlayerComponents/Bullets"



function Zombie({damage, xPlayer, yPlayer, handleGameOver, testWeapon, firedBullets, xMouse, yMouse}){
    const [health, setHealth] = useState(6)
    const [zombx, setZombx] = useState(Math.random()*(50-0) + 0)
    const [zomby, setZomby] = useState(Math.random()*-(50-10)- 10)
    const [killed, setKilled] = useState(false)
    const [bullets, setBullets] = useState(0)
    const [firing, setFiring]= useState(false)


    // const bulletRef = useRef() 
    // const [bulletXPosition, setBulletXPosition] = useState(0)
    // const [bulletYPosition, setBulletYPosition] = useState(0)


// console.log(firedBullets)
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

    if(
        zombx > xPlayer-3 && zombx < xPlayer +1.5 && zomby > yPlayer-3 && zomby < yPlayer + 3

    ){
        handleGameOver("killed")
}
    // handleKeyDown(e)
useEffect(()=>{
    const intervalX = setInterval(
        function(){
            const xDif = zombx - xPlayer;
            if(xDif>0){setZombx(()=> zombx-.5)}
            if(xDif<0){setZombx(()=>zombx+.5)}
        }, 10000)
    if(killed){clearInterval(intervalX)}
    return ()=>{clearInterval(intervalX)}
},[zombx, zomby]);

useEffect(()=>{
    const intervalY = setInterval(
        function(){
            const yDif = zomby - yPlayer;
            if(yDif>0){
                setZomby(()=> zomby-.5)
            }
            if(yDif<0){
                setZomby(()=> zomby+.5)
            }


        }, 10000
    )
    // if(killed){()=>clearInterval(intervalY)}
    
    return ()=>{clearInterval(intervalY)}
}

,[zombx, zomby]);

for(let i=0; i < bullets; i++){

firedBullets.push(<Bullet 
    // handleBullet={handleBullet}
xPlayer={xPlayer}
yPlayer={yPlayer}
xMouse={xMouse}
yMouse={yMouse}
key={i}
/>)
}


// useEffect(()=>{
//     const xDif = xMouse - xPlayer; 
//     const yDif = yMouse - yPlayer;
//     if(bulletXPosition<50 && bulletXPosition>-50&& bulletYPosition<50 && bulletYPosition>-50)
//     {
//         const interval = setInterval(
//             function(){
//                 setBulletXPosition(()=>bulletXPosition+xDif/10)
//                 setBulletYPosition(()=>bulletYPosition+yDif/10)
//             }, 10
//         )
//         return ()=>{clearInterval(interval)}
//     }
//     else{bulletRef.current.style.display = "none"}
// },[bulletXPosition, bulletYPosition])


// function shot(e){

//     setHealth(health => health-damage)

//     if(health===5){
//         e.target.style.backgroundColor = "blue"
//     }
//     if(health===4){
//         e.target.style.backgroundColor = "green"
//     }
//     if(health===3){
//         e.target.style.backgroundColor = "yellow"
//     }
//     if(health===2){
//         e.target.style.backgroundColor = "orange"
//     }
//     if(health===1){
//         e.target.style.backgroundColor = "red"
//     }
//     if(health===0){
//         setKilled(killed => !killed)
//         setZombx(()=>100)
//         e.target.style.display = "none"
        
//     }
// }

return(
    <div>
    <div className="zombie" 
    // onClick={shot}
    onMouseDown={fire}
    onMouseUp={stopFire}
    style={{
        marginLeft: `${zombx}em`,
        marginTop: `${zomby}em`        
    }}
    >
    </div>

{firedBullets}
    {/* <div className={`bullet`}
    ref={bulletRef}
    style={{
        marginLeft: `${bulletXPosition}em`,
        marginTop: `${bulletYPosition}em`
    }}
    >
 {/* <h1>{`x: ${xMouse} y: ${yMouse}`}</h1>  */}
    {/* </div> */} 
    {/* } */}

    </div>

)


}


export default Zombie