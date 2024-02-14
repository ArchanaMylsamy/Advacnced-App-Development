import './Trainers.css';
import { Link } from 'react-router-dom';
import tgbg from "../assets/illu.jpg";
import homeicon from '../assets/home.png'
import { useState, useEffect } from 'react';
import axios from 'axios';

function Trainers() {
  const [servicesData, setServicesData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []); // Fetch data when the component mounts

  const fetchData = async () => {
    try {
      const token = localStorage.getItem('token');

      if (!token) {
        console.error('Token not found. Please log in again.');
        // Handle the absence of token, e.g., redirect to the login page
        return;
      }

      const response = await axios.get('http://localhost:8080/traineradd', {
        headers: {
          Authorization: `Bearer ${token}`,  // Corrected string interpolation
        },
      });

      console.log('Fetched data:', response.data);
      setServicesData(response.data);
      
      // Update the state with the fetched data
      // setServicesData(response.data);
    } catch (error) {
      console.error('Fetching data failed:', error);
      // Handle the error, e.g., show an error message
    }
  };

  return (
    <div>
    <div>
      <div style={{ backgroundImage: `url(${tgbg})` }} className="tgbg">
        <Link to="/dashboard"><img className="homeicontran" src={homeicon} alt="home icon" /></Link>

       
              <div className="views">
                <section id="view">
                  <center>
                    <h2 className='h2ad'>Available Trainers</h2>
                  </center>
                  <table className='admintable'>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Mobile</th>
                        <th>Specialist</th>
                      </tr>
                    </thead>
                    <tbody>
                      {servicesData.map((service, index) => (
                        <tr key={index}>
                          <td>{service.name}</td>
                          <td>{service.age}</td>
                          <td>{service.mobile}</td>
                          <td>{service.specialist}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </section>
      </div>
      <Link to="/tranform"><button className="button1345">Book Your Trainer</button></Link>
    </div>
            
        </div>
        </div>
  );
}

export default Trainers;
