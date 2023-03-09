// "proxy": "http://127.0.0.1:3000",
import { useState, useEffect } from 'react'
import './App.css'
import './index.css'
import Login from './SiteComponents/Login'
import { Switch, Route} from "react-router-dom"
import Admin from './SiteComponents/Admin'

import Home from './SiteComponents/Home'
// import SignIn from './SiteComponents/SignIn'
import Profile from './SiteComponents/Profile'
import WeaponStore from './SiteComponents/WeaponStore'



import Console from './ConsoleComponents/Console'




function App() {

  const [currentWeapon, setCurrentWeapon] = useState({})


  const [user, setUser]= useState(null)
  // const [weapons, setWeapons]= useState([])

  useEffect(() => {
    // auto-login
    
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />



  function checkUser(){
    console.log(user)
  }

  

  // function handleUser(user){
  //   setUser(user)
  // }





  return (
    <div className="App"  >







<button onClick={checkUser}>check user</button>


        
        <Home user = {user} />
        <Switch>
        


        <Route exact path = {`/profile/${user.username}`}>
        <Profile user={user} setCurrentWeapon={setCurrentWeapon} />
        </Route>
        
        {/* <p>hasodifjh</p> */}
        {/* <p>why no show</p> */}
        <Route exact path = {`/console/${user.username}`}>
      <Console user={user} currentWeapon={currentWeapon}/>
        </Route>

        <Route exact path = "/lajsdlkfjasodjfpkaspdlfkjaposjfalskdpfoja" >
          <Admin />
        </Route>

        <Route exact path = {`/weaponStore/${user.username}`}>

            <WeaponStore user={user}/>
        </Route>
        </Switch>

      {/* {weapons.map(weapon=><p>{weapon.damage}</p>)} */}

    </div>
  )
}

export default App
