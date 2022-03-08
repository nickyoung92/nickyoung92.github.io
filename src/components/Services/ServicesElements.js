import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const ServicesContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: 'transparent';
  padding-top: 75px;
  padding-bottom: 75px;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 5px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;
  
  @media screen and (max-width: 1000px) {
      grid-template-columns: 1fr;
      padding: 0 20px;
  };
`;

export const ServicesCard = styled.div`
  background-color: rgba(255,255,255,0.75);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  height: 100%;
  padding: 5px;
  min-width: 300px;
  max-width: 300px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: 1000px) {
    height: 400px;
  };

  &:hover {
      transform: scale(1.02);
      background-color: rgba(255,255,255);
      transition: all 0.2s ease-in-out;
      cursor: pointer;
  };
`;

export const ServicesCardLink = styled(Link)`
background-color: rgba(255,255,255,0);
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
border-radius: 10px;
max-height: 500px;
text-decoration: none;
color: #000;
`;

export const ServicesIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #FFF;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
      font-size: 2rem;
  };
`;

export const ServicesH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
  margin-bottom: 10px;
`;
