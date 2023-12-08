import categoryData from '../assets/data/category';
import React, { useRef , useState } from 'react';
import products , { addProduct } from '../assets/data/product';

interface UploadItemProps {
  userID: number;
}

function UploadItem({ userID }: UploadItemProps) {

  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [imageUrl, setImageUrl] = useState('/assets/icon_phone.png');

  // Modal for imageInsert
  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = (newImageUrl: string) => {
    setImageUrl(newImageUrl);
    setModalVisible(false);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImageUrl(event.target.value);
  };

  // Modal for complete
  const handleOpenModal2 = () => {
    setModalVisible2(true);
  };

  const handleCloseModal2 = () => {
    setModalVisible2(false);
  };


  const inputRef = useRef<HTMLInputElement>(null);
  const categoryRef = useRef<HTMLSelectElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const handleSubmit = () => {

    const lastProductId = products[products.length - 1].id;

    const inputValue = inputRef.current?.value;
    const categoryValue = categoryRef.current?.value;
    const descriptionValue = descriptionRef.current?.value;
    const priceValue = priceRef.current ? parseInt(priceRef.current?.value) : 0;
    const imageValue = imageRef.current?.src;

    if (!inputValue || !categoryValue || !descriptionValue || !priceValue || !imageValue) {
      return;
    }

    addProduct({
      id: lastProductId+1,
      userId: 1,
      name: inputValue,
      image: imageValue,
      description: descriptionValue,
      productCategory: categoryValue,
      price: priceValue,
      sales: 0,
    });

    handleOpenModal2();
  };
  
  return (
    <>
      {/* Image insert */}
      {modalVisible && (
        <div className="modal fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-70 z-20">
          <div className="bg-white p-20 flex flex-col gap-5 items-center">
            <h1 className='text-2xl font-bold'>Image link</h1>
            <input className='border border-black p-2 rounded-2xl' type="text" value={imageUrl} onChange={handleImageChange} />
            <button className='bg-[#94C3AD] p-2 pl-4 pr-4 rounded-2xl' onClick={() => handleCloseModal(imageUrl)}>Close</button>
          </div>
        </div>
      )}
      {/* Complete Modal */}
      {modalVisible2 && (
        <div className="modal fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-70 z-20">
          <div className="bg-white p-20 flex flex-col items-center gap-5 opacity-1">
            <div className='w-64'>
              <img className='w-full h-full' src='/assets/icon_complete.png'/>
            </div>
            <h1 className='text-2xl font-bold'>Upload Complete!</h1>
            <button className='bg-[#94C3AD] p-2 pl-4 pr-4 rounded-2xl' onClick={() => handleCloseModal2()}>Close</button>
          </div>
        </div>
      )}
      <div className="flex flex-row gap-8">
      <div className=" h-[35rem] w-[30rem] ml-[3%] mt-[2%] border-white border-8 rounded-2xl basis-1/4">
          <img ref={imageRef}
            className="w-full h-full object-cover rounded-2xl"
            src={imageUrl}
          />
          <button onClick={handleOpenModal} className="bg-[#B6B6B6] rounded-lg p-2 w-full text-white text-2xl font-bold mt-[10%]"><i className="bi bi-upload"></i> Upload File</button>
        </div>
        <div className="flex flex-col mt-[2%] ml-[2%] mr-[2%] basis-3/4 gap-5">
          <div className="flex flex-row justify-around">
            <div className='basis-1/2'>
              <h1 className="text-2xl font-bold">Product Name</h1>
              <input ref={inputRef} className="bg-[#D9D9D9] rounded-lg p-2 w-[80%]"></input>
            </div>
            <div className='basis-1/2'>
              <h1 className="text-2xl font-bold">Category</h1>
              <select ref={categoryRef} className="bg-[#D9D9D9] rounded-lg p-2 w-[80%]">
                {categoryData.map((category, index) => (
                  <option key={index} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className='flex flex-col justify-around'>
            <h1 className="text-2xl font-bold">Description</h1>
            <textarea ref={descriptionRef} className="bg-[#D9D9D9] rounded-lg p-2 w-[90%] h-56"></textarea>
          </div>
          <div className='flex flex-row justify-around'>
            <div className='basis-1/2'>
              <h1 className="text-2xl font-bold">Price</h1>
              <input ref={priceRef} className="bg-[#D9D9D9] rounded-lg p-2 w-[80%]"></input>
            </div>
            <div className='basis-1/2'>
            </div>
          </div>
          <div className="flex flex-row justify-center mt-[9%] mr-[8.7%]">
            <button onClick={handleSubmit} className="bg-[#94C3AD] rounded-lg p-5 pl-20 pr-20 text-black text-3xl font-semibold">Submit</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default UploadItem;
