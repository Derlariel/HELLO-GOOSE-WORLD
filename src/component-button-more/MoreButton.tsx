import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
const MoreButton = () => {
  return (
    <>
      <div className=" mt-16 flex justify-end mr-5">
        <button
          type="submit"
          className="bg-[#dc9873] border-2 w-24 lg:w-36 h-7 lg:h-10 rounded-3xl flex justify-between items-center text-white font-bold"
        >
          <span className="ml-3 text-2xl">more</span>
          <FontAwesomeIcon
            icon={faChevronUp}
            className="rotate-90 mr-2  rounded-md"
          />
        </button>
      </div>
    </>
  );
};

export default MoreButton;
