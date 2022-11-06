import React, { useState } from "react";
import Image from "next/image";

const Popup = ({ open, onClose, bodyContent, handleSubmit }) => {
  if (!open) return null;

  return (
    <>
      <div onClick={onClose} className="overlay">
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="modalContainer"
        >
          {/* <img src={nft} alt="/" /> */}
          <div className="modalRight">
            <p className="closeBtn" onClick={onClose}>
              X
            </p>
            <div className="content">{bodyContent}</div>
            <div className="btnContainer">
              <button className="btnPrimary" onClick={handleSubmit}>
                <span className="bold">Submit</span>
              </button>
              <button className="btnOutline" onClick={onClose}>
                <span className="bold">NO</span>, Thanks
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Popup;
