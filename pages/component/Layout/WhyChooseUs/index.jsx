import React from "react";

function WhyChooseUs() {
    return (
        <>
            <section className="services__whychoose">
                <div className="container">
                    <div className="row whychoose__sec">
                        <div className="col-md-12">
                            <h3>Why Choose Us</h3>
                            <hr className="hr__line" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col__secLeft">
                            <h3 style={{ color: '#3e3e3e' }}><span style={{ color: '#f17a40' }}><b>100+</b></span> skills available</h3>
                            <p> Our experts learn your business better to provide you exactly what you need. Get bespoke plans and services that cater specifically to your business requirements! </p>
                            <li className="py-1"><span className="ti-control-forward mr-2"></span><strong>360 staffing</strong> process for all your needs.</li>
                            <li className="py-1"><span className="ti-control-forward mr-2"></span><strong>Hire virtual</strong> professionals within hours.</li>
                            <li className="py-1"><span className="ti-control-forward mr-2"></span><strong>Save upto 70% </strong> on your hiring process.</li>

                            <a href="contact"><button className='services__button card__effect'>Hire Now &nbsp;&nbsp; <i className="fa fa-arrow-right"></i> </button></a>

                        </div>
                        <div className="col-md-6">
                            <img src="/assets/images/Servicess.jpg" className="img-responsive why__chooseImg" alt="Hire now" />

                        </div>
                    </div>
                </div>

            </section>
            {/* sec2 */}
            <section className="promo-block py-2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-lg-4 py-2">
                            <div className="single-promo-block promo-hover-bg-1 hover-image shadow-lg p-4 rounded">
                                <div className="promo-block-icon mb-3">
                                    <span className="ti-vector icon-md color-primary"></span>
                                </div>
                                <div className="promo-block-content">
                                    <h5>Tried and tested</h5>
                                    <p>All our professionals have repeatedly delivered the best. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4 py-2">
                            <div className="single-promo-block promo-hover-bg-2 hover-image shadow-lg p-4 rounded">
                                <div className="promo-block-icon mb-3">
                                    <span className="ti-lock icon-md color-primary"></span>
                                </div>
                                <div className="promo-block-content">
                                    <h5>Hire ASAP</h5>
                                    <p>Hire experienced employees for you within a matter of hours.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4 py-2">
                            <div className="single-promo-block promo-hover-bg-3 hover-image shadow-lg p-4 rounded">
                                <div className="promo-block-icon mb-3">
                                    <span className="ti-cloud icon-md color-primary"></span>
                                </div>
                                <div className="promo-block-content">
                                    <h5>Constant support</h5>
                                    <p>Regular updates and smoother communication throughout.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4 py-2">
                            <div className="single-promo-block promo-hover-bg-3 hover-image shadow-lg p-4 rounded">
                                <div className="promo-block-icon mb-3">
                                    <span className="ti-bar-chart-alt icon-md color-primary"></span>
                                </div>
                                <div className="promo-block-content">
                                    <h5>Outsource to us</h5>
                                    <p>Save upto 70% cost on your hiring process and let our professionals work their magic.</p>
                                </div>
                            </div>
                        </div><div className="col-md-4 col-lg-4 py-2">
                            <div className="single-promo-block promo-hover-bg-3 hover-image shadow-lg p-4 rounded">
                                <div className="promo-block-icon mb-3">
                                    <span className="ti-receipt icon-md color-primary"></span>
                                </div>
                                <div className="promo-block-content">
                                    <h5>Remote work made easy</h5>
                                    <p>Timezone-matched for easy communication for your work</p>
                                </div>
                            </div>
                        </div><div className="col-md-4 col-lg-4 py-2">
                            <div className="single-promo-block promo-hover-bg-3 hover-image shadow-lg p-4 rounded">
                                <div className="promo-block-icon mb-3">
                                    <span className="ti-credit-card icon-md color-primary"></span>
                                </div>
                                <div className="promo-block-content">
                                    <h5>Zero risk</h5>
                                    <p>If you decide to stop within a week, you pay nothing.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* sec2 */}

        </>
    );
}

export default WhyChooseUs;
