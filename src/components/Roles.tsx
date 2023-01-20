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
    const roleText = document.querySelector('#current-role');

    if (roleText) {
      roleText.textContent = currentRoles[0];

      setInterval(() => {
        roleText.classList.remove('new-role');
        void (roleText as any).offsetWidth;
        roleText.textContent = currentRoles[currentRoleIndex];
        roleText.classList.add('new-role');
        currentRoleIndex++;

        if (currentRoleIndex > currentRoles.length - 1) {
          currentRoleIndex = 0;
        };
      }, 3500);
    };
  }, []);

  return (
    <section 
      className="roles-container">
      <p
        id="current-role"
        className="role-text">
      </p>
    </section>
  );
};

export default Roles;