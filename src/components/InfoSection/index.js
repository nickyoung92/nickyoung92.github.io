import React from 'react'
import png5 from '../../images/png5.png'
import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    ImgWrap,
    Img,
    BtnLinkS
} from './InfoElements'

const InfoSection = () => {
    return (
          <InfoContainer lightBg={false} id={"about"}>
              <InfoWrapper>
                  <InfoRow imgStart={false}>
                      <Column1>
                      <TextWrapper>
                          <TopLine>{"The unification of art and technology"}</TopLine>
                          <Heading lightText={true}>CO-LABS</Heading>
                          <Subtitle darkText={false}>We understand that science and art go hand-in-hand, and that collaboration breeds innovation. Here at Co-Labs, we partner with artists and developers to produce visually stunning and technologically sound products, and we are particularly fond of how NFT's are changing the landscape for artists and developers alike.</Subtitle>
                          <BtnWrap>
                              <BtnLinkS to='services'
                              smooth={true}
                              duration={500}
                              spy={true}
                              exact="true"
                              offset={-80}
                              primary={true ? 1 : 0}
                              dark={false ? 1 : 0}
                              dark2={false ? 1 : 0}>{"Our Services"}</BtnLinkS>
                          </BtnWrap>
                      </TextWrapper>
                      </Column1>
                      <Column2>
                        <ImgWrap>
                            <Img src={png5} alt={"beaker"}/>
                        </ImgWrap>
                      </Column2>
                  </InfoRow>
              </InfoWrapper>
          </InfoContainer>
    )
}

export default InfoSection
