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
        <div className="login-modal-overlay"> {/* Use a unique class name for overlay */}
          <div className="login-modal"> {/* Use a unique class name for modal */}
            <div className="modal-header">
              <h2 className="text-penn-blue text-xl font-bold">Login</h2>
              <FontAwesomeIcon
                icon={faTimes}
                className="cursor-pointer text-jet hover:text-gray"
                onClick={onClose}
              />
            </div>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username" className="block mb-2 text-sm">Username</label>
                <input type="text" id="username" name="username" className="border rounded px-4 py-2 mb-4" />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm">Password</label>
                <input type="password" id="password" name="password" className="border rounded px-4 py-2 mb-4" />
              </div>
              <div className="text-center">
                <button type="submit" className="bg-penn-blue text-anti-flash hover:bg-mustard hover:text-penn-blue font-montserrat px-3 py-2 rounded-md text-md font-semibold">Login</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginModal;
