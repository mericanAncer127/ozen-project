import React from 'react';
import Navbar from '../../components/_App/Navbar';
import PageBanner from '../../components/Common/PageBanner';
import Link from 'next/link';
import TechSupport from '../../components/Common/TechSupport';
import PricePlansOne from '../../components/PricePlans/PricePlansOne';
import CTA from '../../components/Common/CTA';
import Footer from '../../components/_App/Footer';
import { services } from './UIData';
const Services = () => {
	return (
		<>
			<Navbar />

			<PageBanner
				pageTitle="Services"
				homePageUrl="/"
				homePageText="Home"
				activePageText="Services"
			/>

			<div className="services-area bg-without-box-color pt-100 pb-70">
				<div className="container">
					<div className="row justify-content-center">
						{
							services.map(service => 
								<div className="col-lg-4 col-md-6" key={service.title}>
									<div className="single-services-box">
										<div className={`icon ${service.bg}`}>
											<i className={service.icon}></i>
										</div>
										<h3>
											<Link href={service.link}>
												<a>{service.title}</a>
											</Link>
										</h3>
										<p>
											{service.text}	
										</p>

										<Link href={service.link}>
											<a className="services-btn">
												Read More <i className="ri-arrow-right-line"></i>
											</a>
										</Link>
									</div>
								</div>
							)
						}
					</div>
				</div>

				{/* Shape Images */}
				<div className="services-shape-1">
					<img src="/images/services/shape-1.png" alt="image" />
				</div>
				<div className="services-shape-2">
					<img src="/images/services/shape-2.png" alt="image" />
				</div>
				<div className="services-shape-3">
					<img src="/images/services/shape-3.png" alt="image" />
				</div>
				<div className="services-shape-4">
					<img src="/images/services/shape-4.png" alt="image" />
				</div>

				{/* Services Style */}
				<style jsx>{`
					.services-area {
						position: relative;
						z-index: 1;
						overflow: hidden;
					}
					.services-area.bg-without-box-color {
						background-color: var(--white-color);
					}

					.services-area.bg-without-box-color .single-services-box {
						background-color: var(--white-color);
						-webkit-box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.1);
						box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.1);
					}
					.services-area.bg-box-color {
						background-color: #f4f8fc;
					}
					.single-services-box {
						margin-bottom: 30px;
						padding: 35px;
						border-radius: 5px;
						-webkit-transition: var(--transition);
						transition: var(--transition);
						background-color: var(--white-color);
						text-align: center;
					}
					.single-services-box .icon {
						margin-bottom: 30px;
					}
					.single-services-box .icon i {
						display: inline-block;
						height: 80px;
						width: 80px;
						line-height: 80px;
						background-color: var(--main-color);
						color: var(--white-color);
						text-align: center;
						font-size: 45px;
						border-radius: 5px;
						-webkit-transition: var(--transition);
						transition: var(--transition);
					}
					.single-services-box .icon.bg-36CC72 i {
						background-color: #36cc72;
					}

					.single-services-box .icon.bg-FF414B i {
						background-color: #ff414b;
					}
					.single-services-box .icon.bg-FF6D3D i {
						background-color: #ff6d3d;
					}
					.single-services-box .icon.bg-8932F8 i {
						background-color: #8932f8;
					}
					.single-services-box .icon.bg-FFCA40 i {
						background-color: #ffca40;
					}
					.single-services-box h3 {
						margin-bottom: 15px;
						font-size: 25px;
					}
					.single-services-box h3 a {
						color: var(--black-color);
						-webkit-transition: var(--transition);
						transition: var(--transition);
					}
					.single-services-box p {
						margin-bottom: 15px;
						font-size: 15px;
					}
					.single-services-box .services-btn {
						font-size: 15px;
						font-weight: 500;
						position: relative;
						-webkit-transition: var(--transition);
						transition: var(--transition);
					}
					.single-services-box .services-btn i {
						position: absolute;
						right: -20px;
						top: 50%;
						-webkit-transform: translateY(-50%);
						transform: translateY(-50%);
						font-size: 15px;
					}
					.single-services-box:hover {
						background-color: var(--white-color);
						-webkit-box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.1);
						box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.1);
						-webkit-transform: translateY(-10px);
						transform: translateY(-10px);
					}

					.single-services-box:hover h3 a {
						color: var(--main-color);
					}
					.single-services-box:hover .services-btn {
						color: var(--main-color);
						letter-spacing: 1px;
					}

					// shape
					.services-shape-1 {
						position: absolute;
						top: 20%;
						left: 45%;
						-webkit-transform: translateY(-20%) translateX(-45%);
						transform: translateY(-20%) translateX(-45%);
						z-index: 1;
					}
					.services-shape-2 {
						position: absolute;
						top: 15%;
						left: 45%;
						-webkit-transform: translateY(-15%) translateX(-45%);
						transform: translateY(-15%) translateX(-45%);
						z-index: 1;
					}
					.services-shape-3 {
						position: absolute;
						top: 45%;
						left: 2%;
						-webkit-transform: translateY(-45%) translateX(-2%);
						transform: translateY(-45%) translateX(-2%);
						z-index: -1;
					}
					.services-shape-4 {
						position: absolute;
						top: 45%;
						right: 0%;
						-webkit-transform: translateY(-45%) translateX(-5%);
						transform: translateY(-45%) translateX(-5%);
						z-index: -1;
					}
					.services-shape-5 {
						position: absolute;
						bottom: 0;
						left: 35%;
						-webkit-transform: translateY(-10%) translateX(-35%);
						transform: translateY(-10%) translateX(-35%);
						z-index: 1;
					}

					// Responsive Style
					@media only screen and (max-width: 767px) {
						.single-services-box {
							padding: 35px 15px;
						}
						.single-services-box .icon {
							margin-bottom: 25px;
						}
						.single-services-box h3 {
							font-size: 20px;
							margin-bottom: 10px;
						}
						.single-services-box p {
							margin-bottom: 12px;
						}
						.services-shape-1,
						.services-shape-2,
						.services-shape-3,
						.services-shape-4,
						.services-shape-5 {
							display: none;
						}
					}

					@media only screen and (min-width: 768px) and (max-width: 991px) {
						.single-services-box {
							padding: 35px 15px;
						}
						.single-services-box h3 {
							font-size: 20px;
						}
						.services-shape-1,
						.services-shape-2,
						.services-shape-3,
						.services-shape-4,
						.services-shape-5 {
							display: none;
						}
					}

					@media only screen and (min-width: 992px) and (max-width: 1199px) {
						.single-services-box {
							padding: 35px 20px;
						}
						.single-services-box h3 {
							font-size: 20px;
						}
					}

					@media only screen and (min-width: 1200px) and (max-width: 1399px) {
						.single-services-box {
							padding: 30px;
						}
						.single-services-box h3 a {
							font-size: 24px;
						}
					}
				`}</style>
			</div>

			<TechSupport />
				
			<PricePlansOne/>
				
			<div className="ptb-100">
				<CTA />
			</div>

			<Footer />
		</>
	);
};

export default Services;
