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

const VenderManagement = () => {
    return (
        <>
            <Head>
                <title>Hire Best Vendor Management Services | Outsource to India</title>
                <meta name="description" content="Hire Best Vendor Management Services To research and source vendors for your organization and handle contract negotiations, risk management cost control and productivity. Outsource to India and save almost 70% cost on Vendor Management." />
            </Head>
            <div className="main">
                <Hero title="Vendor Management"/>
                <HireNow hireBtn="You Need Vendor Management"
                    p1="Establish vendor selection criteria"
                    sub1="Setting up initial cut offs helps us shortlist the top vendors for you."
                    p2="Research and source vendors"
                    sub2="Amongst the shortlisted vendors, we choose the best vendors."
                    p3="Negotiate contracts and reduce risks"
                    sub3="We collaborate on your behalf and maintain quality of service."
                    p4="Control cost and drive productivity"
                    sub4="We strongly stick to your budget and ensure deadlines are met."
                    imgPath="/assets/images/vender.gif"
                />
                <section className="full__stack__whyHiring">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <h3 style={{ fontWeight: '100' }}><b>What is the role of Vendor</b>  Management?</h3>
                                <hr className="hr__line" />
                                <p>An efficient vendor management system can greatly affect an organization’s overall output. Our expert vendor managers not only do an excellent job of selecting best vendors for your business but also take up all the due diligence before officially collaborating. These checks amongst many others help us provide you only the top vendors and suppliers to work with. We work out the best contracts and run a hard bargain to ascertain minimum risk of financial loss while procuring maximum benefit to your organization. We maintain best budgets, impeccable quality and optimum productivity for your collaborations.</p>
                            </div>
                            <div className="col-lg-5 why__hiringRighImg">
                                <img src="/assets/images/vms.jpg" className="full__stackImg" alt="hire wordpress developer" />
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
                                                <div className="project-details-content"><h5 style={{ fontWeight: "100" }}> <b>Hire Vendor</b> Managers</h5><p>Vendor managers act as your organization’s liaison to various vendors, suppliers and collaborators. They are responsible for selecting the right vendors for you keeping in mind your specific requirements. They also run background checks on all collaborators and systematically negotiate deliverables. This helps your business focus better on organizational efficiency and output while you outsource to us and ensure efficiently managed inventory.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="container" >
                                        <div className="row mt-5">
                                            <div className="col-md-12">
                                                <div className="project-details-content">
                                                    <h5 style={{ fontWeight: '100' }}> <b>Why Hire Our Vendor</b>  Management Services</h5>
                                                </div>
                                            </div>
                                        </div> <hr />
                                        <div className="project-details-feature">
                                            <ul className="list-unstyled tech-feature-list">
                                                <li className="py-1"><span className="ti-check-box mr-2 color-secondary"></span><strong>Excellent curators </strong>
                                                    of best vendors for your business.
                                                </li>
                                                <li className="py-1"><span className="ti-check-box mr-2 color-secondary"></span><strong>Run strong </strong>
                                                    negotiations and risk management.
                                                </li>
                                                <li className="py-1"><span className="ti-check-box mr-2 color-secondary"></span><strong>Maintain service</strong> excellence, control cost and boost productivity.</li>
                                            </ul>
                                        </div>
                                    </div> <br/>
                                    <div className="container">
                                        <div className="project-details-content"><h5 style={{ fontWeight: "100" }}> <b>How does our Vendor Management </b>positively affect your organization?</h5>
                                        <p>Efficient vendor management empowers your business to safeguard its interests against cost fluctuation, potential risks pertaining to vendors, mediocre delivery and ensures value from collaborators over time. As your chosen vendor managers, we further research and choose only the best vendors for your organization. Moreover, we discuss and control costs, gauge their quality of work and manage further interactions ensuring quality assurances up to your organizational standards. We can also make sure their payments are always on time. Our vendor management system assures your organization improved efficiency, further growth in a concise cost-effective manner with respect to business engagements with vendors and collaborators.</p>
                                        <p>Once you’re on board as a client, we understand and comprehend your vendor requirements to the minutest detail so as to only shortlist those who would be able to provide you excellent services. Our teams meticulously ensure vendors have clean backgrounds and verify their service credentials so that you collaborate only with trustworthy collaborators. We also negotiate contracts that benefit your organization equally, if not more and keep tabs on deliverables and quality checks. Thus, as your vendor management partner, we take it upon ourselves as a responsibility to drive productivity for your organization while effectively keeping your project timelines intact and overall costs well within your budget.</p>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="container">
                                        <div className="project-details-content"><h5 style={{ fontWeight: "100" }}> 
                                        <b>Some Other Benefits Of Our Vendor Management </b>Services</h5>
                                        <h5 className="myheading">Vendor Co-ordination</h5>
                                        <p>Your business is expanding and it’s inevitable that your projects would require multiple vendors to work in synchronisation. All tasks being completed according to your schedule and coming together in a cohesive manner is essential. Thus keeping tabs on your vendors can become cumbersome while you try to optimize your business productivity. This is where our team of vendor managers ensure all tasks undertaken by various vendors are always on time and there are never any delays to your positively growing business prospects.</p>
                                        <h5 className="myheading">Vendor Data Storage.</h5>
                                        <p>Projects evolve and require new services over time and all services require trustworthy collaborators. With variety of vendors accumulated and collaborated with over a period of time and number of projects, our vendor management services streamline vendor data storage for your organization to maintain relationships with your vendors and ease the process of selecting collaborators for future projects. Thus, data of trusted vendors help your business plan and operate with better resource allocation and improved efficiency.</p>
                                        <h5 className="myheading">Vendor Payment Mode and Security</h5>
                                        <p>It’s not uncommon to find vendors who may have different payment terms. While most adhere to industry standards, some vendors, although efficient, may have separate payment guidelines. But this is just another matter for your trusted vendor managers to solve. Our teams check and fulfil vendors’ terms and ensure there’s never a project hindrance due to payment issues. Thus, always ensuring and upholding your organization’s credibility for you.</p>
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

export default VenderManagement
