import {
  faCircle,
  faDotCircle,
  faImage,
  faPaperPlane,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import { faCamera } from "@fortawesome/free-solid-svg-icons/faCamera";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Chat = () => {
  return (
    <div className="flex flex-col justify-between bg-[#fcf5f4] h-screen">
      <div className=" flex justify-between items-center border  bg-[#ededec]">
        <div className=" m-5 ml-10 flex items-center">
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="text-4xl text-[#dd9973]"
          />
          <div className=" rounded-full bg-gray-400 mr-2 ml-2">
            <img
              src="../../public/assets/icon2.PNG"
              alt="logo-chat"
              className="w-16"
            />
          </div>

          <div>
            <h1 className="text-xl font-bold">@Username</h1>
            <h2>
              <FontAwesomeIcon
                icon={faCircle}
                className="text-green-500 text-[10px] pr-1 text-center"
              />
              <span className="opacity-50">Active now</span>
            </h2>
          </div>
        </div>
        <div className="flex flex-col gap-2 text-[#dd9973] mr-5">
          <FontAwesomeIcon icon={faDotCircle} className="text-xs" />
          <FontAwesomeIcon icon={faDotCircle} className="text-xs" />
          <FontAwesomeIcon icon={faDotCircle} className="text-xs" />
        </div>
      </div>
      <div className="mb-auto">
        <div className="m-10">
          <div className="flex gap-5">
            <img
              src="/assets/icon1.PNG"
              alt="chat-logo"
              className=" w-16 h-16 border border-black rounded-full"
            />
            <div className="bg-[#ceeee0] w-[32em] h-28 rounded-lg"></div>
          </div>
          <div>
            <div className="flex justify-end gap-5">
              <img
                src="/assets/icon1.PNG"
                alt="chat-logo"
                className=" w-16 h-16 border border-black rounded-full translate-x-[34em]"
              />
              <div className="bg-[#ceeee0] w-[32em] h-28 rounded-lg relative right-20"></div>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-[#ededec] border flex gap-14 relative top-14 h-16">
        <div className="flex justify-between items-center ">
          <div className="ml-5 flex  gap-3">
            <div>
              <FontAwesomeIcon
                icon={faPlusCircle}
                className="text-[3em] text-[#dd9973]"
              />
            </div>
            <div>
              <FontAwesomeIcon
                icon={faCamera}
                className="text-[3em] text-[#dd9973]"
              />
            </div>
            <div>
              <FontAwesomeIcon
                icon={faImage}
                className="text-[3em] text-[#dd9973]"
              />
            </div>
          </div>
        </div>

        <div className="w-3/4 bg-[#d9d9d9] rounded-lg">
          <h1 className="opacity-50 p-3 text-center text-2xl">
            Type a Message Here.
          </h1>
        </div>
        <div>
          <FontAwesomeIcon
            icon={faPaperPlane}
            className="text-[3em] text-[#dd9973] rotate-45 relative right-10 "
          />
        </div>
      </div>
    </div>
  );
};

export default Chat;
