import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  height: 100%;
  position: flex;
  text-align: center;
  color: #fff;
  font-size: 14px;
  z-index: 0;
  padding-top: 20px;
  padding-bottom: 50px;
  background: transparent; 
`;

export const Heading = styled.h1`
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Subtitle = styled.h3`
 margin-top: 5px;  
 margin-bottom: 10px; 
`;

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const Form = styled.form`
  background: #010101;
  max-width: 600px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 8px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3pc rgba(0, 0, 0, 0.9);
  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`;


export const FormContent = styled.span`
  text-align: center;
  margin: 24px;
  color: #fff;
  font-size: 14px;
`;

export const TextInputWrapper = styled.div`
  display: flex;
  justify-content: left;
  align-items: left;

  @media screen and (max-width: 540px) {
    flex-direction: column;
  }
`;

export const TextInput = styled.input`
  display: flex;
  margin: 5px;
  width: 75%;

  @media screen and (max-width: 540px) {
    width: 100%;
  }
`;

export const InputLabel = styled.label`
  display: flex;
  margin: 5px;
  width: 25%;

  @media screen and (max-width: 540px) {
    width: 100%;
  }
`;

export const FullsizeInputLabel = styled.label`
  display: flex;
  margin: 5px;
  width: 100%;
`;

export const TextAreaInputWrapper = styled.div`
  display: flex;
  justify-content: left;
  align-items: left;
  width: 100%;

  @media screen and (max-width: 540px) {
    display: left;
  }
  
`;

export const TextAreaInput = styled.textarea`
  display: flex;
  justify-content: left;
  align-items: left;
  width: 100%;
  margin: 5px;
  padding: 0;
  resize: none;

`;

export const FormButtonWrapper = styled.div`
  align-items:center;
  display: center;
`;


export const FormButton = styled.button`
  background: #01bf71;
  margin-top: 10px;
  display: center;
  align-items: center;
  justify-content: center;
  width: 50%;
  padding: 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;

export const HomeLinkWrapper = styled.div`
  display: flex;
  margin-left: 25%;
  margin-right: 25%;
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
  font-size: 32px;
  text-align: center;

  &:hover {
    transform: scale(1.05);
    transition: 0.05s ease-in-out;}
`;

export const Small = styled.small`
  display: flex;
  justify-content: left;
  align-items: left;
  margin-left: 27.5%;

  @media screen and (max-width: 540px) {
    margin: 0 5px 0 5px;
  }
  
`
