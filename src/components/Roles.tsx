import React, { useEffect, useState } from "react";

const Roles = () => {

  const currentRoles = ["Software Developer",
    "Fullstack Developer",
    "Web Developer",
    "Front-End Developer",
    "Back-End Developer"
  ];

  useEffect(() => {
    let currentRoleIndex = 1;
    const roleText = document.querySelector('.role-text');

    if (roleText) {
      roleText.textContent = currentRoles[0];

      setInterval(() => {
        roleText.textContent = currentRoles[currentRoleIndex];
        currentRoleIndex++;

        if (currentRoleIndex > currentRoles.length - 1) {
          currentRoleIndex = 0;
        };
      }, 2500);
    };
  }, []);

  return (
    <section 
      className="roles-container">
      <p 
        className="role-text">
      </p>
    </section>
  );
};

export default Roles;