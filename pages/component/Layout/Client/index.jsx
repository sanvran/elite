import React from 'react'
import Image from 'next/image'

function Client() {
   return (
      <>
         {/* <!--client section start--> */}
         <div className="client-section ptb-100 my__cleint">
            <div className="container">
            <div className="row justify-content-center">
                  <div className="col-md-8">
                     <div className="section-heading text-center mb-5">
                        <h2 style={{ fontWeight: "100" }}><b>Our</b> Clients </h2>
                        <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', alignContent: 'center' }}><hr className="hr__line" /></div>
                        <p className="lead" style={{ fontSize: '17px' }}>
                        Our growth has been exponential only because our clients have trusted us so much. We strive for the best and hence these are just a few amongst many who believe in the same.
                        </p>
                     </div>
                  </div>
               </div>
               {/* <!--clients logo start--> */}
               <div className="row align-items-center">
                  <div className="col-md-12">
                     <div className="owl-carousel owl-theme clients-carousel dot-indicator">
                        <div className="item single-client our__client">
                           <Image src="/assets/images/client/skyhawk_security.png" alt="Skyhawk Security" width="84px" height="40px" className="client-img"/>
                        </div>
                        <div className="item single-client our__client">
                           <Image src="/assets/images/client/auto_chemistry.png" width="84px" height="40px" alt="Auto chemistry" className="client-img"/>
                        </div>
                        <div className="item single-client our__client">
                           <img src="/assets/images/client/team_before_self.webp" alt="Team before self" className="client-img"/>
                        </div>
                        <div className="item single-client our__client">
                           <img src="/assets/images/client/the.png" alt="The valut corporation" className="client-img"/>
                        </div>
                        <div className="item single-client our__client">
                           <img src="/assets/images/client/puppiesdownunder.png" alt="The valut corporation" className="client-img"/>
                        </div>
                     </div>
                  </div>
               </div>
               {/* <!--clients logo end--> */}
            </div>
         </div>
        {/* / <!--client section start--> */}
      </>
   )
}

export default Client
