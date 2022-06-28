import React from "react";

export const MyServicesCard = (props) => {
  return (
    <div className="col-md-6 col-lg-4">
      <a href={props.urlPath}>
        <div className="feature-feature-list p-4 text-center card__effect">
          <div>
            <img
              src={props.imgs}
              className="serices__img"
              alt={props.altTag}
            />
            <div className="services__bottomCard">
              <h5 className="mb-2 services__title">{props.title}</h5>
              <p>{props.disc}</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};
function Services() {
  return (
    <>
      {/* <!--feature section start--> */}
      <section
        className="feature-content-two ptb-100 gray-light-bg"
        style={{
          background:
            "linear-gradient(94.21deg, #FFF6F1 46.57%, rgba(241, 251, 255, 0) 121.48%)",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="section-heading text-center mb-5">
                <h2 style={{ fontWeight: "100" }}>
                  <b>Our</b> Services{" "}
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
                Helping our clients with their remote staffing requirements gets us very excited. Elite Virtual Employee strives to excel at providing virtual employee services for the following and many more.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <MyServicesCard
              title="Digital Marketing"
              disc="Digital Marketing helps your potential customers find you sooner."
              imgs="/assets/images/services/skyhawk-digital-marketing.webp"
              urlPath="digital-marketing"
              altTag="Digital Marketing"
            />
            <MyServicesCard
              title="Mobile App Development"
              disc="Mobile apps conveniently list all your services in the palm of your clients."
              imgs="/assets/images/services/MobDev.jpg"
              urlPath="mobile-app-development"
              altTag="Mobile App Development"
            />
            <MyServicesCard
              title="Web Development"
              disc="Your website is the online showcase of your business and services."
              imgs="/assets/images/services/WebDev.webp"
              urlPath="web-development"
              altTag="Web Development"
            />
            <MyServicesCard
              title="Content Writing"
              disc="Think your business ideas need that much needed verbose flair?"
              imgs="/assets/images/services/ContWrit.jpg"
              urlPath="content-writing"
              altTag="Content Writing"
            />
            <MyServicesCard
              title="Multimedia & Animation"
              disc="Smarter infographics leave a lasting impression upon your target audience."
              imgs="/assets/images/services/MultAni.jpg"
              urlPath="animation-multimedia"
              altTag="Animation Multimedia"
            />
            <MyServicesCard
              title="Virtual Assistant"
              disc="Virtual assistants help you plan and  organize your business better."
              imgs="/assets/images/services/VirtAssi.jpg"
              urlPath="virtual-assistant"
              altTag="Virtual Assistant"
            />
            <div className="container text-center">
              <a href="services">
                <button className="services__button">
                  {" "}
                  View All Services &nbsp;&nbsp;{" "}
                  <i className="fa fa-arrow-right"></i>{" "}
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <!--feature section end--> */}
    </>
  );
}

export default Services;
