import React, { useState } from "react";
import "./CustomAccordian.css";
import { IoIosArrowForward } from "react-icons/io";

import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const CustomAccordion = ({ icon, title, list, isBtn, handleToggleMenu }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleAccordianToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-container">
      <div className="accordion-header" onClick={handleAccordianToggle}>
        <div className="accordian-left">
          <div className="accordion-icon">{icon}</div>
          <span>{title}</span>
        </div>
        <span className={`accordion-arrow-icon ${isOpen ? "open" : ""}`}>
          <IoIosArrowForward />
        </span>
      </div>

      {isOpen && (
        <div className="accordion-content">
          {Array.isArray(list) &&
            list.length > 0 &&
            list.map((course, index) => (
              <Link
                to="/test"
                key={index}
                onClick={handleToggleMenu}
                className="accordion-item"
              >
                <p>{course}</p>
                <div className="arrow-icon">
                  <IoIosArrowForward />
                </div>
              </Link>
            ))}

          {isBtn && (
            <div className="accordion-button">
              <p>View All Courses</p>
              <FaArrowRight />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CustomAccordion;
