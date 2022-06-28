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

const WhyVBNet = () => {
    return (
        <>
            <title>Why VB.Net is popular</title>
            <div className="main">
                <Hero title="Why VB.Net is popular" imgPath="/assets/images/fullstackdev.jpeg" />

                <section style={{padding: '25px 0px'}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <section className="project-details-section">
                                    <div className="container">
                                        <div className="row mt-5">
                                            <div className="col-md-12">
                                                <div className="project-details-content"><h5><b>How good is VB.NET for frontend development?</b></h5><p>A programming languages built especially to develop web applications for Microsoft, Visual Basic, or more fondly called VB.NET, has lately gotten popular with newer web developers. So it begs to question just how amazing is this frontend programming language anyway?</p>
                                                </div><p></p>
                                                <div className="project-details-content"><h5> <b>VB.NET is Open-Source of course, right? </b></h5><p>Most programming languages and platforms have been open source since far too long. So much so that app developers just expect them to be so, right? Not with .NET though. It is interesting that .NET was a closed source platform until 2014. That wasn’t too long ago. But since going open-source, VB.NET developers have extensively experimented with developing web and mobile applications. Its recent status change makes it still a relatively new platform for .NET developers. Hence there’s a lot of room to explore with endless possibilities.</p>
                                                </div> <p></p>
                                                <div className="project-details-content"><h5><b>Is VB.NET platform agnostic though?</b></h5><p>Yes, the .NET platform was Windows exclusive meant only to develop web and mobile applications for Windows. But it all changed in 2016 when the whole platform opened up to newer avenues. Cross platform adaptability just made VB.NET all the more interesting to develop and explore further. It opened opportunities for the programming language to develop applications for relatively more popular platforms, such as Android and iOS. Therefore giving it more visibility amongst top app developers to try their hands on.</p>
                                                </div><p></p>
                                                <div className="project-details-content"><h5> <b>Just how secure is VB.NET?</b></h5><p>Visual Basic is a relatively newer programming language for developing cross-platform web and mobile applications but when it comes to cyber security, it has set higher standards. Though Java remains the general preference amongst many developers it was really something to ponder upon when a vulnerability scoring put Java at more risk than VB.NET via several penetration tests. The tests meant so much so that top banking institutions sought best VB.NET developers for better security to their web and mobile app development. That’s a testament to itself.</p>
                                                </div>
                                                <p></p>
                                                <div className="project-details-content"><h5> <b>How and what is interoperable about VB.NET?</b></h5><p>A rapidly evolving framework, VB.NET lets developers work with a wide range of tools and languages across platforms. But what makes it even more exciting is its language interoperability. It means that VB.NET can not only interact with code written using another programming language but also can virtually work with any hardware or software made or to be ever made in future. This ability helps reuse code and thus optimize the development process even further.</p>
                                                <p>Hence VB.NET is a programming language with many a gifts that make it the best option for frontend development of any application across industries. We can only hope the platform continues to surprise us all and lets the best developers around the globe explore and achieve above and beyond. Hire best VB.NET developers at Elite Virtual Employee and get your seamless applications now.</p>
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

export default WhyVBNet
