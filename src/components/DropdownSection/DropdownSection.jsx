import "./DropdownSection.css";
import { IoIosArrowForward } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
const DropdownSection = ({
  sectionHeading,
  textForDropDown,
  requiredButton,
}) => {
  return (
    <div className="drop-down-section">
      <div className="section-heading">
        <p>{sectionHeading}</p>
      </div>
      <div className="section-links">
        {textForDropDown?.map((item, index) => (
          <Link to="/test" className="course-item" key={index}>
            {item?.img && <div>Image</div>}
            <p>{item.text}</p>
            <div className="arrow">
              <IoIosArrowForward />
            </div>
          </Link>
        ))}
      </div>
      {requiredButton && (
        <Link to="/test" className="courses-btn">
          <p>View All Courses</p>
          <div className="courses-btn-arrow">
            <FaArrowRight />
          </div>
        </Link>
      )}
    </div>
  );
};

export default DropdownSection;
