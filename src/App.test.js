import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

let realUseContext;
let mockUseContext;

beforeEach(() => {
    realUseContext = React.useContext;
    mockUseContext = React.useContext = jest.fn();
    mockUseContext.mockReturnValue({
        wordsList: {
            Welcome: 1
        },
        dispatch: () => {}
    });
});

afterEach(() => {
    React.useContext = realUseContext;
});

it('App Component Snapshot', () => {
    const results = shallow(<App />);

    expect(results).toMatchSnapshot();
});

it('renders without crashing', () => {
    const results = shallow(<App />);

    expect(results.hasClass('App')).toEqual(true);
});
