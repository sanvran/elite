import React from 'react'
import Head from 'next/head'
import Hero from './component/Layout/Hero'
import WhyChooseUs from './component/Layout/WhyChooseUs'
import CalltoAction from './component/Layout/CalltoAction'
import Link from 'next/link'


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

const fullStactDeveloper = () => {
    return (
        <>
            <Head>
                <title>Hire Digital Marketing in India I Outsource Digital Marketing</title>
                <meta name="description" content="Elite Virtual Employee’s top digital marketing professionals tweak your business’ visibility and boost your sales. Complete digital marketing services. Outsource to India and save almost 70% by offshore hiring digital marketing experts." />
            </Head>
            <div className="main">
                <Hero title="Digital Marketing" imgPath="/assets/images/digital-marketing.gif" />
                <section className="services-section ptb-100">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <div className="section-heading text-center mb-4">
                                    <h3>The online loudspeaker to your business</h3>
                                    <p className="lead">Digital Marketing helps your potential customers find you sooner. Choose remote professionals who can provide better visibility to your organization's online presence.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <DigitalCard
                                icons="ti-announcement icon-lg color-primary d-block mb-4"
                                title="Corporate Blogs"
                                desc="Let your business be wrapped in better worded blogs for your potential customers to learn, reflect and reach you."
                                url="/contact"
                            />
                            <DigitalCard
                                icons="ti-email icon-lg color-primary d-block mb-4"
                                title="Email Marketing"
                                desc="Email Marketing conveys your business effectively making your potential clients be more familiar with your services."
                                url="/contact"
                            />
                            <DigitalCard
                                icons="ti-search icon-lg color-primary d-block mb-4"
                                title="Search Engine Optimization"
                                desc="Internet’s like an ocean. Search Engine Optimization works like a flare gun adding more visibility to your business."
                                url="/contact"
                            />
                            <DigitalCard
                                icons="ti-facebook icon-lg color-primary d-block mb-4" title="Social Media Marketing"
                                desc="Social media is where your clientele spends most of their time. Make optimum use of their acquired attention."
                                url="/contact"
                            />
                            <DigitalCard
                                icons="ti-magnet icon-lg color-primary d-block mb-4"
                                title="Online Display Ads"
                                desc="The whole world is online and so is your potential clientele. Catch their attention, share your services."
                                url="/contact"
                            />

                            <DigitalCard
                                icons="ti-credit-card icon-lg color-primary d-block mb-4"
                                title="Search Engine Marketing"
                                desc="The world is looking up things on search engines. Let us make sure they all find your business organically."
                                url="/contact"
                            />
                        </div>
                    </div>
                </section>
                <section className="full__stack__whyHiring">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <h3 style={{ fontWeight: '100' }}><b>But why </b> is digital marketing important?</h3>
                                <hr className="hr__line" />
                                <p>Amongst innumerable online businesses, it very difficult to stand out. Your services could be excellent but without online visibility, your business shall remain limited. This is exactly why your business needs digital marketing. Digital marketing shouts out to the world about your business giving you a wider reach amongst potential clients. Since the whole world has moved online, digital marketing adds credibility to your services significantly.</p> <br />
                                <p>Digital Marketing helps every business grow organically and is essential to stay connected and relevant in ever-growing digitally connected world. </p>
                            </div>
                            <div className="col-lg-5 why__hiringRighImg">
                                <img src="/assets/images/socialmedia.jpg" className="full__stackImg" alt="hire digital marketer" />
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
                                                <div className="project-details-content">
                                                    <h5 style={{ fontWeight: '100' }}> <b>Remote</b> Digital Marketers</h5>
                                                    <p>Your business is going online and nothing’s more poetic than its online marketing being handled virtually. Expert Digital Marketeers can remotely access your online platforms and boost your business’ visibility. There are numerous benefits of digital marketing since it influences your digital footprint positively by not only increasing online activity but also holding meaningful interactions with your current and prospective customers.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="container" >
                                        <div className="row mt-5">
                                            <div className="col-md-12">
                                                <div className="project-details-content">
                                                    <h5 style={{ fontWeight: '100' }}> <b>Why Hire</b> Our Remote Digital Marketers</h5>
                                                </div>
                                            </div>
                                        </div> <hr />
                                        <div className="project-details-feature">
                                            <ul className="list-unstyled tech-feature-list">
                                                <li className="py-1"><span className="ti-check-box mr-2 color-secondary"></span><strong>Our professionals </strong>
                                                    comprehend your business and core values better.
                                                </li>
                                                <li className="py-1"><span className="ti-check-box mr-2 color-secondary"></span><strong>Prepare </strong>
                                                    regular calendars well in advance so that you always know the plan.
                                                </li>
                                                <li className="py-1"><span className="ti-check-box mr-2 color-secondary"></span><strong>Our digital </strong> marketers keep up with current trends and stay updated about industry standards.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </section>
                            </div>

                        </div>
                    </div>

                </section>
                {/* desc */}
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <section className="project-details-section">
                                    <div className="container">
                                        <div className="row mt-5">
                                            <div className="col-md-12">
                                                <div className="project-details-content">
                                                    <h5 style={{ fontWeight: '100' }}> <b>The importance of SMM, SEM and SEO.</b></h5>
                                                    <p>Digital Marketing is a giant umbrella of services essential for your business growth. But seldom do we talk enough about the important trio of SMM, SEM and SEO. Let’s talk about the benefits of:</p>
                                                    <p><b>Social Media Marketing (SMM):</b> Social media is the outreach program for your business. Through various platforms, you reach out to different sectors of your clientele and organically growing your presence amongst other businesses. But what can set your business apart is an efficient plan for your organization’s Social Media Marketing. This involves producing genuine content for your social media handles that speak beyond selling points of your products or services and try to connect with your current and prospective clients more intimately. The said process is called Content Marketing. When your business can be represented online by social media influencers in forms of content pieces and collaborations, the said part of SMM is called Affiliate Marketing. In addition to the aforementioned, the online ads help tap into new territories. Therefore, Social Media Marketing is a great asset for any business online.</p>
                                                    <p><b>Search Engine Marketing (SEM): </b>When the world looks for answers, they search online. And that’s why search engines hold a lot of power when it comes to your business’ online visibility, Google Analytics help determine target audiences that could benefit your business and hence pin-point specific domains to cater to. The said activity saves you from meandering and focus on targeted sales. Pay Per Click, also known as PPC, helps monetise online ads for your business by providing a certain revenue every time a prospective client clicks your ad. Hence, Search Engine Marketing directs your business to specific clientele that needs your attention.</p>
                                                    <p><b>Search Engine Optimization (SEO):</b> Yours is obviously not the only business out there. So naturally it’ll take some extra effort to catch your customer’s attention. That’s exactly what Search Engine Optimization does. SEO helps your business gain visibility by optimizing keywords cross referenced with most common searches on the internet and puts forth your online platforms to your clients. SEO uses content on your website as well as other strategically placed keywords to bring your business the visibility so as to increase possibility of new clientele.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="container" >
                                        <div className="row mt-5">
                                            <div className="col-md-12">
                                                <div className="project-details-content">
                                                    <h5 style={{ fontWeight: '100' }}> <b>Why Hire</b> Our Remote Digital Marketers</h5>
                                                </div>
                                            </div>
                                        </div> <hr />
                                    </div> */}
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

export default fullStactDeveloper
