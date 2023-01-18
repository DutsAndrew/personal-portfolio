import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Header from '../components/Header';

describe('unit test for Header', () => {

  test('renders signature', () => {

    render (
      <Header />
    );

    const signature1 = screen.getByText('A');
    const signature2 = screen.getByText('D');

    expect(signature1).toBeInTheDocument();
    expect(signature2).toBeInTheDocument();

  });

  test('renders menu nav', () => {

    render (
      <Header />
    );

    const topText = screen.getByText('Top');
    const projectsText = screen.getByText('Projects');
    const contactText = screen.getByText('Contact');
    const resumeText = screen.getByText('Resume');

    const topSVG = screen.getByTestId('top-svg-test');
    const projectsSVG = screen.getByTestId('project-svg-test');
    const contactSVG = screen.getByTestId('contact-svg-test');
    const resumeSVG = screen.getByTestId('resume-svg-test');

    expect(topText).toBeInTheDocument();
    expect(projectsText).toBeInTheDocument();
    expect(contactText).toBeInTheDocument();
    expect(resumeText).toBeInTheDocument();

    expect(topSVG).toBeInTheDocument();
    expect(projectsSVG).toBeInTheDocument();
    expect(contactSVG).toBeInTheDocument();
    expect(resumeSVG).toBeInTheDocument();

  });

});