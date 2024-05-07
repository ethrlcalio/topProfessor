import React from "react";

const Table = () => {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto">
        <div className="min-w-full">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-xs/3 font-light">
              <thead className="font-montserrat text-anti-flash bg-penn-blue">
                <tr>
                  <th scope="col" className="bg-red-200 w-1/12 px-4 py-3">
                    Subject Code
                  </th>
                  <th scope="col" className="bg-green-200 w-1/12 px-4 py-3">
                    Class Code
                  </th>
                  <th scope="col" className="bg-blue-200 px-4 py-3">
                    Course
                  </th>
                  <th scope="col" className="bg-yellow-200 px-4 py-3">
                    Time Slot
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-neutral-100">
                  <td className="whitespace-nowrap px-4 py-3 font-medium">1</td>
                  <td className="whitespace-nowrap px-4 py-3">Mark</td>
                  <td className="whitespace-nowrap px-4 py-3">
                    <span>
                      Full Stack Development <br />
                    </span>
                    <span className="text-[8px]/3 italic">
                      Dwight Ian De Jesus
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-4 py-3">@mdo</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
