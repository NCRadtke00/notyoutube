import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  getPopularVideos,
  getVideosByCategory,
} from "../../redux/actions/videos.action";
import "./_categoriesBar.scss";
const keywords = [
  "All",
  "React js",
  "Style-Components",
  "React Native",
  "Rest API",
  ".Net 5.0 full stack",
  "Ehring lounge Jazz",
  "Best of John Madden",
  "Green Bay Packers football highlights",
  "How its made",
  "Python",
  "Docker",
  "Apollo",
  "Gatsby",
  "Poor Code",
  "AWS",
  "Firebase",
  "Angular js",
  "ORM",
  "Big O notation",
  "AI and Deep Learning",
];

const CategoriesBar = () => {
  const [activeElement, setActiveElement] = useState("All");

  const dispatch = useDispatch();
  const handleClick = (value) => {
    setActiveElement(value);
    if (value === "All") {
      dispatch(getPopularVideos());
    } else {
      dispatch(getVideosByCategory(value));
    }
  };

  return (
    <div className="categoriesBar">
      {keywords.map((value, i) => (
        <span
          onClick={() => handleClick(value)}
          key={i}
          className={activeElement === value ? "active" : ""}
        >
          {value}
        </span>
      ))}
    </div>
  );
};

export default CategoriesBar;
