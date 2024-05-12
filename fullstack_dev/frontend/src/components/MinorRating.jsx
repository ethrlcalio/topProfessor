import React from 'react';

const MinorRating = ({ metric }) => {
  let text = metric;

  return (
    <div className="flex flex-row gap-4 px-4 py-2 justify-center items-center">
        <div className={`w-12 h-12 flex items-center justify-center bg-mustard rounded-xl`}>
            <p className={`font-montserrat font-bold text-penn-blue text-xl`}>
                2.5
            </p>
        </div>
        <div className="grow">
          <p className="font-montserrat font-bold text-penn-blue text-lg">{text}</p>
        </div>
    </div>
  );
};

export default MinorRating;
