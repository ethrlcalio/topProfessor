import React, {useEffect, useState, createContext} from 'react'

export const ScheduleContext = createContext();

const ScheduleProvider = ({children}) => {
    const [professors, setProfessors] = useState([{}]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    
    //REMOVE THIS
    const [studentID, setStudentID] = useState(135922);
    const fetchData = async () => {
      const response = await fetch(`http://127.0.0.1:8000/api/schedule-data/?studentID=${studentID}`);
      let data = await response.json();
      setProfessors(data);
      console.log(professors);
    }

    useEffect(() => {
      fetchData();
    }, []);

    return <ScheduleContext.Provider value={{professors, setProfessors}}>
      {children}
    </ScheduleContext.Provider>
}

export default ScheduleProvider