interface UploadItemProps {
    userID: number;
  }

function UploadItem({ userID }: UploadItemProps) {

  return (
    <>
      <div className="flex flex-row gap-8">
        <div className=" h-[35rem] w-[30rem] ml-[3%] mt-[2%] border-white border-8 rounded-2xl">
          <img className="w-full h-full object-cover rounded-2xl" src="https://cdn.britannica.com/16/187216-050-CB57A09B/tomatoes-tomato-plant-Fruit-vegetable.jpg" />
        </div>
        <div className="flex flex-col mt-[2%]">
          <div className="flex flex-row justify-around">
            <div>
              <h1 className="text-2xl font-bold">Product Name</h1>
              <input className="bg-[#D9D9D9] rounded-lg p-2"></input>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UploadItem;
