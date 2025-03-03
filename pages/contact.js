import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ContactForm from '../components/Contact/ContactForm';
import ContactInfo from '../components/Contact/ContactInfo';
import Footer from '../components/_App/Footer';

const ContactPage = () => {
    return (
        <>
			<Navbar />
			
			<PageBanner 
                pageTitle="Contact" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Contact"
            /> 
			 
            <ContactForm />

            <ContactInfo />

			<Footer />
		</>
    )
}

export default ContactPage;