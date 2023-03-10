import { useState, useEffect, useRef } from "react"
import Bullet from "./PlayerComponents/Bullets"



function Zombie({damage, xPlayer, yPlayer, handleGameOver, testWeapon, xMouse, yMouse, bullets, divisor}){
    const [health, setHealth] = useState(6)
    const [zombx, setZombx] = useState(Math.random()*(50-0) + 0)
    const [zomby, setZomby] = useState(Math.random()*-(50-10)- 10)
    const [killed, setKilled] = useState(false)
    const [fireBullet, setFireBullet] = useState(0)
    const firedBullets = []


    console.log(divisor)
    // const [bullets, setBullets] = useState(0)
    // const [firing, setFiring]= useState(false)



// if(bullets%2===1){
//     setFireBullet(fireBullet => !fireBullet)
// }

const zombRef = useRef()
    // const bulletRef = useRef() 
    // const [bulletXPosition, setBulletXPosition] = useState(0)
    // const [bulletYPosition, setBulletYPosition] = useState(0)


// console.log(firedBullets)
// useEffect(()=>{
//     if(firing){
//             const shootingInterval = 
//             setInterval(
//                 function(){
//                     setBullets(bullets => bullets+=1)

                        
//                 }, 1000*testWeapon.fire_rate
//                 )
//                 if(!firing){return()=>clearInterval(shootingInterval)}
//                 return()=>clearInterval(shootingInterval)
//         }
//       },[firing])

// function fire(){
//     setFiring(()=>true)
// }

// function stopFire(){
//     setFiring(()=>false)
// }
for(let i=0; i < bullets/divisor; i++){

    (firedBullets).push(<Bullet 
        // handleBullet={handleBullet}
    xPlayer={xPlayer}
    yPlayer={yPlayer}
    xMouse={xMouse}
    yMouse={yMouse}
    zombx={zombx}
    zomby={zomby}
    key={i}
    shot={shot}
    />)
}

// useEffect(()=>{
//     if(firing){
//             const shootingInterval = 
//             setInterval(
//                 function(){
//                     setBullets(bullets => bullets+=1)

                        
//                 }, 1000*testWeapon.fire_rate
//                 )
//                 if(!firing){return()=>clearInterval(shootingInterval)}
//                 return()=>clearInterval(shootingInterval)
//         }
//       },[firing])

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
function shot(key){
    if(key==="hit")
    {console.log("hit")}
        // setHealth(health => health-damage)
    
        // if(health===5){
        //     e.target.style.backgroundColor = "blue"
        // }
        // if(health===4){
        //     e.target.style.backgroundColor = "green"
        // }
        // if(health===3){
        //     e.target.style.backgroundColor = "yellow"
        // }
        // if(health===2){
        //     e.target.style.backgroundColor = "orange"
        // }
        // if(health===1){
        //     e.target.style.backgroundColor = "red"
        // }
        // if(health===0){
        //     setKilled(killed => !killed)
        //     setZombx(()=>100)
        //     e.target.style.display = "none"
        // }
    }

// for(let i=0; i < bullets; i++){

// firedBullets.push(<Bullet 
//     // handleBullet={handleBullet}
// xPlayer={xPlayer}
// yPlayer={yPlayer}
// xMouse={xMouse}
// yMouse={yMouse}
// zombX={zombx}
// zomby={zomby}
// shot={shot}
// key={i}
// />)
// }


return(
    <div>
    <div className="zombie" 
    // onClick={shot}
    ref={zombRef}
    // onMouseDown={fire}
    // onMouseUp={stopFire}
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