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

const VirtualAssistant = () => {
   return (
      <>
         <Head>
            <title>What can Virtual Assistants do?</title>
         </Head>

         <div className="main">
            <Hero title="What can Virtual Assistants do?" imgPath="/assets/images/fullstackdev.jpeg" />

            <section style={{ padding: '25px 0px' }}>
               <div className="container">
                  <div className="row">
                     <div className="col-lg-12">
                        <section className="project-details-section">
                           <div className="container">
                              <div className="row mt-5">
                                 <div className="col-md-12">
                                    <div className="project-details-content"><h5><b>What can Virtual Assistants do?</b></h5>
                                       <p>When it comes to remote staffing for your organization, virtual assistant services often remain rather mysterious amongst clients. This has probably been so because many businesses simply haven’t had the information on how useful virtual assistants can be and in what capacity. Let’s explore this domain together and discuss some of the services in much needed detail.</p>
                                    </div><p></p>
                                    <div className="project-details-content"><h5> <b>Online marketers</b></h5>
                                       <p>Your business is thriving online and the virtual space is always live. Get your virtual assistants to engage with your community and relevant spaces so as to maintain and attract current and potential clients for your business. These skilled professionals work with the exquisite tact to imbibe your brand guidelines and act as perfect business emissaries.</p>
                                    </div> <p></p>
                                    <div className="project-details-content"><h5> <b>Data Entry Experts</b></h5>
                                       <p>No business can last so long without a proper backend channel that keeps tabs on numbers, inventory, stock and such. Data entry requires acute attention to detail and input speed that makes the organizational output run faster and more efficiently. Sooner the information gets processed, faster the future services are allotted. Hence, virtual assistants can significantly boost your business productivity.</p>
                                    </div>
                                    <p></p>
                                    <div className="project-details-content"><h5> <b>Maintenance & Support</b></h5>
                                       <p>Your services are designed to be delivered seamlessly. Yet we all hit that bump once in a while. No need to worry though because virtual assistants can be the maintenance and support staff to your clients. They can guide them through their service issues, run troubleshoots over call and be of assistance in all virtual ways. They help upkeep your clients’ faith in your business.</p>
                                    </div>
                                    <p></p>
                                    <div className="project-details-content">
                                       <h5><b>Medical Billing Experts</b></h5>
                                       <p>Healthcare industry always needs all the support it can get. Last couple of years have been particularly overwhelming for hospitals and medical professionals. Virtual assistants can manage insurance claims, invoices and payments for healthcare and medical facilities efficiently, hence ease the pressure off the administration and provide them the much needed breather.</p>
                                    </div>
                                    <p></p>
                                    <div className="project-details-content">
                                       <h5><b>Communications Executives</b></h5>
                                       <p>It isn’t rocket science anymore to know that communication is key to the success of every business. Therefore it’s imperative that all communications, both internal and external, be managed and relayed to the best standards. Virtual assistants help maintain quick and efficient communication within organization as well as with external parties. These communications could be over mails, voice calls or press releases for your business. Thus, they are capable of upholding non-essential communications on management’s behalf.</p>
                                    </div>
                                    <p></p>
                                    <div className="project-details-content">
                                       <h5><b>IT Recruiters</b></h5>
                                       <p>Your business is an ever expanding project and while it needs constant development, the process requires better cost effective efficiency. This is where virtual assistants can help you recruit the best professionals for your IT requirements. Ability to add valuable human resources to your organization is always an important asset to keep for your business.</p>
                                       <p>These were just a few of the many hats virtual assistants can wear according to the requirements of your organization. Their application to your services only makes the process better and more streamlined giving your clientele a better overall experience. While you can always try to find yourself these extraordinary professionals, we’d instead suggest you let Elite Virtual Employee hire best virtual assistants for your organization and deliver the best every single time.</p>
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

export default VirtualAssistant
