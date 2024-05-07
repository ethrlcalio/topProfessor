import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

const Profile = () => {
  const [professorData, setProfessorData] = useState(null);
  const [professorCode, setProfessorCode] = useState('');

  useEffect(() => {
    if (professorCode) {
      fetchProfessorData();
    }
  }, [professorCode]);

  const fetchProfessorData = () => {
    fetch(`http://127.0.0.1:8000/api/professor-data/?professorCode=${professorCode}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Professor not found');
        }
        return response.json();
      })
      .then(data => setProfessorData(data))
      .catch(error => console.error('Error fetching professor data:', error));
  };

  const handleProfessorCodeChange = (event) => {
    setProfessorCode(event.target.value);
  };

  const handleFetchData = () => {
    fetchProfessorData();
  };

  return (
    <div className="flex flex-col">
      <div className="bg-penn-blue w-full flex justify-center">
        <FontAwesomeIcon
          icon={faUserCircle}
          className="text-anti-flash h-28 w-28 m-4"
        />
      </div>
      <div className="flex flex-col align-center m-2 items-center">
        <h2 className="font-montserrat text-xl text-jet font-semibold pt-2">
          {professorData ? `${professorData.firstName} ${professorData.lastName}` : 'Insert Name Here'}
        </h2>
      </div>
      <div className="text-left m-2 -mt-1 p-2">
        <div>
          <input
            type="text"
            value={professorCode}
            onChange={handleProfessorCodeChange}
            placeholder="Enter Professor Code"
            className="border border-gray-300 rounded-md px-3 py-2 mt-2 mb-2"
          />
          <button onClick={handleFetchData} className="bg-penn-red text-white px-4 py-2 rounded-md">Fetch Data</button>
          <h2 className="font-montserrat text-sm text-jet py-1 font-bold">
            ID Number: <span className="font-normal">{professorData ? professorData.professorID : '*'}</span>
          </h2>
          <h2 className="font-montserrat text-sm text-jet py-1 font-bold">
            Program: <span className="font-normal">{professorData ? professorData.program : '*'}</span>
          </h2>
          <h2 className="font-montserrat text-sm text-jet py-1 font-bold">
            Division: <span className="font-normal">{professorData ? professorData.division : '*'}</span>
          </h2>
          <h2 className="font-montserrat text-sm text-jet py-1 font-bold">
            Semester: <span className="font-normal">{professorData ? professorData.schoolYear : '*'}</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Profile;
