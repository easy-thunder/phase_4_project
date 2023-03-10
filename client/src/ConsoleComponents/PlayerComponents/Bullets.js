import { useState, useEffect, useRef } from "react"




function Bullet(
    {xPlayer, yPlayer, xMouse, yMouse, zombx, zomby, shot, divisor
        // , handleBullet

}
)
{
    const bulletRef = useRef() 
const [bulletXPosition, setBulletXPosition] = useState(xPlayer)
const [bulletYPosition, setBulletYPosition] = useState(yPlayer)
const [bulletExist, setBulletExist] = useState(false)
// console.log(zombx)
// console.log(zombx)
console.log(divisor)

if(Math.random<divisor){
    setBulletExist(()=>true)
}



useEffect(()=>{
    const xDif = xMouse - xPlayer; 
    const yDif = yMouse - yPlayer;
    if(bulletXPosition<100 && bulletXPosition>-100&& bulletYPosition<100 && bulletYPosition>-100)
    {
        const interval = setInterval(
            function(){
                setBulletXPosition(()=>bulletXPosition+xDif/10)
                setBulletYPosition(()=>bulletYPosition+yDif/10)
            }, 10
        )
        return ()=>{clearInterval(interval)}
    }
    else{bulletRef.current.style.display = "none"}
},[bulletXPosition, bulletYPosition])

// if(!bulletExist){
//     // bulletRef.current.marginLeft = "100"
//     console.log(bulletRef.current)
// }

// else{bulletRef.current.style.display = "none"}



if(
    zombx > bulletXPosition-2 && zombx < bulletXPosition +2 && zomby > bulletYPosition-2 && zomby < bulletYPosition + 2
){shot("hit")}
// useEffect(()=>{

//     const yDif = yMouse - yPlayer ;
//     if(bulletYPosition<40 && bulletYPosition>-40){
//     const intervalY = setInterval(
//         function(){
//             // console.log(yMouse)
//             setBulletYPosition(()=>bulletYPosition+yDif/10)
//         }, 10
//         )

//         return ()=>{clearInterval(intervalY)}
//     }
//     else{bulletRef.current.style.display = "none"}
// },[bulletXPosition, bulletYPosition])
// useEffect(()=>{

//     const xDif = xMouse - xPlayer ;
//     if(bulletXPosition<40 && bulletXPosition>-40){
//     const intervalX = setInterval(
//         function(){
//             setBulletXPosition(()=>bulletXPosition+xDif/10)

//             // console.log(xMouse)
//             // console.log(xDif)

//         }, 10
//         )

//         return ()=>{clearInterval(intervalX)}
//     }
//     else{bulletRef.current.style.display = "none"}
// },[bulletXPosition, bulletYPosition])








    return(
        <>


    
        
    <div className={`bullet`}
    ref={bulletRef}
    style={{

        
        marginLeft: `${bulletXPosition}em`,
        marginTop: `${bulletYPosition}em`
    }}
    >
 {/* <h1>{`x: ${xMouse} y: ${yMouse}`}</h1>  */}
    </div>
    
       
    </>
    
    )
}

export default Bullet