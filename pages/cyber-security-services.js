import React from 'react'
import Hero from './component/Layout/Hero'
import WhyChooseUs from './component/Layout/WhyChooseUs'
import CalltoAction from './component/Layout/CalltoAction'
import HireNow from './component/Layout/HireNow'
import Head from 'next/head'
// import Head from 'next/head'

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

const CyberSecurityServices = () => {
    return (
        <>
            <Head>
                <title>Hire Top Cyber Security Professionals and Experts</title>
                <meta name="description" content="Hire Top cyber Security Experts for your organization and Safeguard your company and customers against potential malware threats and cyber attacks like malware, ransomware, etc. Outsource to India and save almost 70% cost on Cyber Security Services." />
            </Head>
            <div className="main">
                <Hero title="Cyber Security Services" />
                <HireNow hireBtn="You Need Cyber Security Services"
                    p1="Form Data and Backend Protection"
                    sub1="Backend data has user emails and passwords and hence requires absolute security that can’t be undermined or compromised."
                    p2="Banking and Payment Gateway Fortification"
                    sub2="Users trust financial sections of your applications with their personal banking details. Hence their trust must always be upheld."
                    p3="Cloud Storage Firewall"
                    sub3="Media uploaded online is susceptible to be misused and thus needs to stay secured and have limited, verified access."
                    p4="Malware Threat Identification"
                    sub4="We strongly stick to your budget and ensure deadlines are met."
                    imgPath="/assets/images/cybersecurity.gif"
                />
                <section className="full__stack__whyHiring">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <h3 style={{ fontWeight: '100' }}><b>What can Cyber Security</b> do for you?</h3>
                                <hr className="hr__line" />
                                <p>Businesses and potential clientele have all moved online and the expansion is booming by the minute. This has connected billions of people to millions of opportunities and services. The positive impact of connection through internet world over is undeniable. But as convenient as everything gets for online users, things also get just as vulnerable. Banking details, professional services, legal documents, corporate trade secrets and every little piece of sensitive data of yours that is ever entered or uploaded online is open to a digital attack, or also called a cyber-attack. Therefore, it’s essential for all businesses to safeguard their customers by ensuring better cyber security for their online platforms. Cyber security is the process of using a variety of digital tests to ensure protective barriers and firewalls against any cyber attack, theft or malware activities. These practices help keep user data safe, secure your business and give your services more credibility ans trust amongst customers and other services.</p>
                            </div>
                            <div className="col-lg-5 why__hiringRighImg">
                                <img src="/assets/images/cubersecurity.jpg" className="full__stackImg" alt="hire wordpress developer" />
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
                                                <div className="project-details-content"><h5 style={{ fontWeight: "100" }}> <b>Hire Cyber Security</b> Experts</h5>
                                                    <p>Your business needs to stay assured that no external digital threats or attacks can affect the functioning of your web applications. Hence, efficient cybersecurity makes sure your services are always accessible to your customers and prevent possible loss of revenue. Best cybersecurity experts run variety of vulnerability tests on your application to plug all leaks before they become a problem.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <br />

                                    <div className="container">
                                        <div className="project-details-content"><h5 style={{ fontWeight: "100" }}>
                                            <b>Five Cyber Security Essentials </b>Your Organization Needs.</h5>
                                            <h5 className="myheading">Network Security</h5>
                                            <p>This one secures organizational computer networks from unauthorized intrusion, corporate espionage and targeted malware. It also does not let third party cookies track any activity on your systems. Network security with the help of machine learning technology alerts abnormal traffic and hence helps detect and prevent malware and cyber attacks. This security needs updating from time to time in order to stay ahead of attackers. User practices such as extra logins, timely change of passwords, genuine antivirus installation, firewalls, monitored Internet access and encryption help keep organizations stay protected.</p>
                                            <h5 className="myheading">Application Security</h5>
                                            <p>Although your apps are brilliant, they may be prone to damage your device by being susceptible to cyber-attack or malware. Application security beats infringement at the development phase of the project. With its help, organizations can detect the leaks around sensitive data and plug them accordingly with antivirus, firewalls and encryption programs.</p>
                                            <h5 className="myheading">Critical Infrastructure Cybersecurity</h5>
                                            <p>Critical Infrastructure includes systems that help communities sustain such as electricity grids, water purifiers, traffic coordinators, hospitals, etc. These systems can become platforms through which the cyber malware can mass affect others connected to them. Thus, to prevent the possibility of cyber malware, vulnerable points must be safeguarded so as to reduce cyber attacks and protect the businesses and individuals attached.</p>
                                            <h5 className="myheading">Internet of Things Security</h5>
                                            <p>IoT is everywhere. Appliances, remote controls, printers, wifi-routers, sensors amongst other things have IoT to make the user experience convenient. But what it also makes convenient is a cyber attack. Hence it’s important that IoT security be given priority to secure organizational networks. Cybersecurity of Internet of Things does not only safeguard malware attacks but also strengthens overall network security.</p>
                                            <h5 className="myheading">Cloud Security</h5>
                                            <p>Artificial intelligence improves businesses and many organizations have come to terms with it. It has enhanced customer experience made operations seamless. For optimum functioning, AI needs to store humungous amounts of data and thus it’s impossible to save it in physical form. Hence, all the data is saved on cloud. This data is not always structured and can become a potential threat to the organizational network. Thus, cloud security tools compute this stored data and monitor it to ensure it isn’t harmful. Even if it unfortunately is, being away from your network mitigates any major damage.</p>

                                        </div>
                                    </div> <br />
                                    <div className="container">
                                        <div className="project-details-content"><h5 style={{ fontWeight: "100" }}>
                                            <b>Risks To Your Organization Without </b>Cyber Security</h5>
                                            <h5 className="myheading">Phishing</h5>
                                            <p>Ever received weird emails that resembled those from genuine organizations but sought sensitive data like credit card numbers and login information? Well, these fraudulent emails that steal sensitive data are the most common type of cyber attack known as Phishing. These need to be dealt with caution and are best reported.</p>
                                            <h5 className="myheading">Ransomware</h5>
                                            <p>One of the worst, a Ransomware blocks access to networks and systems until a certain financial exchange is not made by the victims. Like regular ransoms, paying this one too doesn’t guarantee recovery or restoration.</p>
                                            <h5 className="myheading">Malware</h5>
                                            <p>Manipulative as a software, a Malware tries intrude your network, access sensitive data and damage your systems. Malware can become rampant and disrupt organizational functioning effectively.</p>
                                            <h5 className="myheading">Social Engineering</h5>
                                            <p>Another online trick to make you reveal sensitive information, Social Engineering can seek money or access to your confidential data and disrupt organizational and personal networks. This malicious software can be coupled with attacks noted above are more likely to make users click on links, download virus or trust insecure sources.</p>
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

export default CyberSecurityServices
