import { Link } from "react-router-dom";
import "./CourseContainer.css";
import { IoIosArrowRoundForward } from "react-icons/io";
const CourseContainer = () => {
  return (
    <div className="course-container">
      <span className="is-new">New</span>
      <div className="content">
        <p className="content-title">Course</p>
        <p className="content-p">
          Gain the knowledge to confidently clear NISM certification exams
        </p>
        <Link to="/test" className="content-link">
          <p>See courses</p>
          <IoIosArrowRoundForward />
        </Link>
      </div>
    </div>
  );
};

export default CourseContainer;
