
import './App.css'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Video from './Components/Video'
import Dashboard from './Components/Dashboard'
import Login from './Components/Login'
import SignUp from './Components/Signup';
import Schedule from './Components/Schedule';
import Academics from './Components/Academics';
import UserAdminPanel from './Components/UserAdminPanel'
import Classes from './Components/Classes'
import EnrollForm from './Components/EnrollForm'
import Trainer from './Components/Trainers'
import TrainerForm from './Components/TrainerForm'
import EnrollStatus from './Components/EnrollStatus'
import AdminLogin from './Components/Adminlogin'
import Admindashboard from './Components/Admindashboard'
import UserView from './Components/UserView'
import Adminacademic from './Components/Adminacademic'
import Admintrainer from './Components/Admintrainer'
import Viewenroll from './Components/Viewenroll'
import Scheduleget from './Components/Scheduleget'
import Contact from './Components/Contact'


function App() {

  return (
    
    <div>
       <Router>
      <Routes>
        <Route path="/" element={<Video/>}/>
        <Route path="/useradminpanel" element={<UserAdminPanel/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/schedule" element={<Schedule/>}/>
        <Route path="/academics" element={<Academics/>}/>
        <Route path="/classes" element={<Classes/>}/>
        <Route path="/enroll" element={<EnrollForm/>}/>
        <Route path="/tran" element={<Trainer/>}/>
        <Route path="/tranform" element={<TrainerForm/>}/>
        <Route path="/enrollstatus" element={<EnrollStatus/>}/>
        <Route path="/adminlogin" element={<AdminLogin/>}/>
        <Route path="/admindashboard" element={<Admindashboard/>}/>
        <Route path="/userview" element={<UserView/>}/>
        <Route path="/adminacademic" element={<Adminacademic/>}/>
        <Route path="/admintrainer" element={<Admintrainer/>}/>
        <Route path="/viewenroll" element={<Viewenroll/>}/>
        <Route path="/scheduleget" element={<Scheduleget/>}/>
        <Route path="/contact" element={<Contact/>}/>







       


      </Routes>
      </Router> 
      
      
    </div>
  )
}

export default App
