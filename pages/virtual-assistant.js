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

const VirtualAssistant = () => {
    return (
        <>
            <Head>
                <title>Hire Virtual Assistants | Remote Virtual Assistance from India</title>
                <meta name="description" content="Hire top Virtual Assistants and delegate your administrative and organizational tasks, data entry, secretarial services, live chat support and such. Outsource to virtual assistants in India and save almost 70% cost on hiring dedicated virtual assistants." />
            </Head>
            <div className="main">
                <Hero title="Virtual Assistant" imgPath="/assets/images/fullstackdev.jpeg" />
                <HireNow hireBtn="Hire Virtual Assistant"
                    p1="Plan and organize your business."
                    sub1="Stay updated about meeting agenda with Virtual Assistant briefings."
                    p2="Keep tabs on personnel schedules"
                    sub2="Let Virtual Assistants take notes on meetings, attendance and such."
                    p3="Handle and relay official communications"
                    sub3="Virtual Assistants observe and relay mails to various departments."
                    p4="Streamline organizational inventory"
                    sub4="Keep stock of your product and services with outsourced efficiency."
                    imgPath="/assets/images/content.gif"
                />
                <section className="services-section ptb-50" style={{ marginBottom: "100px" }}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <div className="section-heading text-center mb-4">
                                    <h4 style={{ fontWeight: '100' }}><b>Complete virtual</b> assistant Services</h4>
                                    <p className="lead"> </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <DigitalCard
                                icons="ti-announcement icon-lg color-primary d-block mb-4"
                                title="Maintenance & Support"
                                desc="Virtual assistant services help provide additional support to your support executives."
                            />
                            <DigitalCard
                                icons="ti-basketball icon-lg color-primary d-block mb-4"
                                title="Online Marketers"
                                desc="Trust your virtual assistants to engage within online spaces that could have your potential customers."
                            />
                            <DigitalCard
                                icons="ti-direction icon-lg color-primary d-block mb-4"
                                title="Data Entry Experts"
                                desc="Consistent data Entry requires skilled virtual professionals who can help run business faster."
                            />
                            <DigitalCard
                                icons="ti-desktop icon-lg color-primary d-block mb-4"
                                title="Communications Executives"
                                desc="Trained virtual professionals handle inter-organizational and internal communications on management’s behalf."
                            />
                            <DigitalCard
                                icons="ti-magnet icon-lg color-primary d-block mb-4"
                                title="Medical Billing Experts"
                                desc="Experts manage insurance claims, invoices and payments for healthcare and medical facilities."
                            />

                            <DigitalCard
                                icons="ti-server icon-lg color-primary d-block mb-4"
                                title="IT Recruiters"
                                desc="As more global IT businesses outsource to india, our best recruiters find you the perfect candidates."
                            />
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
                                                <div className="project-details-content"><h5 style={{ fontWeight: "100" }}> <b>Hire Expert </b>Remote Virtual Assistant</h5><p>Best virtual asisstants help your workforce function more efficiently by streamlining organizational administration. They also simplify the very nature of their employment by letting you dictate and delegate duties and responsibilities.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="container" >
                                        <div className="row mt-5">
                                            <div className="col-md-12">
                                                <div className="project-details-content">
                                                    <h5 style={{ fontWeight: '100' }}> <b>Why Hire </b> Our Virtual Assistant Company</h5>
                                                </div>
                                            </div>
                                        </div> <hr />
                                        <div className="project-details-feature">
                                            <ul className="list-unstyled tech-feature-list">
                                                <li className="py-1"><span className="ti-check-box mr-2 color-secondary"></span><strong>We make hiring </strong>
                                                    a virtual assistant not only easy but also worth your while
                                                </li>
                                                <li className="py-1"><span className="ti-check-box mr-2 color-secondary"></span><strong>Our professionals  </strong>
                                                    invest utmost importance to your virtual assistant work
                                                </li>
                                                <li className="py-1"><span className="ti-check-box mr-2 color-secondary"></span><strong>Our remote workers </strong> demonstrate the benefits remote working could bring to your business</li>
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

export default VirtualAssistant
