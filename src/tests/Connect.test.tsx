import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import Connect from '../components/Connect';

describe('unit test for Connect', () => {

  test('renders text and button', () => {

    render(
      <Connect />
    );

    const connectText = screen.getByText('Let\'s Connect!');
    const connectButton = screen.getByRole('button', { name: 'Contact'} );

    expect(connectText).toBeInTheDocument();
    expect(connectButton).toBeInTheDocument();

  });

});