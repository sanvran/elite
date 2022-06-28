import React from 'react'
import Hero from './component/Layout/Hero'
import CalltoAction from './component/Layout/CalltoAction'


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

const ContentGrowthAffect = () => {
   return (
      <>
         <title>How do content writers affect organizational growth?</title>
         <div className="main">
            <Hero title="Content writers and organizational growth" imgPath="/assets/images/fullstackdev.jpeg" />

            <section style={{ padding: '25px 0px' }}>
               <div className="container">
                  <div className="row">
                     <div className="col-lg-12">
                        <section className="project-details-section">
                           <div className="container">
                              <div className="row mt-5">
                                 <div className="col-md-12">
                                    <div className="project-details-content"><h5><b>How do content writers affect organizational growth?</b></h5>
                                       <p>Products and services are mascots of your business. While so much is invested into earning your customers’ focus, it’s necessary that the eventual content warrants their adequate attention. Let’s talk about how content writes affect your organization.</p>
                                    </div><p></p>
                                    <div className="project-details-content"><h5><b>Only those who know can put up a good show.</b></h5>
                                       <p>Content for any organization remains an integral part of all their media. Be it your website, social platforms, newsletters or press releases, the written content needs to be genuine, feel relatable and reflect the values of your organization. Best content writers ensure the effect is always positive. The very tone and their choice of words can affect your customers’ relationship with your brand. Hence, it’s imperative to hire content writers who are intrinsically mindful and understand the current social norms and patterns well.</p>
                                    </div><p></p>
                                    <div className="project-details-content"><h5> <b>It’s all about the presentation.</b></h5>
                                       <p>Top copywriters write crisp content for your online outreach and set the tone of your organization’s marketing campaigns. Their smart concept ideations and eventual planned strategies can earn your business major accolades from across various sectors of society. Advertisements, online ads, print media, collectibles and merchandise, all speak for the ethos of your organization. Thus their effects are directly linked to your organizational growth.</p>
                                    </div> <p></p>
                                    <div className="project-details-content"><h5> <b>The devil lies in the details.</b></h5>
                                       <p>All businesses across the world require legal policies and adhere to laws and legal obligations. As a result, many top organizations choose legal process outsourcing to help them safeguard themselves against legal vulnerabilities. This is where hiring best legal transcriptionists helps since they know just how to draft company documents so as to keep the organizational interests safe. It’s something that is often overlooked but remains essential to all thriving businesses.</p>
                                    </div>
                                    <p></p>
                                    <div className="project-details-content"><h5> <b>Say yes to more visibility.</b></h5><p>In this constantly functional digital world, there are far too many companies that run out of business every second than those that make it. And those businesses that belong to the latter are, more often than not, the ones that nobody’s heard of. That’s what changes when you hire expert content writers who are expert SEO writers as well. They make sure your business content stays in relevant corridors of the internet while those who need your services online find you relatively sooner than your competition. That right there is the basic idea of organizational growth alright.</p>
                                    <p>All the above mentioned sections are applicable to most businesses. They’re absolutely necessary and play a significant role in the development of successful business organizations. Needless to say, content writers greatly affect your organizational growth. Of course you could always look for such talented writers yourself or you could simply let Elite Virtual Employee hire top content writers for you.</p>
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

export default ContentGrowthAffect
