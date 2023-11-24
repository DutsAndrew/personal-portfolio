import React from "react";
const resume = require('../assets/Andrew_Dutson_Resume.pdf');

const Resume = () => {

  const resumeText = "Resume, (download - 100kb)";

  return (
    <section 
      className="resume-container">
      <a 
        className="resume"
        href={resume}
        download="Andrew Dutson's Resume" >
        {resumeText}
      </a>
    </section>
  );
};

export default Resume;