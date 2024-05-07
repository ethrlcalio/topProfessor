import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

const Profile = () => {
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
            Program: <span className="font-normal">BS Accountancy</span>
          </h2>
          <h2 className="font-montserrat text-sm text-jet py-1 font-bold">
            Division: <span className="font-normal">Accountancy</span>
          </h2>
          <h2 className="font-montserrat text-sm text-jet py-1 font-bold">
            Semester:{" "}
            <span className="font-normal">2nd Semester, A.Y. 2023-2024</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Profile;
