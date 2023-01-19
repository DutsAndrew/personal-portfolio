import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import Tools from '../components/Tools';

describe('unit test for Tools', () => {

  test('renders tools text', () => {

    render(
      <Tools />
    );

    const toolsText = screen.getByText('Tools');
    expect(toolsText).toBeInTheDocument();

  });

  test('renders current tools', () => {

    render(
      <Tools />
    );

    const reactIcon = screen.getByTestId('react-test');
    const typeScriptIcon = screen.getByTestId('typescript-test');
    const javaScriptIcon = screen.getByTestId('javascript-test');
    const cssIcon = screen.getByTestId('css-test');
    const firebaseIcon = screen.getByTestId('firebase-test');
    const gitIcon = screen.getByTestId('git-test');
    const npmIcon = screen.getByTestId('npm-test');
    const htmlIcon = screen.getByTestId('html-test');
    const webpackIcon = screen.getByTestId('webpack-test');
    const expressIcon = screen.getByTestId('express-test');
    const mongoDBIcon = screen.getByTestId('mongoDB-test');
    const nodeJSIcon = screen.getByTestId('nodeJS-test');
    const jestIcon = screen.getByTestId('jest-test');

    expect(reactIcon).toBeInTheDocument();
    expect(typeScriptIcon).toBeInTheDocument();
    expect(javaScriptIcon).toBeInTheDocument();
    expect(cssIcon).toBeInTheDocument();
    expect(firebaseIcon).toBeInTheDocument();
    expect(gitIcon).toBeInTheDocument();
    expect(npmIcon).toBeInTheDocument();
    expect(htmlIcon).toBeInTheDocument();
    expect(webpackIcon).toBeInTheDocument();
    expect(expressIcon).toBeInTheDocument();
    expect(mongoDBIcon).toBeInTheDocument();
    expect(nodeJSIcon).toBeInTheDocument();
    expect(jestIcon).toBeInTheDocument();

  });

});