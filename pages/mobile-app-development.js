import React from 'react'
import Hero from './component/Layout/Hero'
import WhyChooseUs from './component/Layout/WhyChooseUs'
import CalltoAction from './component/Layout/CalltoAction'
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

const MobileAppDevelopment = () => {
    return (
        <>
            <Head>
                <title>Hire Dedicated Mobile App Developers | Outsource to India</title>
                <meta name="description" content="Hire top mobile app developers from India to create responsive and interactive mobile apps for all platforms, especially iOS, Android & Windows. Outsource Mobile App Development to India and save almost 70% cost on hiring dedicated mobile app developers." />
            </Head>
            <div className="main">
                <Hero title="Mobile App Development" imgPath="/assets/images/ApplicationDevelopment.webp" />

                <section className="services-section ptb-50" style={{ marginBottom: "100px", marginTop: "100px" }}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <div className="section-heading text-center mb-4">
                                    <h4 style={{ fontWeight: '100' }}><b>Get end-to-end</b> Mobile App Development Services</h4>
                                    <p className="lead"> </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <DigitalCard
                                icons="ti-basketball icon-lg color-primary d-block mb-4"
                                title="Hire Android Developer"
                                desc="Your business needs to reach your clients fast. Get the best android developers for perfect app to your business."
                            />
                            <DigitalCard
                                icons="ti-direction icon-lg color-primary d-block mb-4"
                                title="Hire Apple’s Developer"
                                desc="Hire Top iOS developers and bring your services to your customers through a seamless mobile app."
                            />

                        </div>
                    </div>
                </section>
                <section className="full__stack__whyHiring">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <h3 style={{ fontWeight: '100' }}><b>What is the benefit</b>of using an app?</h3>
                                <hr className="hr__line" />
                                <p>The competition is rampant and all businesses are trying their best to make a mark. But more than their services being excellent, it’s important to be more accessible to your customers. This is why hiring mobile app developers is imperative. A mobile app lets your potential clients discover your business and engage with your online content.</p> <p>The most notable mobile app development platforms, android and iOS are home to millions of such remarkable projects where top android developers and best iOS developers have brought a variety of businesses to their target audiences.</p> <br />
                            </div>
                            <div className="col-lg-5 why__hiringRighImg">
                                <img src="/assets/images/mobile-app-development.gif" className="full__stackImg" alt="hire mobile app developer" />
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
                                                <div className="project-details-content"><h5 style={{ fontWeight: "100" }}> <b>Hire App </b>Developers</h5>
                                                    <p>Since most clients are more comfortable searching for services on their handheld devices, no wonder organizations needed to make accessibility easier for them. Thus mobile apps, be it android or iOS, have become commonplace. As a top mobile app development company, Elite Virtual Employee enables you to connect more conveniently with your clients and effortlessly convey your services to them. Both platforms, android and iOS, have large customer bases and hence are thriving with opportunities. Therefore, benefits of hiring mobile app developers are thoroughly underrated.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="container" >
                                        <div className="row mt-5">
                                            <div className="col-md-12">
                                                <div className="project-details-content">
                                                    <h5 style={{ fontWeight: '100' }}>
                                                        <b>What are top Technologies</b> to Develop Mobile App software?</h5>
                                                    <p>Mobile app development for any business has become a priority. And with the colossal demand comes the various tools and technologies that help in software development for the same. here are a few programming languages that form the base for best mobile apps.</p>
                                                </div>
                                            </div>
                                        </div> <hr />
                                        <div className="project-details-feature">
                                            <ul className="list-unstyled tech-feature-list">
                                                <li className="py-1"><span className="ti-check-box mr-2 color-secondary"></span><strong>HTML5: </strong>
                                                    the best technology for frontend development of your mobile applications, HTML5 helps deliver smooth functionality and seamless user experience. Its platform independency enhances marketability, improves visibility, makes further development affordable and supports offline browsing.
                                                </li>
                                                <li className="py-1"><span className="ti-check-box mr-2 color-secondary"></span><strong>Swift:</strong>  Especially native to iOS platform, Swift is a popular iOS application development language which comes with minimal coding and easy maintenance. powerful as well as intuitive as a language, it’s preferred by Apple developers for macOS, iOS, watchOS, tvOS and other systems. </li>
                                                <li className="py-1"><span className="ti-check-box mr-2 color-secondary"></span><strong>Java: </strong>
                                                    The object-oriented programming language has forever been the official language for Android mobile app development. extremely versatile to begin with, Java helps build flexible, modular and extensible applications. With many open source libraries available, possibilities remain endless.
                                                </li> <hr />
                                                <p><b>With programming languages advancing strongly, certain powerful mobile application development tools have also made waves. the following are Some of the popular development tools out there. </b></p>
                                                <li className="py-1"><span className="ti-check-box mr-2 color-secondary"></span><strong>WidgetPad: </strong>
                                                    one of the best open-source frameworks for mobile application development across platforms, WidgetPad works with JavaScript and HTML5 that enables it to offer source code editing, versioning and distribution.
                                                </li>
                                                <li className="py-1"><span className="ti-check-box mr-2 color-secondary"></span><strong>PhoneGap: </strong>
                                                    Also called Apache Cordova, it’s an open-source mobile app development framework developed by Adobe System that works on CSS3, HTML5, and JavaScript to create native applications for Windows, iOS and Android. The framework mixes native and hybrid code snippets and hence the apps are neither native-mobile nor web-based applications.
                                                </li>
                                                <li className="py-1"><span className="ti-check-box mr-2 color-secondary"></span><strong>RhoMobile: </strong>
                                                    based on the powerful Rhodes open-source framework that supports multi-platform app development, RhoMobile builds smart applications using technologies such as CSS3, HTML5, JavaScript and Ruby for Android, iOS and Windows.
                                                </li>
                                                <li className="py-1"><span className="ti-check-box mr-2 color-secondary"></span><strong>Appcelerator: </strong>
                                                    Another open-source framework, Appcelerator develops hardware-based apps best. With PHP, JavaScript and HTML, it create native apps for iOS, Android and Windows.
                                                </li>
                                                <li className="py-1"><span className="ti-check-box mr-2 color-secondary"></span><strong>MoSync: </strong>
                                                    Another open-source framework, Appcelerator develops hardware-based apps best. With PHP, JavaScript and HTML, it create native apps for iOS, Android and Windows.
                                                </li>
                                                <li className="py-1"><span className="ti-check-box mr-2 color-secondary"></span><strong>Appcelerator: </strong>
                                                    Another open-source framework, Appcelerator develops hardware-based apps best. With PHP, JavaScript and HTML, it create native apps for iOS, Android and Windows.
                                                </li>

                                                <p>Hybrid apps are developed by blending native and web solutions. the application is written using web technologies and hence can run on all platforms while using the same code. But since the code is never truly native, the apps tend to have limited potential.</p>
                                            </ul>
                                        </div> <p></p>
                                        <div className="project-details-content">
                                            <h5 style={{ fontWeight: '100' }}>
                                                <b>What are Hybrid and Natively</b> Compiled Applications?</h5>
                                            <p>Hybrid apps and natively-compiled apps can both run on all platforms. But while the former use the same code on both iOS and Android, the latter adhere to platform-specific UI guidelines. Ionic remains a popular hybrid app framework. When it comes to Natively-compiled apps, Flutter and React Native share a large portion in popularity. Developed by Google, Flutter is a single code based UI framework that uses Dart programming language perfect for cross-platform applications. It lets developers code, test and reiterate for both Android and iOS applications. The framework sources UI components from Cupertino for iOS and Material Design for Android. On the other hand, React Native is developed by Facebook And uses JavaScript for its cross-platform apps. But there are only select libraries that allow you to use the same code to build on iOS and Android. While both platforms have their own programming languages, top Flutter developers and best React Native Developers attain expertise in native programming languages, Java (Android) and Swift (iOS) as well.  With more apps and potential customers across platforms, opportunities are endless.</p>
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

export default MobileAppDevelopment
