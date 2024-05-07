import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Logo.png';
import LoginModal from '../components/LoginModal';

function Navbar() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const openLogin = () => {
    setIsLoginOpen(true);
  };

  const closeLogin = () => {
    setIsLoginOpen(false);
    // Reset form data
    setFormData({
      username: '',
      password: ''
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted with:", formData);
  };

  return (
    <nav className="bg-penn-blue shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img src={logo} alt="Your Logo" className="h-10 w-auto" />
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <Link to="/" className="text-anti-flash hover:bg-mustard hover:text-penn-blue font-montserrat px-3 py-2 rounded-md text-md font-semibold">Home</Link>
              <Link to="/faculty" className="text-anti-flash hover:bg-mustard hover:text-penn-blue font-montserrat px-3 py-2 rounded-md text-md font-semibold">Faculty</Link>
              <Link to="/courses" className="text-anti-flash hover:bg-mustard hover:text-penn-blue font-montserrat px-3 py-2 rounded-md text-md font-semibold">Courses</Link>
              <button onClick={openLogin} className="text-anti-flash hover:bg-mustard hover:text-penn-blue font-montserrat px-3 py-2 rounded-md text-md font-semibold">Log Out</button>
            </div>
          </div>
        </div>
      </div>
      <LoginModal isOpen={isLoginOpen} onClose={closeLogin} formData={formData} onChange={handleChange} onSubmit={handleSubmit} />
    </nav>
  );
}

export default Navbar;
