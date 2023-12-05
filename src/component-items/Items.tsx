interface ItemProps {
  content: string;
  name: string;
  description: string;
}

const items = ({ content, name, description }: ItemProps) => {
  return (
    <>
      {/* items-zone */}
      <div className=" w-52 h-60 flex flex-col justify-center items-center  text-center border  border-b-gray-800 rounded-md">
        <span className=" w-48 h-44 mt-1  bg-[#dc9873]  rounded-t-md flex justify-center items-center ">
          {content}
        </span>
        <h1 className="relative right-[4.5em] font-bold">{name}</h1>
        <p className=" text-[10px] whitespace-normal ">{description}</p>

        {/** button-purchase! **/}
        <div className="mb-1 mt-1 relative left-16">
          <button
            type="submit"
            className="bg-[#95c3ac] rounded-md w-[4em] h-5 border border-black flex justify-center"
          >
            <span className="text-black text-[12px] text-center">Purchase</span>
          </button>
        </div>
      </div>
      {/* items-zone */}
    </>
  );
};

export default items;
