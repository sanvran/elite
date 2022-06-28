import React from 'react'

export default function Footer() {
    return (
        <footer className="footer-section">
            <div className="footer-top gradient-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="row footer-top-wrap">
                                <div className="col-md-3 col-sm-6">
                                    <div className="footer-nav-wrap text-white">
                                        <h4 className="text-white">COMPANY</h4> <hr className="hr__line"/>
                                        <ul className="nav flex-column">
                                            <li className="nav-item">
                                                <a className="nav-link" href="about">About Us</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="/careers">Careers</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="privacy-policy">Privacy Policy</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="terms-of-service">Terms of Service</a>
                                            </li>
                    
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <div className="footer-nav-wrap text-white">
                                        <h4 className="text-white">SERVICES</h4> <hr className="hr__line"/>
                                        <ul className="nav flex-column">
                                            <li className="nav-item">
                                                <a className="nav-link" href="/services">Remote Staffing</a>
                                            </li>
                                           
                                            <li className="nav-item">
                                                <a className="nav-link" href="/vendor-management">Vendor Management</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="/payroll-management">Payroll Services</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="/legal-process-outsourcing">Legal Process Outsourcing </a>
                                            </li>
                                        </ul>

                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <div className="footer-nav-wrap text-white">
                                        <h4 className="text-white">QUICK LINKS</h4> <hr className="hr__line"/>
                                        <ul className="nav flex-column">
                                            <li className="nav-item">
                                                <a className="nav-link" href="/contact">Contact Us</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="/testimonials">Testimonials</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="https://skyhawksecurity.in/">Skyhawk Security</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="/blogs">Blog</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <div className="footer-nav-wrap text-white">
                                        <h4 className="text-white">OFFICE</h4> <hr className="hr__line"/>
                                        <ul className="nav flex-column">
                                            <li className="nav-item>">
                                                <a className="nav-link">ELITE VIRTUAL EMPLOYEE, 2055 LIMESTONE RD STE 200-C WILMINGTON, DE 19808, USA</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="row footer-top-wrap">
                                <div className="col-12">
                                    <div className="footer-nav-wrap text-white">
                                        <h4 className="text-white">GET IN TOUCH</h4> <hr className="hr__line"/>
                                        <ul className="get-in-touch-list">
                                            {/* <li className="d-flex align-items-center py-2"><span className="fas fa-map-marker-alt mr-2"></span> D336,  Sector 10, Noida, Uttar Pradesh 201301</li> */}
                                            <a href="mailto:info@elitevirtualemployee.com" className="footer__link"><li className="d-flex align-items-center py-2"><span className="fas fa-envelope mr-2"></span> info@elitevirtualemployee.com</li></a>
                                            <a href="tel:+61880041911" className="footer__link"><li className="d-flex align-items-center py-2"><span className="fas fa-phone-alt mr-2"></span>Australia +61880041911</li></a>
                                            <a href="tel:+15405841911" className="footer__link"><li className="d-flex align-items-center py-2"><span className="fas fa-phone-alt mr-2"></span>USA +15405841911</li></a>
                                            <a href="tel:+448081966911" className="footer__link"><li className="d-flex align-items-center py-2"><span className="fas fa-phone-alt mr-2"></span>UK +448081966911</li></a>
                                            <a href="tel:+18339310123" className="footer__link"><li className="d-flex align-items-center py-2"><span className="fas fa-phone-alt mr-2"></span>Canada +18339310123</li></a>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
            <div className="footer-bottom gray-light-bg py-2" style={{background: "#054B7D"}}>
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-md-5 col-lg-5">
                            <p className="copyright-text pb-0 mb-0">Copyright © 2021 Elite Virtual Employee | All rights reserved.
                                <a href="#" target="_blank"></a></p>
                        </div>
                        <div className="col-md-7 col-lg-6 d-none d-md-block d-lg-block">
                            <div className="social-nav text-right">
                                <ul className="list-unstyled social-list mb-0">
                                    <li className="list-inline-item tooltip-hover">
                                        <a href="https://www.facebook.com/remotestaffingservice/" style={{color: "#fff"}} className="rounded"><span className="ti-facebook"></span></a>
                                        <div className="tooltip-item">Facebook</div>
                                    </li>
                                    <li className="list-inline-item tooltip-hover">
                                        <a href="https://www.youtube.com/channel/UCUtGoPv7ixWEk9J0Eu0uiPQ" className="rounded" style={{color: "#fff"}}><span className="ti-youtube"></span></a>
                                        <div className="tooltip-item">Youtube</div>
                                    </li>
                                    <li className="list-inline-item tooltip-hover">
                                        <a href="https://in.linkedin.com/company/remotestaffingservice" className="rounded" style={{color: "#fff"}}><span className="ti-linkedin"></span></a>
                                        <div className="tooltip-item">Linkedin</div>
                                    </li>
                                    <li className="list-inline-item tooltip-hover">
                                        <a href="https://www.instagram.com/skyhawkkinetic/?hl=en" className="rounded" style={{color: "#fff"}}><span className="ti-instagram"></span></a>
                                        <div className="tooltip-item">Instagram</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
