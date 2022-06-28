import React from 'react'
import Hero from './component/Layout/Hero'
import WhyChooseUs from './component/Layout/WhyChooseUs'
import CalltoAction from './component/Layout/CalltoAction'
import Head from 'next/head'

const DigitalCard = ({ icons, title, desc, url }) => {
    return (
        <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="services-single text-center p-3 my-md-3 my-lg-3 my-sm-0 shadow-sm gray-light-bg rounded">
            <h5>{title}</h5>
            <p className="mb-0">{desc}</p>
            <a href={url} className="detail-link mt-4">Hire Now <span className="ti-arrow-right"></span></a>
        </div>
    </div>
    )
}

const AngularDeveloper = () => {
    return (
        <>
            <Head>
                <title>Hire Dedicated Backend Developers | Outsource to India</title>
                <meta name="description" content="Hire top Backend Developer from India to create responsive and interactive mobile apps for all platforms, especially iOS, Android & Windows. Outsource Mobile App Development to India and save almost 70% cost on hiring dedicated mobile app developers." />
            </Head>
            <div className="main">
                <Hero title="Backend Developer" imgPath="/assets/images/ApplicationDevelopment.webp" />
                <section className="services-section ptb-50" style={{ marginBottom: "100px", marginTop: "100px" }}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <div className="section-heading text-center mb-4">
                                    <h4 style={{ fontWeight: '100' }}><b>Get end-to-end</b> Backend Developer Services</h4>
                                    <p className="lead"> </p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <DigitalCard
                                title="Java"
                                desc="Java allows backend development on its applications with ease and agility using Spring Boot framework."
                                url="java-developer"
                            />
                            <DigitalCard
                                title="PHP"
                                desc="The original backend development scripting language, PHP has Lavarel framework to develop web apps."
                                url="php-developer"
                            />
                            <DigitalCard
                                title=".NET"
                                desc="Quite the framework, .NET has ASP.NET to assist backend development on agnostic web applications."
                                url="/contact"
                            />
                            <DigitalCard
                                title="Node.JS"
                                desc="A formidable backend development JavaScript, Node.JS uses Express framework for mobile applications."
                                url="/contact"
                            />

                        </div>
                    </div>
                </section>
                <section className="full__stack__whyHiring">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <h3 style={{ fontWeight: '100' }}><b>How important is backend</b> as a service?</h3>
                                <hr className="hr__line" />
                                <p>While frontend development dictates what your application looks like to your customers, the actual business starts with your backend development. It is the backend that lets your customers see more of what they specifically might like. Backend development anticipates your customer’s choices based on the data it has stored every time they use your application.</p>
                                <p>Hire Top backend developers to help you provide a better user experience to your clients while also creating a database for further streamlined services. Benefits of hiring backend developers remain in the long run since the logic programming helps your business learn and grow to serve and attract your potential clients better. </p> <br />
                            </div>
                            <div className="col-lg-5 why__hiringRighImg">
                                <img src="/assets/images/backend.png" className="full__stackImg" alt="hire mobile app developer" />
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
                                                <div className="project-details-content"><h5 style={{ fontWeight: "100" }}> <b>Hire Expert Backend </b>Developers</h5>
                                                    <p>Backend developers create an ecosystem that drives your business into automation. Best backend developers work their magic to make your web and mobile applications work smarter for your business. Hiring backend developers help improve your website’s infrastructure and lets you upgrade and enhance your applications more conveniently.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="container" >
                                        <div className="row mt-5">
                                            <div className="col-md-12">
                                                <div className="project-details-content">
                                                    <h5 style={{ fontWeight: '100' }}>
                                                        <b>Why Hire Backend </b>Developers</h5>
                                                </div>
                                            </div>
                                        </div> <hr />
                                        <div className="project-details-feature">
                                            <ul className="list-unstyled tech-feature-list">
                                                <li className="py-1"><span className="ti-check-box mr-2 color-secondary"></span><strong>Streamlined optimization for better functionality.</strong>
                                                </li>
                                                <li className="py-1"><span className="ti-check-box mr-2 color-secondary"></span><strong>Better logic programming for smarter anticipation.</strong></li>
                                                <li className="py-1"><span className="ti-check-box mr-2 color-secondary"></span><strong>Enables integration of APIs.</strong>
                                                </li> 
                                                
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

export default AngularDeveloper
