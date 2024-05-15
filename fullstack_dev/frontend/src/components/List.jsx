import React, {useState, useContext, useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import {FacultyContext} from '../context/FacultyContext'

const List = () => {
  const {professors, setProfessors} = useContext(FacultyContext);
  const [classObj, setClassObj] = useState(null);
  const [ratingData, setRatingData] = useState(null);
  const [ratings, setRatings] = useState(null);
  
  const fetchData = async () => {
    const dataArray = [];
    try{
      await Promise.all(professors.map(async (professor) => {
        const response = await fetch(`http://127.0.0.1:8000/api/classes/`);
        let data = await response.json();
        const filteredData  = data.filter(class_obj => class_obj.professorID == professor.professorID);
        console.log(filteredData);
        dataArray.push(filteredData);
      }));
      setClassObj(dataArray);
    }catch(error){
      console.error("Error fetching data:", error);
    }
  }

  const fetchRatings = async () => {
    
    try{
      if(classObj && classObj.length > 0){
        const dataArray = await Promise.all(classObj.map(async (classArray) => {
          const professorRatings = await Promise.all(classArray.map(async (class_obj) => {
            const response = await fetch(`http://127.0.0.1:8000/api/rating-data/?classID=${class_obj.classID}`);
            return await response.json();
          }));
          return professorRatings;
        }));
        setRatingData(dataArray);
      }
    }catch (error){
      console.error("Error fetching ratings:", error);
    }
  }

  const calculateRatings = async () => {
    console.log(ratingData);
    try{
      if(ratingData && ratingData.length > 0){
        const dataArray = await Promise.all(ratingData.map(async (classArray) => {
          let totalRating = 0;
          let numRatings = 0;
  
          await Promise.all(classArray.flat().map(async (rating) => {
            totalRating += parseFloat(rating.rating1);
            numRatings++;
          }))
          const aveRating = numRatings > 0 ? totalRating / numRatings : 0;
          return aveRating !== 0 ? parseFloat(aveRating.toFixed(2)) : "-";
        }));
        setRatings(dataArray);
      }
    }catch (error){
      console.error("Error calculating ratings:", error);
    }
  }

  const injectData = async () => {
    console.log(ratings);
    try{
      if(ratings && ratings.length > 0){
        const professorRatings = professors.map((professor,index) => {
          return{
            ...professor,
            overallRating: ratings[index]
          };
        });
        await setProfessors(professorRatings);
      }
    }catch (error){
      console.error("Error injecting data:", error);
    };
  }

   useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if(classObj && classObj.length > 0){
      console.log(classObj);
      fetchRatings();
    }
  }, [classObj]);

  useEffect(() => {
    if(ratingData && ratingData.length > 0){
      calculateRatings();
    }
  }, [ratingData]);
  
  useEffect(() => {
    if(ratings && ratings.length > 0){
      injectData();
    }
  }, [ratings])

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto">
        <div className="min-w-full">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm/4 font-light border rounded-lg overflow-hidden">
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
                  professors && professors.map((professorEntry, index) => (
                    <TableRow
                      key={index}
                      facultyName={professorEntry.firstName + " " + professorEntry.lastName}
                      department={professorEntry.division}
                      overallRating={professorEntry.overallRating}
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
