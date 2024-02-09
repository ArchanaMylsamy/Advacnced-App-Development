
import './Trainers.css';
import { Link } from 'react-router-dom';
import tgbg from "../assets/illu.jpg";
import homeicon from '../assets/home.png'

function Trainers() {
  return (
    <div>
      <div style={{ backgroundImage: `url(${tgbg})` }} className="tgbg">
      <Link to="/dashboard"><img className="homeicontran" src={homeicon}></img></Link>
      <Link to="/tranform"><button className="button1345">Book Your Trainer</button></Link>
      </div>
      







     
    </div>
  );
}

export default Trainers;
