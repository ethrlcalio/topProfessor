import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const AddButton = () => {
  return (
    <button className="w-full bg-penn-blue text-anti-flash hover:bg-mustard hover:text-penn-blue font-montserrat px-4 py-2 rounded-md">
      <FontAwesomeIcon icon={faPlus} className="mr-2 font-bold h-4 w-4" />
    </button>
  );
};

export default AddButton;
