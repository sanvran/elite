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

const frontendDeveloper = () => {
    return (
        <>
            <Head>
                <title>Hire Dedicated Programmers | Developers in India | Hire Coders</title>
            </Head>
            <div className="main">
                <Hero title="Frontend Developers" imgPath="/assets/images/fullstackdev.jpeg" />
                <HireNow hireBtn="Hire Frontend Developers"
                    p1="Produce Sample Websites"
                    sub1="Our developers create draft websites for client’s consideration."
                    p2="Work according to your feedback"
                    sub2="Developers then work to fulfill the client’s vision and brief."
                    p3="Build Reliable, Effective Website"
                    sub3="The final Website satisfies client’s eventual briefs."
                    p4="Offer support and Maintenance"
                    sub4="Our developers provide upkeep to the website once live."
                    imgPath="/assets/images/front-dev.gif"
                />
                <section className="services-section ptb-50" style={{ marginBottom: "100px" }}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <div className="section-heading text-center mb-4">
                                    <h4 style={{ fontWeight: '100' }}><b>Get end-to-end</b> Frontend Developer Services</h4>
                                    <p className="lead"> </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <DigitalCard
                                icons="ti-desktop icon-lg color-primary d-block mb-4"
                                title="HTML5"
                                desc="HTML forms all the text there is on a website. hence it’s the actual content to your business."
                            />
                            <DigitalCard
                                icons="ti-direction icon-lg color-primary d-block mb-4"
                                title="CSS"
                                desc="CSS is all about styles. the color effects and transitions in a website are all part of this frameweork."
                            />
                            <DigitalCard
                                icons="ti-desktop icon-lg color-primary d-block mb-4"
                                title="JavaScript / jQuery"
                                desc="JavaScript is what makes a website interactive. the pop ups, sliders and such exist because of JS."
                            />
                            <DigitalCard
                                icons="ti-desktop icon-lg color-primary d-block mb-4"
                                title="Bootstrap"
                                desc="Bootstrap framework suports responsive design templates for interface components on a website."
                            />
                            <DigitalCard
                                icons="ti-desktop icon-lg color-primary d-block mb-4"
                                title="ReactJs | Angular JS"
                                desc="While Angular JS adds dynamism to your apps, ReactJs adds more simplicity and flexibility."
                            />
                            <DigitalCard
                                icons="ti-desktop icon-lg color-primary d-block mb-4"
                                title="View JS"
                                desc="VueJS provides framework for Seamless single page applications with better performace and stability."
                            />
                        </div>
                    </div>
                </section>
                <section className="full__stack__whyHiring">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <h3 style={{ fontWeight: '100' }}><b>Benefits of hiring</b>  frontend developers</h3>
                                <hr className="hr__line" />
                                <p>Frontend developers build your website using  programming languages such as JQuery, JavaScript, Material, etc so as to make it worthwile for visiting customers. Your website is the online world’s initial contact with the business. Make sure it counts.</p> <br />
                            </div>
                            <div className="col-lg-5 why__hiringRighImg">
                                <img src="/assets/images/php.gif" className="full__stackImg" alt="frontent developer in india" />
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
                                                <div className="project-details-content"><h5 style={{ fontWeight: "100" }}> <b>Hire Expert Remote</b> Frontend Developers</h5><p>We cannot stress enough on how important first impressions online are. Your website is just as important as your physical office. Thus hiring expert remote frontend developers is absolutely crucial for your business’ online reputation. Front developers use best possible digital tools to bring forth your desired website that’ll click with your potential customers without compromising on your brand guidelines. </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </section>
                            </div>

                        </div>
                    </div>

                </section>
               
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <section className="project-details-section">
                                    <div className="container">
                                        <div className="row mt-5">
                                            <div className="col-md-12">
                                                <div className="project-details-content"><h5 style={{ fontWeight: "100" }}> <b>Why Does Your Business Need Dedicated</b> Front-end Developers?</h5>
                                                <p>Websites are getting extremely interactive with each passing day. Unless a website has an alluring factor about it, the lurking traffic makes most of your footfall. Thus, best frontend developers make the most out of their frameworks to deliver more aesthetically functional websites that engage target audiences better. Their designs are simpler and more attuned to a wholesome customer experience. With programs such as JQuery, Java, Vue, React and AngularJS, etc our top frontend developers help us deliver to you the website your business deserves. Their vast professional experience enables them to learn, adept and balance between design aesthetics and your requirements.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </section>
                            </div>

                        </div>
                    </div>
                </section>

                <CalltoAction />
            </div>
        </>
    )
}

export default frontendDeveloper
