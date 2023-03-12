import React, { useEffect } from "react";
import openArrow from '../assets/arrow-top-right.svg';
import espressitIMG from '../assets/espressit-ref.png';
import waldoIMG from '../assets/waldo-ref.png';
import libraryIMG from '../assets/library-ref.png';
import steamStoreIMG from '../assets/steam-store-ref.png';
import weatherIMG from '../assets/weather-ref.png';

const Projects = () => {

  const projects = [
    {
      name: 'Espressit - Social Media App (Fullstack Application)',
      code: 'https://github.com/DutsAndrew/espressit-social-media-app',
      live: 'https://dutsandrew.github.io/espressit-social-media-app/',
      description: 'Espressit is a comprehensive full-stack social media app that included user authentication (using both Google Auth and normal authentication), CRUD functionality, and full test coverage with Jest. Optimized performance through code splitting, React hooks, and state management. Achieved high scores on all Lighthouse tests (IE. Performance, Accessibility, SEO, and Best Practices).',
      tools: 'ReactJS, React Components, Typescript, Jest, Firebase, CSS, Git, Bad Words Filter, uniqid, and svgs',
      built: 'December 2022',
      testid: 'espressit-test',
      orientation: 'left',
      imgRef: espressitIMG,
      infoTag: 'Web, Mobile',
    },
    {
      name: 'Where\'s Waldo - Photo Tagging App (Fullstack Application)',
      code: 'https://github.com/DutsAndrew/photo-tagging-app',
      live: 'https://dutsandrew.github.io/photo-tagging-app/',
      description: 'Wheres\'s Waldo is a digitalized version of the Where\'s Waldo books with a responsive design, ensuring seamless usability across multiple devices, including desktops, tablets, and smartphones. Developed Page X/Y coordinate calculations for selecting characters, API verification for correct choices, and a leader board for saving user names based on their score. Achieved full test coverage in Jest.',
      tools: 'ReactJS, Typescript, Jest, Firebase, CSS, Git, uniqid, svgs',
      built: 'November 2022',
      testid: 'photo-tagging-test',
      orientation: 'right',
      imgRef: waldoIMG,
      infoTag: 'Web, Mobile',
    },
    {
      name: 'Steam Store - Shopping App (Frontend API Application)',
      code: 'https://github.com/DutsAndrew/shopping-cart',
      live: 'https://dutsandrew.github.io/shopping-cart/',
      description: 'This app is a responsive Steam Store clone that integrates with the Steam Store API, allowing users to browse and search for games, modify quantities, and track total cost in their cart. Achieved full test coverage in Jest. Leveraged React hooks and state for fast and responsive page updates.',
      tools: 'ReactJS, JavaScript, Jest, STEAM API, CSS, Git, uniqid',
      built: 'October 2022',
      testid: 'shopping-test',
      orientation: 'right',
      imgRef: steamStoreIMG,
      infoTag: 'Web Only',
    },
    {
      name: 'Reading Library (Fullstack Application)',
      code: 'https://github.com/DutsAndrew/library-app',
      live: 'https://dutsandrew.github.io/library-app/',
      description: 'In Reading Library, users can add books they want to read or have read to their library. Upon authentication, a user instance is created on the backend and all books created or deleted will be changed on the server. Users will see this change on the front end instantly. In addition users can mark their books as "read" or "unread"',
      tools: 'ReactJS, TypeScript, Firebase, CSS, Git, uniqid, svgs',
      built: 'November 2022',
      testid: 'library-test',
      orientation: 'left',
      imgRef: libraryIMG,
      infoTag: 'Web Only',
    },
    {
      name: 'Weather App (Frontend API Application)',
      code: 'https://github.com/DutsAndrew/weather-app',
      live: 'https://dutsandrew.github.io/weather-app/',
      description: 'The Weather App consumes the openweather API; users can search for their local weather or the weather from any location they choose... The current weather as well as the daily and hourly forecast will be fetched and displayed to the user within seconds.',
      tools: 'JavaScript, openweather API, CSS, Git',
      built: 'July 2022',
      testid: 'weather-test',
      orientation: 'left',
      imgRef: weatherIMG,
      infoTag: 'Web Only',
    },
  ];

  useEffect(() => {
    // adds event listeners to projects for reveal transition after they've rendered to page
    window.addEventListener("scroll", revealProject);
  });

  const revealProject = (): void => {
    const allProjects = document.querySelectorAll('#project');

    for (let i = 0; i < allProjects.length; i++) {
      const windowHeight = window.innerHeight,
            elementTop = allProjects[i].getBoundingClientRect().top,
            elementVisible = 150;

      if (elementTop && windowHeight && elementVisible) {
        if (elementTop < windowHeight - elementVisible) {
          allProjects[i].classList.add('active');
        } else {
          allProjects[i].classList.remove('active');
        };
      };
    };
  };

  return (
    <section 
      className="projects-container">
      <h2
        className="projects-header-text">
        Projects
      </h2>
      <ul 
        className="projects">
        {Array.isArray(projects) && projects.map((project) => {
          return <li 
            id="project"
            className={project.orientation}
            key={project.name}
            data-testid={project.testid} >

            <div 
              className="project-info-container" >
              <p 
                className="project-name-text">
                {project.name}
              </p>
              <p 
                className="project-description-text" >
                {project.description}
              </p>
              <p className="project-tools-text">
                <strong>
                  Tools: &nbsp;
                </strong> 
                <em>
                  {project.tools}
                </em>
              </p>

              <h3 
                className="info-tag-text">
                Available On: {project.infoTag}
              </h3>
            </div>

            <div className="project-references-container">

              <div 
                className="project-reference-img">
                <img 
                  className="project-image"
                  src={project.imgRef}
                  alt={project.name}>
                </img>
              </div>

              <div 
                className="project-src-container" >
                <div
                  className="project-src-live-container">
                  <a 
                    className="project-src-live-link"
                    href={project.live} >
                    Live
                  </a>
                  <img 
                    className="project-src-live-svg"
                    src={openArrow}
                    alt="open arrow" >
                  </img>
                </div>

                <div
                  className="project-src-code-container">
                  <a 
                    className="project-src-code-link"
                    href={project.code} >
                    Code
                  </a>
                  <img 
                    className="project-src-code-svg"
                    src={openArrow}
                    alt="open arrow" >
                  </img>
                </div>

              </div>

            </div>
          </li>
        })}
      </ul>
    </section>
  );
};

export default Projects;