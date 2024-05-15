import React, {useState, useContext} from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import {FacultyContext} from '../context/FacultyContext'

const List = () => {
  const {professors, setProfessors} = useContext(FacultyContext);

  console.log(professors);
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto">
        <div className="min-w-full">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-xs/3 font-light border rounded-lg overflow-hidden">
              <thead className="font-montserrat text-anti-flash bg-penn-blue">
                <tr>
                  <th scope="col" className="w-3/5 px-4 py-3">
                    Faculty Name
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Department
                  </th>
                  <th scope="col" className="w-1/12 px-4 py-3 text-center">
                    Overall Rating
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                  professors.map((professorEntry, index) => (
                    <TableRow
                      key={index}
                      facultyName={professorEntry.classID}
                      department={professorEntry.professorID}
                      overallRating={professorEntry.startTime}
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
    <tr className="border-b border-cursor-pointer">
      <td className="flex flex-row gap-2 items-center font-montserrat whitespace-nowrap px-4 py-3">
        <div><FontAwesomeIcon icon={faUserCircle} className="h-5 w-5 text-penn-blue" /></div>
        <div>{facultyName}</div>
      </td>
      <td className="font-montserrat whitespace-nowrap px-4 py-3">{department}</td>
      <td className="font-montserrat whitespace-nowrap px-4 py-3 text-center">{overallRating}</td>
    </tr>
  );
};

export default List;
