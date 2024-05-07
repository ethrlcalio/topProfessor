import React from "react";
import List from '../../components/List'

const Faculty = () => {
  return (
    <div class="bg-anti-flash min-h-full">
      <div id="content" class="w-full flex justify-center items-center pt-12">
        <div class="w-2/3 flex flex-col-2 gap-8">
          <div class="w-2/3 h-full flex flex-col shadow-md gap-4">
              <List/>
          </div>
          <div class="w-1/3 bg-white rounded-xl overflow-x-hidden shadow-md">
            hello
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faculty;
