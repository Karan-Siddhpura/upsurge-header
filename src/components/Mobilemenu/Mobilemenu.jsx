import "./Mobilemenu.css";
import { RxCross1 } from "react-icons/rx";
import { IoIosArrowForward } from "react-icons/io";
import CustomAccordion from "../CustomAccordian/CustomAccordian";
import { BiCategory } from "react-icons/bi";
import { BsMusicPlayer } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { CgMediaLive } from "react-icons/cg";
import { PiPhoneCallLight } from "react-icons/pi";
import { MdHelpOutline } from "react-icons/md";
import CourseContainer from "../CourseContainer/CourseContainer";
import { Link } from "react-router-dom";

const Mobilemenu = ({ handleToggleMenu }) => {
  const courses = [
    "Momentum Swing Trading Strategy",
    "Passive Income through Options Selling",
    "Options Scalping Strategy (Tamil)",
    "Price Action by Sanjay Kathuria",
    "Option Buying Strategy By Bharat Jhunjhunwala",
  ];
  return (
    <div className="mobile-menu">
      <header className="m-header">
        <div className="menu">
          <Link to="/" className="logo">
            <p>Upsurge</p>
          </Link>
          <div className="cross-btn" onClick={handleToggleMenu}>
            <RxCross1 />
          </div>
        </div>
        <div className="mobile-profile">
          <div className="mobile-profile-left">
            <div className="mobile-profile-icon">
              <p>ab</p>
            </div>
            <div className="mobile-profile-detail">
              <p className="name">Karan</p>
              <p className="view-profile">View Profile</p>
            </div>
          </div>
          <div className="mobile-profile-right">
            <IoIosArrowForward />
          </div>
        </div>

        <div className="mobile-profile-btn-main">
          <Link
            to="/test"
            onClick={handleToggleMenu}
            className="mobile-profile-btn"
          >
            <p>Dashboard</p>
          </Link>
          <Link
            to="/test"
            className="mobile-profile-btn"
            onClick={handleToggleMenu}
          >
            <p>My Leadning</p>
          </Link>
        </div>
      </header>

      <div className="accordian-main">
        <CourseContainer />
        <CustomAccordion
          isBtn={true}
          icon={<BsMusicPlayer />}
          title={"Coureses"}
          list={courses}
          handleToggleMenu={handleToggleMenu}
        />
        <CustomAccordion
          isBtn={false}
          icon={<BiCategory />}
          title={"Categories"}
          list={courses}
          handleToggleMenu={handleToggleMenu}
        />
        <CustomAccordion
          isBtn={false}
          icon={<CgMediaLive />}
          title={"Live Classes"}
          list={[]}
          handleToggleMenu={handleToggleMenu}
        />
        <CustomAccordion
          isBtn={false}
          icon={<PiPhoneCallLight />}
          title={"1:1 Guidance"}
          list={[]}
          handleToggleMenu={handleToggleMenu}
        />
        <CustomAccordion
          isBtn={false}
          icon={<MdHelpOutline />}
          title={"Contact Us"}
          list={[]}
          handleToggleMenu={handleToggleMenu}
        />
      </div>
      <div className="logout">
        <div className="logout-icon">
          <FiLogOut />
        </div>
        <p>Logout</p>
      </div>
    </div>
  );
};

export default Mobilemenu;
