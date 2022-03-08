import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom'



export const Bar = styled.div`
  position: relative;
  display: flex;
  height: 35px;
  width: 90%;
  border-radius: 3px;
  border: 2px solid #fff;
  margin: 1rem auto;
  margin-bottom: 2px;
`;

export const Fill = styled.div`
  background: green;
  align-self: flex-end;
  width: ${(props) => `${props.percentage}%`};
  border-radius: inherit;
  border: 1px solid green;
  transition: height 0.2s ease-in;
  height: 100%;
`;

export const ProgressLabel = styled.h1`
position: center;
width: 100%;
color: white;
align-self: center;
text-shadow: 2px 2px rgba(0, 0, 0, 0.9);
font-size: 24px;
font-weight: 700;
`;

export const MintPageContainer = styled.div`
height: 100%;
background: {background};
`;

export const MintPageNavbar = styled.div`
padding: 12px;
display: flex;
justify-content: space-between;
   

@media screen and (max-width: 1020px) {
    flex-direction: column;
    align-items: center;
   
}
`;

export const NavbarLink = styled(LinkR)`
border-radius: 50px;
background: #FFF;
white-space: nowrap;
text-decoration: none;
cursor: pointer;
color: #000;
padding: 10px 10px;
font-size: auto;
font-weight: 700;
margin-bottom: 10px;
text-align: center;
box-shadow: 0 2px 2px rgba(0, 0, 0, 0.9);
max-width: 200px;
min-width: 200px;
`;

export const WalletLink = styled.a`
border-radius: 50px;
background: #FFF;
white-space: nowrap;
text-decoration: none;
cursor: pointer;
color: #000;
padding: 10px 10px;
font-size: auto;
font-weight: 700;
margin-bottom: 10px;
text-align: center;
box-shadow: 0 2px 2px rgba(0, 0, 0, 0.9);
max-width: 200px;
min-width: 200px;
`;

export const FoundationLink = styled.a`
border-radius: 50px;
background: #FFF;
white-space: nowrap;
text-decoration: none;
cursor: pointer;
color: #000;
padding: 10px 10px;
font-size: auto;
font-weight: 700;
margin-bottom: 10px;
text-align: center;
box-shadow: 0 2px 2px rgba(0, 0, 0, 0.9);
max-width: 200px;
min-width: 200px;
`;


export const MetamaskButton = styled.button`
border-radius: 50px;
background: #FFF;
white-space: nowrap;
text-decoration: none;
cursor: pointer;
color: #000;
padding: 10px 22px;
font-size: auto;
font-weight: 700;
margin-bottom: 10px;
text-align: center;
box-shadow: 0 2px 2px rgba(0, 0, 0, 0.9);
max-width: 200px;
min-width: 200px;
`;


export const MintPageMain = styled.div`
justify-content: center;
text-align: center;
margin-top: 40px;
@media screen and (max-width: 1020px) {
    display: flex;
    flex-direction: column;
}
`;

export const MintPanel = styled.div`
display: flex;
justify-content: center;
text-align: center;
margin-top: 40px;


@media screen and (max-width: 539px) {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
}
`;

export const SponsorCardWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
`;

export const SponsorCard = styled.div`
background-color: rgba(255,255,255,0.75);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 15px;
height: 100%;
margin: 25px;
padding: 25px;
box-shadow: 0 1px 3px rgba(0,0,0,0.2);
max-width: 1000px;
`;

export const SponsorWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
`;

export const SponsorLink = styled.a`
cursor: pointer;
`;

export const Sponsor = styled.img`
height: auto;
width: 100%;
max-width: 1000px;
`;

export const SponsorTitle = styled.h1`
color: #000;
display: flex;
justify-content: center;
`;

export const GridCol = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
margin-left: 10px;
margin-right: 10px;
`;

export const ImgShowcase = styled.div`
margin-left: 10px;
margin-right: 10px;
@media screen and (max-width: 539px) {
    margin-top: 20px;
}
`;

export const ImgShowcaseImg = styled.img`
max-width: 250px;
height: auto;
box-shadow: 0 1px 3pc rgba(0, 0, 0, 0.9);
`;


export const ImgCycleShowcase = styled.div`
margin-left: 10px;
margin-right: 10px;
@media screen and (max-width: 539px) {
    margin-top: 20px;
}
`;

export const ImgCycleImg = styled.img`
max-width: 250px;
height: auto;
box-shadow: 0 1px 3pc rgba(0, 0, 0, 0.9);
`;

export const Description = styled.div`
`;

export const DescriptionPanel = styled.div`
display: flex;
align-items: center;
justify-content: center;
`;

export const TextWrapper = styled.div`
color: #fff;
text-shadow: 2px 2px rgba(0, 0, 0, 0.9);
padding: 10px;
max-width: 800px;
justify-content: center;

`;

export const BannerWrapper = styled.div`
margin-left: 10px;
margin-right: 10px;
margin-top: 35px;
display: flex;
align-items: center;
justify-content: center;
`;

export const BannerImage = styled.img`
max-width: 600px;
width: 100%;
height: auto;
`;

export const Heading = styled.h1`
display: flex;
margin-top: 10px;
margin-bottom: 10px;
font-size: auto;
align-self: center;
justify-content: center;
`;

export const Title = styled.h1`
margin-bottom: 10px;
font-size: 48px;
`;

export const List = styled.ul`
list-style-type: none;
font-size: auto;
@media screen and (max-width: 600px) {
    margin-bottom: 25px;
}
`;

export const Item = styled.li`
font-weight: 700;
margin-bottom: 5px;
`;

export const Text = styled.h3`
margin-bottom: 1px;
`;

export const AmountMinted = styled.h1`
color: #fff;
text-shadow: 2px 2px rgba(0, 0, 0, 0.9);
margin-bottom: 5px;
margin-top: 5px;
padding: 2px;
font-size: 24px;
}
`;
export const Connect = styled.h1`
color: #fff;
text-shadow: 2px 2px rgba(0, 0, 0, 0.9);
margin-bottom: 10px;
margin-top: 10px;
padding: 5px;
}
`;

export const MintLabel = styled.label`
color: #fff;
text-shadow: 2px 2px rgba(0, 0, 0, 0.9);
font-weight: 700;
`;

export const MintInput = styled.input`
min-width: 100px;
`;

export const MintButton = styled.button`
border-radius: 50px;
background: #FFF;
white-space: nowrap;
text-decoration: none;
cursor: pointer;
color: #000;
padding: 10px 22px;
font-size: auto;
font-weight: 700;
margin-top: 10px;
margin-bottom: 10px;
text-align: center;
box-shadow: 0 2px 2px rgba(0, 0, 0, 0.9);
width: 100px;
`;

export const FooterSection = styled.div`
padding: 10px;
margin-top: 10px;
`;

export const FooterLinksWrapper = styled.div`
padding: 10px;
margin: 10px;
display: flex;
justify-content: center;
@media screen and (max-width: 539px) {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
}
`;

export const FooterLinks = styled.a`
border-radius: 50px;
background: #FFF;
white-space: nowrap;
text-decoration: none;
cursor: pointer;
color: #000;
padding: 10px 22px;
font-size: auto;
font-weight: 700;
margin-left: 10px;
margin-right: 10px;
margin-bottom: 10px;
text-align: center;
box-shadow: 0 2px 2px rgba(0, 0, 0, 0.9);
`;

export const CurrentNetwork = styled.h6`
color: #fff;
text-shadow: 2px 2px rgba(0, 0, 0, 1);
margin-top: 10px;
`;

export const ContractInfo = styled.div`
padding: 12px;
font-size: 30px;
`;

export const InfoPanel = styled.div`
display: flex;
justify-content: center;
text-align: center;
padding: 40px;


@media screen and (max-width: 539px) {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
}
`;

export const ContractLink = styled.a`
border-radius: 50px;
background: #FFF;
white-space: nowrap;
text-decoration: none;
cursor: pointer;
color: #000;
padding: 10px 22px;
font-size: auto;
font-weight: 700;
margin-left: 10px;
margin-right: 10px;
margin-bottom: 10px;
text-align: center;
box-shadow: 0 2px 2px rgba(0, 0, 0, 0.9);
`;

export const ContractConnectedWrapper = styled.div`
`;

export const NetworkLabel = styled.p`
color: #fff;
font-weight: 700;
text-shadow: 0 2px 2px rgba(0, 0, 0, 1);
padding: 2px;
margin-top: 24px;
`;

export const RemainingNFTs = styled.p`
color: #fff;
font-weight: 700;
text-shadow: 0 2px 2px rgba(0, 0, 0, 1);
padding: 2px;
`;

export const DeductionInstructionsP = styled.p`
color: #000;
padding: 2px;
margin-bottom: 5px;
`;

export const DeductionInstructionsH1 = styled.h3`
color: #000;
padding: 2px;
`;

export const DeductionInstructionsWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
`;

export const RightsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WebsiteRights = styled.small`
  color: #000;
  margin-bottom: 16px;
`;
export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 45px;

  &:hover {
    transform: scale(1.05);
    transition: 0.05s ease-in-out
`;

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 10px;
    padding-left: 10px;
    margin-right: 10px;
    margin-left: 10px;
`;

export const PreviewPanel = styled.div`
display: flex;
justify-content: center;
text-align: center;
padding: 40px;

@media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
}
`;