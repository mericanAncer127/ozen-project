import React from 'react';
import Navbar from '../../components/_App/Navbar';
import PageBanner from '../../components/Common/PageBanner';
import WorkProcess from '../../components/Common/WorkProcess';
import PricePlansOne from '../../components/PricePlans/PricePlansOne';
import CTA from '../../components/Common/CTA';
import ServicesDetailsContent from '../../components/ServicesDetails/ServicesDetailsContent';
import Footer from '../../components/_App/Footer';
import { renderData } from './UIData';

const ServicesDetails = () => {
    return (
        <>
			<Navbar />
			
			<PageBanner 
                pageTitle="AI Development"
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="AI Development"
            /> 
			
            <ServicesDetailsContent renderData = { renderData } serviceDetail = "ai-development"/>

            <WorkProcess />

            <PricePlansOne />

            <div className="ptb-100">
                <CTA />
            </div>

			<Footer />
		</>
    )
}

export default ServicesDetails;