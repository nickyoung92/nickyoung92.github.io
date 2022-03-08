import React, {useState} from 'react'
import { Button } from '../ButtonElements';
import { HeroContainer, HeroBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id="home">
            <HeroBg>
            </HeroBg>
            <HeroContent>
                <HeroH1>Building the Metaverse</HeroH1>
                <HeroP>Collaboration is the driving force behind Co-Labs. Through partnerships with artists, developers, and various other creators, Co-Labs aims to serve as a launchpad, consultant, and innovator through the leveraging of Web3 and blockchain technology.</HeroP>
                <HeroP>Our ultimate goal is to grow the metaverse, and make it accessible and enjoyable for all.</HeroP>
                <HeroBtnWrapper>
                    <Button to="about" 
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    primary='true'
                    dark='true'
                    smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                        Learn More {hover ? <ArrowForward /> : <ArrowRight style={{transform: 'scale(1.02)'}} />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;
