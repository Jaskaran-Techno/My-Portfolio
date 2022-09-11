import React from 'react'
import Tittle from '../Components/Tittle'
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';
import ServicesSection from '../Components/ServicesSection';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import gamedev from '../img/game-dev.svg';

function AboutPage() {
    return (
        <div className="AboutPage">
            <Tittle title={'About Me'} span={'About Me'} />
            <ImageSection />
            <Tittle title={'My Skills'} span={'My Skills'} />
            <div className="skillsContainer">
            <SkillsSection skill={'HTML5'} progress={'80%'} width={'90%'} />
            <SkillsSection skill={'CSS3'} progress={'80%'} width={'90%'} />
            <SkillsSection skill={'Javascript'} progress={'80%'} width={'80%'} />
            <SkillsSection skill={'React.Js'} progress={'70%'} width={'70%'} />
            <SkillsSection skill={'MongoDB'} progress={'60%'} width={'60%'} />
            <SkillsSection skill={'Express.JS'} progress={'40%'} width={'50%'} />
            <SkillsSection skill={'Node.Js'} progress={'60%'} width={'80%'} />
            <SkillsSection skill={'Java'} progress={'70%'} width={'80%'} />
            </div>

            <Tittle title={'Interests'} span={'Interests'} />
            <div className="servives-container">
                <ServicesSection image={design} title={'Web Deveopment & Design'} 
                    text={'Lorem ipsum dolor sit amet consectetur adipisicing elit .'}
                />
                <ServicesSection image={intelligence} title={'Artificial Intelligence'} 
                text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                />
                <ServicesSection image={gamedev} title={'Game Development'} 
                text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                />

                
            </div>

        </div>
    )
}

export default AboutPage;
