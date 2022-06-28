import React from 'react'
import Head from "next/head"
import Hero from './component/Layout/Hero'
import WhyChooseUs from './component/Layout/WhyChooseUs'
import CalltoAction from './component/Layout/CalltoAction'
const BlogCard = ({ title, desc, url }) => {
    return (
        <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="services-single text-center p-3 my-md-3 my-lg-3 my-sm-0 shadow-sm gray-light-bg rounded my__blogs" style={{ textAlign: 'left !important' }}>
                <h5>{title}</h5>
                <p className="mb-0">{desc}</p>
                <a href={url} className="detail-link mt-4">Read more <span className="ti-arrow-right"></span></a>
            </div>
        </div>
    )
}

const Blogs = () => {
    return (
        <>
            <Head>
                <title>Elite Virtual Employee Blog | Staffing Solutions | Outsource to India</title>
                <meta name="description" content="Informative blog covering various topics Across services and industries. Outsource to the foremost remote Staffing  Agency in India and save almost 70% cost on hiring dedicated Remote professionals." />
            </Head>
            <div className="main">
                <Hero title="Blog" imgPath="/assets/images/fullstackdev.jpeg" />
                <section className="services-section ptb-100">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <div className="section-heading text-center mb-4">
                                    <h2>Our Latest Blog Posts</h2>
                                    <p className="lead">A carefully curated collection of informative blogs for all our prospective clients.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <BlogCard
                                title="Is Python the future of digital applications?"
                                desc="With more functions being assigned to digital applications, the era of automation is nigh. Find out how Python is taking us all into the future."
                                url="blog-python"
                            />
                            <BlogCard
                                title="Rise of Animation and Multimedia across industries."
                                desc="Global leaders stayed ahead of the curve and knew exactly how potent a tool Animation and Multimedia would become in the coming years."
                                url="blog-animation-multimedia-industries"
                            />
                            <BlogCard
                                title="How digital marketing contributes to better optics?"
                                desc="In the age of high speed connectivity and constant digital feedback, see how your organizational optics need better digital marketing."
                                url="blog-digital-marketing-optics"
                            />
                            <BlogCard
                                title="How do content writers affect organizational growth?"
                                desc="Since earning your customers’ attention and engaging them is everything, let’s discuss how content writers affect your organization."
                                url="blog-content-writers-affect-growth"
                            />
                            <BlogCard
                                title="All you need to know about AngularJS and ReactJS."
                                desc="Both being component-based architecture frameworks for frontend development, what’s your preference between AngularJS and ReactJS?"
                                url="blog-angular-react"
                            />
                            <BlogCard
                                title="What are misconceptions about Remote Staffing?"
                                desc="Amidst far too many misconceptions around remote staffing, let’s talk about top 5 that never get old and keep popping up every now and then."
                                url="blog-misconceptions-remote-staffing"
                            />
                            <BlogCard title="How good is VB.NET for frontend development?" desc="VB.NET has gotten quite popular with web developers so it begs to question just how amazing is this frontend programming language?" url="blog-vbnet" />
                            <BlogCard
                                title="Why does your business need Remote Staffing?"
                                desc="An alternative across industries to engage in swift business & attain efficient productivity, what are the benefits to Remote Staffing?"
                                url="blog-why-need-remote-staffing"
                            />
                            <BlogCard
                                title="How to hire the right website developer?"
                                desc="Your website must emulate your heart-warming welcome. Thus, hiring the right website developer is key to achieving this subtle expertise."
                                url="blog-hire-web-developer"
                            />
                            <BlogCard
                                title="What can Virtual Assistants do?"
                                desc="Many businesses remain unaware just how useful virtual assistants can be. Let us explore this domain further together."
                                url="blog-virtual-assistant"
                            />
                        </div>
                    </div>
                </section>
                <WhyChooseUs />
                <CalltoAction />
            </div>
        </>
    )
}

export default Blogs
