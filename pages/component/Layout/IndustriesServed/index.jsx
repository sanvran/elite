import React from "react";


const IndustrieServed = ({tag, imgSrc, altTag}) => {
  return (
    <div className="col-md-4">
      <div className="single-blog-card card border-0 shadow-sm card__effect">
        <span className="category position-absolute badge badge-pill badge-primary">
          {tag}
        </span>
        <img
          src={imgSrc} className="card-img-top position-relative" alt={altTag}
        />
        {/* <div className="card-body">
                  <h3 className="h5 mb-2 card-title"><a href="#"></a></h3>
                  <p className="card-text"></p>
                  <a href="#" className="detail-link">Read more <span className="ti-arrow-right"></span></a>
              </div> */}
      </div>
    </div>
  );
};

function IndustriesServe() {
  return (
    <>
      <section className="our-blog-section ptb-100 gray-light-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="section-heading mb-5">
                <h2 style={{ fontWeight: "100" }}>
                  <b>Industries</b> We’ve Served
                </h2>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    flexWrap: "wrap",
                    alignContent: "center",
                  }}
                >
                  <hr className="hr__line" />
                </div>
                <p className="lead" style={{ fontSize: "17px" }}>
                  Due to our remote staffing expertise and impeccable track
                  record, Elite Virtual Employee has had the privilege to work across
                  industries in varying capacity delivering our best every
                  single time.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <IndustrieServed imgSrc='/assets/images/industries/ecom.jpg' tag='E-commerce' altTag='e-commerce' />
            <IndustrieServed imgSrc='/assets/images/industries/real.jpg' tag='Real estate' altTag='Real estate' />
            <IndustrieServed imgSrc='/assets/images/industries/insurance.jpg' tag='Insurance' altTag='Insurance' />
            <IndustrieServed imgSrc='/assets/images/industries/pub.jpg' tag='Publishing' altTag='Publishing' />
            <IndustrieServed imgSrc='/assets/images/industries/tour.webp' tag='Tour & Travels' altTag='Tour & Travels' />
            <IndustrieServed imgSrc='/assets/images/industries/sport.jpg' tag='Sports' altTag='Sports' />
          </div>
        </div>
      </section>
    </>
  );
}

export default IndustriesServe;
