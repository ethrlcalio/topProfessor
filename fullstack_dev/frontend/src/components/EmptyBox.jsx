import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const EmptyBox = ({comment, commenter}) => {
  const commentVal = comment;
  const [student, setStudent] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://127.0.0.1:8000/api/student-data/?studentID=${commenter}`)
      const data = await response.json();
      setStudent(data);
    }
    fetchData();
  }, [])

  return (
    <div className="relative flex flex-row items-center gap-2 justify-end bg-white p-4 rounded-lg font-montserrat">
      <div className="absolute inset-y-0 left-0 w-1/12"> {/* Width for user icon */}
        <div className="h-full w-full bg-penn-blue flex items-center justify-center">
          <FontAwesomeIcon icon={faUser} className="text-anti-flash" />
        </div>
      </div>
      <div className="w-11/12 flex flex-col gap-4"> {/* Width for comment */}
        {/* Space for text, you can add any text or children components here */}
        <div>
          <p className="text-black text-base/5 font-bold">{student ? `${student.firstName} ${student.lastName}` : ""}</p>
          <p className="text-black text-xs/3 italic">{student ? `${student.program}` : ""}</p>
        </div>
        <p className="text-black text-sm">{`${commentVal}`}</p>
      </div>
    </div>
  );
}

export default EmptyBox;
