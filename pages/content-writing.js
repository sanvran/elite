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

const ContentWriting = () => {
    return (
        <>
            <Head>
                <title>Hire Expert Content Writers | Outsource Content Writing to India </title>
                <meta name="description" content="Hire experienced content writers to deliver crisp, precise content for your website, SEO, SEM, blogs, articles, social media, newsletters and much more. Outsource to top content writers in India and save almost 70% cost on hiring dedicated content writers." />
            </Head>
            <div className="main">
                <Hero title="Content Writing" imgPath="/assets/images/fullstackdev.jpeg" />

                <section className="services-section ptb-50" style={{ marginBottom: "100px", marginTop: '100px' }}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <div className="section-heading text-center mb-4">
                                    <h4 style={{ fontWeight: '100' }}><b>Get end-to-end</b> Content Writing</h4>
                                    <p className="lead"> </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <DigitalCard
                                icons="ti-pencil-alt2 icon-lg color-primary d-block mb-4"
                                title="Blogging/Article Writing"
                                desc="Blogs help your clients learn more about your business, ideals and also optimize keywords for search engines."
                            />
                            <DigitalCard
                                icons="ti-direction icon-lg color-primary d-block mb-4"
                                title="Copywriting"
                                desc="Crisp content needs maximum information delivered in minimum words with the required punch of vocabulary."
                            />
                            <DigitalCard
                                icons="ti-target icon-lg color-primary d-block mb-4"
                                title="Technical writing"
                                desc="The longest form of writing involves attention to detail. These include instruction manuals, formal documents, etc."
                            />
                            <DigitalCard
                                icons="ti-desktop icon-lg color-primary d-block mb-4"
                                title="Transcription"
                                desc="This form of content writing involves acute listening of audio recordings and writing the same down."
                            />
                        </div>
                    </div>
                </section>
                <section className="full__stack__whyHiring">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <h3 style={{ fontWeight: '100' }}><b>Why do you</b>  need to hire content writers?</h3>
                                <hr className="hr__line" />
                                <p>Attention is currency and focus has to be earned. Even for a fleeting moment of interaction, the content regarding your business must catch your client’s eye. This is why you need content writers. Crisp, articulated words describing your services to your prospective clients within minimum amount of time and attention makes a lasting impact. The tone of your content defines the kind of relation your customers envision with your business. Therefore, benefits to hiring content writers are plenty as long as you know the kind of content you want and choose the best content writers.</p> <br />
                            </div>
                            <div className="col-lg-5 why__hiringRighImg">
                                <img src="/assets/images/cw.gif" className="full__stackImg" alt="hire content writter" />
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
                                                <div className="project-details-content"><h5 style={{ fontWeight: "100" }}> <b>Hire Expert </b>Content Writers</h5><p>It used to be a Herculean task to find top content writers to express your vision through your website and other platforms. But not anymore. Elite Virtual Employee provides you with the best content writers who add an edge to your content that attracts wider target audience and gives your business more visibilty on the internet. Get engaging written content such as blogs, articles, newsletters or even social media posts and get more audience.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="container">
                                        <div className="">
                                            <div className="row mt-5">
                                                <div className="col-md-12">
                                                    <div className="project-details-content"><h5 style={{ fontWeight: "100" }}> <b>Why Hire </b>Our Content Writers</h5><hr />
                                                        <div className="project-details-feature">
                                                            <ul className="list-unstyled tech-feature-list">
                                                                <li className="py-1"><span className="ti-check-box mr-2 color-secondary"></span><strong>Better </strong>
                                                                    comprehension of your business
                                                                </li>
                                                                <li className="py-1"><span className="ti-check-box mr-2 color-secondary"></span><strong>Articulate </strong>
                                                                    description of your services
                                                                </li>
                                                                <li className="py-1"><span className="ti-check-box mr-2 color-secondary"></span><strong>More meaningful</strong>  engagement with your customers</li>
                                                            </ul>
                                                        </div>
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

export default ContentWriting
