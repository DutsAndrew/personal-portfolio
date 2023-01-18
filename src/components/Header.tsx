import React from "react";

const Header = () => {

  const handleScrollToTop = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    console.log(e);
  };

  const handleScrollToProjects = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    console.log(e);
  };

  const handleScrollToContact = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    console.log(e);
  };

  const handleScrollToResume = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    console.log(e);
  };

  return (
    <header className="header-container">

      <h1 className="signature-container">
        <p className="sig-part-1">
          A
        </p>
        <p className="sig-part-2">
          D
        </p>
      </h1>

      <nav className="header-nav-container">
        <button 
          className="nav-header-top"
          onClick={(e) => handleScrollToTop(e)} >
          <img 
            className="nav-header-top-svg"
            alt="arrow pointing up" >
          </img>
          Top
        </button>
        <button 
          className="nav-header-projects"
          onClick={(e) => handleScrollToProjects(e)} >
          <img 
            className="nav-header-projects-svg"
            alt="html opening and closing tags" >
          </img>
          Projects
        </button>
        <button 
          className="nav-header-contact"
          onClick={(e) => handleScrollToContact(e)} >
          <img 
            className="nav-header-contact-svg"
            alt="outline of a person">
          </img>
          Contact
        </button>
        <button 
          className="nav-header-resume"
          onClick={(e) => handleScrollToResume(e)} >
          <img 
            className="nav-header-resume-svg"
            alt="resume" >
          </img>
          Resume
        </button>
      </nav>

    </header>
  );
};

export default Header;