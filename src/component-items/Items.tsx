interface ItemProps {
  content: string;
  name: string;
  description: string;
}

const items = ({ content, name, description }: ItemProps) => {
  return (
    <>
      {/* items-zone */}
      <div className="w-full md:w-[29em] lg:w-[25em] xl:w-[30em] sm:w-52 h-60 flex flex-col justify-center items-center text-center border border-b-gray-800 rounded-md">
        <span className="w-full md:w-[28em] lg:w-[24em] sm:w-48 xl:w-[29em] h-44 mt-1 bg-[#dc9873] rounded-t-md flex justify-center items-center">
          <img src={content} />
        </span>
        <h1 className="relative right-[4.5em] sm:right-[4.5em] md:right-[0] font-bold">
          {name}
        </h1>
        <p className="text-[10px] whitespace-normal">{description}</p>
        {/** button-purchase! **/}
        <div className="mb-1 mt-1 relative left-16 sm:left-16 md:left-48 lg:left-[28em] xl:left-[-2.5em]">
          <button
            type="submit"
            className="bg-[#95c3ac] rounded-md w-[4em] lg:w-[4em] h-5 lg:h-5 lg:relative xl:left-60 xl:bottom-0 lg:bottom-0 border lg:left-32 border-black flex justify-center"
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
