import { useState } from "react";
import vendorData from "../assets/data/vendorData";

interface BannerProps {
  userID: number;
}

const Banner = ({ userID }: BannerProps) => {
  const selectedVendor = vendorData.find((vendor) => vendor.userId === userID);
  const [color, setColor] = useState("#fff");

  return (
    <div
      className="banner bg-no-repeat bg-cover flex items-center pt-[5%] pb-[5%] border-b-2 border-black"
      style={{ backgroundImage: `url(${selectedVendor?.backgroundImage})` }}
    >
      <div className="ml-[8%] flex flex-row gap-12">
        <img
          className="rounded-full w-52 h-52 object-cover border-2 border-black"
          src={selectedVendor?.profileImage}
          alt="profile"
        />
        <div className="flex flex-col justify-center items-start">
          <h1 className="text-3xl font-bold" style={{ color: color }}>
            {selectedVendor?.name}
          </h1>
          <h2 className="text-2xl font-bold" style={{ color: color }}>
            "{selectedVendor?.quote}"
          </h2>
          <div className="flex gap-4 mt-4">
            <button className="bg-[#94C3AD] text-black font-semibold py-2 px-4 rounded border border-black">
              Chat Now
            </button>
            <button className="bg-[#DD9973] text-black font-semibold py-2 px-4 rounded border border-black">
              Follow
            </button>
            <input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className=" w-16 h-9"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
