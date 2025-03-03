import React from 'react';
import Navbar from '../components/_App/Navbar';
import MainBanner from '../components/Home/MainBanner';
import PartnerStyleOne from '../components/Common/PartnerStyleOne';
import FeaturesCard from '../components/Home/FeaturesCard';
import AboutUsContent from '../components/Home/AboutUsContent';
import FunFactStyleTwo from '../components/Common/FunFactStyleTwo';
import IntroVideoStyleTwo from '../components/Common/IntroVideoStyleTwo';
import OurRespectiveClients from '../components/Common/OurRespectiveClients';
import PopularBlogPost from '../components/Common/PopularBlogPost';
import CTA from '../components/Common/CTA';
import Footer from '../components/_App/Footer';

const IndexPage = () => {
	return (
		<>
			<Navbar />

			<MainBanner />

			<PartnerStyleOne />

			<FeaturesCard />

			<AboutUsContent />

			<FunFactStyleTwo />

			<IntroVideoStyleTwo />

			<OurRespectiveClients />

			<PopularBlogPost />

			<div className="pb-100">
				<CTA />
			</div>

			<Footer />
		</>
	);
};

export default IndexPage;
