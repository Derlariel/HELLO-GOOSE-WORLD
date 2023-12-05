import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

const category = () => {
  return (
    <>
      <div className="mt-5 mr-6 ml-6">
        {/* category-zone header! */}
        <div className="flex justify-between items-center">
          <div className="flex justify-between">
            <div className="flex justify-between items-center bg-[#dc9873] w-44 h-10 text-md">
              <h1 className=" text-white ml-2">Category</h1>
              <FontAwesomeIcon icon={faChevronUp} className="rotate-180 mr-2" />
            </div>
          </div>
          <hr className="border-[#dc9873] border w-9/12 ml-6 " />
        </div>

        {/* category-zone */}
      </div>
    </>
  );
};

export default category;
