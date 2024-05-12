import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faTimes } from '@fortawesome/free-solid-svg-icons';

const RatingModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    teachingProficiency: '',
    teaching: '',
    attendance: '',
    additionalComments: ''
  });

  const handleChange = (event, metric) => {
    const { value } = event.target;
    setFormData({
      ...formData,
      [metric]: metric === 'additionalComments' ? value : parseInt(value)
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted with:', formData);
    onClose(); // Close the modal after form submission
  };

  const renderStars = (metric) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <label key={i} className="mr-2 cursor-pointer">
          <input
            type="radio"
            name={metric}
            value={i}
            onChange={(e) => handleChange(e, metric)}
            checked={formData[metric] === i}
            className="hidden"
          />
          <FontAwesomeIcon icon={faStar} className={`text-penn-blue text-3xl ${formData[metric] >= i ? 'text-yellow-400' : 'text-gray-300'}`} />
        </label>
      );
    }
    return stars;
  };

  return (
    <>
      {isOpen && (
        <div className="modal-overlay"> {/* Use a unique class name for overlay */}
          <div className="modal p-6 font-montserrat"> {/* Use a unique class name for modal */}
            <div className="modal-header flex justify-between items-center mb-4">
              <h2 className="text-penn-blue text-xl font-bold">Please rate your professor honestly.</h2>
              <FontAwesomeIcon
                icon={faTimes}
                className="cursor-pointer text-jet hover:text-gray p-1"
                onClick={onClose}
              />
            </div>
            <form onSubmit={handleSubmit}>
              <div className="flex mb-4">
                <span className="mr-4">Teaching Proficiency:</span>
                {renderStars('teachingProficiency')}
              </div>
              <div className="flex mb-4">
                <span className="mr-4">Availability & Responsiveness</span>
                {renderStars('teaching')}
              </div>
              <div className="flex mb-4">
                <span className="mr-4">Attendance:</span>
                {renderStars('attendance')}
              </div>
              <div className="mb-4">
                <label htmlFor="additionalComments" className="block mb-2 text-sm">Additional Comments:</label>
                <textarea id="additionalComments" name="additionalComments" rows="4" cols="50" value={formData.additionalComments} onChange={(e) => handleChange(e, 'additionalComments')} className="border rounded px-4 py-2 w-full"></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="bg-penn-blue text-anti-flash hover:bg-mustard hover:text-penn-blue font-montserrat px-3 py-2 rounded-md text-md font-semibold">Submit</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default RatingModal;
