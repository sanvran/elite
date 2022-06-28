import React from "react";

const ServicesCard = (props)=> {
  return (
    <>
      <div className="col-md-6 col-lg-4">
        <div className="feature-feature-list p-4 text-center card__effect">
          <a href={props.urlPath}>
          <div>
            <img
              src={props.imgs}
              className="serices__img"
              alt="best degital marketing company in usa"
            ></img>
            <div className="services__bottomCard">
              <h5 className="mb-2 services__title">{props.title}</h5>
              <p>{props.disc}</p>
            </div>
          </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default ServicesCard;
