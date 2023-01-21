import React from "react";
import topSVG from '../assets/arrow-up.svg';
import projectsSVG from '../assets/code-braces.svg';
import contactSVG from '../assets/account.svg';
import resumeSVG from '../assets/file-document.svg';

const Header = () => {

  const handleScrollToTop = (): void => {
    window.scrollTo(0, document.body.scrollHeight - document.body.scrollHeight);
  };

  const handleScrollToProjects = (): void => {
    // header blocks view, so it scrolls to bottom of tools container instead
    const toolItem = document.querySelector('.tool-container');
    if (toolItem) {
      toolItem.scrollIntoView({block: 'start', inline: 'nearest'});
    };
  };

  const handleScrollToContact = (): void => {
    window.scrollTo(0, document.body.scrollHeight);
  };

  const handleScrollToResume = (): void => {
    window.scrollTo(0, document.body.scrollHeight);
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
          onClick={() => handleScrollToTop()} >
          <img 
            className="nav-header-top-svg"
            alt="arrow pointing up"
            src={topSVG}
            data-testid="top-svg-test" >
          </img>
          Top
        </button>
        <button 
          className="nav-header-projects"
          onClick={() => handleScrollToProjects()} >
          <img 
            className="nav-header-projects-svg"
            alt="html opening and closing tags"
            src={projectsSVG}
            data-testid="project-svg-test" >
          </img>
          Projects
        </button>
        <button 
          className="nav-header-contact"
          onClick={() => handleScrollToContact()} >
          <img 
            className="nav-header-contact-svg"
            alt="outline of a person"
            src={contactSVG}
            data-testid="contact-svg-test" >
          </img>
          Contact
        </button>
        <button 
          className="nav-header-resume"
          onClick={() => handleScrollToResume()} >
          <img 
            className="nav-header-resume-svg"
            alt="resume"
            src={resumeSVG}
            data-testid="resume-svg-test" >
          </img>
          Resume
        </button>
      </nav>

    </header>
  );
};

export default Header;