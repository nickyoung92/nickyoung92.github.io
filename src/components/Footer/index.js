import React from 'react'
import {FaTwitter, FaInstagram, FaDiscord} from 'react-icons/fa'
import logo from '../../images/logo.png'
import { animateScroll as scroll } from 'react-scroll'
import {
    FooterContainer,
    FooterWrap,
    Img,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
} from './FooterElements'



const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialLogo to='/' onClick={toggleHome}>
                        <Img src={logo} alt="logo"/>
                    </SocialLogo>
                    <SocialMediaWrap>
                        <SocialIcons>
                            <SocialIconLink href="https://discord.gg/rPVKq5gtRR" target="_blank" aria-label="Discord">
                                <FaDiscord />
                            </SocialIconLink>
                            <SocialIconLink href="https://twitter.com/CoLabsLLC" target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href="https://www.instagram.com/colabs_llc" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
                <WebsiteRights>Co-Labs © {new Date().getFullYear()} All rights reserved</WebsiteRights>
            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;
