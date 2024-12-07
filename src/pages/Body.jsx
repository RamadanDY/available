import React from 'react'
import { HiOutlineBuildingOffice2 } from "react-icons/hi2"; 



const Body = () => {
  return (
    <div className='flex flex-col text-center   pt-28 justify-center align-center'>
        <div className="header-wrapper text-3xl font-bold pb-12">
            <div className='text-wrapper' >PLEASE SELECT A BLOCK FOR YOUR LECTURE</div>
        </div>
        <div className="blocks-wrapper grid grid-cols-2 md:grip-cols-3 justify-center   mx-auto gap-4">
            <div className="blocka border-red-800 gap-4 flex flex-row border p-6 w-fit m-2  text-center bg-blue-500">
                <HiOutlineBuildingOffice2 />   
                <p className="text">Block-A</p>
            </div>
            <div className="blockB  border-red-800  border p-2 w-fit m-2 text-center bg-blue-500">
                <p className="text">Block-B</p>
                <HiOutlineBuildingOffice2 />
            </div>
            <div className="blockC  border-red-800  border p-2 w-fit m-2  text-center bg-blue-500">
                <p className="text">Block-C</p>
                <HiOutlineBuildingOffice2 />
            </div>
            <div className="blockD  border-red-800  border p-2 w- m-2 w-fit text-center bg-blue-500">
                <p className="text">Block-D</p>
                <HiOutlineBuildingOffice2 />
            </div>
            <div className="blockE  border-red-800  border p-2 w-fit m-2  text-center bg-blue-500">
                <p className="text">Block-E</p>
                <HiOutlineBuildingOffice2 />
            </div>
            <div className="blockF  border-red-800  border p-2 w-fit m-2  text-center bg-blue-500">
                <p className="text">Block-F</p>
                <HiOutlineBuildingOffice2 />
            </div>
        </div>
 
    </div>
   )
}

export default Body