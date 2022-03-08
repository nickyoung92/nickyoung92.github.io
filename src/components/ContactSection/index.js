import React, { useState } from 'react';
import {send} from 'emailjs-com';

import {
    Container,
    FormWrap,
    Form,
    Heading,
    Subtitle,
    FormContent,
    TextInputWrapper,
    TextInput,
    InputLabel,
    FullsizeInputLabel,
    FormButton,
    HomeLinkWrapper,
    HomeLink,
    FormButtonWrapper,
    TextAreaInputWrapper,
    TextAreaInput,
    Small
} from './ContactElements';

import{ init } from 'emailjs-com';
init("user_xmFLwPJJveAWDb2021ia7");


    
const ContactSection = () => {
    const [toSend, setToSend] = useState({
        from_name: '',
        project_name: '',
        message: '',
        reply_to: '',
        phone: '',
        });
    
    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
        };

    const onSubmit = (e) => {
        window.alert('Button Clicked! \r\n Please wait for confirmation of success.')
        e.preventDefault();
        send(
            'service_n7zwlbq', /*Service ID*/
            'template_lii1gba', /*Template ID*/
            toSend,
            'user_xmFLwPJJveAWDb2021ia7' /* User ID*/
        )
            .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            window.alert('We received your submission! \r\n Someone will contact you shortly.');
            })
            .catch((err) => {
            console.log('FAILED...', err);
            window.alert('Something went wrong! Please email contact@co-labs.studio.')
            });
        };
    
    
    return (
          <Container>
                <HomeLinkWrapper>
                    <HomeLink to='/'>Return to Co-Labs</HomeLink>
                </HomeLinkWrapper>
            <FormWrap>
                <FormContent>
                    <Form name="myForm" onSubmit={onSubmit} action='mailto:contact@co-labs.studio' method='POST' enctype='EmailForm'>
                    <Heading>Contact Us</Heading>
                    <Subtitle>Fill out the form below and someone will be in contact with you shortly. If you have any issues, please reach out to your main point of contact or email contact@co-labs.studio directly.</Subtitle>
                        <TextInputWrapper>
                            <InputLabel>Your Name (required) </InputLabel>
                            <TextInput
                            type='text'
                            name='from_name'
                            placeholder='Elon Musk'
                            value={toSend.from_name}
                            onChange={handleChange}
                            required
                            />
                        </TextInputWrapper>   
                        <TextInputWrapper>
                            <InputLabel>Project Name</InputLabel>
                            <TextInput
                            type='text'
                            name='project_name'
                            placeholder='NFTesla'
                            value={toSend.project_name}
                            onChange={handleChange}
                            required
                            />
                        </TextInputWrapper> 
                        <TextInputWrapper>
                            <InputLabel>Your E-mail (required)</InputLabel>
                            <TextInput
                            type='email'
                            name='reply_to'
                            placeholder='SpaceKingElon@gmail.com'
                            value={toSend.reply_to}
                            onChange={handleChange}
                            required
                            />
                        </TextInputWrapper>
                        <TextInputWrapper>
                            <InputLabel>Your Phone</InputLabel>

                            <TextInput
                            type='tel'
                            name='phone'
                            placeholder='1234567890'
                            value={toSend.phone}
                            onChange={handleChange}
                            pattern="[0-9]{10}"
                            />
                        </TextInputWrapper>
                        <Small>Format: 1234567890</Small>
                        <FullsizeInputLabel>Your message (required)</FullsizeInputLabel>
                        <TextAreaInputWrapper>
                            <TextAreaInput
                            type='textarea'
                            name='message'  
                            rows='5'
                            columns='100' 
                            placeholder='I have an idea and need an artist/developer to make it happen...'
                            value={toSend.message}
                            onChange={handleChange}
                            required />
                        </TextAreaInputWrapper>
                        <FormButtonWrapper> 
                            <FormButton type='submit' onClick='alert("Please wait for confirmation of success")'>Submit</FormButton>
                        </FormButtonWrapper>
                    </Form>
                </FormContent>
            </FormWrap>
          </Container>    
    );
};


export default ContactSection;
