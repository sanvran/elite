import Head from 'next/head'
import Image from 'next/image'
import Achievement from './component/Layout/Achievement'
import Client from './component/Layout/Client'
import WhyChooseUs from './component/Layout/WhyChooseUs'
import IndustriesServe from './component/Layout/IndustriesServed'
import Loader from './component/Layout/Loader/'
import Services from './component/Layout/Services'
import Testimonial from './component/Layout/Testimonial'
import CalltoAction from './component/Layout/CalltoAction'
import Popup from './component/Popup/Popup'
import { useState } from 'react'

export const PopUpForm = ({ handleChange }) => {
  return (
    <>
      <div className="row justify-content-around">
        <div className="col-md-12">
          <form action="#" method="POST" id="contactForm1" className="contact-us-form" noValidate="novalidate">
            <div className="form-row">
              <div className="col-12">
                <div className="form-group">
                  <input type="text" onChange={handleChange} className="form-control" name="fname" placeholder="Enter name *" required="required" />
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <input type="email" onChange={handleChange} className="form-control" name="email" placeholder="Enter email *" required="required" />
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <input type="number" onChange={handleChange} className="form-control" name="mobile" placeholder="Enter mobile number *" required="required" maxLength='10' />
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <textarea name="message" onChange={handleChange} id="message" className="form-control" rows={2} cols={3} placeholder="Requirement" defaultValue={""} />
                </div>
              </div>
              {/* <div className="col-sm-12 mt-3">
                    <input type="submit" onClick={(e) => { handleSubmit(e) }} className="btn secondary-solid-btn" id="btnContactUs" value="Send Message" />
                  </div> */}
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default function Home() {
  const initInput = {
    fname: '',
    email: '',
    mobile: '',
    message: ''
  }
  const [openModal, setOpenModal] = useState(true);
  const [inputData, setInputData] = useState(initInput)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value })
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputData.mobile.length >= 10 && inputData.mobile.length < 10) {
      return alert('Please enter 10 digit monbile number')
    }
    if (inputData.fname === '' || inputData.email === '' || inputData.mobile === '') {
      return alert('Star (*) field is mandatory')
    }
    fetch('/api/contactus', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(inputData)
    }).then((res) => {
      alert('Thank you for reaching out to us. Our team will be in touch soon.')
      console.log('Response received')
      if (res.status === 200) {
        console.log('Response succeeded!')
        setInputData('')
        setOpenModal(false)
      }
    })

  };

  return (
    <>
      <Head>
        <title>Elite Virtual Employee - Remote Staffing | Vendor Management</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="Elite Virtual Employee has rigorously pursued the vision towards bridging the gap between global organizations and top remote professionals from across the world. Experience the best services in remote staffing solutions, vendor management, payroll services amongst many more." />
      </Head>
      <Popup open={openModal} onClose={() => setOpenModal(false)}
        bodyContent={
          <PopUpForm
            setInputData={setInputData}
            handleChange={handleChange}
          />
        }
        handleSubmit={handleSubmit}
      />
      {/* main */}
      {/* <!--body content wrap start--> */}
      <div className="main">
        {/* <!--hero section start--> */}
        <section className="hero-equal-height pt-165 pb-100 gradient-overly-right-color" style={{ background: "url('img/bg.webp')no-repeat center center / cover" }}>
          <div className="container">
            <div className="row">
              <div className="owl-carousel owl-theme hero-content-slider custom-dot custom-dot-2">
                <div className="item">
                  <div className="col-md-8 col-lg-7 col-12">
                    <div className="hero-content-wrap text-white">
                      {/* <h1 className="text-white">Remote Staffing Solutions Save 70% cost on hiring</h1> */}
                      <h1 className="text-white">Hire your remote staff and save 75%</h1>
                      <h3 className="text-white" style={{ borderTop: '1px solid #eee', borderBottom: '1px solid #eee', padding: 6 }}>Starting just $899 - $1999/Month only</h3>
                      {/* <p className="lead"></p> */}
                      <ul className="list-unstyled tech-feature-list text-white">
                        {/* <li className="py-1"><span className="ti-control-forward mr-2"></span><strong>Hire </strong>experienced employees within hours.</li>
                        <li className="py-1"><span className="ti-control-forward mr-2"></span><strong>360 </strong>staffing process for all your needs.</li> */}
                        <li><b>Start with a free trial for your remote employee today</b></li>
                      </ul>
                      <div className="action-btns mt-4">
                        <a href="contact" className="btn outline-white-btn"> <i className="fa fa-briefcase"></i> &nbsp; HIRE NOW</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="col-md-8 col-lg-7 col-12">
                    <div className="hero-content-wrap text-white position-relative z-index">
                      <h2 className="text-white head__slider">Payroll Management Services</h2>
                      {/* <p className="lead"></p> */}
                      <ul className="list-unstyled tech-feature-list text-white">
                        <li className="py-1"><span className="ti-control-forward mr-2"></span><strong>Efficient </strong> tax deductions and expense tracking.</li>
                        <li className="py-1"><span className="ti-control-forward mr-2"></span><strong>Effective </strong> time and leave management. </li>
                      </ul>
                      <div className="action-btns mt-3">
                        {/* <a href="#" className="btn secondary-solid-btn">Get Start Now</a> */}
                        <a href="contact" className="btn outline-white-btn"> <i className="fa fa-briefcase"></i> &nbsp; GET STARTED</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="col-md-8 col-lg-7 col-12">
                    <div className="hero-content-wrap text-white">
                      <h2 className="text-white head__slider">Vendor Management Services</h2>
                      {/* <p className="lead"></p> */}
                      <ul className="list-unstyled tech-feature-list text-white">
                        <li className="py-1"><span className="ti-control-forward mr-2"></span><strong>Choose</strong> the right partners for long term goals.</li>
                        <li className="py-1"><span className="ti-control-forward mr-2"></span><strong>Negotiate</strong> a win win outcome for your business.</li>
                        <div className="action-btns mt-3">
                          {/* <a href="#" className="btn secondary-solid-btn">Get Start Now</a> */}
                          <a href="contact" className="btn outline-white-btn"> <i className="fa fa-briefcase"></i> &nbsp; CONTACT US</a>
                        </div>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!--hero section end--> */}
        {/* <Hero /> */}
        {/* <!--about us section start--> */}
        <section className="about-us-section ptb-100">
          <div className="container">
            <div className="row justify-content-around">
              <div className="col-md-12 col-lg-5">
                <div className="about-content-right mb-md-4 mb-lg-0">
                  <h2 style={{ fontWeight: "100" }}><b>About</b> Elite Virtual Employee</h2> <hr className="hr__line" />
                  <p>Having consistently delivered best payroll and vendor management services since 2012, Elite Virtual Employee has helped take businesses beyond local talent and brought together thousands of remote employees for our clients from across the world and fulfilled hundreds of dreams like yours. Our global operations, based in Australia, United States and India, offer specialized remote staffing solutions that let your dream team work from home and deliver your vision seamlessly. Experience the best remote staffing agency. Experience Elite Virtual Employee.</p>
                  <div className="feature-tabs-wrap">
                    <ul className="nav nav-tabs mb-3 border-bottom-0 feature-tabs" data-tabs="tabs">
                      <li className="nav-item">
                        <a className="nav-link d-flex align-items-center active" href="#feature-tab-1" data-toggle="tab">
                          <h6 className="mb-0">Our Expertise</h6>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link d-flex align-items-center" href="#feature-tab-2" data-toggle="tab">
                          <h6 className="mb-0">More Services</h6>
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content feature-tab-content">
                      <div className="tab-pane active" id="feature-tab-1">
                        <p></p>
                        <ul className="list-unstyled tech-feature-list">
                          <li className="py-1"><span className="ti-control-forward mr-2 color-secondary"></span><strong>Web</strong> Development</li>
                          <li className="py-1"><span className="ti-control-forward mr-2 color-secondary"></span><strong>Digital </strong> Marketing </li>
                          <li className="py-1"><span className="ti-control-forward mr-2 color-secondary"></span><strong>Content </strong> Writing</li>
                          <li className="py-1"><span className="ti-control-forward mr-2 color-secondary"></span><strong>Mobile App </strong> Development</li>
                          <li className="py-1"><span className="ti-control-forward mr-2 color-secondary"></span><strong>Multimedia and</strong> Animation</li>
                          <li className="py-1"><span className="ti-control-forward mr-2 color-secondary"></span><strong>Cyber Security</strong> Services</li>
                        </ul>
                      </div>
                      <div className="tab-pane" id="feature-tab-2">
                        <ul className="list-unstyled tech-feature-list">
                          <li className="py-1"><span className="ti-control-forward mr-2 color-secondary"></span><strong>Payroll Management</strong> Services</li>
                          <li className="py-1"><span className="ti-control-forward mr-2 color-secondary"></span><strong>Legal Process </strong> Outsourcing</li>
                          <li className="py-1"><span className="ti-control-forward mr-2 color-secondary"></span><strong>Virtual  </strong> Assistant </li>
                          <li className="py-1"><span className="ti-control-forward mr-2 color-secondary"></span><strong>Vendor  </strong> Management</li>
                        </ul>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-6">
                <div style={{ background: '#ededed', borderRadius: '50px', paddingLeft: '10px' }}>
                  <div className="about-img-wrap">
                    <img src="img/about1.webp" alt="about Elite Virtual Employee" className="img-fluid shadow-sm vide__playImg" style={{ height: "500px", borderRadius: "50px" }} />
                    {/* <div className="card-img-overlay text-center">
                      <a href="https://www.youtube.com/watch?v=M9uVC3HLXko" className="popup-youtube video-play-icon color-bip shadow play__icon"><span className="ti-control-play"></span> </a>
                    </div> */}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
        {/* <!--about us section end--> */}

        <Services />
        <Achievement />
        <WhyChooseUs />
        <Testimonial />
        <Client />
        <IndustriesServe />
        <CalltoAction />



      </div>
      {/* <!--body content wrap end--> */}
      {/* main start */}
    </>
  )
}
