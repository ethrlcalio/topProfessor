import React, {useEffect, useState, createContext} from 'react'

export const ScheduleContext = createContext();

const ScheduleProvider = ({children}) => {
    const [professors, setProfessors] = useState([{}]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    
    //REMOVE THIS
    const [studentID, setStudentID] = useState(135922);
    
    useEffect(() => {
      const fetchData = async () => {
        try{
          const response = await fetch(`http://127.0.0.1:8000/api/schedule-data/?studentID=${studentID}`);
          if(!response.ok){
            throw new Error('HTTP error: Status ${response.status}');
          }
          let data = await response.json();
          setProfessors(data);
        }catch (err){
          setError(err.message);
          setProfessors(null);
        }finally{
          setLoading(false);
        }
      }
      fetchData();
      console.log(professors);
    }, []);

    return <ScheduleContext.Provider value={{professors, setProfessors }}>
      {children}
    </ScheduleContext.Provider>
}

export default ScheduleProvider