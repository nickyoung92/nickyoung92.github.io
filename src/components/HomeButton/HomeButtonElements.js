import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HomeLinkWrapper = styled.div`
display: flex;
margin-left: 25%;
margin-right: 25%;
padding-top:25px;
padding-bottom:25px;
justify-content: center;
align-items: center;
&:hover {
  transform: scale(1.05);
  transition: 0.05s ease-in-out;}`

export const HomeLink = styled(Link)`
border-radius: 50px;
background: #FFF;
white-space: nowrap;
text-decoration: none;
cursor: pointer;
color: #000;
padding: 10px 22px;
font-weight: 700;
font-size: 28px;
text-align: center;

&:hover {
  transform: scale(1.05);
  transition: 0.05s ease-in-out;}
`;