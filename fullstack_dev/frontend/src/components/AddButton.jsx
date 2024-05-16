import React, { useState } from 'react';
import RatingModal from './RatingModal'; // Import the RatingModal component

const AddButton = ({sendDataToParent, professorID}) => {
  const profID = professorID;
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleDataFromChild = (data) => {
    sendDataToParent(data);
  }
  return (
    <>
      {!isModalOpen && (
        <button className="w-full bg-penn-blue text-anti-flash text-md font-semibold hover:bg-mustard hover:text-penn-blue font-montserrat px-4 py-2 rounded-md" onClick={openModal}>
        Rate
      </button>
      )}
      
      <RatingModal isOpen={isModalOpen} onClose={closeModal} sendDataToParent={handleDataFromChild} pID={profID}></RatingModal> {/* Render the RatingModal component */}
    </>
  );
};

export default AddButton;
