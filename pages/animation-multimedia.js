import React from 'react'
import Hero from './component/Layout/Hero'
import WhyChooseUs from './component/Layout/WhyChooseUs'
import CalltoAction from './component/Layout/CalltoAction'
import HireNow from './component/Layout/HireNow'
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

const phpDeveloper = () => {
    return (
        <>
            <Head>
                <title>Hire Video Animator | 3D Modellers | Graphic Designers </title>
                <meta name="description" content="Hire Logo designers, graphic designers, from India to create responsive and interactive mobile apps for all platforms, especially iOS, Android & Windows. Outsource Mobile App Development to India and save almost 70% cost on hiring dedicated mobile app developers." />
            </Head>
            <div className="main">
                <Hero title="Animation & Multimedia" imgPath="/assets/images/fullstackdev.jpeg" />

                <section className="services-section ptb-50" style={{ marginBottom: "100px", marginTop: '100px' }}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <div className="section-heading text-center mb-4">
                                    <h4 style={{ fontWeight: '100' }}><b>Get end-to-end</b> Animation & Multimedia</h4>
                                    <p className="lead"> </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <DigitalCard
                                icons="ti-basketball icon-lg color-primary d-block mb-4"
                                title="Hire Video Animator"
                                desc="Your ideas convey better when seen than read or heard. Hire best video animators to add that spark to your pitch."
                            />
                            <DigitalCard
                                icons="ti-direction icon-lg color-primary d-block mb-4"
                                title="Hire Visual Designer"
                                desc="Your plans in 2D look better in 3D. Hire best remote visual designers to bring your business ideas to life. "
                            />
                            <DigitalCard
                                icons="ti-brush-alt icon-lg color-primary d-block mb-4"
                                title="Hire Graphic Designer"
                                desc="Marketing collaterals for your business or smart graphics for online ads, top graphic designers deliver only the best."
                            />
                            <DigitalCard
                                icons="ti-desktop icon-lg color-primary d-block mb-4"
                                title="Hire Web Designer"
                                desc="Convert lurkers on your website to actual potential clients. Hire top web designers to help you achieve just that."
                            />
                        </div>
                    </div>
                </section>
                <section className="full__stack__whyHiring">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <h3 style={{ fontWeight: '100' }}><b>How do </b> Animation and Multimedia save cost?</h3>
                                <hr className="hr__line" />
                                <p>Every business needs growth. As the world embraces technology more and more, reaching your potential clientele now depends upon your presence in their digital consumption. This is why hiring multimedia professionals has become essential. Your graphics on online ads need to convey information as well as be aesthetically attractive for your potential customers. On top of that, they also need to follow your brand guidelines perfectly. When best multimedia professionals deliver on your requirements, their work reaches far more number of potential clients and untapped target audiences for you than conventional advertisements would have for the same cost. Thus, animation and multimedia have a major stake in an ever digitally advancing world.</p> <br />
                            </div>
                            <div className="col-lg-5 why__hiringRighImg">
                                <img src="/assets/images/php.gif" className="full__stackImg" alt="Hire animation and multimedia" />
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
                                                <div className="project-details-content"><h5 style={{ fontWeight: "100" }}> <b>Hire Expert </b>3D Modellers</h5><p>Not only is 3D modelling as interesting as it sounds, it also enlivens your business plans for your customers and investors. Life size depictions of your latest and/or upcoming products add buzz to your marketing and help quench stakeholders’ imaginations. Benefits of hiring 3D modellers depends upon requirements of your business and quality of product placement. Thus, top 3D modellers never fail to mesmerize your customers with their accurate design of your products and services. with the advent of 3D printing, best 3D modellers have only gotten the world closer to dreaming harder. It’s about time our team helps your business do the same.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="container">
                                        <div className="">
                                            <div className="row mt-5">
                                                <div className="col-md-12">
                                                    <div className="project-details-content"><h5 style={{ fontWeight: "100" }}> <b>Why does your business </b>need Multimedia Professionals?</h5><p>Your clients have limited time and focus. It’s imperative that your business grasps their attention within the same. Best multimedia professionals help increase effectivity of your message exponentially. All businesses need multimedia services of various sorts. These include marketing collaterals that represent your brand. Logo design, business card, letterhead etc are your business’ brand identity. Hire best graphic designers not only to help you with your brand identity but your online ads. Small informative posts or popups that catch your potential clients’ attention while they lurk on the internet can take your business really far in terms of expanding your reach and audience.
                                                    </p>
                                                        <p>While your business is your dreams in progress, it’s absolutely necessary that you can convey the same to any client in a limited span of time. This is why hire top video animators. They convert your ideas into motions on a screen and make your story visually engrossing. Expert video animators encapsulate the entirety of your idea into a neat, informative video that’s short and crisp conveying your business to your clients.</p>
                                                        <p></p>
                                                        <p>So what do visual designers do for your business? They virtually breathe life into your projects by turning your 2D blueprints into 3D models. Best visual designers make life like physical mockups that imitate the actual prototype. These services help plan your product launch or instil faith of investors in board meetings. Architectural walkthrough videos from our top visual designers make a much greater impact on potential clients than still images do.</p>
                                                        <p></p>
                                                        <p>Best web design is the one that isn’t pushy and yet achieves its objective which is to get the client to click your call to action. Hire web designers to not only design what your website looks like but also to ensure your customers’ clicks and attention flow exactly how you want it to.</p>
                                                        <p></p>
                                                        <p>Our talented team of graphic designers, animators, visual designers, video rendering artists, 3D modellers and many others are adept to Flash MX, Adobe Illustrator, Adobe Photoshop, Maya, LigthWave 3D, Adobe XD, Dreamweaver, 3ds Max, Houdini and Adobe Indesign etc. along with development software such as PHP, JAVA, XML, .NET, Dreamweaver, HTML, Action Script, Macromedia and such softwares to deliver their top results to our clients.</p>
                                                    </div>
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

export default phpDeveloper
