import React from 'react'
import TeamPage from '../components/TeamPage'
import Footer from '../components/Footer';
import HomeButton from '../components/HomeButton';
import background from '../images/gradientBg.jpg'
import { Nick, Adam, Jesse, Tomas, Rachel, Gabby, Jared } from '../components/TeamPage/data';

const Team = () => {
    return (
        <div style={{background: `url(${background})`, backgroundSize: 'cover'}}>
            <HomeButton />
            <h1 style={{color: 'white', display: 'flex', justifyContent: 'center', marginTop: '50px', textDecorationLine: 'underline', fontSize: '45px'}}>Meet the Team</h1>
                <TeamPage {...Adam} />
                <TeamPage {...Tomas} />
                <TeamPage {...Nick} />
                <TeamPage {...Jesse} />
                <TeamPage {...Jared} />
                <TeamPage {...Rachel} />
                <TeamPage {...Gabby} />
            <Footer />
        </div>
    )
}

export default Team
