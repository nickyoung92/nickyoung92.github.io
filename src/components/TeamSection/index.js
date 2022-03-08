import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import png from '../../images/team.png'
import {
    TeamContainer,
    TeamWrapper,
    TeamRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    ImgWrap,
    Img,
    BtnLinkR,
} from './TeamElements'

const TeamSection = () => {
    const toggleTop = () => {
        scroll.scrollToTop();
    };
    return (
          <TeamContainer lightBg={false} id={"team"}>
              <TeamWrapper>
                  <TeamRow imgStart={true}>
                      <Column1>
                      <TextWrapper>
                          <TopLine>{"The scientists in the lab"}</TopLine>
                          <Heading lightText={true}>Our Team</Heading>
                          <Subtitle darkText={false}>Co-Labs' team is fully doxxed and from a variety of backgrounds, each with unique talents and insights that made all of this possible. The true Co-Labs network is much larger, but this is the core team.</Subtitle>
                          <BtnWrap>
                              <BtnLinkR to='/team'
                              onClick={toggleTop}
                              smooth={true}
                              duration={500}
                              spy={true}
                              exact="true"
                              offset={-80}
                              primary={true ? 1 : 0}
                              dark={false ? 1 : 0}
                              dark2={false ? 1 : 0}>{"Meet the Team"}</BtnLinkR>
                          </BtnWrap>
                      </TextWrapper>
                      </Column1>
                      <Column2>
                        <ImgWrap>
                            <Img src={png} alt={"team"}/>
                        </ImgWrap>
                      </Column2>
                  </TeamRow>
              </TeamWrapper>
          </TeamContainer>
    )
}

export default TeamSection
