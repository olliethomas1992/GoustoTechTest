import React, { Component } from 'react';
import { Header } from '../components/Header';

describe("Header Component", () => {
    test("Render the Header component", () => {
        const wrapper = shallow(<Header/>);
        expect(wrapper.find('.menu').length).toBe(2);
    });
});