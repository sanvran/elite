import React from "react";
import Head from "next/head";
import ServicesCard from "./component/Layout/Services/ServicesCard";
import WhyChooseUs from "./component/Layout/WhyChooseUs";
import CalltoAction from './component/Layout/CalltoAction'
import Link from "next/link";

function Services() {
  return (
    <>
      <Head>
        <title>360 Staffing Solutions | Vendor Management | Payroll Services</title>
        <meta name="description" content="360 Staffing Solutions | Vendor Management | Payroll Services" />
      </Head>

      {/* <!--header section start--> */}
      <section
        className="hero-section ptb-100 gradient-overlay"
        style={{
          background:
            "url('img/header-bg-5.jpg')no-repeat center center / cover",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-7">
              <div className="page-header-content text-white text-center pt-sm-5 pt-md-5 pt-lg-0">
                <h1 className="text-white mb-0">Our Services</h1>
                <div className="custom-breadcrumb">
                  <ol className="breadcrumb d-inline-block bg-transparent list-inline py-0">
                    <li className="list-inline-item breadcrumb-item">
                      <a href="/">Home</a>
                    </li>
                    {/* <li className="list-inline-item breadcrumb-item">
                      <a href="#"></a>
                    </li> */}
                    <li className="list-inline-item breadcrumb-item active">
                      Services
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--header section end--> */}
      <section className="py-5 section__services">
        <div className="container">
          <p style={{ fontSize: '17px', fontWeight: '400' }}>Helping our clients with their remote staffing requirements gets us very excited. Elite Virtual Employee strives to excel at providing virtual employee services for the following and many more.</p><hr className="hr__line" />
          <div className="row">
            <ServicesCard
              title="Digital Marketing"
              disc="Digital Marketing helps your potential customers find you sooner."
              imgs="/assets/images/services/skyhawk-digital-marketing.webp"
              urlPath='digital-marketing'
            />
            <ServicesCard
              title="Mobile App Development"
              disc="Mobile apps conveniently list all your services in the palm of your clients."
              imgs="/assets/images/services/MobDev.jpg"
              urlPath='mobile-app-development'
            />
            <ServicesCard
              title="Web Development"
              disc="Your website is the online showcase of your business and services."
              imgs="/assets/images/services/WebDev.webp"
              urlPath='web-development'
            />
            <ServicesCard
              title="Content Writing"
              disc="Think your business ideas need thatmuch needed verbose flair?"
              imgs="/assets/images/services/ContWrit.jpg"
              urlPath='content-writing'
            />
            <ServicesCard
              title="Multimedia & Animation"
              disc="Smarter infographics leave a lasting impression upon your target audience."
              imgs="/assets/images/services/MultAni.jpg"
              urlPath='animation-multimedia'
            />
            <ServicesCard
              title="Virtual Assistant"
              disc="Virtual assistants help you plan and organize your business better."
              imgs="/assets/images/services/VirtAssi.jpg"
              urlPath='virtual-assistant'
            />
            <ServicesCard
              title="Vendor Management"
              disc="Efficient vendor management that positively affects your overall output."
              imgs="/assets/images/services/vendor.jpg"
              urlPath='/vendor-management'
            />
            <ServicesCard
              title="Payroll Management"
              disc="Best payroll services help your employees attain top productivity."
              imgs="/assets/images/services/payroll.jpg"
              urlPath='/payroll-management'
            />
            <ServicesCard
              title="Legal Process Outsourcing"
              disc="Dedicated legal professionals for your law firm or organizational functions."
              imgs="/assets/images/services/Legal.jpg"
              urlPath='legal-process-outsourcing'
            />
          </div>
        </div>
      </section>
      <WhyChooseUs />
      <CalltoAction />
    </>
  );
}

export default Services;
