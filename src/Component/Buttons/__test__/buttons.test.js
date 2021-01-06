import React from 'react';
import ReactDOM from 'react-dom';
import Buttons from './../buttons';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from "react-test-renderer";

afterEach(cleanup);
it("renders without crashing", () => {
    const div = document.createElement('div');
    ReactDOM.render(<Buttons></Buttons>, div);
});

it("renders button correctly", () => {
    const {getByTestId} = render(<Buttons label='Click me please !'></Buttons>);
    expect(getByTestId('button')).toHaveTextContent("Click me please !");
});

it("matches snapshot", () => {
    const tree = renderer.create(<Buttons label='Click me please !'></Buttons>).toJSON();
    expect(tree).toMatchSnapshot();
});

it("matches snapshot 2", () => {
    const tree = renderer.create(<Buttons label='Click me please !'></Buttons>).toJSON();
    expect(tree).toMatchSnapshot();
});