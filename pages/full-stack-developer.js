import React from 'react'
import Hero from './component/Layout/Hero'
import WhyChooseUs from './component/Layout/WhyChooseUs'
import Head from 'next/head'

const FullStackCard = (props) => {
    return (
        <div className="col-lg-6 col-md-6 col-sm-12">
            <li className="d-flex align-items-center mb-3 p-4 rounded">
                <span className={props.icons}></span>
                <div className="d-block">
                    <h5 className="mb-0">{props.title}</h5>
                    <p>{props.desc}</p>
                </div>
            </li>
        </div>
    )
}

const fullStactDeveloper = () => {
    return (
        <>
            <Head>
                <title>Hire Dedicated Full Stack Developers | Outsource to India</title>
                <meta name="description" content="Hire top full stack Developers, Programmers and coders in India for back-end, front-end, custom web, software development. Outsource Hiring website development to India and save almost 70% on hiring costs." />
            </Head>
            <div className="main">
                <Hero title="Full Stack Developer" imgPath="/assets/images/fullstackdev.jpeg" />
                <section className="full__stackSection">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <p>Full Stack developers, as the name suggests, have in depth knowledge of the complete web development process, whether frontend or backend. They are specialized developers that work on a specific platform and can deliver a project end to end.</p>
                                <hr className="hr__line" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="full__StackSectionCard">
                    <div className="container">
                        <div className="row">
                            <FullStackCard icons="ti-desktop icon-sm color-secondary d-block mr-3 my__icon" title="Frontend Technologies" desc="Proficient in jQuery, JavaScript, Material, React and AngularJS etc, professionals provide you best frontend." />

                            <FullStackCard icons="ti-cloud-down icon-sm color-secondary d-block mr-3 my__icon" title="Back-end  Technologies" desc="Whether your backend needs MEAN, LAMP, MERN, .NET stack or any other, our professionals have got your back." />

                            <FullStackCard icons="ti-server icon-sm color-secondary d-block mr-3 my__icon" title="Database Technologies" desc="Our developers are well versed with MySQL, PostgreSQL, MongoDB, etc to offer you best database development." />
                            <FullStackCard icons="ti-cloud icon-sm color-secondary d-block mr-3 my__icon" title="Cloud Services" desc="Google Cloud Platform, Microsoft Azure, Amazon Web Services, etc are all familiar systems for our developers." />
                        </div>
                    </div>
                </section>
                <section className="full__stack__whyHiring">
                    <div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7">
                                    <h3 style={{ fontWeight: '100' }}><b>Why Hiring</b> Full Stack Developer Is Better</h3>
                                    <hr className="hr__line" />
                                    <p>Every website has certain requirements which require specializations. But with a full stack developer, you can rest assured that you wouldn’t have to find more professionals for your project. Benefits of hiring Full Stack developers remain in the facts that not only are they well versed with their platforms but can also proficiently handle beyond frontend and backend development. Thus they become your single point contact for all your web development. Our Full Stack developers undertake projects and complete them end to end within your stipulated timeline.</p> <br />
                                    <p>With constant advancements in web development and high focus on web design and functionality, it’s rather convenient to have a single professional maintain the synergy through all your website requirements and provide your customers a seamless experience.</p>
                                </div>
                                <div className="col-lg-5 why__hiringRighImg">
                                    <img src="/assets/images/backend.png" className="full__stackImg" alt="hire full stack developer" />
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
               <div className="" style={{marginBottom: "75px"}}> <WhyChooseUs /></div>
                <section className="why__doClientSection">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-lg-12">
                                <h3 style={{ fontWeight: '100' }}><b>Why do clients</b> prefer Full Stack Developers?</h3> <hr className="hr__line" />
                                <p>There can be countless benefits of hiring Full Stack developers for your project. But the main reason remains the seamless balance between the frontend and backend since they’ve been worked upon by the same web developers. They can alter and accomodate changes in your website as per your requirement and know exactly which code needs attention to deliver the best output. Some organizations also hire full stack developers to keep tabs on all facets of their website regularly. They usually work on programming languages like Wordpress, Java, Python, PHP, JavaScript to help set up a convenient web framework that allows at random customization to your business website and thus providing a dynamic, relavant online presence at all times. Therefore it’s no surprise that many organizations prefer Full Stack developer for their business. </p>
                            </div>

                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}

export default fullStactDeveloper
