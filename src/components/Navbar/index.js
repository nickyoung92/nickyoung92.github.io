import React, {useState, useEffect} from 'react'
import logo from '../../images/logo.png'
import {FaBars} from 'react-icons/fa'
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    Img,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavLinksHome,
    NavBtn,
    NavBtnLink
} from './NavbarElements';

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }
    
    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to='/' onClick={toggleHome}>
                    <Img src={logo} alt={"logo"}/>
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinksHome to="home" smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                            Home</NavLinksHome>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="about" smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                            About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="projects" smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                            Projects</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="services" smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                            Services</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="team" smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                            Team</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink onClick={toggleHome} to="/contact">Contact Us</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    )
}

export default Navbar;
