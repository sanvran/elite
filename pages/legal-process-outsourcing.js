import React from 'react'
import Hero from './component/Layout/Hero'
import WhyChooseUs from './component/Layout/WhyChooseUs'
import CalltoAction from './component/Layout/CalltoAction'
import Head from 'next/head'

const DigitalCard = ({ icons, title, desc, url }) => {
    return (
        <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="services-single text-center p-3 my-md-3 my-lg-3 my-sm-0 shadow-sm gray-light-bg rounded">
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
                <title>Hire Legal Experts | Outsource Legal Process Services to India</title>
                <meta name="description" content="Elite Virtual Employee’s top Law professionals and Best legal Experts handle your litigations and other legal obligations. Outsource to India and save almost 70% by offshore hiring Legal services experts." />
            </Head>
            <div className="main">
                <Hero title="Legal Process Outsourcing" />
               
                <section className="services-section ptb-50" style={{ marginBottom: "100px", marginTop: "100px" }}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <div className="section-heading text-center mb-4">
                                    <h4 style={{ fontWeight: '100' }}><b>Get end-to-end</b> Legal Process Outsourcing</h4>
                                    <p className="lead"> </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <DigitalCard
                                title="Hire Legal Support Services"
                                desc="Experienced legal researchers and specialist secretaries with expertise in diverse corporate cases to help you."
                            />
                            <DigitalCard
                                title="Hire Legal Assistants"
                                desc="Law graduates, with expertise in UK, US, EU and Australian law, prepare excellent case summaries, documentation."
                            />
                            <DigitalCard
                                title="Hire Paralegal Specialists"
                                desc="Top Paralegals help Attorneys prepare for trials, handle their correspondence and advise clients of case status."
                            />
                        </div>
                    </div>
                </section>
                <section className="full__stack__whyHiring">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <h3 style={{ fontWeight: '100' }}><b>Why your business</b> needs legal services</h3>
                                <hr className="hr__line" />
                                <p>Business, be it local or global, needs to run within the boundaries set by the law of the land. Hence, there are many facets of being an organization that require acute legal counsel. Issues such as real estate law, intellectual property law, securities law, immigration law, family law, criminal law, corporate law, labor law, foreclosure law, bankruptcy law, litigations amongst many others can be handled efficiently by a top legal services agency for your business ensuring that your services always stay on the right side of the law.</p>
                                <p>Dedicated legal team comprising best law professionals handle all legal matters that could shift your focus off optimum productivity or adversely affect your company’s reputation. Attoneys, Paralegals, legal assistants and other legal professionals such as legal transcriptionists, etc handle your company records and litigations keeping a close watch on your legal situations within organization and beyond.</p>
                            </div>
                            <div className="col-lg-5 why__hiringRighImg">
                                <img src="/assets/images/law.gif" className="full__stackImg" alt="hire wordpress developer" />
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
                                                <div className="project-details-content"><h5 style={{ fontWeight: "100" }}> <b>Outsource Legal Process</b> services to India</h5>
                                                <p>Most businesses have legal obligations. While they’re essential to maintain your services, it’s important to have an expert legal team navigate your organization through the legal processes. Thus, the legal fees for this team could be quite an expense to you. This is where legal process outsourcing to India helps your organization save upto 70% hiring costs by choosing offshore legal experts to streamline company’s legal obligations.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="container" >
                                        <div className="row mt-5">
                                            <div className="col-md-12">
                                                <div className="project-details-content">
                                                    <h5 style={{ fontWeight: '100' }}> <b>Why Hire  </b>Our LPO Services</h5>
                                                </div>
                                            </div>
                                        </div> <hr />
                                        <div className="project-details-feature">
                                            <ul className="list-unstyled tech-feature-list">
                                                <li className="py-1"><span className="ti-check-box mr-2 color-secondary"></span><strong>Significantly low operating cost. </strong>
                                                </li>
                                                <li className="py-1"><span className="ti-check-box mr-2 color-secondary"></span><strong>In-depth knowledge of US, UK, EU and Australian Laws.</strong>
                                                </li>
                                                <li className="py-1"><span className="ti-check-box mr-2 color-secondary"></span><strong>Professionals with over 20 years of experience in legal practices.</strong></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="container">
                                        <div className="row mt-5">
                                            <div className="col-md-12">
                                                <div className="project-details-content"><h5 style={{ fontWeight: "100" }}> <b>Elite Virtual Employee is among top legal</b> process outsourcing companies in India</h5>
                                                <p>That’s not just a statement, that’s a standard we painstakingly maintain. Best law professionals from top Indian law schools engage tirelessly to give our clients the edge their business needs. It’s imperative that organizations, local or global, small or big, need various legal services such as litigation support, contract management, etc and hence need skilled legal experts safeguarding their interests for them.</p>
                                                <p>We don’t only serve top business organizations but also support best International law firms by helping them ease their caseload. Our legal process outsourcing team helps top legal professionals by offering specialized legal support services that let them save time and money, focus better and boost their productivity. That’s one of the many reasons why legal process outsourcing to India remains an attractive option to our potential clients all over the world.</p>
                                                <p>Being the foremost legal process outsourcing service provider in India, we understand the responsibility bestowed upon us to provide only the best when it comes to services such as expert legal advice, motion drafting, etc. And we strive to do just that, provide best legal process outsourcing services at significantly low operating costs to all our clients. Whatever your requirements be, document review, legal research, paralegal services or any other legal engagements, our highly skilled law professionals will be your very own trustworthy legal process experts and serve you the best they can.</p>
                                                </div>
                                            </div>
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
