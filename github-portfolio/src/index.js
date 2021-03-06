import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {data} from './data_yama';
import Header from './containers/Header';
import Body from './containers/Body';
import Principal from './containers/Principal';
import Resume from './components/Resume';
import ProfessionalExperience from './components/ProfessionalExperience';
import Education from './components/Education';
import Hobbie from './components/Hobbie';
import Complementary from './containers/Complementary';
import PersonalInfo from './components/PersonalInfo';
import HardSkills from './components/HardSkills';
import SoftSkills from './components/SoftSkills';
import Languages from './components/Languages';

class Main extends Component{
    render(){
        return (
            <div class="mdc-layout-grid">
                <div class="mdc-layout-grid__inner">
                    <div className={`
                            mdc-layout-grid__cell--span-2-desktop
                            mdc-layout-grid__cell--span-0-tablet 
                            mdc-layout-grid__cell--span-0-phone 
                    `}>
                    </div>
                    <div className={`
                            mdc-layout-grid__cell--span-8-desktop
                            mdc-layout-grid__cell--span-12-tablet 
                            mdc-layout-grid__cell--span-12-phone 
                    `}>
                        <div className="mdc-layout-grid__inner">
                            <div className="principal_layout mdc-layout-grid__cell--span-12">
                                <div className="mdc-layout-grid__inner">
                                    <Header 
                                        name= {data.header.name}
                                        profession= {data.header.profession}
                                        location= {data.header.location}
                                    />
                                    <Body>
                                        <Principal>
                                            <Resume text={data.body.principal.resume}/>
                                            <ProfessionalExperience data={data.body.principal.professionalExperience}/>
                                            <Education data={data.body.principal.education}/>
                                            <Hobbie data={data.body.principal.hobbies}/>
                                        </Principal>
                                        <Complementary>
                                            <PersonalInfo data={data.body.complementary.personalInfo} />
                                            <HardSkills data={data.body.complementary.hardSkills}/>
                                            <SoftSkills data={data.body.complementary.softSkills}/>
                                            <Languages data={data.body.complementary.languages}/>
                                        </Complementary>
                                    </Body>
                                    <div className="Footer mdc-layout-grid__cell--span-12">
                                        { /* <p>This page is created with <a href="https://reactjs.org/" target="_blank">ReactJS</a> and <a href="https://material.io" target="_blank">Material Design Web</a> by me ;)</p> */ }
                                        { /* <p>Additional info: US Visa to travel, flexibility to travel and move temporarily or permanent to another city.</p>*/ }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <Main/>, 
    document.getElementById('main')
);
