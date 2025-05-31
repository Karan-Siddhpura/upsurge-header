import "./ProfileMenu.css";
import { TiChartBarOutline } from "react-icons/ti";
import { CgProfile } from "react-icons/cg";
import { BsMusicPlayer } from "react-icons/bs";
import { LuCrown } from "react-icons/lu";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
import { Link } from "react-router-dom";

const ProfileMenu = () => {
  const profileLinks = [
    {
      component: <TiChartBarOutline />,
      text: "My Dashboard",
    },
    {
      component: <BsMusicPlayer />,
      text: "My Learning",
    },
    {
      component: <CgProfile />,
      text: "Profile",
    },
    {
      component: <LuCrown />,
      text: "Upgrade to Pro",
    },
    {
      component: <IoIosHelpCircleOutline />,
      text: "Help",
    },
  ];

  return (
    <div className="profile-menu">
      {profileLinks.map((item, index) => (
        <Link to="/test" className="profile-link" key={index}>
          <div className="profile-link-icon">{item.component}</div>
          <p>{item.text}</p>
        </Link>
      ))}
      <div className="partision"></div>
      <div className="profile-link">
        <div className="profile-link-icon">
          <IoIosLogOut />
        </div>
        <p>Logout</p>
      </div>
    </div>
  );
};

export default ProfileMenu;
