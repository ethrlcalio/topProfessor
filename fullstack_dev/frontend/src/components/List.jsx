import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserCircle } from "@fortawesome/free-solid-svg-icons"

const List = () => {
    return (
        <table className='min-w-full text-left'>
            <thead className="font-montserrat text-anti-flash text-xs/3 font-light bg-penn-blue">
                <tr>
                    <th className='w-10/12 py-2 px-4 text-left'>Name</th>
                    <th className='w-1/12 py-2 px-4 text-left'>Department</th>
                    <th className='w-1/12 py-2 px-4 text-left'>Overall Rating</th>
                </tr>
            </thead>
            <tbody className="font-montserrat text-sm/4 font-light">
                <tr>
                    <td className="flex flex-row items-center py-2 px-6 gap-1">
                        <FontAwesomeIcon icon={faUserCircle} className="h-8 aspect-square text-penn-blue"/>
                        <p className="grow bg-red-300">Hello</p>
                    </td>
                    <td className="bg-red-300 py-3 px-4"></td>
                </tr>
                
            </tbody>
        </table>
      /*<div className='w-full flex flex-row border border-black items-center bg-white py-3 px-6 gap-4'>
        <FontAwesomeIcon
          icon={faUserCircle}
          className="text-anti-flash h-8 aspect-square text-penn-blue"
        />
        <div className='grow'>
            <span>Name</span>
        </div>
        <div>
            Overall Rating
        </div>
    </div>*/
  )
}

export default List