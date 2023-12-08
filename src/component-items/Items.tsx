import { Link } from "react-router-dom";
interface ItemProps {
  id: number;
  content: string;
  name: string;
  description: string;
}

const items = ({ id, content, name, description }: ItemProps) => {
  return (
    <>
      {/* items-zone */}
      <div className="flex flex-col justify-center items-center text-center border border-b-gray-800 rounded-md">
        <span
          className=" bg-contain bg-no-repeat bg-center w-44 md:w-[28em] lg:w-[18em] sm:w-48 xl:w-[25em] 2xl:w-[28em] h-52 m-3 bg-[#dc9873] rounded-t-md flex justify-center items-center"
          style={{ backgroundImage: `url(${content})` }}
        ></span>
        <h1 className="relative right-[4.5em] sm:right-[4.5em] md:right-[0] font-bold">
          {name}
        </h1>
        <div className="md:w-[28em] lg:w-[18em] sm:w-48 xl:w-[25em] 2xl:w-[28em]">
          <p className="text-[10px] whitespace-wrap">{description}</p>
        </div>

        {/** button-purchase! **/}
        <div className="self-end m-3">
          <button
            type="submit"
            className="bg-[#95c3ac] rounded-2xl pl-4 pr-4 pb-2 pt-2 border border-black flex justify-center"
          >
            <span className="text-black text-[12px] text-center">
              <Link to={{
                pathname: "/product",
              }} state={{ productId: id }}>
                Purchase
              </Link>
            </span>
          </button>
        </div>
      </div>
      {/* items-zone */}
    </>
  );
};

export default items;
