
import  { useState, useEffect } from 'react';
import axios from 'axios';
import clas from "../assets/bluefloral.jpg";
import './UserView.css'
function User() {
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

      const response = await axios.get('http://localhost:8080/user/get', {
        headers: {
          Authorization: `Bearer ${token}`,  // Corrected string interpolation
        },
      });

      console.log('Fetched data:', response.data);
      const modifiedData = response.data.slice(1);

      // Update the state with the modified data
      setServicesData(modifiedData);
      // Update the state with the fetched data
      // setServicesData(response.data);
    } catch (error) {
      console.error('Fetching data failed:', error);
      // Handle the error, e.g., show an error message
    }
  };

  return (
    <div>
      <div style={{ backgroundImage: `url(${clas})` }} className="clas">
        <div className='adminback'>
          <div className='viewback'>
            <div className="views">
              <section id="view">
                <center>
                  <h2 className='h2ad'>Registered Uers</h2>
                </center>
                <table className='admintable'>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                     
                    </tr>
                  </thead>
                  <tbody>
                    {servicesData.map((service, index) => (
                      <tr key={index}>
                        <td>{service.name}</td>
                        <td>{service.email}</td>
                       
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
}

export default User;
