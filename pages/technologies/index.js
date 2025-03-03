import React from 'react';
import Navbar from '../../components/_App/Navbar';
import PageBanner from '../../components/Common/PageBanner';
import Footer from '../../components/_App/Footer';
import TechnologyCards from '../../components/Technologies/TechnologyCards';
import FunFacts from '../../components/Common/FunFacts';
import TechSupport from '../../components/Common/TechSupport';
import PartnerStyleOne from '../../components/Common/PartnerStyleOne';
import RecentCaseStudySlider from '../../components/CaseStudy/RecentCaseStudySlider';
import CTA from '../../components/Common/CTA';

const Technologies = () => {
	return (
		<>
			<Navbar />

			<PageBanner
				pageTitle="Technologies"
				homePageUrl="/"
				homePageText="Home"
				activePageText="Technologies"
			/>

			<TechnologyCards />

			<PartnerStyleOne/>

			<>
				
				{/* About Us Style */}
				<style jsx>{`
					.about-area {
						position: relative;
						z-index: 1;
						overflow: hidden;
					}
					.about-area::before {
						position: absolute;
						content: '';
						height: 100%;
						width: 50%;
						background-color: #f4f8fc;
						left: 0;
						top: 0;
						z-index: -1;
					}
					.about-area::after {
						position: absolute;
						content: '';
						height: 100%;
						width: 50%;
						background-color: var(--white-color);
						right: 0;
						top: 0;
						z-index: -1;
					}

					.about-image {
						padding-top: 75px;
						padding-bottom: 75px;
						padding-right: 30px;
					}
					.about-item {
						padding-left: 50px;
					}
					.about-item .about-content .tag {
						display: inline-block;
						height: 50px;
						width: 50px;
						line-height: 50px;
						background-color: var(--white-color);
						text-align: center;
						border-radius: 50px;
						-webkit-box-shadow: 0 0 1.25rem rgba(108, 118, 134, 0.1);
						box-shadow: 0 0 1.25rem rgba(108, 118, 134, 0.1);
					}
					.about-item .about-content h3 {
						font-size: 40px;
						margin-top: 25px;
						margin-bottom: 20px;
						line-height: 1.4;
					}
					.about-item .about-content p {
						position: relative;
						z-index: 1;
					}
					.about-item .about-inner-content {
						position: relative;
						margin-top: 30px;
						padding-left: 80px;
					}
					.about-item .about-inner-content img {
						position: absolute;
						left: 0;
						top: 0;
					}
					.about-item .about-inner-content h4 {
						font-size: 22px;
						margin-bottom: 12px;
						font-weight: 500;
					}
					.about-item .about-btn {
						margin-top: 30px;
						padding-left: 85px;
					}
					.about-item .about-btn .default-btn {
						background-color: var(--optional-color);
					}
					.about-item .about-btn .default-btn span {
						background-color: var(--main-color);
					}

					// shape
					.about-shape-1 {
						position: absolute;
						top: 8%;
						left: 10%;
						-webkit-transform: translateY(-8%) translateX(-10%);
						transform: translateY(-8%) translateX(-10%);
					}
					.about-shape-2 {
						position: absolute;
						bottom: 2%;
						left: 5%;
						-webkit-transform: translateY(-2%) translateX(-5%);
						transform: translateY(-2%) translateX(-5%);
					}
					.about-shape-3 {
						position: absolute;
						top: 5%;
						right: 15%;
						-webkit-transform: translateY(-5%) translateX(-15%);
						transform: translateY(-5%) translateX(-15%);
					}
					.about-shape-4 {
						position: absolute;
						top: 30%;
						left: 50%;
						-webkit-transform: translateY(-30%) translateX(-50%);
						transform: translateY(-30%) translateX(-50%);
					}
					.about-shape-5 {
						position: absolute;
						top: 35%;
						left: 50%;
						-webkit-transform: translateY(-35%) translateX(-50%);
						transform: translateY(-35%) translateX(-50%);
					}
					.about-shape-6 {
						position: absolute;
						bottom: 10%;
						right: 20%;
						-webkit-transform: translateY(-10%) translateX(-20%);
						transform: translateY(-10%) translateX(-20%);
					}
					.about-shape-7 {
						position: absolute;
						bottom: 5%;
						right: 18%;
						-webkit-transform: translateY(-5%) translateX(-18%);
						transform: translateY(-5%) translateX(-18%);
					}

					// Responsive Style
					@media only screen and (max-width: 767px) {
						.about-area {
							padding-bottom: 50px;
						}
						.about-area::after {
							background-color: #f4f8fc;
						}
						.about-image {
							padding-top: 50px;
							padding-bottom: 50px;
							padding-right: 0;
							text-align: center;
						}
						.about-item {
							padding-left: 0;
						}
						.about-item .about-content h3 {
							font-size: 24px;
						}
						.about-item .about-content p {
							font-size: 15px;
						}
						.about-item .about-inner-content {
							padding-left: 0;
							text-align: center;
						}
						.about-item .about-inner-content img {
							position: relative;
							margin-bottom: 15px;
						}
						.about-item .about-btn {
							padding-left: 0;
							text-align: center;
						}
						.about-shape-1 {
							display: none;
						}
						.about-shape-2 {
							display: none;
						}
						.about-shape-3 {
							display: none;
						}
						.about-shape-4 {
							display: none;
						}
						.about-shape-5 {
							display: none;
						}
						.about-shape-6 {
							display: none;
						}
						.about-shape-7 {
							display: none;
						}
					}

					@media only screen and (min-width: 768px) and (max-width: 991px) {
						.about-area {
							padding-bottom: 70px;
						}
						.about-area::after {
							background-color: #f4f8fc;
						}
						.about-image {
							padding-top: 50px;
							padding-bottom: 50px;
							padding-right: 0;
							text-align: center;
						}
						.about-item {
							padding-left: 0;
						}
						.about-shape-1 {
							display: none;
						}
						.about-shape-2 {
							display: none;
						}
						.about-shape-3 {
							display: none;
						}
						.about-shape-4 {
							display: none;
						}
						.about-shape-5 {
							display: none;
						}
						.about-shape-6 {
							display: none;
						}
						.about-shape-7 {
							display: none;
						}
					}

					@media only screen and (min-width: 992px) and (max-width: 1199px) {
						.about-image {
							padding-top: 0;
							padding-bottom: 0;
							padding-right: 0;
						}
						.about-item {
							padding-left: 15px;
						}
						.about-item .about-content p {
							font-size: 14px;
						}
						.about-item .about-inner-content p {
							font-size: 14px;
						}
					}
					.cases-area {
						position: relative;
						z-index: 1;
						overflow: hidden;
				}
				.single-cases {
						margin-bottom: 30px;
				}
				.single-cases .cases-image {
						overflow: hidden;
				}
				.single-cases .cases-image img {
						-webkit-transition: var(--transition);
						transition: var(--transition);
				}
				.single-cases .cases-content {
						margin-top: 30px;
				}
				.single-cases .cases-content .tags a {
						color: var(--main-color);
						padding: 5px 15px;
						display: inline-block;
						background-color: #EAF0FF;
						font-size: 14px;
						font-weight: 500;
						border-radius: 5px;
						-webkit-transition: var(--transition);
						transition: var(--transition);
						margin-right: 15px;
				}
				.single-cases .cases-content .tags a:last-child {
						margin-right: 0;
				}
				.single-cases .cases-content .tags a:hover {
						background-color: var(--main-color);
						color: var(--white-color);
				}
				.single-cases .cases-content h3 {
						font-size: 25px;
						margin-top: 25px;
						margin-bottom: 15px;
				}
				.single-cases .cases-content h3 a {
						position: relative;
				}
				.single-cases .cases-content h3 a::before {
						content: "";
						position: absolute;
						width: 0%;
						height: 100%;
						left: 0;
						top: 0;
						border-bottom: 1px solid var(--main-color);
						-webkit-transition: var(--transition);
						transition: var(--transition);
						z-index: -1;
				}
				.single-cases:hover .cases-image img {
						-webkit-transform: scale(1.1);
										transform: scale(1.1);
				}
				.single-cases:hover .cases-content h3 a {
						color: var(--main-color);
				}
				.single-cases:hover .cases-content h3 a::before {
						width: 100%;
				}
				
				// Cases View Button
				.cases-view-all-btn {
						text-align: center;
						margin-top: 15px;
				}
				.cases-view-all-btn .default-btn {
						color: var(--white-color);
						background-color: var(--optional-color);
				}
				.cases-view-all-btn .default-btn span {
						background-color: var(--main-color);
				}
				.cases-view-all-btn .default-btn:hover {
						color: var(--white-color);
				}

				// shape
				.cases-shape-1 {
						position: absolute;
						top: 5%;
						right: 18%;
						-webkit-transform: translateY(-5%) translateX(-18%);
										transform: translateY(-5%) translateX(-18%);
				}
				.cases-shape-2 {
						position: absolute;
						bottom: 3%;
						right: 12%;
						-webkit-transform: translateY(-8%) translateX(-12%);
										transform: translateY(-8%) translateX(-12%);
				}
				.cases-shape-3 {
						position: absolute;
						top: 45%;
						right: 0;
						-webkit-transform: translateY(-45%);
										transform: translateY(-45%);
				}
				.cases-shape-4 {
						position: absolute;
						top: 45%;
						left: 2%;
						-webkit-transform: translateY(-45%) translateX(-2%);
										transform: translateY(-45%) translateX(-2%);
						z-index: -1;
				}
				.cases-shape-5 {
						position: absolute;
						top: 48%;
						left: 2%;
						-webkit-transform: translateY(-48%) translateX(-2%);
										transform: translateY(-48%) translateX(-2%);
						z-index: -1;
				}
				.cases-shape-6 {
						position: absolute;
						top: 45%;
						left: 50%;
						-webkit-transform: translateY(-45%) translateX(-50%);
										transform: translateY(-45%) translateX(-50%);
						z-index: -1;
						opacity: 35%;
				}
				.cases-shape-7 {
						position: absolute;
						top: 46%;
						left: 52%;
						-webkit-transform: translateY(-46%) translateX(-52%);
										transform: translateY(-46%) translateX(-52%);
						z-index: -1;
						opacity: 35%;
				}

				// Responsive Style
				@media only screen and (max-width: 767px) {
						.single-cases .cases-content h3 {
								font-size: 22px;
								margin-top: 20px;
								margin-bottom: 10px;
								line-height: 1.4;
						}
						.cases-shape-1 {
								display: none;
						}
						.cases-shape-2 {
								display: none;
						}
						.cases-shape-3 {
								display: none;
						}
						.cases-shape-4 {
								display: none;
						}
						.cases-shape-5 {
								display: none;
						}
						.cases-shape-6 {
								display: none;
						}
						.cases-shape-7 {
								display: none;
						}
				}

				@media only screen and (min-width : 768px) and (max-width : 991px) {
						.cases-shape-1 {
								display: none;
						}
						.cases-shape-2 {
								display: none;
						}
						.cases-shape-3 {
								display: none;
						}
						.cases-shape-4 {
								display: none;
						}
						.cases-shape-5 {
								display: none;
						}
						.cases-shape-6 {
								display: none;
						}
						.cases-shape-7 {
								display: none;
						}
				}

				@media only screen and (min-width : 992px) and (max-width : 1199px) {
						.single-cases .cases-content h3 {
								font-size: 23px;
								margin-bottom: 15px;
						}
						.cases-shape-1 {
								display: none;
						}
						.cases-shape-2 {
								display: none;
						}
						.cases-shape-3 {
								display: none;
						}
						.cases-shape-4 {
								display: none;
						}
						.cases-shape-5 {
								display: none;
						}
						.cases-shape-6 {
								display: none;
						}
						.cases-shape-7 {
								display: none;
						}
				}
				`}</style>
			</>

			<div className="ptb-100">
			<TechSupport />

				</div>
			<div className="ptb-50">
				<FunFacts />
			</div>


			<RecentCaseStudySlider/>

			<div className="ptb-100">
				<CTA />
			</div>

			<Footer />
		</>
	);
};

export default Technologies;
