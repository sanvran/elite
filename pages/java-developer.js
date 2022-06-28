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

const javaDeveloper = ({ hireBtn }) => {
    return (
        <>
            <Head>
                <title> Hire Dedicated Java Developers | Outsource to India</title>
                <meta name="description" content="Hire top java Developers, Programmers and coders in India for back-end, front-end, custom web, software development. Outsource Hiring website development to India and save almost 70% on hiring costs." />
            </Head>

            <div className="main">
                <Hero title="Java Developers" imgPath="/assets/images/fullstackdev.jpeg" />
                <HireNow hireBtn="Hire Java Developers"
                    p1="Experts in Core Java and Advance Java"
                    sub1="Your website deserves the finesse. only hire expert java professionals with us."
                    p2="Build Stable, Secure, Seamless Applications"
                    sub2="Hiring java developers for your apps ensures a smoother experience."
                    p3="Synchronized Ecosystem For Your Business"
                    sub3="Full stack java developers work both frontend and backend efficiently."
                    p4="Achieve Absolute Platform Independency"
                    sub4="Once the code is written, your applications run smooth on all platforms."
                    imgPath="/assets/images/java_top_img.png"
                />
                <section className="services-section ptb-50" style={{ marginBottom: "100px" }}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <div className="section-heading text-center mb-4">
                                    <h4 style={{ fontWeight: '100' }}><b>Get Complete</b> Java Development Services</h4>
                                    <p className="lead"> </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <DigitalCard
                                icons="ti-announcement icon-lg color-primary d-block mb-4"
                                title="Java Web Development"
                                desc="Hire best Java Web Developers to work their magic and bring forth the website your business needs."
                            />
                            <DigitalCard
                                icons="ti-email icon-lg color-primary d-block mb-4"
                                title="Java Games Development"
                                desc="Your gaming apps need you to hire dedicated Java developers to ensure All-Work-Jack is no dull boy."

                            />
                            <DigitalCard
                                icons="ti-search icon-lg color-primary d-block mb-4"
                                title="Custom Java Development"
                                desc="Pioneer businesses like yours require special attention. Hire custom Java Developers with us."
                            />
                            <DigitalCard
                                icons="ti-search icon-lg color-primary d-block mb-4"
                                title="Java Web Migration"
                                desc="Wish to switch servers? Our top Java Developers ensure a smooth java web migration for your business."
                            />
                            <DigitalCard
                                icons="ti-magnet icon-lg color-primary d-block mb-4"
                                title="Maintenance & Support"
                                desc="Your business is ever evolving and so is your website. Hire Java developers now to stay ahead."
                            />

                            <DigitalCard
                                icons="ti-credit-card icon-lg color-primary d-block mb-4"
                                title="Java QA/Testing"
                                desc="Java Applications need regular tests. Get the best Java quality Assurance from top java professionals."
                            />
                        </div>
                    </div>
                </section>
                <section className="full__stack__whyHiring">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <h3 style={{ fontWeight: '100' }}><b>Hire Expert</b> Remote Java Developer</h3>
                                <hr className="hr__line" />
                                <p>Your business is constantly working and so are you. Of course you require it all on the go. Remote Java developers let your business be fine-tuned instantly and help you stay updated hassle-free. They effortlessly work on Spring Boot, Hibernate, Thymeleaf, JPA, etc and can provide microservices.</p> <br />

                            </div>
                            <div className="col-lg-5 why__hiringRighImg">
                                <img src="/assets/images/java_dev.gif" className="full__stackImg" alt="hire java developer" />
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
                                    </div>
                                    <div className="container" >
                                        <div className="row mt-5">
                                            <div className="col-md-12">
                                                <div className="project-details-content">
                                                    <h5 style={{ fontWeight: '100' }}> <b>Why Hire </b> Our Remote Java Developers</h5>
                                                </div>
                                            </div>
                                        </div> <hr />
                                        <div className="project-details-feature">
                                            <ul className="list-unstyled tech-feature-list">
                                                <li className="py-1"><span className="ti-check-box mr-2 color-secondary"></span><strong>Best Java professionals </strong>
                                                    from across the world work tirelessly to deliver their best for you.
                                                </li>
                                                <li className="py-1"><span className="ti-check-box mr-2 color-secondary"></span><strong>Our Java team </strong>
                                                    runs regular troubleshoots to ensure your applications run smoothly.
                                                </li>
                                                <li className="py-1"><span className="ti-check-box mr-2 color-secondary"></span><strong>Benefits of hiring Java</strong> developers remain the diverse application and easy customization of code.</li>
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
