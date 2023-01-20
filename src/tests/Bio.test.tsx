import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import Bio from '../components/Bio';

describe('unit test for Bio', () => {

  test('renders welcome text', () => {

    render (
      <Bio />
    );

    const hiText = screen.getByText('Hi,');
    const introText = screen.getByText('I\'m Andrew Dutson');
    const profilePicture = screen.getByRole('img');

    expect(hiText).toBeInTheDocument();
    expect(introText).toBeInTheDocument();
    expect(profilePicture).toBeInTheDocument();

  });

});