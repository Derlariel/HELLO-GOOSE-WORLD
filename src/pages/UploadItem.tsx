interface UploadItemProps {
    userID: number;
  }

function UploadItem({ userID }: UploadItemProps) {
  return (
    <>
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold mt-8 2xl:ml-[4%] lg:ml-[3%] mb-4">
          Upload Item
        </h1>
      </div>
    </>
  );
}

export default UploadItem;
