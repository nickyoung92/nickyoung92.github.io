import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import Services from '../components/Services';
import ProjectHomeSection from '../components/ProjectHomeSection';
import Footer from '../components/Footer';
import TeamSection from '../components/TeamSection';
import background from '../images/gradientBg.jpg';


const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div style={{background: `url(${background})`, backgroundSize: 'cover'}}>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />    
        <HeroSection /> 
        <InfoSection />
        <ProjectHomeSection />
        <Services />
        <TeamSection />
        <Footer />       
        </div>
    );
};

export default Home

