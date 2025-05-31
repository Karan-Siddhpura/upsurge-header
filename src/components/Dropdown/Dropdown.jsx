// src/components/Dropdown.jsx
import CourseContainer from "../CourseContainer/CourseContainer";
import DropdownSection from "../DropdownSection/DropdownSection";
import "./Dropdown.css";

const Dropdown = () => {
  const trendingCourses = [
    {
      text: "Momentum Swing Trading Strategy",
    },
    {
      text: "Passive Income through Options Selling",
    },
    {
      text: "Options Scalping Strategy (Tamil)",
    },
    {
      text: "Price Action by Sanjay Kathuria",
    },
    {
      text: "Option Buying Strategy By Bharat Jhunjhunwala",
    },
  ];

  const topCategories = [
    {
      text: "Option Trading",
    },
    {
      text: "Technical Analysis",
    },
    {
      text: "Trading Stratergies",
    },
    {
      text: "Stock Market Investing",
    },
  ];

  return (
    <div className="dropdown">
      <DropdownSection
        sectionHeading={"Trending Courses"}
        textForDropDown={trendingCourses}
        requiredButton={true}
      />
      <DropdownSection
        sectionHeading={"Top Categories"}
        textForDropDown={topCategories}
        requiredButton={false}
      />
      <CourseContainer />
    </div>
  );
};

export default Dropdown;
