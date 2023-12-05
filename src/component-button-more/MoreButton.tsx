import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
const MoreButton = () => {
  return (
    <>
      <div className="mt-4 flex justify-end mr-5">
        <button
          type="submit"
          className="bg-[#dc9873] w-24 h-7 rounded-3xl flex justify-between items-center text-white font-bold"
        >
          <span className="ml-3">more</span>
          <FontAwesomeIcon icon={faChevronUp} className="rotate-90 mr-2" />
        </button>
      </div>
    </>
  );
};

export default MoreButton;
