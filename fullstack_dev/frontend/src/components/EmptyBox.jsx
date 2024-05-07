import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const EmptyBox = () => {
  return (
    <div className="relative flex flex-row items-center gap-2 justify-end bg-white p-4 rounded-lg">
      <div className="absolute inset-y-0 left-0 w-1/12"> {/* Width for user icon */}
        <div className="h-full w-full bg-penn-blue flex items-center justify-center">
          <FontAwesomeIcon icon={faUser} className="text-anti-flash" />
        </div>
      </div>
      <div className="w-11/12"> {/* Width for comment */}
        {/* Space for text, you can add any text or children components here */}
        <p className="text-black text-sm">Previous comment</p>
      </div>
    </div>
  );
}

export default EmptyBox;
