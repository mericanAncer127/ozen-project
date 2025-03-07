import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Link from 'next/link';
import Footer from '../components/_App/Footer';
import BlogSidebar from '../components/Blog/BlogSidebar';

const BlogRightSidebar = () => {
    return (
        <>
			<Navbar />
			
			<PageBanner 
                pageTitle="Blog Right Sidebar" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Blog Right Sidebar"
            /> 

            <div className="blog-area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="row justify-content-center">
                                <div className="col-lg-6 col-md-6">
                                    <div className="single-blog">
                                        <div className="blog-image">
                                            <Link href="/blog-details">
                                                <a><img src="/images/blog/blog-1.jpg" alt="image" /></a>
                                            </Link>
                                        </div>

                                        <div className="blog-content">
                                            <ul className="entry-meta">
                                                <li>
                                                    <Link href="/blog-details">
                                                        <a className="tag">
                                                            Branding
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <i className="ri-time-line"></i>
                                                    March 14, 2021
                                                </li>
                                                <li>
                                                    <i className="ri-message-2-line"></i>
                                                    (0) Comment
                                                </li>
                                            </ul>
                                            <h3>
                                                <Link href="/blog-details">
                                                    <a>Branding Involves Developing a Strategy to Creating a Point of Differentiation.</a>
                                                </Link>
                                            </h3>

                                            <Link href="/blog-details">
                                                <a className="blog-btn">
                                                    Read More <i className="ri-arrow-right-line"></i>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="single-blog">
                                        <div className="blog-image">
                                            <Link href="/blog-details">
                                                <a><img src="/images/blog/blog-2.jpg" alt="image" /></a>
                                            </Link>
                                        </div>

                                        <div className="blog-content">
                                            <ul className="entry-meta">
                                                <li>
                                                    <Link href="/blog-details">
                                                        <a className="tag">
                                                            Agency
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <i className="ri-time-line"></i>
                                                    March 14, 2021
                                                </li>
                                                <li>
                                                    <i className="ri-message-2-line"></i>
                                                    (0) Comment
                                                </li>
                                            </ul>
                                            <h3>
                                                <Link href="/blog-details">
                                                    <a>Design is a Plan or Specification For The Construction of an Object.</a>
                                                </Link>
                                            </h3>
                                            
                                            <Link href="/blog-details">
                                                <a className="blog-btn">
                                                    Read More <i className="ri-arrow-right-line"></i>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="single-blog">
                                        <div className="blog-image">
                                            <Link href="/blog-details">
                                                <a><img src="/images/blog/blog-3.jpg" alt="image" /></a>
                                            </Link>
                                        </div>

                                        <div className="blog-content">
                                            <ul className="entry-meta">
                                                <li>
                                                    <Link href="/blog-details">
                                                        <a className="tag">
                                                            Startup
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <i className="ri-time-line"></i>
                                                    March 14, 2021
                                                </li>
                                                <li>
                                                    <i className="ri-message-2-line"></i>
                                                    (0) Comment
                                                </li>
                                            </ul>
                                            <h3>
                                                <Link href="/blog-details">
                                                    <a>Branding Involves Developing the Strategy to Create a Point.</a>
                                                </Link>
                                            </h3>
                                            
                                            <Link href="/blog-details">
                                                <a className="blog-btn">
                                                    Read More <i className="ri-arrow-right-line"></i>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="single-blog">
                                        <div className="blog-image">
                                            <Link href="/blog-details">
                                                <a><img src="/images/blog/blog-4.jpg" alt="image" /></a>
                                            </Link>
                                        </div>

                                        <div className="blog-content">
                                            <ul className="entry-meta">
                                                <li>
                                                    <Link href="/blog-details">
                                                        <a className="tag">
                                                            Agency
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <i className="ri-time-line"></i>
                                                    March 14, 2021
                                                </li>
                                                <li>
                                                    <i className="ri-message-2-line"></i>
                                                    (0) Comment
                                                </li>
                                            </ul>
                                            <h3>
                                                <Link href="/blog-details">
                                                    <a>The Data-Driven Approach to Understanding</a>
                                                </Link>
                                            </h3>
                                            
                                            <Link href="/blog-details">
                                                <a className="blog-btn">
                                                    Read More <i className="ri-arrow-right-line"></i>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="single-blog">
                                        <div className="blog-image">
                                            <Link href="/blog-details">
                                                <a><img src="/images/blog/blog-5.jpg" alt="image" /></a>
                                            </Link>
                                        </div>

                                        <div className="blog-content">
                                            <ul className="entry-meta">
                                                <li>
                                                    <Link href="/blog-details">
                                                        <a className="tag">
                                                            Branding
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <i className="ri-time-line"></i>
                                                    March 14, 2021
                                                </li>
                                                <li>
                                                    <i className="ri-message-2-line"></i>
                                                    (0) Comment
                                                </li>
                                            </ul>
                                            <h3>
                                                <Link href="/blog-details">
                                                    <a>Conversion Rate the Sales Funnel Optimization</a>
                                                </Link>
                                            </h3>
                                            
                                            <Link href="/blog-details">
                                                <a className="blog-btn">
                                                    Read More <i className="ri-arrow-right-line"></i>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="single-blog">
                                        <div className="blog-image">
                                            <Link href="/blog-details">
                                                <a><img src="/images/blog/blog-6.jpg" alt="image" /></a>
                                            </Link>
                                        </div>

                                        <div className="blog-content">
                                            <ul className="entry-meta">
                                                <li>
                                                    <Link href="/blog-details">
                                                        <a className="tag">
                                                            Marketing
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <i className="ri-time-line"></i>
                                                    March 14, 2021
                                                </li>
                                                <li>
                                                    <i className="ri-message-2-line"></i>
                                                    (0) Comment
                                                </li>
                                            </ul>
                                            <h3>
                                                <Link href="/blog-details">
                                                    <a>Business Data is Changing the World’s Energy</a>
                                                </Link>
                                            </h3>
                                            
                                            <Link href="/blog-details">
                                                <a className="blog-btn">
                                                    Read More <i className="ri-arrow-right-line"></i>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="single-blog">
                                        <div className="blog-image">
                                            <Link href="/blog-details">
                                                <a><img src="/images/blog/blog-7.jpg" alt="image" /></a>
                                            </Link>
                                        </div>

                                        <div className="blog-content">
                                            <ul className="entry-meta">
                                                <li>
                                                    <Link href="/blog-details">
                                                        <a className="tag">
                                                            Design
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <i className="ri-time-line"></i>
                                                    March 14, 2021
                                                </li>
                                                <li>
                                                    <i className="ri-message-2-line"></i>
                                                    (0) Comment
                                                </li>
                                            </ul>
                                            <h3>
                                                <Link href="/blog-details">
                                                    <a>The Data Surrounding Higher Education</a>
                                                </Link>
                                            </h3>
                                            
                                            <Link href="/blog-details">
                                                <a className="blog-btn">
                                                    Read More <i className="ri-arrow-right-line"></i>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="single-blog">
                                        <div className="blog-image">
                                            <Link href="/blog-details">
                                                <a><img src="/images/blog/blog-8.jpg" alt="image" /></a>
                                            </Link>
                                        </div>

                                        <div className="blog-content">
                                            <ul className="entry-meta">
                                                <li>
                                                    <Link href="/blog-details">
                                                        <a className="tag">
                                                            Development
                                                        </a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <i className="ri-time-line"></i>
                                                    March 14, 2021
                                                </li>
                                                <li>
                                                    <i className="ri-message-2-line"></i>
                                                    (0) Comment
                                                </li>
                                            </ul>
                                            <h3>
                                                <Link href="/blog-details">
                                                    <a>Finding the Blocks of Neighboring Fields</a>
                                                </Link>
                                            </h3>
                                            
                                            <Link href="/blog-details">
                                                <a className="blog-btn">
                                                    Read More <i className="ri-arrow-right-line"></i>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
  
                                <div className="col-lg-12 col-md-12">
                                    <div className="pagination-area">
                                        <a href="#" className="prev page-numbers">
                                            <i className="ri-arrow-left-line"></i>
                                        </a>
                                        <span className="page-numbers current" aria-current="page">1</span>
                                        <a href="#" className="page-numbers">2</a>
                                        <a href="#" className="page-numbers">3</a>
                                        <a href="#" className="page-numbers">4</a>
                                        <a href="#" className="next page-numbers">
                                            <i className="ri-arrow-right-line"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Blog Card Style */}
                            <style jsx>{`
                                .blog-area {
                                    position: relative;
                                    z-index: 1;
                                    overflow: hidden;
                                }
                                .single-blog {
                                    -webkit-transition: var(--transition);
                                    transition: var(--transition);
                                    margin-bottom: 30px;
                                }
                                .single-blog .blog-content {
                                    margin-top: 30px;
                                }
                                .single-blog .blog-content .entry-meta {
                                    padding-left: 0;
                                    margin-bottom: 0;
                                }
                                .single-blog .blog-content .entry-meta .tag {
                                    display: inline-block;
                                    background-color: #EAF0FF;
                                    color: var(--main-color);
                                    font-size: 14px;
                                    font-weight: 500;
                                    padding: 5px 15px;
                                    border-radius: 5px;
                                    -webkit-transition: var(--transition);
                                    transition: var(--transition);
                                }
                                .single-blog .blog-content .entry-meta .tag:hover, .single-blog .blog-content .entry-meta .tag a:hover {
                                    background-color: var(--main-color);
                                    color: var(--white-color);
                                }
                                .single-blog .blog-content .entry-meta li {
                                    list-style-type: none;
                                    display: inline-block;
                                    color: #79798D;
                                    font-size: 14px;
                                    font-weight: 400;
                                    margin-right: 15px;
                                    position: relative;
                                    padding-left: 18px;
                                }
                                .single-blog .blog-content .entry-meta li:last-child {
                                    margin-right: 0;
                                }
                                .single-blog .blog-content .entry-meta li:first-child {
                                    padding-left: 0;
                                }
                                .single-blog .blog-content .entry-meta li i {
                                    position: absolute;
                                    left: 0;
                                    top: 50%;
                                    -webkit-transform: translateY(-50%);
                                            transform: translateY(-50%);
                                    color: #36CC72;
                                    font-size: 14px;
                                }
                                .single-blog .blog-content h3 {
                                    font-size: 22px;
                                    margin-top: 20px;
                                    margin-bottom: 15px;
                                    line-height: 1.5;
                                }
                                .single-blog .blog-content h3 a {
                                    color: var(--black-color);
                                }
                                .single-blog .blog-content .blog-btn {
                                    font-size: var(--font-size);
                                    font-weight: 500;
                                    position: relative;
                                    -webkit-transition: var(--transition);
                                    transition: var(--transition);
                                }
                                .single-blog .blog-content .blog-btn i {
                                    position: absolute;
                                    right: -20px;
                                    top: 50%;
                                    -webkit-transform: translateY(-50%);
                                            transform: translateY(-50%);
                                    font-size: 15px;
                                }
                                .single-blog:hover .blog-content h3 a {
                                    color: var(--main-color);
                                }

                                .single-blog:hover .blog-content .blog-btn {
                                    letter-spacing: 1px;
                                }
                                .blog-shape-1 {
                                    position: absolute;
                                    top: 10%;
                                    right: 2%;
                                    -webkit-transform: translateY(-10%) translateX(-2%);
                                            transform: translateY(-10%) translateX(-2%);
                                }
                                .blog-shape-2 {
                                    position: absolute;
                                    top: 10%;
                                    left: 2%;
                                    -webkit-transform: translateY(-10%) translateX(-2%);
                                            transform: translateY(-10%) translateX(-2%);
                                }
                                    
                                // Responsive Style
                                @media only screen and (max-width: 767px) {
                                    .single-blog .blog-content {
                                        margin-top: 20px;
                                    }
                                    .single-blog .blog-content h3 {
                                        font-size: 20px;
                                        margin-top: 15px;
                                        margin-bottom: 10px;
                                    }
                                    .single-blog .blog-content .blog-btn {
                                        font-size: 14px;
                                    }
                                    .single-blog .blog-content .entry-meta .tag {
                                        font-size: 12px;
                                        padding: 5px 8px;
                                    }
                                    .single-blog .blog-content .entry-meta li {
                                        font-size: 12px;
                                        margin-right: 5px;
                                        padding-left: 20px;
                                    }
                                    .blog-shape-1 {
                                        display: none;
                                    }
                                    .blog-shape-2 {
                                        display: none;
                                    }
                                }

                                @media only screen and (min-width : 768px) and (max-width : 991px) {
                                    .single-blog .blog-content .entry-meta .tag {
                                        font-size: 12px;
                                        padding: 5px 8px;
                                    }
                                    .single-blog .blog-content .entry-meta li {
                                        font-size: 12px;
                                        margin-right: 5px;
                                        padding-left: 20px;
                                    }
                                    .blog-shape-1 {
                                        display: none;
                                    }
                                    .blog-shape-2 {
                                        display: none;
                                    }
                                }

                                @media only screen and (min-width : 992px) and (max-width : 1199px) {
                                    .single-blog .blog-content {
                                        margin-top: 20px;
                                    }
                                    .single-blog .blog-content h3 {
                                        font-size: 20px;
                                        margin-top: 15px;
                                        margin-bottom: 10px;
                                    }
                                    .single-blog .blog-content .blog-btn {
                                        font-size: 14px;
                                    }
                                    .single-blog .blog-content .entry-meta .tag {
                                        font-size: 12px;
                                        padding: 5px 8px;
                                    }
                                    .single-blog .blog-content .entry-meta li {
                                        font-size: 12px;
                                        margin-right: 5px;
                                        padding-left: 20px;
                                    }
                                }
                            `}</style>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <div className="pl-15">
                                <BlogSidebar />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

			<Footer />
		</>
    )
}

export default BlogRightSidebar;