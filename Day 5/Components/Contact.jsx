import { useState } from 'react';
import './Contact.css'; // Create a CSS file for styling

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log('Form submitted:', formData);
    // You can add your logic to send the form data to a server or perform any other actions
  };

  return (
    <div className='contact123'>
    <div className="container123">
      <div className="content123">
        <div className="left-side123">
          <div className="address123 details123">
            <i className="fas fa-map-marker-alt"></i>
            <div className="topic123">Address</div>
            <div className="text-one123">Surkhet, NP12</div>
            <div className="text-two123">Birendranagar 06</div>
          </div>
          <div className="phone details123">
            <i className="fas fa-phone-alt"></i>
            <div className="topic123">Phone</div>
            <div className="text-one123">+0098 9893 5647</div>
            <div className="text-two123">+0096 3434 5678</div>
          </div>
          <div className="email123 details123">
            <i className="fas fa-envelope"></i>
            <div className="topic123">Email</div>
            <div className="text-one123">codinglab@gmail.com</div>
            <div className="text-two123">info.codinglab@gmail.com</div>
          </div>
        </div>
        <div className="right-side123">
          <div className="topic-text123">Send us a message</div>
          <p>If you have any work for me or any types of queries related to my tutorial, you can send me a message from here. Its my pleasure to help you.</p>
          <form onSubmit={handleSubmit}>
            <div className="input-box123">
              <input type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} />
            </div>
            <div className="input-box123">
              <input type="text" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} />
            </div>
            <div className="input-box123 message-box123">
              <textarea name="message" placeholder="Enter your message" value={formData.message} onChange={handleChange}></textarea>
            </div>
            <div className="button123">
              <input type="submit" value="Send Now" />
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ContactUsForm;
