// LoginModal.jsx

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const LoginModal = ({ isOpen, onClose }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
  };

  return (
    <>
      {isOpen && (
        <div className="login-modal-overlay">
          <div className="login-modal">
            <div className="modal-header pl-6 pr-6">
              <h2 className="text-penn-blue text-2xl font-bold">Login</h2>
              <FontAwesomeIcon
                icon={faTimes}
                className="cursor-pointer text-jet hover:text-gray"
                onClick={onClose}
              />
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center px-6 py-8">
              <div className="mb-4 w-full">
                <label htmlFor="username" className="block mb-2 text-sm font-montserrat">Username</label>
                <input type="text" id="username" name="username" className="border rounded w-full px-4 py-2" />
              </div>
              <div className="mb-4 w-full">
                <label htmlFor="password" className="block mb-2 text-sm font-montserrat">Password</label>
                <input type="password" id="password" name="password" className="border rounded w-full px-4 py-2" />
              </div>
              <div className="w-full flex justify-center">
                <button type="submit" className="bg-penn-blue text-anti-flash hover:bg-mustard hover:text-penn-blue font-montserrat px-6 py-2 rounded-md text-md font-semibold">Login</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginModal;
