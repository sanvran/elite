import React from 'react'

function Achievement() {
   return (
      <>
         {/* <!--counter section start--> */}
         <section className="call-to-action ptb-100 gradient-overlay" style={{ background: "url('img/slider-img-3.webp')no-repeat top center / cover fixed" }}
         >
            <div className="container">
               <div className="row justify-content-center">
                  <div className="col-md-8 col-lg-8">
                     <div className="call-to-action-content text-white text-center mb-4">
                        <h2 className="text-white mb-1" style={{ fontWeight: '100' }}><b>Our</b> Achievements</h2>
                        <p className="lead">You can’t wait to start your project and neither can we! In few simple steps, begin your remote staffing process with us, fast-track your success and let Elite Virtual Employee put together the dream team for your business.</p>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-md-6 col-lg-4">
                     <div className="single-counter rounded p-4 text-center text-white">
                        <span className="ti-medall-alt icon-md"></span>
                        <h3 className="mb-0 text-white">1123</h3>
                        <p>Active Projects</p>
                     </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                     <div className="single-counter rounded p-4 text-center text-white">
                        <span className="ti-headphone-alt icon-md"></span>
                        <h3 className="mb-0 text-white">867</h3>
                        <p>Global clients</p>
                     </div>
                  </div>
                  
                  <div className="col-md-6 col-lg-4">
                     <div className="single-counter rounded p-4 text-center text-white">
                        <span className="ti-user icon-md"></span>
                        <h3 className="mb-0 text-white">22</h3>
                        <p>Countries</p>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         {/* <!--counter section end--> */}

         {/* <!--our work process section start--> */}
         <section className="work-process-new ptb-100 gray-light-bg">
            <div className="container">
               <div className="row">
                  <div className="col-md-8 col-lg-8">
                     <div className="section-heading mb-5">
                        <h2>Get Onboard</h2> <hr className="hr__line"/>
                        <p className="lead">Top businesses outsource to India and reap major benefits of hiring best remote professionals. Your business can do the same and grow so much more.</p>
                     </div>
                  </div>
               </div>
               <div className="row get__onBoard">
                  <div className="col-md-12">
                     <div className="work-process-wrap">
                        <div className="single-work-process">
                           <div className="work-process-icon-wrap primary-bg rounded">
                              <i className="ti-vector icon-md text-white"></i>
                              <span className="process-step white-bg color-primary shadow-sm">1</span>
                           </div>
                           <span className="work-process-divider"></span>
                           <div className="work-process-content mt-4">
                              <h5>Send In Your Query</h5>
                              <p>Elite Virtual Employee aims to streamline and navigate your remote staffing requirements.  </p>
                           </div>
                        </div>
                        <div className="single-work-process">
                           <div className="work-process-icon-wrap primary-bg rounded">
                              <i className="ti-layout-list-thumb icon-md text-white"></i>
                              <span className="process-step white-bg color-primary shadow-sm">2</span>
                           </div>
                           <span className="work-process-divider"></span>
                           <div className="work-process-content mt-4">
                              <h5>Handpick Your Team</h5>
                              <p>Amongst our chosen prospects, we share their CVs with your organization to interact further. </p>
                           </div>
                        </div>
                        <div className="single-work-process">
                           <div className="work-process-icon-wrap primary-bg rounded">
                              <i className="ti-palette icon-md text-white"></i>
                              <span className="process-step white-bg color-primary shadow-sm">3</span>
                           </div>
                           <span className="work-process-divider"></span>
                           <div className="work-process-content mt-4">
                              <h5>Hire Within 6 Hours</h5>
                              <p>Our chosen talents check all your required boxes. Get your dream team efficiently within 6 hours.</p>
                           </div>
                        </div>
                        <div className="single-work-process">
                           <div className="work-process-icon-wrap primary-bg rounded">
                              <i className="ti-cup icon-md text-white"></i>
                              <span className="process-step white-bg color-primary shadow-sm">4</span>
                           </div>
                           <span className="work-process-divider"></span>
                           <div className="work-process-content mt-4">
                              <h5>Stay Connected</h5>
                              <p>Our support team provides smoother communication and ensures timeline efficiency.</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         {/* <!--our work process section end--> */}

      </>
   )
}

export default Achievement
