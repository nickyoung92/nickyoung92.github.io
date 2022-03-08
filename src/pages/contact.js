import React from 'react'
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import background from '../images/gradientBg.jpg';

const ContactPage = () => {
    return (
        <div style={{background: `url(${background})`, backgroundSize: 'cover'}}>
          <ContactSection />
          <Footer />    
        </div>
    )
}

export default ContactPage;
