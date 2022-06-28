import React from 'react'
import Hero from './component/Layout/Hero'
import WhyChooseUs from './component/Layout/WhyChooseUs'
import CalltoAction from './component/Layout/CalltoAction'


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

const WhyNeedRemoteStaffing = () => {
    return (
        <>
            <title>Why Need Remote Staffing</title>
            <div className="main">
                <Hero title="Why your business needs Remote Staffing" imgPath="/assets/images/fullstackdev.jpeg" />

                <section style={{padding: '25px 0px'}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <section className="project-details-section">
                                    <div className="container">
                                        <div className="row mt-5">
                                            <div className="col-md-12">
                                                <div className="project-details-content"><h5><b>Why does your business need Remote Staffing?</b></h5><p>Team Conferences, client meetings, day to day office administration are all part of everyone’s business routine. And while many organizations choose to stay the same, the smarter ones are making or have already made the shift. Remote Staffing has been quite the alternative across industries to engage in swift business and attain efficient productivity. But what benefits of Remote Staffing could your organization enjoy, you ask? Let’s go over them all one benefit at a time.</p>
                                                </div><p></p>
                                                <div className="project-details-content"><h5> <b>Hire beyond local talent.</b></h5><p>You’ve found some wonderful professionals around you. That’s great, of course. But while you stay satisfied with that, you could’ve easily had the best professionals from across the globe working with you offering their valuable expertise. Your competition is already hiring top offshore professionals working remotely for them, we can only suggest that you don’t miss the train.</p>
                                                </div> <p></p>
                                                <div className="project-details-content"><h5> <b>Save up to 70% on hiring costs.</b></h5><p>So your every new hire requires at least some advertisement, eventual bonuses, meaningful insurance, professional training besides the obvious salary and many other hidden costs. Well, you could greatly minimize that overall cost and retain the same output by simply trusting remote staffing. Let your already-trained employees work remotely under professional contracts and deliver their best for your business without the additional financial liabilities</p>
                                                </div>
                                                <p></p>
                                                <div className="project-details-content"><h5> <b>Office space and maintenance.</b></h5><p>Your fantastic ideas should be matched with an amazing office space, right? Wrong! Your office space could become the single biggest revenue drain for your business. That prime location is a valuable real estate that requires rent and upkeep which could cost your initial business big time irrespective of how productive your team has been. All the more reason for you to connect virtually.</p>
                                                </div>
                                                <p></p>
                                                <div className="project-details-content">
                                                    <h5><b>Lack of commute and comfort of home.</b></h5>
                                                    <p>Your business is run by daily progress that your employees make. Therefore, to present them with ease of functioning is to boost their productivity. Taking away activities that cost them time and effort simply lets them focus more on important tasks at hand without worrying about logistics that are neither related to your business nor their overall productivity. Hence, remote staff is primed to achieve more.</p>
                                                </div>
                                                <p></p>
                                                <div className="project-details-content">
                                                    <h5><b>Easier discontinuation.</b></h5>
                                                    <p>A bad hire can become a difficult liability to your organization to move on from. While it may affect the team morale and productivity, it can also result in financial losses. This is where remote staffing gets easy. Simple discontinuation can be intimated to your remote employee and the contract can be easily terminated, letting the rest of your team function normally without risking loss in productivity or your financials. These are just a few amongst many benefits remote staffing brings to your organization. And if you haven’t already decided, check out Elite Virtual Employee’s remote staffing solutions that could help your business achieve the milestones you desire.</p>
                                                    <p>These are just a few amongst many benefits remote staffing brings to your organization. And if you haven’t already decided, check out Elite Virtual Employee’s remote staffing solutions that could help your business achieve the milestones you desire.</p>
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

export default WhyNeedRemoteStaffing
