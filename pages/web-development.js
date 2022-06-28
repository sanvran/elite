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
                <a href={url} className="detail-link mt-4">Read more <span className="ti-arrow-right"></span></a>
            </div>
        </div>
    )
}

const WebDevelopment = () => {
    return (
        <>
            <Head>
                <title>Hire Dedicated Programmers | Developers in India | Hire Coders</title>
                <meta name="description" content="Hire top web Developers, Programmers and coders in India for back-end, front-end, custom web, software development. Outsource Hiring website development to India and save almost 70% on hiring costs." />
            </Head>
            <div className="main">
                <Hero title="Web Development" imgPath="/assets/images/fullstackdev.jpeg" />
                <HireNow hireBtn="Hire Web Developers"
                    p1="Comprehend your ideas much better"
                    sub1="Expert developers understand your business requirements quicker."
                    p2="Analyze the possible outcomes and timeline."
                    sub2="with extensive experience, they schedule your website requirements better."
                    p3="Prepare relevant draft websites for you."
                    sub3="Sample websites give you a sneak into your possible business websites."
                    p4="Deliver perfect website within your timeline."
                    sub4="Schedules are important and hence experts always deliver within time."
                    imgPath="/assets/images/coding.gif"
                />

                <section className="services-section ptb-50" style={{ marginBottom: "100px" }}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <div className="section-heading text-center mb-4">
                                    <h4 style={{ fontWeight: '100' }}><b>Get Complete</b> Web Development Services</h4>
                                    <p className="lead"> </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <DigitalCard
                                icons="ti-basketball icon-lg color-primary d-block mb-4"
                                title="Hire Full Stack Developer"
                                desc="Complete development process undertaken, both frontend and backend."
                                url='full-stack-developer'
                            />
                            <DigitalCard
                                icons="ti-direction icon-lg color-primary d-block mb-4"
                                title="Hire Java Developer "
                                desc="Java has become a mainstay for web development of business websites."
                                url='java-developer'
                            />
                            <DigitalCard
                                icons="ti-desktop icon-lg color-primary d-block mb-4"
                                title="Hire Wordpress Developer"
                                desc="An astute command over Wordpress, can develop both frontend and backend."
                                url='wordpress-developer'
                            />
                            <DigitalCard
                                icons="ti-desktop icon-lg color-primary d-block mb-4"
                                title="Hire PHP Developer"
                                desc="One of the most used general-purpose scripting language by web developers."
                                url='php-developer'
                            />
                            <DigitalCard
                                icons="ti-desktop icon-lg color-primary d-block mb-4"
                                title="Hire Frontend Developer"
                                desc="Make your websites look aesthetically more functional with better user experience."
                                url='frontend-developer'
                            />
                            <DigitalCard
                                icons="ti-server icon-lg color-primary d-block mb-4"
                                title="Hire Angular Developer"
                                desc="code dynamic views, create more interactive frontend to your applications."
                                url='angularjs-developer'
                            />
                            <DigitalCard
                                icons="ti-server icon-lg color-primary d-block mb-4"
                                title="Hire Backend Developer"
                                desc="code dynamic views, create more interactive frontend to your applications."
                                url='backend-developer'
                            />
                        </div>
                    </div>
                </section>
                <section className="full__stack__whyHiring">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <h3 style={{ fontWeight: '100' }}><b>Why is web development</b>  important for your business?</h3>
                                <hr className="hr__line" />
                                <p>Your website will not only be a possible first online interaction for potential clients with your business but also become a database for everything your business is about. Like a physical store, the frontend remains for the customers while the backend is for your organizational purposes. Hence, efficient web development helps your business immensely.</p> <br />
                            </div>
                            <div className="col-lg-5 why__hiringRighImg">
                                <img src="/assets/images/php.gif" className="full__stackImg" alt="hire web development" />
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
                                                <div className="project-details-content"><h5 style={{ fontWeight: "100" }}> <b>Hire Expert Remote</b> Web Developers</h5>
                                                    <p>Best web developers not only have strong software skills but also understand their client’s business requirements closely. They believe in delivering the best end product for their customers while involving them through the development process. Thus, expert web developers stick to their client’s briefs and talk them through all possibilities for a better website and more interactive experience for their business.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="container" >
                                        <div className="row mt-5">
                                            <div className="col-md-12">
                                                <div className="project-details-content">
                                                    <h5 style={{ fontWeight: '100' }}> <b>Why Hire</b> Our Web Developers?</h5>
                                                </div>
                                            </div>
                                        </div> <hr />
                                        <div className="project-details-feature">
                                            <ul className="list-unstyled tech-feature-list">
                                                <li className="py-1"><span className="ti-check-box mr-2 color-secondary"></span><strong>Our remote professionals </strong>
                                                    regularly work efficiently on time sensitive projects.
                                                </li>
                                                <li className="py-1"><span className="ti-check-box mr-2 color-secondary"></span><strong>Our developers </strong>
                                                    understand your requirements better and develop your website accordingly.
                                                </li>
                                                <li className="py-1"><span className="ti-check-box mr-2 color-secondary"></span><strong>Our team stays</strong> in touch with your design briefs throughout the process and offers maintenance even after.</li>
                                                <li className="py-1"><span className="ti-check-box mr-2 color-secondary"></span><strong>Our developers</strong> have an almost innate understanding of PHP web framework such as Symfony, Zend CAKE, etc </li>
                                                <li className="py-1"><span className="ti-check-box mr-2 color-secondary"></span><strong>They have a thorough</strong> understanding of MVC design pattern </li>
                                                <li className="py-1"><span className="ti-check-box mr-2 color-secondary"></span><strong>Excellent handling</strong> of front-end technologies like JavaScript, HTML5, CSS3, JQuery, React, AngularJS, etc </li>
                                            </ul>
                                        </div>
                                        <hr />

                                    </div>
                                    <div className="col-md-12">
                                        <div className="project-details-content"><h5 style={{ fontWeight: "100" }}> <b>Why do I need Dedicated</b> Web Developers for my business?</h5>
                                            <p>The world’s attention has shifted online and so have businesses. It has become essential to have online representation of your business. Thus, websites have become your official online presence. But how to express your warmth and business acumen online? It’s not like you’re physically meeting everyone who visits your website and resultantly, they can’t feel your personal charm. This is where dedicated web developers enter the situation. Top web developers bridge the gap between you and your audience by creating the website, using various available technologies, that speaks your language effortlessly and forwards your vision. Any visitor to your website should feel the personal touch while surfing through your business and services.</p>
                                            <p>Every business is different and that’s why the platform on which their websites are established differ greatly. Your dedicated web developers are more adept at suggesting which platform and technologies can best suit the requirements of your business. They discuss with you in detail all the functionalities you’d require of your website and thereafter work on integrating your needs precisely. Your requirements and the very industry of your business could change the technologies involved. Hence an experienced web developer navigates your vision and delivers an output that stands closest to your desires.</p>
                                            <p>
                                            Several platforms such as JavaScript, Wordpress, CodeIgniter, React and AngularJS and such have their own pros and cons. They are all powerful platforms regardless. But only skilled web developers can understand the synergy of your business with the required platform. Also, in an ever-evolving world, your business may have new requirements. To integrate new features, themes, plugins, and such successfully and continuously, your business shall require dedicated web developers constantly.
                                            </p>
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

export default WebDevelopment
