import React from "react";
import "./Programs.css";
import image_1 from "../../assets/image_1.jpeg";
import image_2 from "../../assets/image_2.jpeg";
import image_3 from "../../assets/image_3.jpeg";

const Programs = () => {
  return (
    <div className="programs">
      <div className="program">
        <img src={image_1} alt="image_1" />
        <div className="caption">
          <i class="fa-solid fa-graduation-cap"></i>
        </div>
      </div>
      <div className="program">
        <img src={image_2} alt="image_2" />
        <div className="caption">
          <i class="fa-solid fa-graduation-cap"></i>
        </div>
      </div>
      <div className="program">
        <img src={image_3} alt="image_3" />
        <div className="caption">
          <i class="fa-solid fa-graduation-cap"></i>
        </div>
      </div>
    </div>
  );
};

export default Programs;
