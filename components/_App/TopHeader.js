import React from 'react';
import { contact } from './UIData';

const TopHeaderTwo = () => {
	return (
		<>
			<div className="top-header-area bg-color-wrap">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-7 col-sm-8">
							<ul className="top-header-content">
								<li>
									<i className="ri-customer-service-line"></i>
									<a href={contact.tel.href}>{contact.tel.number}</a>
								</li>

								<li>
									<i className="ri-earth-line"></i>
									<a href={contact.email.href}>{contact.email.address}</a>
								</li>
							</ul>
						</div>

						<div className="col-lg-5 col-sm-4">
							<ul className="top-header-optional">
								<li>
										<a href={contact.social.facebook} target="_blank">
												<i className="ri-facebook-line"></i>
										</a>
								</li>
								<li>
										<a href={contact.social.twitter} target="_blank">
												<i className="ri-twitter-fill"></i>
										</a>
								</li>
								<li>
										<a href={contact.social.linkedin} target="_blank">
												<i className="ri-linkedin-fill"></i>
										</a>
								</li>
								<li>
										<a href={contact.social.messenger} target="_blank">
												<i className="ri-messenger-line"></i>
										</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			{/* Top Header Style */}
			<style jsx>{`
				.top-header-area {
					background-color: #f4f8fc;
					padding-top: 15px;
					padding-bottom: 15px;
				}
				.top-header-content {
					padding-left: 0;
					list-style-type: none;
					margin-bottom: 0;
				}
				.top-header-content li {
					display: inline-block;
					position: relative;
					padding-left: 22px;
					font-size: 15px;
					font-weight: 500;
					color: var(--paragraph-color);
					margin-right: 18px;
					-webkit-transition: var(--transition);
					transition: var(--transition);
				}
				.top-header-content li i {
					position: absolute;
					left: 0;
					top: 50%;
					-webkit-transform: translateY(-50%);
					transform: translateY(-50%);
					color: var(--paragraph-color);
					font-size: var(--font-size);
					-webkit-transition: var(--transition);
					transition: var(--transition);
				}
				.top-header-content li a {
					color: var(--paragraph-color);
				}
				.top-header-content li a:hover {
					color: var(--main-color);
				}
				.top-header-content li:last-child {
					margin-right: 0;
				}
				.top-header-optional {
					padding-left: 0;
					margin-bottom: 0;
					text-align: right;
				}
				.top-header-optional li {
					list-style-type: none;
					display: inline-block;
				}
				.top-header-optional li a {
					margin-right: 15px;
				}
				.top-header-optional li a:last-child {
					margin-right: 0;
				}
				.top-header-optional li a i {
					display: inline-block;
					font-size: var(--font-size);
					font-weight: 500;
					color: var(--paragraph-color);
					-webkit-transition: var(--transition);
					transition: var(--transition);
				}
				.top-header-optional li a i:hover {
					color: var(--main-color);
					-webkit-transform: translateY(-2px);
					transform: translateY(-2px);
				}

				// Responsive Style
				@media only screen and (max-width: 767px) {
					.top-header-area {
						text-align: center;
						padding-top: 12px;
						padding-bottom: 12px;
					}
					.top-header-optional {
						text-align: center;
					}
					.top-header-content li {
						padding-left: 20px;
						font-size: 13px;
						margin-right: 10px;
					}
				}

				@media only screen and (max-width: 575px) {
					.top-header-optional {
						display: none;
					}
				}

				@media only screen and (min-width: 768px) and (max-width: 991px) {
				}

				@media only screen and (min-width: 992px) and (max-width: 1199px) {
				}
			`}</style>
		</>
	);
};

export default TopHeaderTwo;
