import { useState ,useEffect} from 'react';
import axios from 'axios';
import adminaca from '../assets/schbg1.png';
import './Viewenroll.css';

const AdminTrainer = () => {
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

      const response = await axios.get('http://localhost:8080/trainer', {
        headers: {
          Authorization: `Bearer ${token}`,  // Corrected string interpolation
        },
      });

    
      setServicesData(response.data);
      // Update the state with the modified data
      
      // Update the state with the fetched data
      // setServicesData(response.data);
    } catch (error) {
      console.error('Fetching data failed:', error);
      // Handle the error, e.g., show an error message
    }
  };

  return (
      <div>
      <div style={{ backgroundImage: `url(${adminaca})` }} className="viewaca">
      <div className='adminback'>
          <div className='viewback1234'>
            <div className="views">
              <section id="view">
                <center>
                  <h2 className='h2ad'>Bookings</h2>
                </center>
                <table className='admintable1234'>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Mobile</th>
                      <th>Trainer</th>
                     <th>Goal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {servicesData.map((service, index) => (
                      <tr key={index}>
                        <td>{service.name}</td>
                        <td>{service.email}</td>
                        <td>{service.mobile}</td>
                        <td>{service.trainer}</td>
                        <td>{service.goal}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminTrainer;
