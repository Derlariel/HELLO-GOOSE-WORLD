/* eslint-disable react-hooks/rules-of-hooks */
import { Link,useLocation } from 'react-router-dom';
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faLeaf,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import Product from "../assets/data/product.ts";
import vendorData from '../assets/data/vendorData.ts';


import { faStar } from "@fortawesome/free-solid-svg-icons/faStar";

function product() {
  const productId = useLocation().state?.productId;
  const product = Product.find((product) => product.id === productId);
  const [buttonHeart, setButtonHeartColor] = useState("text-gray-500");
  const [buttonPosition, setButtonPosition] = useState("justify-start");
  const [buttonColor, setButtonColor] = useState("bg-[#d9d9d9]");
  const [rating, setRating] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const vender = vendorData.find((vendor) => vendor.userId === product?.userId);

  const handlePlusClick = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };
  const handleMinusClick = () => {
    setQuantity((prevQuantity) => (prevQuantity > 0 ? prevQuantity - 1 : 0));
  };
  const handleStarClick = (starNumber: number) => {
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
            <img src={product?.image} alt="" className="w-full h-full" />
          </div>
        </div>
        <div className="flex flex-col relative top-10">
          <div className='flex flex-row justify-between items-end pr-6'>
            <h1 className="text-5xl">{product?.name}</h1>
            <Link to={{
                pathname: "/vendorprofile",
              }} state={{ userId: vender?.userId }}>
                <h3 className="text-xl text-[#95c3ac]">{vender?.name}</h3>
            </Link>
          </div>
          <div className="flex flex-wrap">
            <span className="mt-2 text-gray-400 w-[95%]">
              <h1 className=" whitespace-wraop">{product?.description}</h1>
            </span>
            <div className="flex mt-1">
              <br />
              {/** button left! **/}
              <div>
                <h1 className="text-2xl text-[#dd9973] font-bold mb-2">
                  quantity
                </h1>
                <div className="flex">
                  <button
                    type="button"
                    className="border border-gray-600 rounded-l-md p-1 xl:w-20 h-12"
                    onClick={handlePlusClick}
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                  <h1 className="border border-gray-600 xl:w-44 sm:w-16  text-center flex items-center justify-center text-green-600 text-xl">
                    {quantity}
                  </h1>
                  <button
                    type="button"
                    className="border border-gray-600 rounded-r-md p-1 xl:w-20"
                    onClick={handleMinusClick}
                  >
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                </div>
              </div>
              {/** button right! **/}
              <div className="2xl:ml-25 xl:ml-24 lg:ml-0 lg:mr-5">
                <h1 className="text-2xl text-[#dd9973] font-bold">
                  self-pick-up
                </h1>
                <div className="flex relative top-2 ">
                  <FontAwesomeIcon
                    icon={faLeaf}
                    className="text-md text-green-500 relative left-[6.6em] 2xl:left-[6.7em] lg:left-[6.2em] bottom-2"
                  />
                  <div
                    className={`border-2 border-black w-24 h-10 rounded-2xl flex ${buttonColor} ${buttonPosition}`}
                  >
                    <button
                      onClick={handleClick}
                      className=" w-10 h-10 rounded-2xl"
                    >
                      <svg className='mb-[1.5em]' xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 512 512"><path fill="white" d="M254.355 15.997c-93.512.726-182.057 56.405-220.066 148.166c-50.68 122.35 7.525 262.87 129.874 313.547c122.35 50.68 262.868-7.526 313.547-129.875c50.68-122.35-7.525-262.868-129.874-313.547c-30.587-12.67-62.31-18.532-93.48-18.29zm1.325 24.342c33.248 0 66.497 14.247 56.998 42.745L270.822 218.74L338.23 93.165c13.433-26.868 47.018-13.433 70.528 10.077c23.51 23.51 36.946 57.095 10.078 70.53l-126.7 66.57L428.91 199.43c3.562-1.188 6.903-1.71 10.02-1.644c21.82.455 32.728 29.547 32.728 58.64c0 33.247-14.25 66.497-42.748 56.997l-135.385-42.267l125.233 67.072c3.358 1.68 6.088 3.674 8.246 5.924c15.107 15.75 2.25 44.034-18.322 64.605c-23.51 23.51-57.095 36.947-70.53 10.078l-67.59-127.218a38.494 38.494 0 0 0 21.002-20.885c8.137-19.643-1.19-42.163-20.834-50.3c-19.642-8.136-42.162 1.192-50.298 20.835c-8.137 19.643 1.19 42.162 20.834 50.3a38.504 38.504 0 0 0 29.127.126L311.93 428.91c19 56.998-132.993 56.998-113.994 0l43.605-137.63l-67.77 126.5c-26.867 53.736-134.343-53.74-80.606-80.61l124.156-66.243l-134.232 41.748c-53.435 17.812-56.775-114.662-10.02-115.637c3.117-.065 6.458.456 10.02 1.643l135.914 41.188L94.146 173.77C43.768 148.583 135.08 52.548 168.83 84.92c2.25 2.157 4.245 4.887 5.924 8.245L239.54 217.95L198.683 83.085c-9.5-28.498 23.75-42.746 56.998-42.746z"/></svg>
                    </button>
                  </div>
                  {/** message right! **/}
                  <div className=" float-right clear-both inline-block relative left-4">
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
          <div className="flex mb-10 mt-10 gap-[5%]">
            <div className="w-96 sm:w-80">
              <button
                type="submit"
                className="bg-[#95c3ac] w-96 sm:w-80 rounded-2xl p-5 border border-black flex justify-center"
              >
                <span className="text-black text-3xl text-center">
                  Purchase
                </span>
              </button>
            </div>
            <div className="flex">
              <div className="">
                <button
                  className="border border-black p-5 rounded-full"
                  onClick={handleHeart}
                >
                  <FontAwesomeIcon
                    icon={faHeart}
                    className={`text-4xl sm:text-2xl text-gray-500 ${buttonHeart}`}
                  />
                </button>
              </div>
            </div>
          </div>
          {/** Reviews!! */}
          <div className="bg-white w-[90%] h-1/4 ">
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
                      {[...Array(5)].map((_, index) => {
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
                      descriptiondescriptiondescriptiondescription
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
