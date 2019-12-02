import React from 'react';
import SectionExamples from './SectionExamples';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});

describe('SectionExamples', () =>{
    let sectionExamples = shallow(<SectionExamples />)

    it('renders the image', () => {
        expect(sectionExamples.find('img').at(0).prop("src")).toEqual("desktopLogo.png")
    });
    it('renders the text', () => {
        expect(sectionExamples.find('h3').at(0).text()).toEqual('Web Development')
    });
    it('renders the text', () => {
        expect(sectionExamples.find('p').at(0).text()).toEqual('From idea validation to its realese develop your custom web application with the latest technologies.')
    });
    it('renders the image', () => {
        expect(sectionExamples.find('img').at(1).prop("src")).toEqual("mobileLogo.png")
    });
    it('renders the text', () => {
        expect(sectionExamples.find('h3').at(1).text()).toEqual('Mobile Development')
    });
    it('renders the text', () => {
        expect(sectionExamples.find('p').at(1).text()).toEqual('Make your product accessible on-the-go with iOS and Android mobile application crafted especially for your niche.')
    });
    it('renders the image', () => {
        expect(sectionExamples.find('img').at(2).prop("src")).toEqual("qa.png")
    });
    it('renders the text', () => {
        expect(sectionExamples.find('h3').at(2).text()).toEqual('Quality Assurance')
    });
    it('renders the text', () => {
        expect(sectionExamples.find('p').at(2).text()).toEqual('Create a product of exceptional quality with manual and automated testing throughout all stages of the development cycle.')
    });
    it('renders the image', () => {
        expect(sectionExamples.find('img').at(3).prop("src")).toEqual("uiux.jpg")
    });
    it('renders the text', () => {
        expect(sectionExamples.find('h3').at(3).text()).toEqual('UI/UX Design')
    });
    it('renders the text', () => {
        expect(sectionExamples.find('p').at(3).text()).toEqual('Get an authentic brand identity, UI/UX design for your web or mobile product all in one beautiful pack ')
    });
    
}); 