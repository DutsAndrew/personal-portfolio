import React from "react";

const Roles = () => {

  const currentRoles = ["Software Developer",
    "Fullstack Developer",
    "Web Developer",
    "Front End Developer",
    "Backend Developer"
  ];

  // GO BACK AND WRITE TESTS FOR ALL COMPONENTS

  return (
    <section 
      className="roles-container">
      <ul 
        className="roles-banner">
        {Array.isArray(currentRoles) && currentRoles.map((role) => {
          return <li 
            className="role-banner">
            {role}
          </li>
        })}
      </ul>
    </section>
  );
};

export default Roles;