import React, {createContext, useState} from React;

export const MetricContext = createContext();

const MetricProvider = ({children}) => {
    const metrics = useState([
        "Teahcing Proficiency",
        "Availability & Responsiveness",
        "Attendance"
    ]);
    return <MetricContext.Provider value={{metrics, setMetrics}}>
        {children}
    </MetricContext.Provider>
}