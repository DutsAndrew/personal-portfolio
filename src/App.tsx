import React from 'react';
import './styles/App.css';
import Header from './components/Header';
import Bio from './components/Bio';
import Roles from './components/Roles';
import Tools from './components/Tools';
import Projects from './components/Projects';
import Connect from './components/Connect';
import Socials from './components/Socials';
import Resume from './components/Resume';

function App() {
  return (
    <main 
      className='main'>
      <Header />
      <Bio />
      <Roles />
      <Tools />
      <Projects />
      <Connect />
      <Socials />
      <Resume />
    </main>
  );
};

export default App;
