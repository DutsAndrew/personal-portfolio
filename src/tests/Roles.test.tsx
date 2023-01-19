import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import Roles from '../components/Roles';

describe('unit test for Roles', () => {

  beforeEach(() => {
    jest.useFakeTimers()
  });

  afterEach(() => {
    jest.runOnlyPendingTimers()
    jest.useRealTimers()
  });

  test('renders roles to screen', () => {

    render (
      <Roles />
    );

    expect(screen.getByText('Software Developer')).toBeInTheDocument();
    jest.advanceTimersByTime(2500);
    expect(screen.getByText('Fullstack Developer')).toBeInTheDocument();
    jest.advanceTimersByTime(2500);
    expect(screen.getByText('Web Developer')).toBeInTheDocument();
    jest.advanceTimersByTime(2500);
    expect(screen.getByText('Front-End Developer')).toBeInTheDocument();
    jest.advanceTimersByTime(3000);
    expect(screen.getByText('Back-End Developer')).toBeInTheDocument();

    jest.clearAllTimers();
  });

});