import React from "react";
import profilePicture from '../assets/profile-picture.jpg';

const Bio = () => {
  return (
    <section 
      className="biography-container">
      <p 
        className="introduction-text-part-1">
        Hi,
      </p>
      <p 
        className="introduction-text-part-2">
        I'm Andrew Dutson
      </p>
      <img 
        className="profile-img"
        alt="profile of Andrew Dutson"
        src={profilePicture} >
      </img>
    </section>
  );
};

export default Bio;