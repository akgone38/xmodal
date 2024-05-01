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
      alert('Invalid phone number. Please enter a 10-digit phone number.');
    } else if (new Date(dob) > new Date()) {
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
  };
  

  const handleCloseModal = (e) => {
    if (e.target.className === 'modal' || e.target.className === 'overlay') {
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
            <h2>Fill Details:</h2>
            <h3>Username</h3>
            <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <h3>Email Address</h3>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <h3>Phone Number</h3>
            <input type="text" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
            <h3>Date of Birth</h3>
            <input type="date" id="dob" value={dob} onChange={(e) => setDob(e.target.value)} />
            <button className="submit-button" onClick={handleSubmit}>Submit</button>
            <button onClick={() => setIsOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
