import React from 'react'
import {FaTwitter, FaInstagram, FaLinkedin} from 'react-icons/fa'

import {
    TeamContainer,
    TeamWrapper,
    TeamRow,
    Column1,
    Column2,
    TextWrapper,
    Heading,
    Title,
    Subtitle,
    ImgWrap,
    Img,
    SocialRow,
    SocialIconLink
} from './TeamPageElements'

const TeamPage = ({
    name,
    description,
    title,
    twitter,
    linkedin,
    instagram,
    image,
    imgStart,
    alt
}) => {
    return (
        <TeamContainer>
        <TeamWrapper>
            <TeamRow imgStart={imgStart}>
                <Column1>
                  <ImgWrap>
                    <Img src={image} alt={alt}/>
                  </ImgWrap>
                </Column1>
                <Column2>
                  <TextWrapper>
                      <Heading>
                        {name}
                      </Heading>
                      <Title>
                        {title}
                      </Title>
                      <Subtitle>
                        {description}
                      </Subtitle>
                  </TextWrapper>
                </Column2>
            </TeamRow>
            <SocialRow>
              <SocialIconLink href={twitter} target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href={instagram} target="_blank" aria-label="Twitter">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href={linkedin} target="_blank" aria-label="Twitter">
                <FaLinkedin />
              </SocialIconLink>
            </SocialRow>
        </TeamWrapper>
    </TeamContainer>
    )
}

export default TeamPage
