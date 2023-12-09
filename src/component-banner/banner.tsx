import { useRef , useState } from "react";
import vendorData from "../assets/data/vendorData";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

interface BannerProps {
  userID: number;
}

let a = false;

const Banner = ({ userID }: BannerProps) => {

  const [gradientStyle, setGradientStyle] = useState({color: '#fff'});

  const selectedVendor = vendorData.find((vendor) => vendor.userId === userID);
  const [color, setColor] = useState("#fff");

  const inputRef = useRef<HTMLInputElement>(null);
  const inputRef2 = useRef<HTMLInputElement>(null);

  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    const newStyle = inputRef.current?.value ? {
      color: 'transparent',
      background: inputRef.current?.value,
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    } : {
      color: color,
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      background: 'none',
    };

    console.log(a)
    if (a == true) {
      
      newStyle.background = newStyle.background + " text"
    }
    if (inputRef.current?.value) {
      a = true;
    }
    setGradientStyle(newStyle);
    setModalVisible(false);
  };

  return (
    <>
      {modalVisible && (
        <Fade duration={400}>
          <div className="modal fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-70 z-20">
            <div className="bg-white p-20 flex flex-col gap-5 items-center">
              <h1 className='text-2xl font-bold'>Text color</h1>
              <input
                  ref={inputRef2}
                  type="color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  className=" w-16 h-9"
              />
              <input ref={inputRef} type="text" className="p-2 w-80 h-9 border-2 border-black rounded-2xl" placeholder="Enter gradient code" />
              <button className='bg-[#94C3AD] p-2 pl-4 pr-4 rounded-2xl' onClick={handleCloseModal}>Close</button>
            </div>
          </div>
        </Fade>
      )}
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
            <h1 className="text-3xl font-bold" style={gradientStyle}>
              {selectedVendor?.name}
            </h1>
            <h2 className="text-2xl font-bold" style={gradientStyle}>
              "{selectedVendor?.quote}"
            </h2>
            <div className="flex gap-4 mt-4">
              <Link to={{ pathname: "/chat"}}>
                <button className="bg-[#94C3AD] text-black font-semibold py-2 px-4 rounded border border-black">
                  Chat Now
                </button>
              </Link>
              <button className="bg-[#DD9973] text-black font-semibold py-2 px-4 rounded border border-black">
                Follow
              </button>
              <button className="bg-[#94C3AD] text-black font-semibold py-2 px-4 rounded border border-black" onClick={handleOpenModal}>
                <i className=" bi bi-brush-fill"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
