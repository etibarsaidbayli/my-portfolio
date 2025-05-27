import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { TitleSection } from '../styles';
import Project from '../../../common/components/ProjectCard';
import themesColors from '../../../common/constants/themesColors';
import getRandomOnArray from '../../../common/utils/getRandomOnArray';

function ProjectsSection() {
    let [themeColor, setThemeColor] = useState([themesColors[3]]);
    
    const [list, setList] = useState([]);
    const personalList = [
        {
            id:66,
            homepage:"http://umico.az",
            name:"Umico.Az",
            description:"Umico is a multifunctional digital platform that combines an online marketplace, a loyalty program, and financial services into one seamless experience. The web version of Umico provides users with access to a wide range of products, personalized offers, and cashback features, all within a modern and responsive interface.\n" +
             "My focus was on delivering clean, maintainable code, ensuring a smooth user experience across devices and browsers, and contributing to the platform’s scalability through modular architecture.",
            topics:['html', 'css', 'nuxt js']
        },
        {
            id:67,
            homepage:"http://push30.az",
            name:"PUSH 30",
            description:"Push30 is a digital fitness platform offering corporate memberships with access to 250+ gyms, pools, and studios across Azerbaijan. Through its website and mobile app, users can easily book sessions and track their activity. Integrated with the SIMA KYC biometric system, Push30 ensures secure and seamless access. The platform promotes a healthy lifestyle and simplifies wellness management for companies.",
            topics:['html', 'css', 'javascript']
        }
    ] ;

    // const user = GetUserDataOnMount();
    useEffect(() => {
        let mounted = true;
        if(mounted) {
            axios.get('https://api.github.com/users/etibarsaidbayli/repos')
                .then (({ data: response }) => setList([...personalList,...response]))
        } 
       return () => mounted = false;
    },[])

    return (
            <section className='pb-md-5 row'>
                <div className="col-12 ">
                    <TitleSection themeColor={themeColor} onClick={() => setThemeColor(getRandomOnArray(themesColors))}>projects</TitleSection>
                </div>
                <div className="col-12">
                    <ul className="row p-0">
                        {list.map(project => (
                            <li className="col-md-4 p-3" key={project.id}>
                                <Project
                                    themeColor={themeColor}
                                    project={project}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
    );
  }
  
  export default ProjectsSection;
  
