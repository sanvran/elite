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

const PythonFuture = () => {
   return (
      <>
         <title>How digital marketing contributes to better optics?</title>
         <div className="main">
            <Hero title="Digital marketing leads to better optics?" imgPath="/assets/images/fullstackdev.jpeg" />

            <section style={{ padding: '25px 0px' }}>
               <div className="container">
                  <div className="row">
                     <div className="col-lg-12">
                        <section className="project-details-section">
                           <div className="container">
                              <div className="row mt-5">
                                 <div className="col-md-12">
                                    <div className="project-details-content"><h5><b>How digital marketing contributes to better optics?</b></h5>
                                       <p>The world has gotten much smaller thanks to the high speed online connectivity in most parts of the world. The Internet has not only become a boon for our civilization but also a tool for social change. People have easy access to share their stories with the world and influence perceptions oceans away. Hence in this day and age of constant digital feedback, let’s explore how your organizational optics need best digital marketing.</p>
                                    </div><p></p>
                                    <div className="project-details-content"><h5><b>Boost your online credibility.</b></h5>
                                       <p>Statistically speaking, the larger section of our society today is not only looking for products and services online but also comparing them at the same time. Therefore your organization’s presence and visibility becomes a major factor for your business and credibility. Your company popping up on online searches, your social media on their explorer page and targeted online ads to your potential customers keep your name in their mind and add greatly to your brand recognition. And all this can be achieved and optimized by top digital marketers doing exactly what they do best.</p>
                                    </div><p></p>
                                    <div className="project-details-content"><h5> <b>Maximize your digital PR.</b></h5>
                                       <p>There are numerous causes that you and your organization deeply care about, and so do your customers. Hence it only makes your community much happier when they feel a connection to your company ethos and gives them more reasons to ally and celebrate with you. Your online reach via website and social media and other online platforms helps bring your goodwill the appreciation it deserves by letting those who care see your organization beyond your commercial services. This is what hiring dedicated digital marketing does for your organization’s positive optics.</p>
                                    </div> <p></p>
                                    <div className="project-details-content"><h5> <b>Be relevant and ever-present.</b></h5>
                                       <p>The internet is a lively place, isn’t it? New memes and trends every other day. Pop culture has always influenced what your audience likes and it fluctuates and changes rampantly. But organizations with talented digital marketers stay one step ahead and utilize these opportunities to connect with more potential customers and sometimes even engage in friendly banter with other organizations. This keeps your business in a light-hearted positivity amongst your audience and sends out good vibes.</p>
                                    </div> <p></p>
                                    <div className="project-details-content"><h5> <b>Always serve a more personalized approach.</b></h5>
                                       <p>Once online, your business runs 24/7. You may say your services aren’t active certain hours but your audience always is. They see your work, analyze what your content says, read news about your business and judge your stand on social and environmental issues. Hence it’s important your organization’s stand is positively ambiguous if not outright supportive. Experienced digital marketing teams help navigate through these difficult waters by ensuring your customers always receive genuine, heartfelt responses to every question, query and feedback.</p>
                                       <p>Therefore, a team of talented digital marketers can benefit your organization’s optics greatly and ensure your business is viewed just as you wish it to be. For best digital marketing for your company, reach out to us and open doors to new possibilities. Experience excellence, experience Elite Virtual Employee.</p>
                                    </div>  
                                   
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

export default PythonFuture
