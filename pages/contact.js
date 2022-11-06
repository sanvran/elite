import React, { useState } from 'react'
import Head from 'next/head'
const contact = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [mobile, setMobile] = useState('')
	const [message, setMessage] = useState('')
	const [submitted, setSubmitted] = useState(false)

	const handleSubmit = (e) => {
		e.preventDefault()

		if (name === '' || email === '' || mobile === '') {
			alert('Star (*) field is mandatory')
		} else {
			let data = {
				name,
				email,
				mobile,
				message
			}
			fetch('/api/contactus', {
				method: 'POST',
				headers: {
					'Accept': 'application/json, text/plain, */*',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(data)
			}).then((res) => {
				alert('Thank you for reaching out to us. Our team will be in touch soon.')
				console.log('Response received')
				if (res.status === 200) {
					console.log('Response succeeded!')
					setSubmitted(true)
					setName('')
					setEmail('')
					setMobile('')
					setMessage('')
				}
			})
		}
	};
	return (
		<>
			{/*body content wrap start*/}
			<div className="main">
				<Head>
					<title>Talent Cloud Solutions | Best Software Developers | Contact Us</title>
					<meta name="description" content="Top organizations from across the world outsourcing to India and save 70% on hiring costs. Hire best remote staffing solutions, vendor management and payroll services from the best offshore staffing agency. Experience excellence, experience Elite Virtual Employee." />
				</Head>
				{/*header section start*/}
				<section className="hero-section ptb-100 gradient-overlay" style={{ background: 'url("/assets/images/contact_bg.jpg")no-repeat center center / cover' }}>
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-md-8 col-lg-7">
								<div className="page-header-content text-white text-center pt-sm-5 pt-md-5 pt-lg-0">
									<h1 className="text-white mb-0">Contact Us</h1>
									<div className="custom-breadcrumb">
										<ol className="breadcrumb d-inline-block bg-transparent list-inline py-0">
											<li className="list-inline-item breadcrumb-item"><a href="/">Home</a></li>
											<li className="list-inline-item breadcrumb-item active">Contact Us</li>
										</ol>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/*header section end*/}
				{/*contact us promo start*/}
				<section className="contact-us-promo pt-100">
					<div className="container">
						<div className="row">
							<div className="col-lg-3 col-md-6 col-sm-6">
								<div className="card single-promo-card single-promo-hover text-center shadow-sm">
									<div className="card-body py-5">
										<div className="pb-2">
											<span className="ti-mobile icon-sm color-secondary" />
										</div>
										<a href="mailto:hr@elitevirtualemployee.com"><div><h5 className="mb-0">Join us</h5>
											<p className="text-muted mb-0">hr@elitevirtualemployee.com</p>
										</div></a>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 col-sm-6">
								<div className="card single-promo-card single-promo-hover text-center shadow-sm">
									<div className="card-body py-5">
										<div className="pb-2">
											<span className="ti-location-pin icon-sm color-secondary" />
										</div>
										<div><h5 className="mb-0">Elite Virtual Employee LLC</h5>
											<p className="text-muted mb-0">2055 Limestone Rd STE 200-C Wilmington, DE 19808, USA</p></div>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 col-sm-6">
								<div className="card single-promo-card single-promo-hover text-center shadow-sm">
									<div className="card-body py-5">
										<div className="pb-2">
											<span className="ti-email icon-sm color-secondary" />
										</div>
										<div><h5 className="mb-0">Mail us</h5>
											<p className="text-muted mb-0"><a href="mailto:info@elitevirtualemployee.com">info@elitevirtualemployee.com</a></p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 col-sm-6">
								<div className="card single-promo-card single-promo-hover text-center shadow-sm">
									<div className="card-body py-5">
										<div className="pb-2">
											<span className="ti-headphone-alt icon-sm color-secondary" />
										</div>
										<div><h5 className="mb-0">Live chat</h5>
											<p className="text-muted mb-0">Chat with Us 24/7</p></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/*contact us promo end*/}
				{/*contact us section start*/}
				<section className="contact-us-section ptb-100">
					<div className="container">
						<div className="row justify-content-around">
							<div className="col-md-6">
								<div className="contact-us-form gray-light-bg rounded p-5">
									<h4>Ready to get started?</h4>
									<form action="#" method="POST" id="contactForm1" className="contact-us-form" noValidate="novalidate">
										<div className="form-row">
											<div className="col-12">
												<div className="form-group">
													<input type="text" onChange={(e) => { setName(e.target.value) }} className="form-control" name="name" placeholder="Enter name" required="required" />
												</div>
											</div>
											<div className="col-12">
												<div className="form-group">
													<input type="email" onChange={(e) => { setEmail(e.target.value) }} className="form-control" name="email" placeholder="Enter email" required="required" />
												</div>
											</div>
											<div className="col-12">
												<div className="form-group">
													<input type="number" onChange={(e) => { setMobile(e.target.value) }} className="form-control" name="mobile" placeholder="Enter mobile number" required="required" />
												</div>
											</div>
											<div className="col-12">
												<div className="form-group">
													<textarea name="message" onChange={(e) => { setMessage(e.target.value) }} id="message" className="form-control" rows={7} cols={25} placeholder="Requirement" defaultValue={""} />
												</div>
											</div>
											<div className="col-sm-12 mt-3">
												<input type="submit" onClick={(e) => { handleSubmit(e) }} className="btn secondary-solid-btn" id="btnContactUs" value="Send Message" />
											</div>
										</div>
									</form>
								</div>
							</div>
							<div className="col-md-5">
								<div className="contact-us-content">
									<h2>Global presence</h2>
									<div className="col-lg-12 col-md-12 col-sm-12">
										<div className="card single-promo-card single-promo-hover text-center shadow-sm">
											<div className="card-body py-5">
												<div className="pb-2">
													<span className="ti-mobile icon-sm color-secondary" />
												</div>
												<a href="tel:+1-5405841911">
													<div><h5 className="mb-0">USA office</h5>
														<p className="text-muted mb-0">+1-5405841911</p>
													</div>
												</a>
											</div>
										</div>
									</div>


									<div className="col-lg-12 col-md-12 col-sm-12">
										<div className="card single-promo-card single-promo-hover text-center shadow-sm">
											<div className="card-body py-5">
												<div className="pb-2">
													<span className="ti-mobile icon-sm color-secondary" />
												</div>
												<a href="tel:+1-8339310123">
													<div><h5 className="mb-0">Canada office</h5>
														<p className="text-muted mb-0">+1-8339310123</p>
													</div>
												</a>
											</div>
										</div>
									</div>


									<br />

								</div>
							</div>
						</div>
					</div>
				</section>
				{/*contact us section end*/}
				{/*google map block start*/}
				{/* <div className="google-map">
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.309584628198!2d77.32953591452203!3d28.59048799273462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5ec1a73cea7%3A0x6535d3afa23f0051!2sSkyhawk%20Kinetic%20Remote%20Staffing!5e0!3m2!1sen!2sin!4v1634040876629!5m2!1sen!2sin" height={450} style={{ border: 0 }} allowFullScreen />
				</div> */}
				{/*google map block end*/}
			</div>
			{/*body content wrap end*/}

		</>
	)
}

export default contact
