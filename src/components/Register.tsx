import React from 'react'
import './css/App.css'
import Nav from './Nav'
import ForInput from './forInput'
import Button from './Button'
import Login from './Button'
import Connect from './Connect'
import RegButton from './RegisterButton'


const RegsiterPage = () => {
  return (
    <>
   
      <div className="bg-[#fcf5f4] w-full pt-16">
         {/* Register Texthead */}
        <div><h1 className="text-center text-6xl font-bold italic">REGINTER</h1></div>

        <div className="flex  w-full py-14 gap-0  ">
        <div className="w-2/4 flex flex-col items-center  border-r-1 border-black gap-y-10  ">
        
       {/* USERNAME,Student ID,Email Zone :  */}
        <div className="w-2/4 flex flex-col  gap-6 ">
            <div className="flex flex-col gap-2">
            <div><p>USERNAME :</p></div>
            <div><ForInput /></div>
            </div>
            <div className="flex flex-col gap-2">
            <div><p>Student ID :</p></div>
            <div><ForInput /> </div>
            </div>
            <div className="flex flex-col gap-2">
            <div><p>Email :</p></div>
            <div><ForInput /> </div>
            </div>
          </div>

          
        
          </div>
      {/* Name,PhoneNumber,Password */}
        
          <div className="w-2/4 flex flex-col items-center  gap-6    ">
          <div className= "flex flex-col gap-2">
          <div><p>Name :</p></div>
            <div><ForInput /></div>
          </div>
            <div className="flex flex-col gap-2">
            <div><p>Phone Number :</p></div>
            <div><ForInput /> </div>
            </div>
            <div>
            <div className="flex flex-col gap-2"><p>Password :</p></div>
            <div><ForInput /> </div>
            </div>
          </div>
          </div>
          {/* Submit button */}
          <div className="w-full flex justify-center">
            <Button text="Submit"/>
          </div>
      </div>
      <div className="w-full  h-40 bg-[#94c3ad]"></div>


    </>
  )
}

export default RegsiterPage