import React from 'react'
import Footer from '../components/Footer';
import HomeButton from '../components/HomeButton';
import ProjectSection from '../components/ProjectSection'
import { projOne } from '../components/ProjectSection/data';
import background from '../images/gradientBg.jpg'

const ProjectsPage = () => {
    return (
        <div style={{background: `url(${background})`, backgroundSize: 'cover'}}>
            <HomeButton />
            <h1 style={{color: 'white', display: 'flex', justifyContent: 'center', marginTop: '50px', textDecorationLine: 'underline', fontSize: '45px'}}>Our Projects</h1>
            <ProjectSection {...projOne}/>
            <Footer />
        </div>
    )
}

export default ProjectsPage