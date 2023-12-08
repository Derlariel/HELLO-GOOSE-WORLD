import "./css/Nav.css";
import kmutt_logo from "../assets/nav/ant_kmutt.png";
import profile_logo from "../assets/nav/profile.png";
import orange from "/assets/orange.png";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div
        id="nav"
        className="flex flex-row justify-between items-center h-24 pl-8 pr-8"
      >
        <div id="logo" className=" w-80 mb-5">
          <Link to={"/"}>
            <img src={kmutt_logo} />
          </Link>
        </div>
        <div className="flex flex-row justify-center items-center">
          <div
            id="search"
            className="flex flex-row gap-3 justify-center items-center rounded-3xl pl-3 pr-3 pt-1 pb-1 mr-8 shadow-lg"
          >
            <input type="text" id="search"></input>
            <i className="bi bi-search"></i>
          </div>
          <div className="flex flex-row gap-5 justify-center items-center">
            <div className="btn flex flex-row justify-center items-center rounded-2xl w-[4em] pl-[2%] pr-[4%]">
              <div className="w-10">
                <img className="h-full w-full" src={orange} alt="orange" />
              </div>
              <p>0</p>
            </div>
            <div className="btn flex flex-row justify-center items-center rounded-full w-9">
              <Link to={{ pathname: "/uploadItem"}}>
                <i className="bi bi-cart2" style={{ fontSize: "1.5em" }}></i>
              </Link>
            </div>
            <div className="btn flex flex-row justify-center items-center rounded-full w-9">
              <i className="bi bi-heart" style={{ fontSize: "1.5em" }}></i>
            </div>
            <div className="btn flex flex-row justify-center items-center rounded-full w-14">
              <Link to={"/login"}>
                <img src={profile_logo} alt="Profile" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
