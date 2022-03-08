import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? '#000' : 'transparent')};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 540px) {
      transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  color: #FFF;
  width: 25%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: left;
  font-weight: bold;
  text-decoration: none;
  padding-right: 25px;
  padding-left: 25px;
  padding-top: 5px;
  padding-bottom: 5px;

  @media screen and (max-width: 1000px) {
    justify-content: center;
    width: 100%
  }
`;

export const Img = styled.img`
  width: auto;
  max-height: 80px;
  display: flex;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const MobileIcon = styled.div`
  display: none;
  
  @media screen and (max-width: 1000px) {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(-100%, 60%);
      font-size: 1.8rem;
      cursor: pointer;
      color: #FFF;
  }
  @media screen and (max-width: 385px) {
    display: none;
}
`;

export const NavMenu = styled.ul`
  display: flex;
  width: 50%;
  align-item: center;
  list-style: none;
  text-align: center;
  justify-content: center;
  padding-right: 5px;
  padding-left: 5px;
  
  @media screen and (max-width: 1000px) {
      display:none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinksHome = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
  }
`;

export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  
  &:hover {
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
  }

  &.active {
      border-bottom: 3px solid #FFF;
  }
`;

export const NavLinksR = styled(LinkR)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  
  &.active {
      border-bottom: 3px solid #FFF;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  width: 25%;
  align-items: center;
  justify-content: right;
  
  &:hover {
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
  }

  @media screen and (max-width: 1000px) {
      display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
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
      transition: all 0.2s ease-in-out;
      background: #fff;
      color: 010606;
  }
`;
  
