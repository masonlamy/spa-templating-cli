import React from 'react';
import { mount } from 'enzyme';
import expect from 'expect';
import { {name}Container } from './{name}Container';

describe('{name}Container component', () => {

    it('should do something when something happens', () => {
        const props = {
            //example: jest.fn()
        };
        const enzymeWrapper = mount(<{name}Container {...props}/>);

        //const tabItem = enzymeWrapper.find('a').last();
        //tabItem.simulate('click');

        //expect(props.example.mock.calls.length).toBe(1);
    });

});