// import { useState } from 'react';
// // import axios from 'axios'
// import adminaca from '../assets/olivefloral.png';
// import './Adminacademic.css';

// const Adminacademic = () => {
//   const [showForm, setShowForm] = useState(false);
//   const [academyData, setAcademyData] = useState({
//     id: '',
//     name: '',
//     place: '',
//   });
//   const [formType, setFormType] = useState('add');

//   const handleButtonClick = (type) => {
//     setShowForm(true);
//     setFormType(type);
//   };

//   const handleFormClose = () => {
//     setShowForm(false);
//     setAcademyData({
//       id: '',
//       name: '',
//       place: '',
//     });
//     setFormType('add');
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setAcademyData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleAcademyOperation = () => {
//     // Perform operations based on formType
//     if (formType === 'add') {
//       console.log('Adding Academy:', academyData);
//     } else if (formType === 'update') {
//       console.log('Updating Academy:', academyData);
//     } else if (formType === 'delete') {
//       console.log('Deleting Academy with ID:', academyData.id);
//     }

//     handleFormClose();
//   };

//   return (
//     <div>
//       <div style={{ backgroundImage: `url(${adminaca})` }} className="adminaca">
//         <h1 className="academic-heading">Academic Details</h1>
//         <button className="upad"onClick={() => handleButtonClick('add')}>Add</button>
//         <button className="upup" onClick={() => handleButtonClick('update')}>Update</button>
//         <button className="upde"onClick={() => handleButtonClick('delete')}>Delete</button>
//       </div>

//       {showForm && (
//         <div className="form-modal">
//           <form>
//             { (
//               <>
//                 <label>
//                   Academy ID:
//                   <input type="text" name="id" value={academyData.id} onChange={handleInputChange} />
//                 </label>
//                 <br />
//               </>
//             )}
//             {formType !== 'delete' && (
//               <>
//                 <label>
//                   Name:
//                   <input type="text" name="name" value={academyData.name} onChange={handleInputChange} />
//                 </label>
//                 <br />
//                 <label>
//                   Place:
//                   <input type="text" name="place" value={academyData.place} onChange={handleInputChange} />
//                 </label>
//                 <br />
//               </>
//             )}
//             <button className="formbu"type="button" onClick={handleAcademyOperation}>
//               {formType === 'add' ? 'Add' : formType === 'update' ? 'Update' : 'Delete'}
//             </button>
//             <button className="formbu"type="button" onClick={handleFormClose}>
//               Close
//             </button>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Adminacademic;

import { useState } from 'react';
import axios from 'axios'; // Import Axios
import adminaca from '../assets/olivefloral.png';
import './Adminacademic.css';

const Adminacademic = () => {
  const [showForm, setShowForm] = useState(false);
  const [academyData, setAcademyData] = useState({
    id: '',
    name: '',
    place: '',
  });
  const [formType, setFormType] = useState('add');

  const handleButtonClick = (type) => {
    setShowForm(true);
    setFormType(type);
  };

  const handleFormClose = () => {
    setShowForm(false);
    setAcademyData({
      id: '',
      name: '',
      place: '',
    });
    setFormType('add');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAcademyData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAcademyOperation = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('Token not found. Please log in again.');
        console.log('Token:', token); 
        // Handle the absence of token, e.g., redirect to login page
        return;
      }

      if (formType === 'add') {
        const response = await axios.post('http://localhost:8080/academy', academyData, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        console.log('Academy added:', response.data);
      } else if (formType === 'update') {
        const response = await axios.put(`http://localhost:8080/academy/${academyData.name}`, academyData, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        console.log('Academy updated:', response.data);
      } else if (formType === 'delete') {
        const response = await axios.delete(`http://localhost:8080/academy/${academyData.name}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        console.log('Academy deleted:', response.data);
      }

      handleFormClose();
    } catch (error) {
      console.error('Error:', error);
      // Handle the error, e.g., show an error message
    }
  };

  return (
    <div>
      <div style={{ backgroundImage: `url(${adminaca})` }} className="adminaca">
        <h1 className="academic-heading">Academic Details</h1>
        <button className="upad" onClick={() => handleButtonClick('add')}>Add</button>
        <button className="upup" onClick={() => handleButtonClick('update')}>Update</button>
        <button className="upde" onClick={() => handleButtonClick('delete')}>Delete</button>
      </div>

      {showForm && (
        <div className="form-modal">
          <form>
            <label>
              Academy ID:
              <input type="text" name="id" value={academyData.id} onChange={handleInputChange} />
            </label>
            <label>
                  Name:
                  <input type="text" name="name" value={academyData.name} onChange={handleInputChange} />
                </label>
            <br />
            {formType !== 'delete' && (
              <>
              
                <br />
                <label>
                  Place:
                  <input type="text" name="place" value={academyData.place} onChange={handleInputChange} />
                </label>
                <br />
              </>
            )}
            <button className="formbu" type="button" onClick={handleAcademyOperation}>
              {formType === 'add' ? 'Add' : formType === 'update' ? 'Update' : 'Delete'}
            </button>
            <button className="formbu" type="button" onClick={handleFormClose}>
              Close
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Adminacademic;
