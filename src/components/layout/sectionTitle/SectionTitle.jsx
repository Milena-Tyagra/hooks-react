import "./SectionTitle.css";
import React from "react";

const SectionTitle = ({ title, subtitle }) => (
  <div className="SectionTitle">
    <h3>
      {title} - {subtitle}
    </h3>
  </div>
);

export default SectionTitle;
