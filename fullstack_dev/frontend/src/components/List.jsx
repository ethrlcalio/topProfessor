import React, {useState} from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

const List = () => {
  //Temporary values to be replaced with data from database
  const [professors, setProfessors] = useState([{
    facultyName: "Edrian Louis F. Nabos",
    department: "Accountancy",
    overallRating: "2.5",
  }])
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto">
        <div className="min-w-full">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-xs/3 font-light border rounded-lg overflow-hidden">
              <thead className="font-montserrat text-anti-flash bg-penn-blue">
                <tr>
                  <th scope="col" className="px-4 py-3">
                    Faculty Name
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Department
                  </th>
                  <th scope="col" className="w-1/12 px-4 py-3">
                    Overall Rating
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                  professors.map((professor, index) => (
                    <TableRow
                      key={index}
                      facultyName={professor.facultyName}
                      department={professor.department}
                      overallRating={professor.overallRating}
                    />
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

const TableRow = ({ facultyName, department, overallRating }) => {
  return (
    <tr className="border-b bg-neutral-100 hover:bg-gray-200 cursor-pointer">
      <td className="flex flex-row gap-2 items-center font-montserrat whitespace-nowrap px-4 py-3">
        <div><FontAwesomeIcon icon={faUserCircle} className="h-5 w-5 text-penn-blue" /></div>
        <div>{facultyName}</div>
      </td>
      <td className="font-montserrat whitespace-nowrap px-4 py-3">{department}</td>
      <td className="font-montserrat whitespace-nowrap px-4 py-3">{overallRating}</td>
    </tr>
  );
};

export default List;
