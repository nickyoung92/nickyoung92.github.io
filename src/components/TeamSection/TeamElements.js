import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const TeamContainer = styled.div`
    color: 'transparent';
    padding-top: 75px;
    padding-bottom: 75px;
`;

export const TeamWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 100%;
  width: 100%
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const TeamRow = styled.div`
  display: grid;
  frid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'` )};

  @media screen and (max-width: 768px) {
      grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)}
  };
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-top: 60px;
`;

export const TopLine = styled.p`
  color: ${({ lightText }) => (lightText ? '#010606' : '#fff')};
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#FFF' : '#FFF')};
  
  @media screen and (max-width:480px) {
      font-size: 32px;
  };
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({darkText}) => (darkText ? '#010606' : '#fff')};
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;

export const BtnLinkR = styled(LinkR)`
  border-radius: 50px;
  background: #FFF;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 18px;
  font-weight: 700;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  
  &:hover {
      transform: scale(1.03);
      transition: all 0.05s ease-in-out;
      background: #fff;
      color: 010606;
  }  
`;

export const BtnLinkS = styled(LinkS)`
  border-radius: 50px;
  background: #FFF;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 18px;
  font-weight: 700;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  
  &:hover {
      transform: scale(1.03);
      transition: all 0.05s ease-in-out;
      background: #fff;
      color: 010606;
  }  
`
;