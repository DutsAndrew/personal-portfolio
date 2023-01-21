import React from "react";

const Connect = () => {

  const handleEmailOption = (): void => {

    const emailRef = 'dutsandrew@gmail.com';

  };

  return (
    <section 
      className="connect-container">
      <h2
        className="connect-text">
        Let's Connect!
      </h2>
      <a 
        className="send-email-link"
        href="mailto:dutsandrew@gmail.com" >
        Contact
      </a>
    </section>
  );
};

export default Connect;