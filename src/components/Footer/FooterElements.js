import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const FooterContainer = styled.footer`
  background-color: 'transparent';
  height: 100%;
`

export const FooterWrap = styled.div`
  padding: 24px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  
  @media screen and (max-width: 820px) {
      padding-top: 32px;
  }
`

export const FooterLinksWrapper = styled.div`
  display: flex;
  
  @media screen and (max-width: 820px) {
      flex-direction: column;
  }
`

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
      margin: 0;
      padding: 10px;
      width: 100%;
  }
`

export const FooterLinkTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
`

export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;

  &:hover {
      font-weight: bold;
      transition: 0.05s ease-in-out
  }
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 0 0;
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
  align-items: center;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  padding-right: 10px;
  padding-left: 10px;
  margin-right: 10px;
  margin-left: 10px;
  
  @media screen and (max-width: 820px) {
      flex-direction: column;
  }
`

export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  margin-bottom: 10px;
  

  &:hover {    
    transform: scale(1.05);
    transition: 0.05s ease-in-out}

`

export const WebsiteRights = styled.small`
  color: #fff;
  justify-self: start;
  align-items: center;
  margin-bottom: 16px;
`

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 45px;

  &:hover {
    transform: scale(1.05);
    transition: 0.05s ease-in-out
`

export const FaOpensea = styled.img`
  width: 100%;
`;
