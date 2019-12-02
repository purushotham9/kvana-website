import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';
import SectionTechnologies from './SectionTechnologies';
import { MemoryRouter } from 'react-router-dom'

configure({ adapter: new Adapter() });

describe('SectionTechnologies', () => {
    let sectionTechnologies = mount(
        <MemoryRouter>
            <SectionTechnologies />
        </MemoryRouter>)

    it('renders the Technologies text', () => {
        expect(sectionTechnologies.find('h3').at(0).text()).toEqual('Technologies we are passionate about')
    });
    it('renders the Technologies text', () => {
        expect(sectionTechnologies.find("img").at(0).prop("src")).toEqual("react.png")
    });
    it('renders the Technologies text', () => {
        expect(sectionTechnologies.find("img").at(1).prop("src")).toEqual("react-native.png")
    });
    it('renders the Technologies text', () => {
        expect(sectionTechnologies.find("img").at(2).prop("src")).toEqual("angular.png")
    });
    it('renders the Technologies text', () => {
        expect(sectionTechnologies.find("img").at(3).prop("src")).toEqual("ios.jpeg")
    });
    it('renders the Technologies text', () => {
        expect(sectionTechnologies.find("img").at(4).prop("src")).toEqual("android.jpg")
    });
    it('renders the Technologies text', () => {
        expect(sectionTechnologies.find("img").at(5).prop("src")).toEqual("nodejs.png")
    });
    it('renders the Technologies text', () => {
        expect(sectionTechnologies.find("img").at(6).prop("src")).toEqual("amazonws.png")
    });
    it('renders the Technologies text', () => {
        expect(sectionTechnologies.find("img").at(7).prop("src")).toEqual("rubyonrails.png")
    });
    it('renders the Technologies text', () => {
        expect(sectionTechnologies.find("img").at(8).prop("src")).toEqual("graphQL.png")
    });
    

    it('renders the Technologies text', () => {
        expect(sectionTechnologies.find('h3').at(1).text()).toEqual('Greate Companies love working with us')
    });
    it('renders the Technologies text', () => {
        expect(sectionTechnologies.find("img").at(9).prop("src")).toEqual("adobeLogo.png")
    });
    it('renders the Technologies text', () => {
        expect(sectionTechnologies.find("img").at(10).prop("src")).toEqual("AdobeExperienceMgr.png")
    });
    it('renders the Technologies text', () => {
        expect(sectionTechnologies.find("img").at(11).prop("src")).toEqual("dpsc.jpg")
    });
    
});