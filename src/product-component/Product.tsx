/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faLeaf,
  faAtom,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons/faStar";
function product() {
  const [buttonHeart, setButtonHeartColor] = useState("text-gray-500");
  const [buttonPosition, setButtonPosition] = useState("justify-start");
  const [buttonColor, setButtonColor] = useState("bg-[#d9d9d9]");
  const [rating, setRating] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const handlePlusClick = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };
  const handleMinusClick = () => {
    setQuantity((prevQuantity) => (prevQuantity > 0 ? prevQuantity - 1 : 0));
  };
  const handleStarClick = (starNumber) => {
    setRating(starNumber);
  };
  const handleClick = () => {
    setButtonPosition((prevState) =>
      prevState === "justify-start" ? "justify-end" : "justify-start"
    );
    setButtonColor((prevState) =>
      prevState === "bg-[#d9d9d9]" ? "bg-[#dd9973]" : "bg-[#d9d9d9]"
    );
  };
  const handleHeart = () => {
    setButtonHeartColor((prevState) =>
      prevState === "text-gray-500" ? "text-rose-500" : "text-gray-500"
    );
  };
  return (
    <>
      <div className="flex bg-[#fcf5f4]">
        <div className="flex justify-self-start border-2 border-b-gray-800 rounded-md w-[40em] h-[30em] m-10">
          <div className="flex justify-center items-center ">
            <img src="../../public/assets/icon_phone.png" alt="" className="" />
          </div>
        </div>
        <div className="flex flex-col relative top-10">
          <h1 className="text-5xl">NAME</h1>
          <div className="flex flex-wrap">
            <span className="  text-gray-400 w-full">
              <h1 className=" whitespace-wraop">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, voluptatem! ipsum dolor sit amet.
              </h1>
            </span>
            <div className="flex ">
              <br />
              {/** button left! **/}
              <div>
                <h1 className="text-2xl text-[#dd9973] font-bold mb-2">
                  quantity
                </h1>
                <div className="flex">
                  <button
                    type="button"
                    className="border border-gray-600 rounded-l-md p-1 w-20 h-12"
                    onClick={handlePlusClick}
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                  <h1 className="border border-gray-600 w-44  text-center flex items-center justify-center text-green-600 text-xl">
                    {quantity}
                  </h1>
                  <button
                    type="button"
                    className="border border-gray-600 rounded-r-md p-1 w-20"
                    onClick={handleMinusClick}
                  >
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                </div>
              </div>
              {/** button right! **/}
              <div className="ml-24">
                <h1 className="text-2xl text-[#dd9973] font-bold">
                  self-pick-up
                </h1>
                <div className="flex relative top-2 ">
                  <FontAwesomeIcon
                    icon={faLeaf}
                    className="text-md text-green-500 relative left-[6.5em] bottom-2"
                  />
                  <div
                    className={`border-2 border-black w-24 h-10 rounded-2xl flex bg-[#dd9973] ${buttonColor} ${buttonPosition}`}
                  >
                    <button
                      onClick={handleClick}
                      className=" w-10 h-10 rounded-2xl"
                    >
                      <FontAwesomeIcon
                        icon={faAtom}
                        className=" font-thin text-3xl"
                      />
                    </button>
                  </div>
                  {/** message right! **/}
                  <div className=" float-right clear-both inline-block relative left-6">
                    <h1 className="text-xs text-gray-400 opacity-50">
                      **If you won’t get the plastic bag or <br /> choose
                      “self-pick up”, you will get “Nature Coin”.
                    </h1>
                    <h1 className="text-xs text-green-600 opacity-50">
                      - What’s Nature Coin?
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/** Button green! */}
          <div>
            <div className="relative top-10">
              <button
                type="submit"
                className="bg-[#95c3ac] rounded-2xl w-6/12 p-5 border border-black flex justify-center"
              >
                <span className="text-black text-3xl text-center">
                  Purchase
                </span>
              </button>
            </div>
            <div className="relative bottom-8 left-[33em] align-middle">
              <button
                className="border border-black p-4 rounded-full"
                onClick={handleHeart}
              >
                <FontAwesomeIcon
                  icon={faHeart}
                  className={`text-3xl text-gray-500 ${buttonHeart}`}
                />
              </button>
            </div>
          </div>
          {/** Reviews!! */}
          <div className="bg-white w-10/12 h-1/4 ">
            <h1 className=" uppercase text-2xl text-[#dd9973] m-3">Reviews</h1>
            <div>
              <div className="flex">
                <img
                  src="../../public/assets/icon1.PNG"
                  alt=""
                  className="w-16"
                />
                <div className="flex flex-col ">
                  <div className="flex gap-3">
                    <div>
                      <h1>Mr.Goose</h1>
                    </div>
                    <div>
                      {[...Array(5)].map((star, index) => {
                        const starNumber = index + 1;
                        return (
                          <button
                            key={starNumber}
                            onClick={() => handleStarClick(starNumber)}
                          >
                            <FontAwesomeIcon
                              icon={faStar}
                              className={
                                starNumber <= rating
                                  ? "text-yellow-500"
                                  : "text-gray-500"
                              }
                            />
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  <div>
                    <h1 className="text-gray-500 opacity50">
                      descriptiondescriptiondescriptiondescriptiondescription
                    </h1>
                  </div>
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
