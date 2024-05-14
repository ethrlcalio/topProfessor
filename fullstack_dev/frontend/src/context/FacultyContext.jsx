import React, {useEffect, useState, createContext} from 'react'

export const FacultyContext = createContext();

const FacultyProvider = ({children}) => {
    const [professors, setProfessors] = useState([{}]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
      const fetchData = async () => {
        try{
          const response = await fetch('http://127.0.0.1:5173/');
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
    }, []);

    return <FacultyContext.Provider value={{professors, setProfessors }}>
      {children}
    </FacultyContext.Provider>
}

export default FacultyProvider