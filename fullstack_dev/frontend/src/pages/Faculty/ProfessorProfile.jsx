import React, {useContext,useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import Profile from "../../components/Profile";
import FacultyProfile from "../../components/FacultyProfile";
import MajorRating from "../../components/MajorRating";
import MinorRating from "../../components/MinorRating";
import AddButton from "../../components/AddButton";
import EmptyBox from "../../components/EmptyBox";
import {MetricContext} from '../../context/MetricContext'
import LineChart from "../../components/LineChart";

const ProfessorProfile = () => {
  const {id} = useParams();
  const [classObj, setClassObj] = useState(null);
  const [ratings, setRatings] = useState(null);


  const fetchData = async () => {
    const response = await fetch(`http://127.0.0.1:8000/api/classes/`);
    let data = await response.json();
    const filteredData  = data.filter(class_obj => class_obj.professorID == id);
    setClassObj(filteredData);
  }

  const fetchRatings = async () => {
    console.log(classObj);
    if(classObj && classObj.length > 0){
      await Promise.all(classObj.map(async (class_obj) => {
        const response = await fetch(`http://127.0.0.1:8000/api/rating-data/?classID=${class_obj.classID}`);
        let data = await response.json();
        console.log(data);
      }))
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchRatings();
  }, [classObj]);

  const {metrics, setMetrics} = useContext(MetricContext);
  
  return (
    <div className="bg-anti-flash min-h-full">
      <div id="content" className="w-full flex justify-center items-center pt-12">
        <div className="w-2/3 flex flex-col-2 gap-8">
          <div className="w-2/3 h-full flex flex-col gap-4">
            {/* First Row */}
            <div className="w-full flex flex-row gap-4">
              <div className="h-full bg-white rounded-xl shadow-md py-6">
                <MajorRating/>
              </div>
              <div className="grow grow-y flex flex-col justify-center bg-white rounded-xl shadow-md">
                {metrics.map((metricEntry, index) =>(
                  <MinorRating key={index} metric={metricEntry}/>
                ))}
              </div>
            </div>
            {/* Second Row */}
            <div className="w-full h-full bg-white rounded-xl shadow-md overflow-hidden">
              <AddButton />
            </div>
            <div className="w-full h-full p-4 bg-white rounded-xl shadow-md overflow-hidden">
              <LineChart />
            </div>
            <div className="w-full h-full bg-white rounded-xl shadow-md overflow-hidden">
              <EmptyBox />
            </div>
          </div>
          <div className="w-1/3 h-min bg-white rounded-xl overflow-x-hidden shadow-md">
            <FacultyProfile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessorProfile;
