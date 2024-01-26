
import './App.css'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Video from './Components/Video'
import Dashboard from './Components/Dashboard'
import Login from './Components/Login'
import SignUp from './Components/Signup';
import Schedule from './Components/Schedule'
function App() {

  return (
    
    <div>
      <Router>
      <Routes>
        <Route path="/" element={<Video/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/schedule" element={<Schedule/>}/>

       


      </Routes>
      </Router>

      
    </div>
  )
}

export default App
