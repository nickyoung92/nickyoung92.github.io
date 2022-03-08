import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import png6 from '../../images/png6.png'
import {
    ProjectContainer,
    ProjectWrapper,
    ProjectRow,
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
} from './ProjectElements'

const ProjectHomeSection = () => {
    const toggleTop = () => {
        scroll.scrollToTop();
    };
    return (
          <ProjectContainer lightBg={false} id={"projects"}>
              <ProjectWrapper>
                  <ProjectRow imgStart={true}>
                      <Column1>
                      <TextWrapper>
                          <TopLine>{"The proof is in the pudding"}</TopLine>
                          <Heading lightText={true}>Talk Is Cheap</Heading>
                          <Subtitle darkText={false}>But a picture speaks a thousand words. Take a look at some of the collections we've helped bring to life and see why Co-Labs is the obvious choice for your project.</Subtitle>
                          <BtnWrap>
                              <BtnLinkR to='/projects'
                              onClick={toggleTop}
                              smooth={true}
                              duration={500}
                              spy={true}
                              exact="true"
                              offset={-80}
                              primary={true ? 1 : 0}
                              dark={false ? 1 : 0}
                              dark2={false ? 1 : 0}>{"Our Projects"}</BtnLinkR>
                          </BtnWrap>
                      </TextWrapper>
                      </Column1>
                      <Column2>
                        <ImgWrap>
                            <Img src={png6} alt={"superhero"}/>
                        </ImgWrap>
                      </Column2>
                  </ProjectRow>
              </ProjectWrapper>
          </ProjectContainer>
    )
}

export default ProjectHomeSection
