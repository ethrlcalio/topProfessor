import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

const FacultyProfile = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-penn-blue w-full flex justify-center">
        <FontAwesomeIcon
          icon={faUserCircle}
          className="text-anti-flash h-28 w-28 m-4"
        />
      </div>
      <div className="flex flex-col align-center m-2 items-center">
        <h2 className="font-montserrat text-xl text-jet font-semibold pt-2">
          Edrian Louis F. Nabos
        </h2>
      </div>
      <div className="text-left m-2 -mt-1 p-2">
        <div>
          <h2 className="font-montserrat text-sm text-jet py-1 font-bold">
            ID Number: <span className="font-normal">139725</span>
          </h2>
          <h2 className="font-montserrat text-sm text-jet py-1 font-bold">
            Department: <span className="font-normal">Accountancy</span>
          </h2>
          <h2 className="font-montserrat text-sm text-jet py-1 font-bold">
            School: <span className="font-normal">Business and Governance</span>
          </h2>
          <h2 className="font-montserrat text-sm text-jet py-1 font-bold">
            Status:{" "}
            <span className="font-normal">Full-time Faculty</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default FacultyProfile;
