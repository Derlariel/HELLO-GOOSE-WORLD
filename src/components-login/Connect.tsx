interface ConnectProps {
  Link: string;
  ConnectWith: string;
}

const Connect = (props: ConnectProps) => {
    const {Link,ConnectWith} = props;
    return (
   <>
    
    <button className="border border-black rounded-2xl flex justify-center items-center gap-1  bg-white h-16 w-3/5" >
      <div className="mr-auto ml-[5%]"><img className=" w-8 " src={Link} alt="" /></div>
      <div className="mr-[5%]"><a>Connect With {ConnectWith}</a></div>
      <div className="ml-auto"></div>
    </button>
    
   
   </>
  )
}

export default Connect