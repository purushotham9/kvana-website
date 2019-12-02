import React from 'react';
import StagesOfDevelopment from './StagesOfDevelopment';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';

configure({adapter: new Adapter()});

describe('StagesOfDevelopment', () =>{
    let stagesOfDevelopment = mount(<StagesOfDevelopment />)

    it('renders the text', () => {
        expect(stagesOfDevelopment.find('h2').text()).toEqual('Stages of your business solution development')
    });
    it('renders the text', () => {
        expect(stagesOfDevelopment.find('h4').at(0).text()).toEqual('Here is how we develop your project: from idea validation to futher maintenance and support')
    });
    it('renders the text', () => {
        expect(stagesOfDevelopment.find('h3').at(0).text()).toEqual('Stage 1')
    });
    it('renders the text', () => {
        expect(stagesOfDevelopment.find('h4').at(1).text()).toEqual('Concept development')
    });
    it('renders the text', () => {
        expect(stagesOfDevelopment.find('li').at(0).text()).toEqual('Business analysis')
    });
    it('renders the text', () => {
        expect(stagesOfDevelopment.find('li').at(1).text()).toEqual('Wireframes & Prototyping')
    });
    it('renders the text', () => {
        expect(stagesOfDevelopment.find('li').at(2).text()).toEqual('Project estimation')
    });
    it('renders the text', () => {
        expect(stagesOfDevelopment.find('h3').at(1).text()).toEqual('Stage 2')
    });
    it('renders the text', () => {
        expect(stagesOfDevelopment.find('h4').at(2).text()).toEqual('UX/UI development')
    });
    it('renders the text', () => {
        expect(stagesOfDevelopment.find('li').at(3).text()).toEqual('Brand identity')
    });
    it('renders the text', () => {
        expect(stagesOfDevelopment.find('li').at(4).text()).toEqual('UI design')
    });
    it('renders the text', () => {
        expect(stagesOfDevelopment.find('li').at(5).text()).toEqual('UX design')
    });
    it('renders the text', () => {
        expect(stagesOfDevelopment.find('h3').at(2).text()).toEqual('Stage 3')
    });
    it('renders the text', () => {
        expect(stagesOfDevelopment.find('h4').at(2).text()).toEqual('UX/UI development')
    });
    it('renders the text', () => {
        expect(stagesOfDevelopment.find('li').at(3).text()).toEqual('Brand identity')
    });
    it('renders the text', () => {
        expect(stagesOfDevelopment.find('li').at(4).text()).toEqual('UI design')
    });
    it('renders the text', () => {
        expect(stagesOfDevelopment.find('li').at(5).text()).toEqual('UX design')
    });
    it('renders the text', () => {
        expect(stagesOfDevelopment.find('h3').at(1).text()).toEqual('Stage 2')
    });
    it('renders the text', () => {
        expect(stagesOfDevelopment.find('h4').at(2).text()).toEqual('UX/UI development')
    });
    it('renders the text', () => {
        expect(stagesOfDevelopment.find('li').at(3).text()).toEqual('Brand identity')
    });
    it('renders the text', () => {
        expect(stagesOfDevelopment.find('li').at(4).text()).toEqual('UI design')
    });
    it('renders the text', () => {
        expect(stagesOfDevelopment.find('li').at(5).text()).toEqual('UX design')
    });
    it('renders the text', () => {
        expect(stagesOfDevelopment.find('h3').at(1).text()).toEqual('Stage 2')
    });
    it('renders the text', () => {
        expect(stagesOfDevelopment.find('h4').at(2).text()).toEqual('UX/UI development')
    });
    it('renders the text', () => {
        expect(stagesOfDevelopment.find('li').at(3).text()).toEqual('Brand identity')
    });
    it('renders the text', () => {
        expect(stagesOfDevelopment.find('li').at(4).text()).toEqual('UI design')
    });
    it('renders the text', () => {
        expect(stagesOfDevelopment.find('li').at(5).text()).toEqual('UX design')
    });
    it('renders the text', () => {
        expect(stagesOfDevelopment.find('h2').text()).toEqual('Stages of your business solution development')
    });
}); 