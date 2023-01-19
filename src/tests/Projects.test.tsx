import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import Projects from '../components/Projects';

describe('unit test for Projects', () => {

  test('all projects render to screen', () => {

    render (
      <Projects />
    );

    const espressitProject = screen.getByTestId('espressit-test');
    const waldoProject = screen.getByTestId('photo-tagging-test');
    const libraryProject = screen.getByTestId('photo-tagging-test');
    const shoppingProject = screen.getByTestId('shopping-test');
    const weatherProject = screen.getByTestId('weather-test');
    const todoProject = screen.getByTestId('todo-test');

    expect(espressitProject).toBeInTheDocument();
    expect(waldoProject).toBeInTheDocument();
    expect(libraryProject).toBeInTheDocument();
    expect(shoppingProject).toBeInTheDocument();
    expect(weatherProject).toBeInTheDocument();
    expect(todoProject).toBeInTheDocument();

  });

});