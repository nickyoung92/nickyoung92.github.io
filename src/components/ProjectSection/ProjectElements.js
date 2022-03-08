import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom'

export const ProjectContainer = styled.div`
    color: #fff;
    background: transparent;

`;

export const ProjectWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 100%;
  width: 100%
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 50px;
  margin-top: 50px;
  padding: 0 0 0 0;
  justify-content: center;


  @media screen and (max-width: 540px) {
    padding: 12px 0 12px 0 ;
  }
`;

export const ProjectRow = styled.div`
  display: grid;
  frid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas ${({imgStart}) => (imgStart ? `'col3 col2 col1'` : `'col1 col2 col3'` )};

  @media screen and (max-width: 767px) {
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2' 'col3'` : `'col1 col1' 'col2 col2' 'col3 col3'`)}
  };
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  margin-top: 15px;
  margin-left: 15px;
  margin-right: 15px;
  padding: 5px;
  grid-area: col1;
  justify-content: center;
  display: flex;
  align-items: center;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const Column3 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col3;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 10px;
`;

export const Heading = styled.h1`
  margin-bottom: 12px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: #CCCCFF
  
  @media screen and (max-width:480px) {
      font-size: 32px;
  };
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 10px;
  font-size: 18px;
  line-height: 24px;
  color: #CCCCFF
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 250px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
`;

export const BtnLink = styled(LinkR)`
  border-radius: 50px;
  background: cyan;
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
      transition: all 0.2s ease-in-out;
      background: #fff;
      color: 010606;
  }
`;

export const LinksRow = styled.div`
display: flex;
justify-content: space-between;
align-items: center;`