import vendorData from '../assets/data/vendorData';

interface SmallBannerProps {
  userID: number;
}

const SmallBanner = ({ userID }: SmallBannerProps) => {
    const selectedVendor = vendorData.find((vendor) => vendor.userId === userID);

    return (
        <>
            <div className='h-96 pl-[5%] pr-[5%] mt-12'>
                <img className='w-full h-full object-cover' src={selectedVendor?.smallBanner} alt="profile" />
            </div>
        </>
    );
};

export default SmallBanner;
