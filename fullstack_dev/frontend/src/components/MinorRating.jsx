import React, {useState,useEffect} from 'react';

const MinorRating = ({ metric, rating }) => {
  let text = metric;
  const [value,setValue] = useState(null);

  useEffect(() => {
    switch (String(text)){
      case "Teaching Proficiency":
        setValue(rating.teachingProficiency);
        break;
      case "Availability & Responsiveness":
        setValue(rating.availabilityResponsiveness);
        break;
      case "Attendance":
        setValue(rating.attendance);
        break;
      default:
        setValue("-");
        breakl;
    }
  }, [])

  return (
    <div className="flex flex-row gap-4 px-4 py-2 justify-center items-center">
        <div className={`w-12 h-12 flex items-center justify-center bg-mustard rounded-xl`}>
            <p className={`font-montserrat font-bold text-penn-blue text-xl`}>
                {value}
            </p>
        </div>
        <div className="grow">
          <p className="font-montserrat font-bold text-penn-blue text-lg">{text}</p>
        </div>
    </div>
  );
};

export default MinorRating;
