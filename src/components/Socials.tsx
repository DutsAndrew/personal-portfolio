import React from "react";
import linkedinSVG from '../assets/linkedin.svg';
import githubSVG from '../assets/github.svg';
import emailSVG from '../assets/email-fast.svg';

const Socials = () => {

  const linkedinLink = 'https://www.linkedin.com/in/dutson/';
  const githubLink = 'https://github.com/DutsAndrew';

  return (
    <nav 
      className="socials-container">

      <a className="linkedin-link"
        href={linkedinLink}
        data-testid="linkedin-test" >
        <img 
          className="linkedin-svg" 
          alt="linkedin logo"
          src={linkedinSVG} >
        </img>
      </a>

      <a className="github-link"
        href={githubLink}
        data-testid="github-test" >
        <img 
          className="github-svg" 
          alt="github logo"
          src={githubSVG} >
        </img>
      </a>

      <a 
        className="email-button" 
        data-testid="email-test"
        href="mailto:dutsandrew@gmail.com" >
        <img 
          className="email-svg" 
          alt="email icon"
          src={emailSVG} >
        </img>
      </a>

    </nav>
  );
};

export default Socials;