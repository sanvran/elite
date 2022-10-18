import React from 'react'
import Link from 'next/link'

export default function Header() {
    return (
        <header className="header">
            <nav className="navbar navbar-expand-lg fixed-top bg-transparent">
                <div className="container">
                    <a href="/" className="navbar-brand">
                        {/* <img src="img/skyhawk_kinetic_logo.png" alt="skyhawk kinetic logo" className="img-fluid my__logo" /> */}
                       <b> <h3 style={{color: '#323232'}}>Elite Virtual Employee</h3></b>
                    </a>
                    <button className="navbar-toggler my__btn" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="ti-menu"></span>
                    </button>
                    <div className="collapse navbar-collapse h-auto" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto menu">
                            <li><a href="/"> Home</a>
                            </li>
                            <li><a href="about">About Us</a></li>
                            <li><Link href="#" className="dropdown-toggle">Services</Link>
                                <ul className="sub-menu">
                                    <li><Link href="digital-marketing">Digital Marketing</Link></li>
                                    <li><Link href="#">Web Development</Link>
                                        <ul className="sub-menu">
                                        <li><Link href="full-stack-developer">Full Stack Developer</Link></li>
                                        <li><Link href="java-developer">Java Developer</Link></li>
                                        <li><Link href="wordpress-developer">Wordpress Developer</Link></li>
                                        <li><Link href="php-developer">PHP Developer</Link></li>
                                        <li><Link href="frontend-developer">Frontend Developer</Link></li>
                                        <li><Link href="angularjs-developer">AngularJS Developer</Link></li>
                                        <li><Link href="backend-developer">Backend Developer</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link href="mobile-app-development">Mobile App Development</Link></li>
                                    <li><Link href="animation-multimedia">Animation & Multimedia</Link></li>
                                    <li><Link href="content-writing">Content Writing</Link></li>
                                    <li><Link href="vendor-management">Vendor Management</Link></li>
                                    <li><Link href="payroll-management">Payroll Management</Link></li>
                                    <li><Link href="legal-process-outsourcing">Legal Process Outsourcing</Link></li>
                                    <li><Link href="virtual-assistant">Virtual Assistant</Link></li>
                                    <li><Link href="/cyber-security-services">Cyber Security Services</Link></li>
                                    
                                </ul>
                            </li>
                            <li><Link href="blogs">Blog</Link></li>
                            <li><a href="testimonials">Testimonials</a></li>
                            <li><Link href="careers">Careers</Link></li>
                            <li><Link href="contact">Contact Us</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
