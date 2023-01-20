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
      <button 
        className="connect-button"
        onClick={() => handleEmailOption()}>
        Contact
      </button>
    </section>
  );
};

export default Connect;