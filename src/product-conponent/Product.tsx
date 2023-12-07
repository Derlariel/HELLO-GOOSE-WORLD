/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faLeaf,
  faAtom,
} from "@fortawesome/free-solid-svg-icons";
function product() {
  const [buttonPosition, setButtonPosition] = useState("justify-start");
  const handleClick = () => {
    setButtonPosition((prevState) =>
      prevState === "justify-start" ? "justify-end" : "justify-start"
    );
  };
  return (
    <>
      <div className="flex items-center">
        <div className="flex justify-self-start border-2 border-b-gray-800 rounded-md w-[40em] h-[30em] m-10">
          <div className="flex justify-center items-center ">
            <img src="../../public/assets/icon_phone.png" alt="" className="" />
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="text-5xl">NAME</h1>
          <div className="flex flex-wrap">
            <span className="  text-gray-400 w-full">
              <h1 className=" whitespace-wraop">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, voluptatem! ipsum dolor sit amet.
              </h1>
            </span>
            <div className="flex flex-col">
              <br />
              {/** button left! **/}
              <div>
                <h1 className="text-2xl text-[#dd9973] font-bold">quantity</h1>
                <div className="flex">
                  <button
                    type="button"
                    className="border border-gray-600 rounded-l-md p-1 w-20 h-12"
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                  <h1 className="border border-gray-600 w-44  text-center flex items-center justify-center">
                    1
                  </h1>
                  <button
                    type="button"
                    className="border border-gray-600 rounded-r-md p-1 w-20"
                  >
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                </div>
              </div>
              {/** button right! **/}
              <div>
                <h1 className="text-2xl text-[#dd9973] font-bold">
                  self-pick-up
                </h1>
                <div
                  className={`border border-gray-600 w-28 h-10 rounded-2xl flex ${buttonPosition}`}
                >
                  <button
                    onClick={handleClick}
                    className="border border-gray-600 w-14 h-10 rounded-2xl"
                  ></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default product;
