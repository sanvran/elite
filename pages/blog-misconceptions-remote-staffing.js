import React from 'react'
import Hero from './component/Layout/Hero'
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

const Misconceptions = () => {
    return (
        <>
            <title>What are misconceptions about Remote Staffing?</title>
            <div className="main">
                <Hero title="Misconceptions about Remote Staffing." imgPath="/assets/images/fullstackdev.jpeg" />

                <section style={{ padding: '25px 0px' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <section className="project-details-section">
                                    <div className="container">
                                        <div className="row mt-5">
                                            <div className="col-md-12">
                                            <div className="project-details-content"><h5><b>What are misconceptions about remote staffing?</b></h5>
                                                    <p>Amidst far too many misconceptions around remote staffing, let’s talk about top 5 that never get old and keep popping up every now and then.</p>
                                                </div><p></p>
                                                <div className="project-details-content"><h5><b>“Well, they can’t be as productive.”</b></h5>
                                                    <p>Obviously clients tend to be skeptical and rightfully so since they’re looking carefully to invest. But the first misconception is one that is quite inaccurate. Simply put, your remote staff can be actively put on a timeline and monitored daily to meet deadlines. Moreover, they work from the comfort of their homes and don’t lose focus over transit. Thus the time they invest in your project indeed becomes absolutely productive.</p>
                                                </div><p></p>
                                                <div className="project-details-content"><h5> <b>“Are they actually as skilled though?”</b></h5>
                                                    <p>More important question remains, what are their references? Top remote staffing agencies ensure your staff ticks the right boxes when it comes to their skill sets. Experienced professionals with years of expertise are chosen for your projects and they try to deliver their best work every single time. So yes, these professionals are just as equally skilled as any top professional in the world.</p>
                                                </div> <p></p>
                                                <div className="project-details-content"><h5> <b>“Really hard to find, aren’t they?”</b></h5>
                                                    <p>Agreed that best professionals are hard to find. But that’s because they are always so limited in numbers and high in demand. This is where best remote staffing agencies step in to bridge the gap and connect the right professionals to your business. It’s always a process, of course, but how tough it will be is a decision that’s entirely yours. Choose wisely.</p>
                                                </div>
                                                <p></p>
                                                <div className="project-details-content"><h5> <b>“So difficult to manage them and communicate!”</b></h5><p>So you don’t meet them in person. How’s that a big deal anymore? Remote staff always stays connected to you and your business virtually and hence can tend to your queries quicker. They stick to your deadlines and maintain your project timeline communicating smoothly throughout the way so as to ease everything out methodologically. Remote staffing agencies too ensure that the relay of communication is never delayed.</p>
                                                </div>
                                                <p></p>
                                                <div className="project-details-content">
                                                    <h5><b>“But what beyond Data Entry or IT?”</b></h5>
                                                    <p>Sure data entry and IT services are the most in demand when it comes to remote staffing but the plethora of services remains endless. Businesses could use remote staffing for services such as digital marketing, legal support outsourcing, content writing and many others. Therefore if you have a business, pretty sure we could help with our 360 staffing solutions. <p></p>
                                                        <p> Whatever your apprehensions be, we only provide you our best. Connect with the best remote staffing agency and see all your doubts fade away. Experience excellence, experience Elite Virtual Employee.</p>
                                                    </p>
                                                </div>
                                                <p></p>
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

export default Misconceptions
