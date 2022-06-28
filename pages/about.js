import React from "react";
import Head from "next/head";
import CalltoAction from "./component/Layout/CalltoAction";
import Link from "next/link";

export const about = () => {
  return (
    <>
      <Head>
        <meta name="description" content="Elite Virtual Employee has reached such heights because of the trust our clients have shown and continue to show. Remote Staffing solutions, vendor management and many more services for your business to choose from. Experience excellence. Experience Elite Virtual Employee." />
        <title>About us - Elite Virtual Employee | Top Recruitment Agency | Cloud Technologies</title>
      </Head>
      {/* <!--body content wrap start--> */}
      <div className="main">
        {/* <!--header section start--> */}
        <section
          className="hero-section ptb-100 gradient-overlay"
          style={{
            background:
              "url('/assets/images/about.png  ')no-repeat center center / cover",
          }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8 col-lg-7">
                <div className="page-header-content text-white text-center pt-sm-5 pt-md-5 pt-lg-0">
                  <h1 className="text-white mb-0">About Us</h1>
                  <div className="custom-breadcrumb">
                    <ol className="breadcrumb d-inline-block bg-transparent list-inline py-0">
                      <li className="list-inline-item breadcrumb-item">
                        <Link href="/">Home</Link>
                      </li>
                      <li className="list-inline-item breadcrumb-item active">
                        About Us
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--header section end--> */}

        {/* <!--about us section start--> */}
        <section className="about-us-section ptb-100">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-md-12 col-lg-5">
                <div className="video-promo-content mb-md-4 mb-lg-0">
                  <h3>Trustworthy. Meticulous. Timeframed.</h3>
                  <p>
                    We at Elite Virtual Employee have rigorously pursued our vision
                    towards bridging the gap between global organizations and
                    top remote professionals from across the world. It has only
                    been possible because of the unshakable trust we’ve built
                    with our clients over numerous successful projects. The
                    following remain our three major verticals:.
                  </p>
                  <ul className="list-unstyled tech-feature-list">
                    <li className="py-1">
                      <span className="ti-check-box mr-2 color-secondary"></span>
                      <strong>Remote </strong>
                      Staffing Solutions
                    </li>
                    <li className="py-1">
                      <span className="ti-check-box mr-2 color-secondary"></span>
                      <strong>Payroll </strong>
                      Management Services
                    </li>
                    <li className="py-1">
                      <span className="ti-check-box mr-2 color-secondary"></span>
                      <strong>Vendor</strong> Management Services
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-12 col-lg-6">
                <div className="card border-0 shadow-sm text-white">
                  <img
                    src="img/parallax-3.jpg"
                    alt="video"
                    className="img-fluid rounded shadow-sm vide__playImg"
                  />
                  <div className="card-img-overlay text-center">
                    {/* <a
                      href="https://www.youtube.com/watch?v=M9uVC3HLXko"
                      className="popup-youtube video-play-icon color-bip shadow play__icon"
                    >
                      <span
                        className="ti-control-play"
                        style={{ background: "#ed8351" }}
                      ></span>{" "}
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--about us section end--> */}

        {/* <!--our work process section start--> */}
        <section className="work-process-new ptb-100 gray-light-bg ">
          <div className="container">
            <div className="row justify-content-center ">
              <div className="col-md-9 col-lg-8">
                <div className="section-heading text-center mb-5">
                  <h2>Our work process</h2>
                  <p className="lead">
                    Distinctively grow go forward manufactured products and
                    optimal networks. Enthusiastically disseminate outsourcing
                    through revolutionary.
                  </p>
                </div>
              </div>
            </div>
            <div className="row about__workProcess">
              <div className="col-md-12">
                <div className="work-process-wrap text-center">
                  <div className="single-work-process">
                    <div className="work-process-icon-wrap secondary-bg rounded">
                      <i className="ti-vector icon-md text-white"></i>
                      <span className="process-step primary-bg text-white shadow-sm">
                        1
                      </span>
                    </div>
                    <span className="work-process-divider"></span>
                    <div className="work-process-content mt-4">
                      <h5>Send In Your Query</h5>
                      <p>
                        Elite Virtual Employee aims to streamline and navigate your remote staffing requirements.
                      </p>
                    </div>
                  </div>
                  <div className="single-work-process">
                    <div className="work-process-icon-wrap secondary-bg rounded">
                      <i className="ti-layout-list-thumb icon-md text-white"></i>
                      <span className="process-step primary-bg text-white shadow-sm">
                        2
                      </span>
                    </div>
                    <span className="work-process-divider"></span>
                    <div className="work-process-content mt-4">
                      <h5>Handpick Your Team</h5>
                      <p>
                        Amongst our chosen prospects, we share their CVs with your organization to interact further.
                      </p>
                    </div>
                  </div>
                  <div className="single-work-process">
                    <div className="work-process-icon-wrap secondary-bg rounded">
                      <i className="ti-palette icon-md text-white"></i>
                      <span className="process-step primary-bg text-white shadow-sm">
                        3
                      </span>
                    </div>
                    <span className="work-process-divider"></span>
                    <div className="work-process-content mt-4">
                      <h5>Hire Within 6 Hours</h5>
                      <p>
                        Our chosen talents check all your required boxes. Get your dream team efficiently within 6 hours.
                      </p>
                    </div>
                  </div>
                  <div className="single-work-process">
                    <div className="work-process-icon-wrap secondary-bg rounded">
                      <i className="ti-cup icon-md text-white"></i>
                      <span className="process-step primary-bg text-white shadow-sm">
                        4
                      </span>
                    </div>
                    <span className="work-process-divider"></span>
                    <div className="work-process-content mt-4">
                      <h5>Stay Connected</h5>
                      <p>
                        Our support team provides smoother communication and ensures timeline efficiency.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--our work process section end--> */}

        {/* <!--team two section start--> */}
        <section className="team-two-section ptb-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8 col-lg-8">
                <div className="section-heading text-center mb-5">
                  <h2>Meet Our Managing Director</h2>
                  <p className="lead" style={{ fontSize: "18px" }}>
                    Every Assignment gets our utmost care, a dedicated team and maximum attention. irrespective of the size of your organization, you always get our absolute best effort because That’s a key principle our founder believes in.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="staff-member">
                  <div className="card gray-light-bg text-center border-0">
                    <img
                      src="/assets/images/team/nilesh_kumar_gupta.png"
                      alt="Nilesh Kumar Gupta"
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <h5 className="teacher mb-0">Nilesh Kumar Gupta</h5>
                      <span> &mdash; Managing Director</span>
                      <ul className="list-inline pt-2 social">
                      </ul>
                    </div>
                  </div>
                  <div className="overlay d-flex align-items-center justify-content-center">
                    <div className="overlay-inner">
                      <p className="teacher-quote"></p>
                      <Link href="#" className="teacher-name">
                        <h5 className="mb-0 teacher text-white">
                          Nilesh Kumar Gupta
                        </h5>
                      </Link>
                      <span className="teacher-field text-white">
                        &mdash; Managing Director
                      </span>
                      <ul className="list-inline py-4 social">
                        <li className="list-inline-item">
                          <Link href="" target="_blank">
                            <span className="ti-facebook"></span>
                          </Link>
                        </li>
                        <li className="list-inline-item">
                          <Link href="" target="_blank">
                            <span className="ti-linkedin"></span>
                          </Link>
                        </li>

                      </ul>
                      {/* <p className="teacher-see-profile">
                        <a href="#" className="btn outline-white-btn">
                          View my profile
                        </a>
                      </p> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-7 dir__msg">
                <p><span>“ </span> Elite Virtual Employee has been a sincere effort to provide the best possible services to our clients. Every assignment gets our utmost care, a dedicated team and maximum attention. Irrespective of the size of your organization, you always get our absolute best effort because that’s what we believe in. </p>
                <p>Your business growth becomes our responsibilty and we pride ourselves with the success our services bring to your organization. We hope our current and future clients keep showering us with more opportunities to serve them.
                </p>
                <p>Take a step towards us and let us bridge the gaps for you. Reach out to us and experience excellence. Mere words wouldn’t suffice, we know. Therefore, we welcome you in advance to our ever expanding Elite Virtual Employee cloud family. <span>”</span></p>
              </div>
            </div>
          </div>
        </section>
        {/* <!--team two section end--> */}

        {/* <!--testimonial section start--> */}

        {/* <!--testimonial section end--> */}
        <section className="about__section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h3>
                  Why Elite Virtual Employee is the best option for your business?{" "}
                </h3>
                  <p><b>Every solution Elite Virtual Employee</b> provides is delivered
                  with speed, scale, quality and flexibility powered by our
                  AI-driven Cloud-based technology and talent platforms. We are
                  global leaders providing services for all information
                  technology and solutions for enterprises and industries around
                  the globe. So whether you need innovative technology talent or
                  solutions for any IT or non IT services, partner with us. Let
                  us help you take your business to the next level. We have two
                  distinct service offerings focused on ensuring Total Talent
                  Management and business continuity for our customers - Global
                  Talent Cloud Solutions and Remote Staff Augumentation.</p>
                 
                  <p>
                    <b>Our Talent</b> Cloud solutions group is a leader in High
                    Hazard & Global Payroll and IC validation and Compliance
                    Solutions. Our remote staffing division is a consistent
                    provider of talent for our clients’ technology, engineering,
                    professional services, scientific and remote staffing needs.
                    In other words, we’re driven by tech and backed by talent.
                    It’s that human-centric approach that makes us unique.
                  </p>
                  
                  <p>
                    <b>Elite Virtual Employee</b> is currently working on many exciting
                    projects including SaaS. The aim behind it all is to
                    simplify the process and promote Indian talent amongst our
                    clients across the world <b>saving 70% of their cost</b> on what
                    they would’ve spent on their local pool. We enable clients
                    to just focus on their business and take all the
                    responsibility of management of their resources being an
                    efficient remote office.
                  </p>
                  <p>
                    <b>We’re inspired</b> to work because of our clients. They
                    stay not only because our amazingly talented staff works
                    tirelessly on making our clients’ dreams and vision come
                    true but also deliver the same at mere 30% of their cost of
                    hiring locally, a responsibility we take seriously. Our
                    cultural values help us lead with integrity. Our focus is
                    clients’ satistfaction in all terms when it comes to helping
                    them building their businesses. We build dedicated account
                    teams for each of our cloud clients and make sure to align
                    with your strategic initiatives, be it any technical or
                    non-technical project.
                  </p>
                  <p>
                    <b>Of course</b> we offer a free trial initially for clients to
                    gauge the caliber of every resource we have in-house. Our
                    team of over 500 active employees is ever ready to match all
                    your technical and non-technical requirements to create
                    above-industry retention levels and our progressive
                    co-ordination strategies ensure you don’t lose a penny you
                    invest with Elite Virtual Employee.
                  </p>
                
              </div>
            </div>
          </div>
        </section>
        <CalltoAction />
      </div>
      {/* <!--body content wrap end--> */}
    </>
  );
};

export default about;
