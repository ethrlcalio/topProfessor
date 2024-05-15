import React from "react";
import List from '../../components/List'
import Profile from '../../components/Profile'

const Faculty = () => {
  return (
    <div class="bg-anti-flash min-h-full">
      <div id="content" class="w-full flex justify-center items-center pt-12">
        <div class="w-2/3 flex flex-col-2 gap-8">
            <div class="w-2/3 h-fit bg-white rounded-xl overflow-x-hidden shadow-md">
              <List/>
            </div>
          <div class="w-1/3 h-min bg-white rounded-xl overflow-x-hidden shadow-md">
              <Profile/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faculty;
