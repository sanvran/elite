"use strict";
exports.id = 7180;
exports.ids = [7180];
exports.modules = {

/***/ 7180:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);





const IndustrieServed = ({
  tag,
  imgSrc,
  altTag
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
    className: "col-md-4",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "single-blog-card card border-0 shadow-sm card__effect",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("span", {
        className: "category position-absolute badge badge-pill badge-primary",
        children: tag
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("img", {
        src: imgSrc,
        className: "card-img-top position-relative",
        alt: altTag
      })]
    })
  });
};

function IndustriesServe() {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("section", {
      className: "our-blog-section ptb-100 gray-light-bg",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "container",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
          className: "row",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
            className: "col-md-8",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              className: "section-heading mb-5",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("h2", {
                style: {
                  fontWeight: "100"
                },
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("b", {
                  children: "Industries"
                }), " We\u2019ve Served"]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  flexWrap: "wrap",
                  alignContent: "center"
                },
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("hr", {
                  className: "hr__line"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("p", {
                className: "lead",
                style: {
                  fontSize: "17px"
                },
                children: "Due to our remote staffing expertise and impeccable track record, Elite Virtual Employee has had the privilege to work across industries in varying capacity delivering our best every single time."
              })]
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(IndustrieServed, {
            imgSrc: "/assets/images/industries/ecom.jpg",
            tag: "E-commerce",
            altTag: "e-commerce"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(IndustrieServed, {
            imgSrc: "/assets/images/industries/real.jpg",
            tag: "Real estate",
            altTag: "Real estate"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(IndustrieServed, {
            imgSrc: "/assets/images/industries/insurance.jpg",
            tag: "Insurance",
            altTag: "Insurance"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(IndustrieServed, {
            imgSrc: "/assets/images/industries/pub.jpg",
            tag: "Publishing",
            altTag: "Publishing"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(IndustrieServed, {
            imgSrc: "/assets/images/industries/tour.webp",
            tag: "Tour & Travels",
            altTag: "Tour & Travels"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(IndustrieServed, {
            imgSrc: "/assets/images/industries/sport.jpg",
            tag: "Sports",
            altTag: "Sports"
          })]
        })]
      })
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndustriesServe);

/***/ })

};
;