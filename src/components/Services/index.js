import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import Icon1 from '../../images/png1.png'
import Icon2 from '../../images/png2.png'
import Icon3 from '../../images/png3.png'
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP,   
    ServicesCardLink
} from './ServicesElements'

const Services = () => {
    const toggleTop = () => {
        scroll.scrollToTop();
    };
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesCardLink to="/contact" onClick={toggleTop}>
                        <ServicesIcon src={Icon1} />
                        <ServicesH2>Web2/Web3 Development</ServicesH2>
                        <ServicesP>From websites to smart contracts our team of developers are here. If you want a custom smart contract, or, a website for your small business, we can do that.</ServicesP>
                    </ServicesCardLink>
                </ServicesCard>
                <ServicesCard>
                    <ServicesCardLink to="/contact" onClick={toggleTop}>
                        <ServicesIcon src={Icon2} />
                        <ServicesH2>Artistic Services</ServicesH2>
                        <ServicesP>Our team of creative artists are here to produce artwork to your specifications to create the assets we need for your project.</ServicesP>
                    </ServicesCardLink>
                </ServicesCard>
                <ServicesCard>
                    <ServicesCardLink to="/contact" onClick={toggleTop}>
                        <ServicesIcon src={Icon3} />
                        <ServicesH2>Guidance and Support</ServicesH2>
                        <ServicesP>Need a second opinion? Have bugs you cant fix? Need an artists opinion? We're happy to help.</ServicesP>
                    </ServicesCardLink>
                </ServicesCard>

            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
