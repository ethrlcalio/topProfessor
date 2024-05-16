import React, {useContext,useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
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
  const [ratingData, setRatingData] = useState(null);
  const [ratings, setRatings] = useState({
    overallRating: null,
    teachingProficiency: null,
    availabilityResponsiveness: null,
    attendance: null,
  });
  const [isDataDone, setIsDataDone] = useState(false);
  const [isRatingsDone, setIsRatingsDone] = useState(false);
  const [isCalculateDone, setIsCalculateDone] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://127.0.0.1:8000/api/classes/`);
      let data = await response.json();
      const filteredData  = data.filter(class_obj => class_obj.professorID == id);
      setClassObj(filteredData);
      setIsDataDone(true);
    }
    fetchData();
  }, []);

  useEffect(() => {
    if(classObj && classObj.length > 0){
      const fetchRatings = async () => {
        const dataArray = [];
        await Promise.all(classObj.map(async (class_obj) => {
          const response = await fetch(`http://127.0.0.1:8000/api/rating-data/?classID=${class_obj.classID}`);
          let data = await response.json();
          dataArray.push(data);
        }));
        setRatingData(dataArray);
        setIsRatingsDone(true);
      }
      fetchRatings();
    }
  }, [isDataDone]);

  useEffect(() => {
    if(ratingData){
      const calculateRatings = async () => {
        const flattenedData = ratingData.flat();
        const sum1 = flattenedData.reduce((data, obj) => data + parseFloat(obj.rating1), 0);
        const ave1 = parseFloat((sum1 / flattenedData.length).toFixed(2));
        const sum2 = flattenedData.reduce((data, obj) => data + parseFloat(obj.rating2), 0);
        const ave2 = parseFloat((sum2 / flattenedData.length).toFixed(2));
        const sum3 = flattenedData.reduce((data, obj) => data + parseFloat(obj.rating3), 0);
        const ave3 = parseFloat((sum3 / flattenedData.length).toFixed(2));
        const sum4 = flattenedData.reduce((data, obj) => data + parseFloat(obj.rating4), 0);
        const ave4 = parseFloat((sum4 / flattenedData.length).toFixed(2));
        setRatings((ratings) => ({
          ...ratings,
          overallRating: ave1,
          teachingProficiency: ave2,
          availabilityResponsiveness: ave3,
          attendance: ave4,
        }));
      }
      calculateRatings();
    }
  }, [isRatingsDone])

  const {metrics, setMetrics} = useContext(MetricContext);
  
  const handleDataFromChild = (data) => {
    setIsHidden(data);
  }
  
  return (
    <div className="bg-anti-flash min-h-full">
      <div id="content" className="w-full flex justify-center items-center pt-12">
        <div className="w-2/3 flex flex-col-2 gap-8">
          <div className="w-2/3 h-full flex flex-col">
            {/* First Row */}
            <div className="w-full flex flex-row gap-4">
              <div className="h-full bg-white rounded-xl shadow-md py-6">
                {ratings && <MajorRating rating={ratings.overallRating}/>}
              </div>
              <div className="grow grow-y flex flex-col justify-center bg-white rounded-xl shadow-md">
                {ratings && metrics.map((metricEntry, index) =>(
                  <MinorRating key={index} metric={metricEntry} rating={ratings}/>
                ))}
              </div>
            </div>
            {/* Second Row */}
            <div className="flex flex-col gap-4">
              <div className="w-full h-full bg-white rounded-xl shadow-md overflow-hidden">
                {isHidden && <AddButton sendDataToParent={handleDataFromChild} professorID={id}/>}
              </div>
              <div className="w-full h-full p-4 bg-white rounded-xl shadow-md overflow-hidden">
                <LineChart />
              </div>
              <div className="w-full h-full bg-white rounded-xl shadow-md overflow-hidden">
                <EmptyBox />
              </div>
            </div>
          </div>
          <div className="w-1/3 h-min bg-white rounded-xl overflow-x-hidden shadow-md">
            <FacultyProfile id={id}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessorProfile;
