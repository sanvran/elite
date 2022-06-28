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
                <title>Hire Best Payroll Services | Outsource Payroll Services to India</title>
                <meta name="description" content="Hire Best Payroll Services To boost overall producutivity and optimize administrational functioning for your organization. Minimize processing cost, ensure compliance, Ease tDS and maintain payroll Cycle. Outsource to India and save almost 70% cost on Payroll Services." />
            </Head>
            <div className="main">
                <Hero title="Payroll Services"/>
                <HireNow hireBtn="You Need payroll Services"
                    p1="Minimize Processing Costs"
                    sub1="Setting up initial cut offs helps us shortlist the top vendors for you."
                    p2="Accurately Calculate Paycheck"
                    sub2="Complete employee compensation after leaves, incentives and taxes."
                    p3="Ease TDS and Maintain Payroll Cycle"
                    sub3="Effective tax deductions and filing at systematic intervals."
                    p4="Ensure Compliance and Employee Satisfaction"
                    sub4="Ensuring no errors in payroll and safeguarding their employment rights."
                    imgPath="/assets/images/vender.gif"
                />
                <section className="full__stack__whyHiring">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <h3 style={{ fontWeight: '100' }}><b>Why engage our payroll</b> services</h3>
                                <hr className="hr__line" />
                                <p>Dedicated employees give their best output for your business. It’s only natural that they get the same treatment in return. Most businesses depend upon continuous positive efforts and long-term association of their employees but sometimes it can become a bit tedeous to keep tabs on each one’s paycheck accurately. Factors such as TDS, incentives, leaves, professional tax online vary employee to employee. Thus, it becomes imperative that accurate calculation of paychecks and timely disbursement of the same are given adequate importance.</p>
                                <p>We at Elite Virtual Employee provide top notch payroll services that help your employees focus better on attaining optimum productivity without unnecessary stress around their salary. Unlike other payroll companies, we provide you a dedicated team along with a payroll manager to ensure smooth running of your business and boost overall employee satisfaction. Our payroll management system also takes care of statutory compliance for your organization and maintains payroll cycle.</p>
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
                                                <div className="project-details-content"><h5 style={{ fontWeight: "100" }}> <b>How Does our payroll Management </b>Benefit Your Workforce? </h5>
                                                    <p>Organizations need to convey consistency to their employees. A good payroll management system is also an integral part of grievance redressal.  It helps and affects a business in many ways, of which the following are a few:</p>
                                                </div> <br />
                                                <div className="project-details-content"><h5 style={{ fontWeight: "100" }}> <b>Better overall morale.</b> </h5>
                                                    <p>Nothing irks an employee more than late salary. The feeling of job instability and payment uncertainty are major reasons why most professionals start to feel demotivated by the day. Our best payroll management system ensures that payments and disbursements aren’t left to the last-second and have no technical glitches or clerical errors. Thus boosting team morale and eventual productivity.</p>
                                                </div> <br />
                                                <div className="project-details-content"><h5 style={{ fontWeight: "100" }}> <b>More control over taxes.</b> </h5>
                                                    <p>Mismanaged records can lead to hefty fines. Taxes and TDS need to be accurately calculated and correctly deducted from employee salaries’ and further recorded for official purposes. This process seems trivial but indeed is one of the most important processes that our efficient payroll management takes care of and ensures you never have to pay a fine.</p>
                                                </div> <br />
                                                <div className="project-details-content"><h5 style={{ fontWeight: "100" }}> <b>An integral tool for new founders.</b> </h5>
                                                    <p>Startups are hard. You’re probably running in all directions, personally handling far too many roles. Managing payroll always needs a little extra attention since it not only has an imminent chance of clerical errors but also is great factor to your team’s morale. Thus, our payroll management helps you concentrate more on subjects that deserve your attention while we keep your company finances clean and tidy.</p>
                                                    <p>We cannot stress enough on how important a factor payroll is for your organization’s productivity. Hence, entrust your growth to us and let us provide you the best payroll management experience and streamline your workforce into optimum efficiency.
                                                    </p>
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

export default VenderManagement
