import React from "react";
import Profile from "../../components/Profile";
import FacultyProfile from "../../components/FacultyProfile";
import MajorRating from "../../components/MajorRating";
import MinorRating from "../../components/MinorRating";
import AddButton from "../../components/AddButton";
import EmptyBox from "../../components/EmptyBox";

const ProfessorProfile = () => {
  return (
    <div class="bg-anti-flash min-h-full">
      <div id="content" class="w-full flex justify-center items-center pt-12">
        <div class="w-2/3 flex flex-col-2 gap-8">
          <div class="w-2/3 h-full flex flex-col gap-4">
            {/* First Row */}
            <div class="w-full flex flex-row gap-4">
              <div className="h-full bg-white rounded-xl shadow-md py-6">
                <MajorRating />
              </div>
              <div className="grow grow-y flex flex-col justify-center bg-white rounded-xl shadow-md">
                <MinorRating metric="Teaching Proficiency" />
                <MinorRating metric="Teaching" />
                <MinorRating metric="Attendance" />
              </div>
            </div>
            {/* Second Row */}
            <div class="w-full h-full bg-white rounded-xl shadow-md overflow-hidden">
              <AddButton />
            </div>
            <div class="w-full h-full bg-white rounded-xl shadow-md overflow-hidden">
              <EmptyBox />
            </div>
            <div class="w-full h-full bg-white rounded-xl shadow-md overflow-hidden">
              <EmptyBox />
            </div>
            <div class="w-full h-full bg-white rounded-xl shadow-md overflow-hidden">
              <EmptyBox />
            </div>
          </div>
          <div class="w-1/3 h-min bg-white rounded-xl overflow-x-hidden shadow-md">
            <FacultyProfile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessorProfile;
