import React from 'react'
import Hero from './component/Layout/Hero'
import WhyChooseUs from './component/Layout/WhyChooseUs'
import CalltoAction from './component/Layout/CalltoAction'
import HireNow from './component/Layout/HireNow'
import Head from 'next/head'

const DigitalCard = ({ icons, title, desc, url }) => {
    return (
        <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="services-single text-center p-3 my-md-3 my-lg-3 my-sm-0 shadow-sm gray-light-bg rounded">
                <span className={icons}></span>
                <h5>{title}</h5>
                <p className="mb-0">{desc}</p>
            </div>
        </div>
    )
}

const javaDeveloper = () => {
    return (
        <>
            <Head>
                <title>Hire Dedicated Wordpress Developers | Outsource to India</title>
                <meta name="description" content="Hire top Wordpress Developers, Programmers and coders in India for back-end, front-end, custom web, software development. Outsource Hiring website development to India and save almost 70% on hiring costs." />
            </Head>
            <div className="main">
                <Hero title="Wordpress Developers" imgPath="/assets/images/fullstackdev.jpeg" />
                <HireNow hireBtn="Wordpress Developers"
                    p1="Can provide better Content Management System."
                    sub1="WP developers use CMS to edit and organise your web content easily."
                    p2="Could integrate blogs and E-commerce."
                    sub2="Blogspots and Wordpress ecommerce called Woocommerce work smoothly."
                    p3="Synchronized Ecosystem for your business"
                    sub3="Developers can alter website themes to suit the tone of the web content."
                    p4="Could work on Plug-in Development."
                    sub4="WP Developers use plugins to make websites way more interactive."
                    imgPath="/assets/images/wp.gif"
                />
                <section className="services-section ptb-50" style={{ marginBottom: "100px" }}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <div className="section-heading text-center mb-4">
                                    <h4 style={{ fontWeight: '100' }}><b>Get end-to-end</b> Wordpress Development Services</h4>
                                    <p className="lead"> </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <DigitalCard
                                icons="ti-announcement icon-lg color-primary d-block mb-4"
                                title="Blog"
                                desc="WP initially was a blogspot. informative blogs help your business build a connect with the customers."
                            />
                            <DigitalCard
                                icons="ti-basketball icon-lg color-primary d-block mb-4"
                                title="Website"
                                desc="With WP, Your website can stay evolving with various integrations and customizations for your business."
                            />
                            <DigitalCard
                                icons="ti-direction icon-lg color-primary d-block mb-4"
                                title="E-commerce"
                                desc="Wordpress has its own e-commerce plugin called Woocommerce to help integrate services better."
                            />
                            <DigitalCard
                                icons="ti-desktop icon-lg color-primary d-block mb-4"
                                title="Wordpress Migration"
                                desc="If your business ever need to change the server, WP keeps intact all your code enabling a smooth transition."
                            />
                            <DigitalCard
                                icons="ti-magnet icon-lg color-primary d-block mb-4"
                                title="Theme Development"
                                desc="With Wordpress, you have the ability to develop and customize website themes to your requirements."
                            />

                            <DigitalCard
                                icons="ti-server icon-lg color-primary d-block mb-4"
                                title="Backing And Maintenance"
                                desc="Seamless integration between CMS frontend and PHP backend helps WP backup and maintain websites better."
                            />
                        </div>
                    </div>
                </section>
                <section className="full__stack__whyHiring">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <h3 style={{ fontWeight: '100' }}><b>Why Choose</b> Wordpress?</h3>
                                <hr className="hr__line" />
                                <p>Besides being a superior Content Management System, WordPress is a fantastic tool to help you get your business online. It’s a great website builder and can give secure hosting to your website and blogs. It’s easier to work at and gives your web developers far too many tools to experiment with.</p> <br />

                            </div>
                            <div className="col-lg-5 why__hiringRighImg">
                                <img src="/assets/images/wp.gif" className="full__stackImg" alt="hire wordpress developer" />
                            </div>
                        </div>
                    </div>

                </section>
                <WhyChooseUs />

                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <section className="project-details-section">
                                    <div className="container">
                                        <div className="row mt-5">
                                            <div className="col-md-12">
                                                <div className="project-details-content"><h5 style={{ fontWeight: "100" }}> <b>Hire Expert </b>Remote Wordpress Developers</h5><p>As you can already gather, Wordpress is an agile yet convenient platform for your business. Thus, your website deserves a dedicated and experienced hand. Expert remote professionals handling your website will ensure you get your desired online presence. They will also help you navigate your requirements better to put in perspective your vision and eventual possibilities. Just a few benefits of hiring expert remote Wordpress developers.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="container">
                                        <div className="row mt-5">
                                            <div className="col-md-12">
                                                <div className="project-details-content"><h5 style={{ fontWeight: "100" }}> <b>Why hire </b>Wordpress Developers?</h5><p>Wordpress caught fancy of every enthusiast who wished to web design. With simpler tools to use and easy Content Management System, Wordpress became a rage amongst users. But what made it a popular platform amongst web designers when it was originally a blog space and frontend for a PHP backend at best? The answer lies with those who honed their expertise over Wordpress. Top Web developers found it to be an easier platform with a variety of tools to provide exactly what they or their clients needed. Hiring best Wordpress developers for your project meant complete control over web development process. Its convenience helped made it user friendly. They can alter and accommodate changes in your website as per your requirement and know exactly which code needs attention to deliver the best output. Most new web developers choose Wordpress because it requires minimum coding and doesn’t differentiate between coders and non-coders. Thus, it’s quite normal to see most founders dabbling with the platform only to eventually see benefits of hiring Wordpress developers.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="container" >
                                        <div className="row mt-5">
                                            <div className="col-md-12">
                                                <div className="project-details-content">
                                                    <h5 style={{ fontWeight: '100' }}> <b>Why Hire </b> Our Remote Wordpress Developers</h5>
                                                </div>
                                            </div>
                                        </div> <hr />
                                        <div className="project-details-feature">
                                            <ul className="list-unstyled tech-feature-list">
                                                <li className="py-1"><span className="ti-check-box mr-2 color-secondary"></span><strong>Our remote professionals </strong>
                                                    regularly work efficiently on time sensitive projects.
                                                </li>
                                                <li className="py-1"><span className="ti-check-box mr-2 color-secondary"></span><strong>Our WP developers </strong>
                                                    understand your requirements better and develop CMS for your website accordingly.
                                                </li>
                                                <li className="py-1"><span className="ti-check-box mr-2 color-secondary"></span><strong>Our team stays</strong> in touch with your design briefs throughout the process and offers maintenance even after.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </section>
                            </div>

                        </div>
                    </div>

                </section>
                {/* desc */}

                <CalltoAction />
            </div>
        </>
    )
}

export default javaDeveloper
