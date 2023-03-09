import { useState, useEffect, useRef } from "react"




function Bullet(
    {xPlayer, yPlayer, xMouse, yMouse
        // , handleBullet

}
)
{
    const bulletRef = useRef() 
const [bulletXPosition, setBulletXPosition] = useState(0)
const [bulletYPosition, setBulletYPosition] = useState(0)



useEffect(()=>{
    const xDif = xMouse - xPlayer; 
    const yDif = yMouse - yPlayer;
    if(bulletXPosition<50 && bulletXPosition>-50&& bulletYPosition<50 && bulletYPosition>-50)
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
    <div className={`bullet`}
    ref={bulletRef}
    style={{
        marginLeft: `${bulletXPosition}em`,
        marginTop: `${bulletYPosition}em`
    }}
    >
 {/* <h1>{`x: ${xMouse} y: ${yMouse}`}</h1>  */}
    </div>)
}

export default Bullet