import React from 'react'

import {
    ProjectContainer,
    ProjectWrapper,
    ProjectRow,
    Column1,
    Column2,
    Column3,
    TextWrapper,
    Heading,
    Subtitle,
    BtnWrap,
    ImgWrap,
    Img,
    BtnLink
} from './ProjectElements'

const ProjectSection = ({
    img,
    alt,
    name,
    headline,
    subline,
    summary,
    url,
    btnlabel,
    imgStart
}) => {
    return (
        <ProjectContainer>
        <ProjectWrapper>
            <ProjectRow imgStart={imgStart}>
                <Column1>
                  <ImgWrap>
                    <Img src={img} alt={alt}/>
                  </ImgWrap>
                </Column1>
                <Column2>
                  <TextWrapper>
                      <Heading>
                        {name}
                      </Heading>
                      <Subtitle>
                        {headline}
                      </Subtitle>
                      <Subtitle>
                        {subline}
                      </Subtitle>
                      <Subtitle>
                        {summary}
                      </Subtitle>
                  </TextWrapper>
                </Column2>
                <Column3>
                  <BtnWrap>
                    <BtnLink to={'/'+url}>
                      {btnlabel}
                    </BtnLink>
                  </BtnWrap>
                </Column3>
            </ProjectRow>
        </ProjectWrapper>
    </ProjectContainer>
    )
}

export default ProjectSection
