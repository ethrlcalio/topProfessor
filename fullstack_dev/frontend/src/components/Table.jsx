import React, {useContext} from "react";
import { Link } from 'react-router-dom';
import {ScheduleContext} from '../context/ScheduleContext'

const Table = () => {
  //Temporary values to be replaced with data from database
  const {subjects, setSubjects} = useContext(ScheduleContext);
  console.log(subjects);
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto">
        <div className="min-w-full">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-xs/3 font-light">
              <thead className="font-montserrat text-anti-flash bg-penn-blue">
                <tr>
                  <th scope="col" className="w-1/12 px-4 py-3">
                    Class Code
                  </th>
                  <th scope="col" className="w-1/12 px-4 py-3">
                    Subject Code
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Course
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Time Slot
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                  subjects.map((subject, index) => (
                    <TableRow key= {index}
                    to={""}
                    classCode={subject.classID}
                    subjectCode={subject.classID}
                    course={subject.scheduleID}
                    instructor={subject.scheduleID}
                    timeSlot={subject.scheduleID}
                />
                  ))
                }
                
                {/*<TableRow
                  to="/professor"
                  classCode="4-319"
                  subjectCode="CS 3246"
                  course="ELECTIVE MATH/CS ELECTIVE 1"
                  instructor="Dwight Ian De Jesus"
                  timeSlot="5:50P-8:20P F613C MW"
              />*/}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

const TableRow = ({ to, classCode, subjectCode, course, instructor, timeSlot }) => {
  return (
    <tr className="border-b bg-neutral-100 hover:bg-gray-200 cursor-pointer" onClick={() => window.location.href = to}>
      <td className="font-montserrat whitespace-nowrap px-4 py-3 font-md">{classCode}</td>
      <td className="font-montserrat whitespace-nowrap px-4 py-3">{subjectCode}</td>
      <td className="font-montserrat whitespace-nowrap font-md px-4 py-3">
        <span>{course} <br /></span>
        <span className="font-montserrat text-[8px]/3 italic">{instructor}</span>
      </td>
      <td className="font-montserrat whitespace-nowrap px-4 py-3">{timeSlot}</td>
    </tr>
  );
};

export default Table;
