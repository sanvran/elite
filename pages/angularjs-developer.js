import React from 'react'
import Hero from './component/Layout/Hero'
import WhyChooseUs from './component/Layout/WhyChooseUs'
import CalltoAction from './component/Layout/CalltoAction'
import Head from 'next/head'

const DigitalCard = ({ icons, title, desc, url }) => {
    return (
        <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="services-single text-center p-3 my-md-3 my-lg-3 my-sm-0 shadow-sm gray-light-bg rounded">
                <span className={icons}></span>
                <h5>{title}</h5>
                <p className="mb-0">{desc}</p>
            </div>
        </div>
    )
}

const 

AngularDeveloper = () => {
    return (
        <>
            <Head>
                <title>Hire Dedicated AngularJS Developers | Outsource to India</title>
                <meta name="description" content="Hire top  AngularJS Developer from India to create responsive and interactive mobile apps for all platforms, especially iOS, Android & Windows. Outsource Mobile App Development to India and save almost 70% cost on hiring dedicated mobile app developers." />
            </Head>
            <div className="main">
                <Hero title=" AngularJS Developer" imgPath="/assets/images/ApplicationDevelopment.webp" />

                <section className="services-section ptb-50" style={{ marginBottom: "100px", marginTop: "100px" }}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <div className="section-heading text-center mb-4">
                                    <h4 style={{ fontWeight: '100' }}><b>Get end-to-end</b> AngularJS Developer Services</h4>
                                    <p className="lead"> </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <DigitalCard
                                icons="ti-basketball icon-lg color-primary d-block mb-4"
                                title="Easier Wireframe"
                                desc="All codes in AngularJS are neatly written to enable further change of components by AngularJS developers at will."
                            />
                            <DigitalCard
                                icons="ti-check icon-lg color-primary d-block mb-4"
                                title="Instantly Testable"
                                desc="AngularJS frameworks are testable. Since it comes with pre-stocked mocks, it offers complete scenario runner."
                            />
                            <DigitalCard
                                icons="ti-direction icon-lg color-primary d-block mb-4"
                                title="Relatively Simpler Coding"
                                desc="As it has built in backends using third party libraries, top AngularJS developers tweak the same well to their favor."
                            />
                            <DigitalCard
                                icons="ti-crown icon-lg color-primary d-block mb-4"
                                title="Large Community Support"
                                desc="Built-in support for AJAX, HTTP and Observables and a wide network of developers make it a strong community."
                            />

                        </div>
                    </div>
                </section>
                <section className="full__stack__whyHiring">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <h3 style={{ fontWeight: '100' }}><b>Why is AngularJS</b> used?</h3>
                                <hr className="hr__line" />
                                <p>Besides being Open-source and developed by Google, AngularJS remains a preferred JavaScript framework because of its ability to create interactive elements for single-page applications. Easier coding and testability remain benefits of hiring AngularJS developers. Applications using AngularJS include Amazon, Paypal, Gmail, Udemy, Netflix and Snapchat among many others. Hire Angular developers to create a frontend that leaves a meaningful interaction for your customers and attracts many more.</p><p></p>Frontend developers who have worked with CCS, HTML and JavaScript find AngularJS an easier framework to learn and work with. It is also a quick responsive framework that reflects any changes made in code onto the screen instantly. Thus, works on a two-way binding feature. <br />
                            </div>
                            <div className="col-lg-5 why__hiringRighImg">
                                <img src="/assets/images/angularjs.gif" className="full__stackImg" alt="hire mobile app developer" />
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
                                                <div className="project-details-content"><h5 style={{ fontWeight: "100" }}> <b>Hire Expert AngularJS </b>Developers</h5>
                                                    <p>AngularJS works perfectly for single page applications (SPAs) since they need faster web transition and require to work on every platform while providing seamless user experience and easier maintenance. Thus, hiring expert Angular developer helps you take your business to the next level.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="container" >
                                        <div className="row mt-5">
                                            <div className="col-md-12">
                                                <div className="project-details-content">
                                                    <h5 style={{ fontWeight: '100' }}>
                                                        <b>Why Hire AngularJS </b>Developers</h5>
                                                </div>
                                            </div>
                                        </div> <hr />
                                        <div className="project-details-feature">
                                            <ul className="list-unstyled tech-feature-list">
                                                <li className="py-1"><span className="ti-check-box mr-2 color-secondary"></span><strong>Has great intuitiveness and scalability</strong>
                                                </li>
                                                <li className="py-1"><span className="ti-check-box mr-2 color-secondary"></span><strong>Quickly shows changes from code to UI</strong></li>
                                                <li className="py-1"><span className="ti-check-box mr-2 color-secondary"></span><strong>Enables MVC to string automatically</strong>
                                                </li> <hr />
                                                
                                            </ul>
                                        </div> <p></p>
                                        <div className="project-details-content">
                                            <h5 style={{ fontWeight: '100' }}>
                                                <b>AngularJS vs ReactJS</b> </h5>
                                            <p>Whether to use AngularJS or ReactJS is a question every frontend developer has faced every now and then. While both are open-source frameworks for frontend development of single page applications, Angular is back by Google while React was developed by Facebook. As a structural framework, AngularJS is preferred to develop dynamic web apps. React, on the other hand, allows you to build UI components being a JavaScript library itself. AngularJS uses MVC (Model View Controller) and is a typescript while React works on Virtual DOM and is based on JavaScript. When it comes to source code, Angular doesn’t let your frontend developer add to JavaScript library while React does. And lastly, where ReactJS requires various set of tools to perform specific tests, AngularJS uses a single tool that provides instant testing and debugging for your complete project. Therefore, the decision web developers take with respect to these two frameworks is usually a personal opinion and never a clear indicator of which framework is better.</p>
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
