import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import Socials from '../components/Socials';
import { link } from 'fs';

describe('unit test for Socials', () => {

  test('renders socials to the screen', () => {

    render (
      <Socials />
    );

    const linkedin = screen.getByTestId('linkedin-test');
    const github = screen.getByTestId('github-test');
    const email = screen.getByTestId('email-test');

    expect(linkedin).toBeInTheDocument();
    expect(github).toBeInTheDocument();
    expect(email).toBeInTheDocument();

  });

});