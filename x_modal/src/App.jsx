import React, { useState } from 'react';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');

  const handleSubmit = () => {
    if (!username || !email || !phone || !dob) {
      alert('Please fill in all fields.');
    } else if (!email.includes('@')) {
      alert('Invalid email. Please check your email address.');
    } else if (!/^\d{10}$/.test(phone)) {
      alert('Invalid phone number. Please enter a valid phone number.');
    } else {
      const dobDate = new Date(dob);
      const currentDate = new Date();
      if (dobDate >= currentDate) {
        alert('Invalid date of birth. Date of birth cannot be in the future.');
      } else {
        // Submit form logic
        alert('Form submitted successfully!');
        setUsername('');
        setEmail('');
        setPhone('');
        setDob('');
        setIsOpen(false); // Close the modal
      }
    }
  };  

  const handleCloseModal = (e) => {
    if (!e.target.closest('.modal-content')) {
      setIsOpen(false);
    }
  };
  
  
  return (
    <div className='frontpage'>
      <h1>User Details Modal</h1>
      <button onClick={() => setIsOpen(true)}>Open Form</button>
      {isOpen && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal">
            <form onSubmit={handleSubmit}>
              <div className="modal-content">
                <h2>Fill Details:</h2>
                <div className="form-input">
                  <label htmlFor="username">Username</label>
                  <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="form-input">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-input">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="text" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div className="form-input">
                  <label htmlFor="dob">Date of Birth</label>
                  <input type="date" id="dob" value={dob} onChange={(e) => setDob(e.target.value)} />
                </div>
                <button type="submit" className="submit-button">Submit</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;