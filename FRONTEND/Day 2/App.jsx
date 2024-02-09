

import './App.css'
// import {BrowserRouter,Routes,Route} from "react-router-dom"
// import VideoEntrance from './Components/VideoEntrance'
//import Dashboard from './Components/Dashboard'
import Login from './Components/Login'
function App() {


  return (
    // <BrowserRouter>
    //   <div>
    //     <Routes>
    //     <Route path="/" element={<VideoEntrance/>}/>
    //     <Route path="/dashboard" element={<Dashboard/>}/>
    //     </Routes>
    //   </div>
    // </BrowserRouter>
    <div>
      {/* <Dashboard></Dashboard> */}
      <Login></Login>
    </div>
  )
}

export default App
