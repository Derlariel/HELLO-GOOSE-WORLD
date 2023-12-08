import React from 'react';
import ForInput from '../components-login/forInput'
import Button from '../components-login/Button'
import Connect from '../components-login/Connect'
import RegButton from '../components-login/RegisterButton'

const Login: React.FC = () => {
  return (
<>
    
    <div className="bg-[#fcf5f4] w-full pt-16">
      {/* Login Texthead */}
        <div><h1 className="text-center text-6xl font-bold italic">LOGIN</h1></div>

        <div className="flex  w-full py-14 gap-0  ">
        <div className="w-2/4 flex  justify-center border-r-2 border-black gap-y-10  ">
       {/*  user name password */}
        <div className="w-2/4 flex flex-col items-center  gap-6 ">
            <div className="flex flex-col gap-2">
            <div><p>USERNAME :</p></div>
            <div><ForInput /></div>
            </div>
            <div className="flex flex-col gap-2">
            <div><p>Password :</p></div>
            <div><ForInput /> </div>
            <div className="text-xs"><a href="">Forget Password</a></div>
            </div>
            {/* Login and Register Button */}
            <div><Button text="Login"/></div>
            <div><RegButton text="Register"/></div>
          </div>

          
        
          </div>
      {/* connect facebook and google */}
        <div className="w-2/4 flex   justify-center  border-r-1 border-black gap-y-10 ">
        <div className="w-full flex flex-col items-center justify-center  gap-4    ">
          <Connect Link="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png" ConnectWith="Google"/> 
          <span>or</span>
          <Connect Link="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png" ConnectWith="Facebook"/>
          </div>
        </div>
          
          </div>
          {/* Green spance */}
      </div>

    </>
  );
};

export default Login;
