
import './TrainerForm.css'
import homeicon from '../assets/home.png'
import { Link } from 'react-router-dom'
import formbg from '../assets/bluefloral.jpg'
const ApplyTrain = () => {
  const handleenrolltran=()=>{
      alert("You have booked your trainer!!!");
  };
  const goals = ["Flexibility", "Strength", "Mindfulness", "Balance", "Stress Relief"];
  return (
    <div  style={{backgroundImage:`url(${formbg})`}} className='apply2617'>
          <Link to="/dashboard"><img className="homeiconfor" src={homeicon}></img></Link>
         <section className="container2617">
      <header className='hede7'>Book Your Personal Trainer</header>
      <form action="#" className="form2617">
        <div className="input-box2617">
          <label>Name</label>
          <input type="text" placeholder="Enter full name" required />
        </div>

        <div className="input-box2617">
          <label>Email</label>
          <input type="text" placeholder="Enter email address" required />
        </div>

       
          <div className="input-box2617">
            <label>Mobile Number</label>
            <input type="number" placeholder="Enter phone number" required />
          </div>    
        
        <div className="input-box2617">
          <label>Trainer Name</label>
          <input type="text" placeholder="Enter Trainer Name" required />
        </div>
        <div className="input-box2617">
          <label>Your goal</label>
          <select className='select-box7'required>
            <option value="" disabled selected>Select your goal</option>
            {goals.map((goal, index) => (
              <option key={index} value={goal}>{goal}</option>
            ))}
          </select>
        </div>
   
        <br></br>
        <button onClick={handleenrolltran}className='buttonenroll7'>Enroll</button>
      </form>
    </section>
    </div>
  )
}

export default ApplyTrain