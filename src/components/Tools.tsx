import React from "react";

const Tools = () => {

  const tools = [
    {
      name: 'react',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg',
      testid: 'react-test',
    },
    {
      name: 'typescript',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      testid: 'typescript-test',
    },
    {
      name: 'javascript',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      testid: 'javascript-test',
    },
    {
      name: 'css',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg',
      testid: 'css-test',
    },
    {
      name: 'firebase',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg',
      testid: 'firebase-test',
    },
    {
      name: 'git',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain-wordmark.svg',
      testid: 'git-test',
    },
    {
      name: 'jest',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',
      testid: 'jest-test',
    },
    {
      name: 'npm',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg',
      testid: 'npm-test',
    },
    {
      name: 'html',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg',
      testid: 'html-test',
    },
    {
      name: 'webpack',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original-wordmark.svg',
      testid: 'webpack-test',
    },
    {
      name: 'express',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg',
      testid: 'express-test',
    },
    {
      name: 'mongoDB',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg',
      testid: 'mongoDB-test',
    },
    {
      name: 'nodeJS',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg',
      testid: 'nodeJS-test',
    },
  ];

  return (
    <section 
      className="tools-container">
      <h2 
        className="tools-text">
        Tools
      </h2>
      <ul className="tools">
        {Array.isArray(tools) && tools.map((tool) => {
          return <li 
            className="react-tool"
            key={tool.name} >
            <img 
              className="tool-img"
              alt="react logo"
              src={tool.src}
              data-testid={tool.testid} >
            </img>
          </li>
        })}
      </ul>
    </section>
  );
};

export default Tools;