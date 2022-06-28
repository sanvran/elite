import React from 'react'
import Hero from './component/Layout/Hero'
import CalltoAction from './component/Layout/CalltoAction'
import Head from "next/head"


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

const AnimationMultimediaIndustries = () => {
	return (
		<>
			<Head>
				<title>Rise of Animation and Multimedia across industries.</title>
			</Head>
			<div className="main">
				<Hero title="Animation & Multimedia across industries" imgPath="/assets/images/fullstackdev.jpeg" />

				<section style={{ padding: '25px 0px' }}>
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<section className="project-details-section">
									<div className="container">
										<div className="row mt-5">
											<div className="col-md-12">
												<div className="project-details-content"><h5><b>Rise of Animation and Multimedia across industries</b></h5>
													<p>Reaching your potential clientele now depends upon your presence in their digital consumption. When some people found it odd how two words, vastly associated with cartoons and entertainment respectively, could become of any use in their business place, global leaders stayed ahead of the curve and knew exactly how potent a tool Animation and Multimedia would become in the coming years. Let’s see how.</p>
												</div><p></p>
												<div className="project-details-content"><h5><b>Better branding, better identity.</b></h5>
													<p>Your business deserves an identity of its own. With your competition always being so fierce, the identity must stand out lest it gets drowned in the vast number of similar looking options. Thus, hiring best multimedia professionals becomes a priority for your survival. Your organization’s definitive and unique brand identity not only adds a recall value to your products and services amongst customers but also generates an aspirational value amongst brand enthusiasts and potential clientele. It further gives your business an edge against your competition. Branding is a process that inculcates your organizational ethos and reflects them in visual aids for your customers. Your brand identity includes, but is not limited to, your logo design, business card, brochure, letterhead and web design while following well-defined brand guidelines. This subtle art adds immense value to your firm and wouldn’t have been possible without multimedia experts.</p>
												</div><p></p>
												<div className="project-details-content"><h5> <b>Elevator pitches that last longer.</b></h5>
													<p>Your business is clear in your head. But to convey the same to any client or investor in a limited span of time takes smart marketing collateral. Top video animators convert your business ideas into motions on a screen and make your pitch visually engrossing. They encapsulate the entirety of your ideas into a neat, informative video that’s short and crisp explaining your business to your audience. But what if your audience just happens to run into your ads online? This is when intelligent graphics on your online ads convey precise information as well as be aesthetically attractive following all your brand guidelines perfectly. Small informative posts or pop ups that catch your potential clients’ attention while they lurk on the internet can take your business really far in terms of expanding your reach and audience. Again, thanks to top animators and multimedia professionals.</p>
												</div> <p></p>
												<div className="project-details-content"><h5> <b>Tactile tangibility always wins.</b></h5>
													<p>Your products sound fantastic and seem amazing. But what if an actual life size model could be presented to your audience? Visual designers and 3D modellers virtually breathe life into your projects by turning your 2D blueprints into 3D models. Life-like physical mockups that imitate the actual prototype help solidify your product launch and instil faith in investors and customers alike. In addition to their life size applications, visual design experts also present architectural walkthrough videos and compressed real estate mockups that make a much greater impact on potential clients than still images could ever do. Thus, animation and multimedia truly captures the imagination of your audience for your business.</p>
												</div>
												<p></p>
												<div className="project-details-content"><h5> <b>Tap their subconscious.</b></h5><p>Indeed always a tough job but the best web designers know exactly how to navigate the attention of your potential customers when they visit your website. The placement of content and images, the colors used need insight to direct your visitor’s attention flow. This is what top web designers define best. The resultant website hence doesn’t seem pushy and yet achieves its objective of getting your clients to click your call to action. More intrigue creates more opportunities for your business.</p>
													<p>All the above mentioned sections are applicable to most businesses. They’re absolutely necessary and play a significant role in the development of successful business organizations. Needless to say, content writers greatly affect your organizational growth. Of course you could always look for such talented writers yourself or you could simply let Elite Virtual Employee hire top content writers for you.</p>
												</div><p></p>
												<div className="project-details-content"><h5> <b>Significantly lower cost alternative.</b></h5><p>When best multimedia professionals deliver on your requirements, their work reaches far more potential clients and untapped target audiences for you than conventional advertisements in print media, out of home advertisements or other conventional ways would ever have for the same cost.</p>
													<p>Thus, animation and multimedia have a major stake in an ever digitally advancing world and are primed to rise further and beyond. Our animation and multimedia team at Elite Virtual Employee yearns to give your business the excitement it deserves so that you eventually get the clientele you deserve.</p>
												</div>
												<p></p>
											</div>
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

export default AnimationMultimediaIndustries
