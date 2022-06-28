import React from 'react'
import Hero from './component/Layout/Hero'
import CalltoAction from './component/Layout/CalltoAction'
import Head from 'next/head'


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

const HireWebDev = () => {
   return (
      <>
         <Head>
         <title>How to hire the right website developer</title>
         </Head>
         <div className="main">
            <Hero title="Hire right web developer" imgPath="/assets/images/fullstackdev.jpeg" />

            <section style={{ padding: '25px 0px' }}>
               <div className="container">
                  <div className="row">
                     <div className="col-lg-12">
                        <section className="project-details-section">
                           <div className="container">
                              <div className="row mt-5">
                                 <div className="col-md-12">
                                    <div className="project-details-content"><h5><b>How to hire the right website developer?</b></h5>
                                       <p>The importance of the online presence of your business can never be overvalued. And since most often the website becomes your clients’ first point of contact with your services, it’s imperative that it emulates your heart-warming welcome. To achieve this subtle expertise, let’s go over some key tips for hiring website developer.</p>
                                    </div><p></p>
                                    <div className="project-details-content"><h5><b>What do they know?</b></h5>
                                       <p>Your business needs to be online and websites have a world of their own. This is where an experienced web developer knows and can explain in detail what platform will suit your business best and is well versed to provide you various options to work with. Their right skill set not only makes it easier to integrate your requirements faster but also gives you width to explore options you hadn’t considered. Hence your web developer’s experience becomes your sharpest asset.</p>
                                    </div><p></p>
                                    <div className="project-details-content"><h5> <b>What have they done?</b></h5>
                                       <p>Your business deserves smart investments and to make sure you choose the web developer best suited to your requirements, always request a professional portfolio. See the previous websites they’ve created, the tools and platforms they’ve worked with and whether they’ve associated with businesses similar to yours. This exercise not only gives you a glimpse into your website developer’s proficiencies but also help you gauge your expectations for the finished product.</p>
                                    </div> <p></p>
                                    <div className="project-details-content"><h5> <b>What do they understand?</b></h5>
                                       <p>Your business could have a fantastic idea and the web developer could be an expert with the tools and platforms that’ll suit you best, but none of it will really work seamlessly unless they bridge the gap between the two. It’s your website developer’s job to communicate a design language that matches yours. You deserve the website that you truly desire. And for that to happen, comprehension of your ideas is key. Moreover, it helps if they’ve worked on similar assignments before as it gives them a familiar perspective.</p>
                                    </div> <p></p>
                                    <div className="project-details-content"><h5> <b>What do their clients say?</b></h5>
                                       <p>Everyone applies for work with neat bows and rainbows. While most professionals have the perfect pitch upfront, always take them up on their references. Request their former clients for an honest feedback. Discuss in detail whether or not the web developer provided them a favourable outcome, understood their assignments well and most importantly, met their deadlines regularly. These are relevant and important questions. You can’t juggle between explaining your ideas repeatedly and waiting on them beyond deadlines while running your business.</p>
                                    </div>
                                    <p></p>
                                    <div className="project-details-content"><h5> <b>Do they know SEO and Social Media Integration?</b></h5><p>Your business could have the best services but still, due to lack of visibility, it could go under. Ensure not getting enough eyeballs is never a reason for your business to suffer. Let your web developer take care of it all using meta-tags and other Search Engine Optimization tools to help your website rise higher on that search engine index. Needless to say, social media is the new PR. It’s your online catalogue, your community outreach. Hence it’s essential that all your social media handles are neatly connected to your website providing a holistic approach to your business.</p>
                                    </div>
                                    <p></p>
                                    <div className="project-details-content">
                                       <h5><b>Will your content be their priority?</b></h5>
                                       <p>Often the focus on designing the perfect functional tools and layouts leads to content placement taking a backseat. Your website developer must make sure their layout caters seamlessly to your content without compromising on its quality and not the other way around.</p>
                                    </div>
                                    <p></p>
                                    <div className="project-details-content">
                                       <h5><b>What will they deliver and by when?</b></h5>
                                       <p>As important as your website shall be, you must discuss certain aspects of the process with your website designer well in advance. Request a clear list of deliverables that will be provided against your investment. Like every other project, insist on establishing a timeline and discuss deadlines so as to gauge progress regularly. Also, ask about complimentary iterations and alterations they’d provide you with. Your website developer should help you allocate the budget accordingly and try their best to not exceed the same.</p>
                                    </div>
                                    <p></p>
                                    <div className="project-details-content">
                                       <h5><b>Will they go that extra mile?</b></h5>
                                       <p>A number of things can change and develop throughout the process of website development. But a good website developer always stays a step ahead and offers insight and help whenever required. Layouts, functionality and overall productivity of the website depends upon how proactive, mindful and intuitive your web developers is as an individual. It can greatly effect and positively enhance their final output.</p>
                                    </div><p></p>
                                    <div className="project-details-content">
                                       <h5><b>What will you own?</b></h5>
                                       <p>Although most web developers handover all intellectual property rights to your website, it doesn’t hurt to discuss this beforehand lest it becomes an issue after. Complete ownership of your website is essential in case you pitch for capital investment or eventually wish to sell your business. And since neither can be achieved without absolute control of your website, ensure that you own intellectual property rights to the same. </p>
                                       <p>Indeed it’s a rigorous process to get yourself the best web developer for your project. But while you could keep in mind all our suggested points and do it all yourself or you could just entrust Elite Virtual Employee with your dreams and let us take care of it as our own. Easy choice, right?</p>
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

export default HireWebDev
