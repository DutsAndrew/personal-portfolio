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
      name: 'Espressit - Social Media App',
      code: 'https://github.com/DutsAndrew/espressit-social-media-app',
      live: 'https://dutsandrew.github.io/espressit-social-media-app/',
      description: 'Espressit is a social media app and blog hybrid. Users can upvote, downvote, and favorite posts; they can create their own with links or images. And better yet, they can sort their feed by "Hot", "Controversial", "Contributed", and "New"',
      tools: 'ReactJS, Typescript, Firebase, CSS, Git, Bad Words Filter, uniqid, and svgs',
      built: 'December 2022',
      testid: 'espressit-test',
      orientation: 'left',
      imgRef: espressitIMG,
      infoTag: 'Web, Mobile',
    },
    {
      name: 'Where\'s Waldo - Photo Tagging App',
      code: 'https://github.com/DutsAndrew/photo-tagging-app',
      live: 'https://dutsandrew.github.io/photo-tagging-app/',
      description: 'Wheres\'s Waldo is a gamified version of the Where\'s Waldo books. Users can pick a level and try to find all the characters within that level. If found, users can add their timed score to the leaderboard. Each level has it\'s own leaderboard and can be viewed independently from playing the game.',
      tools: 'ReactJS, Typescript, Firebase, CSS, Git, uniqid, svgs',
      built: 'November 2022',
      testid: 'photo-tagging-test',
      orientation: 'right',
      imgRef: waldoIMG,
      infoTag: 'Web, Mobile',
    },
    {
      name: 'Library App',
      code: 'https://github.com/DutsAndrew/library-app',
      live: 'https://dutsandrew.github.io/library-app/',
      description: 'In this application users can add books they want to read or have read to their "library". Upon authentication a user instance is created on the backend and all books created or deleted will be changed on the server. Users will see this change on the front end instantly. In addition users can mark their books as "read" or "unread"',
      tools: 'ReactJS, TypeScript, Firebase, CSS, Git, uniqid, svgs',
      built: 'November 2022',
      testid: 'library-test',
      orientation: 'left',
      imgRef: libraryIMG,
      infoTag: 'Web Only',
    },
    {
      name: 'Steam Store - Shopping App',
      code: 'https://github.com/DutsAndrew/shopping-cart',
      live: 'https://dutsandrew.github.io/shopping-cart/',
      description: 'This app is a steam store clone, using the same color scheme as the original app, the app consumes the STEAM store API and presents all the current featured games on load. Users can search for games, add them to their cart, change the quantities, remove items from cart, and the total is displayed at checkout.',
      tools: 'ReactJS, JavaScript, STEAM API, CSS, Git, uniqid',
      built: 'October 2022',
      testid: 'shopping-test',
      orientation: 'right',
      imgRef: steamStoreIMG,
      infoTag: 'Web Only',
    },
    {
      name: 'Weather App',
      code: 'https://github.com/DutsAndrew/weather-app',
      live: 'https://dutsandrew.github.io/weather-app/',
      description: 'By consuming the openweather API, users can search for their local weather or the weather from any location they choose. The current weather as well as the daily and hourly forecast will be fetched and displayed to the user within seconds',
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

              <h3 
                className="info-tag-text">
                Avaible On: {project.infoTag}
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