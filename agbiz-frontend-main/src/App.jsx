import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Development from './Components/Development'
import Automation from './Components/Automation'
import Marketing from './Components/Marketing'
import Booking from './Components/Booking'
import Login from './Components/Login/Login'
import Registration from './Components/Registration/Registration'

function App() {
    return (
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path='/website' element={<Development/>}/>
       <Route path='/crm' element={<Automation/>}/>
       <Route path='/booking' element={<Booking/>}/>
       <Route path='/marketing' element={<Marketing/>}/>
       <Route path="registration_user" element={<Registration></Registration>}/>
       <Route path="login_user" element={<Login></Login>}/>
      </Routes>
  )
}

export default App;
