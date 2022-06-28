import React from "react";
import Link from 'next/link'

function CalltoAction() {
  return (
    <>
      <section className="call-to-action">
        <div className="container callto__action">
          <div className="row justify-content-around align-items-center">
            <div className="col-md-7">
              <div className="subscribe-content">
                {/* <h3 className="mb-1">LET'S GET YOUR PROJECT STARTED</h3> */}
                <h3 className="mb-1" style={{color: '#585858'}}>Hire Your Dream Team Today</h3>
              </div>
            </div>
            <div className="col-md-4">
                    <div className="action-btn text-lg-right text-sm-left">
                        <Link href="/contact"><a className="btn secondary-solid-btn">Contact Us</a></Link>
                    </div>
                </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CalltoAction;
