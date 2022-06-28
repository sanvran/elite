import React from 'react'
import Hero from './component/Layout/Hero'
import WhyChooseUs from './component/Layout/WhyChooseUs'
import CalltoAction from './component/Layout/CalltoAction'
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

const phpDeveloper = () => {
    return (
        <>
            <Head>
                <title>Hire Dedicated PHP Developers | Outsource to India</title>
            </Head>
            <div className="main">
                <Hero title="PHP Developers" imgPath="/assets/images/fullstackdev.jpeg" />

                <section className="services-section ptb-50" style={{ marginBottom: "100px", marginTop: "100px" }}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <div className="section-heading text-center mb-4">
                                    <h4 style={{ fontWeight: '100' }}><b>Get end-to-end</b> PHP Developer Services</h4>
                                    <p className="lead"> </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <DigitalCard
                                icons="ti-basketball icon-lg color-primary d-block mb-4"
                                title="CakePHP"
                                desc="A free-source rapid web development framework, CakePHP builds faster web apps with much lesser code."
                            />
                            <DigitalCard
                                icons="ti-direction icon-lg color-primary d-block mb-4"
                                title="Laravel"
                                desc="The framework with the most expressive, elegant syntax, Laravel remains a favorite amongst initial programmers."
                            />
                            <DigitalCard
                                icons="ti-desktop icon-lg color-primary d-block mb-4"
                                title="CodeIgniter"
                                desc="Development of dynamic websites that require minimum footprint but simple toolkit is just what CodeIgniter does."
                            />
                        </div>
                    </div>
                </section>
                <section className="full__stack__whyHiring">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <h3 style={{ fontWeight: '100' }}><b>Why is PHP</b> still important?</h3>
                                <hr className="hr__line" />
                                <p>Well, agreed that we have seen newer frameworks enter the website development game but PHP still remains the easiest and most versatile of them all for most web developers. the framework being open source is just another perk over the speed and security it provides to your website. Moreover, it can connect to any database easily.
                                    Let’s start with ease of use with PHP. There’s a reason top website developers prefer PHP over other frameworks simply because of the multitude of legacy code that exists. Most websites need regular or occasional updates and it only helps if there are other examples to look through. This is where PHP is better for web development. The language is stable and trusted by most developers since almost all bugs have been fixed over the years. In addition, any business would want a faster, more secure website that stays protected against cyberattacks and connects securely to almost any kind of database. Thus making PHP still the perfect choice.</p> <br />
                            </div>
                            <div className="col-lg-5 why__hiringRighImg">
                                <img src="/assets/images/php.gif" className="full__stackImg" alt="hire php developer" />
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
                                                <div className="project-details-content"><h5 style={{ fontWeight: "100" }}> <b>Hire Expert </b>Remote PHP Developers</h5><p>With more experience, best PHP developers help navigate through clutter and provide you the website you desire. The benefits of hiring PHP developers remain the ease of altering or updating code after it is already written and the simple integration of plugins, API and other services into your website. </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="container" >
                                        <div className="row mt-5">
                                            <div className="col-md-12">
                                                <div className="project-details-content">
                                                    <h5 style={{ fontWeight: '100' }}> <b>Why Hire </b> Remote PHP Developers</h5>
                                                </div>
                                            </div>
                                        </div> <hr />
                                        <div className="project-details-feature">
                                            <ul className="list-unstyled tech-feature-list">
                                                <li className="py-1"><span className="ti-check-box mr-2 color-secondary"></span><strong>Our PHP modules </strong>
                                                    remain testable as well as reusable
                                                </li>
                                                <li className="py-1"><span className="ti-check-box mr-2 color-secondary"></span><strong>Efficient </strong>
                                                    integration of Microservices, APIs, etc.
                                                </li>
                                                <li className="py-1"><span className="ti-check-box mr-2 color-secondary"></span><strong>Better</strong> data storage solutions</li>
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

export default phpDeveloper
