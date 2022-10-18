"use strict";
exports.id = 6186;
exports.ids = [6186];
exports.modules = {

/***/ 6186:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyServicesCard": () => (/* binding */ MyServicesCard),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);




const MyServicesCard = props => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
    className: "col-md-6 col-lg-4",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("a", {
      href: props.urlPath,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
        className: "feature-feature-list p-4 text-center card__effect",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("img", {
            src: props.imgs,
            className: "serices__img",
            alt: props.altTag
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "services__bottomCard",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("h5", {
              className: "mb-2 services__title",
              children: props.title
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("p", {
              children: props.disc
            })]
          })]
        })
      })
    })
  });
};

function Services() {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("section", {
      className: "feature-content-two ptb-100 gray-light-bg",
      style: {
        background: "linear-gradient(94.21deg, #FFF6F1 46.57%, rgba(241, 251, 255, 0) 121.48%)"
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "container",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
          className: "row justify-content-center",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
            className: "col-md-8",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              className: "section-heading text-center mb-5",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("h2", {
                style: {
                  fontWeight: "100"
                },
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("b", {
                  children: "Our"
                }), " Services", " "]
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
                children: "Helping our clients with their remote staffing requirements gets us very excited. Elite Virtual Employee strives to excel at providing virtual employee services for the following and many more."
              })]
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(MyServicesCard, {
            title: "Digital Marketing",
            disc: "Digital Marketing helps your potential customers find you sooner.",
            imgs: "/assets/images/services/skyhawk-digital-marketing.webp",
            urlPath: "digital-marketing",
            altTag: "Digital Marketing"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(MyServicesCard, {
            title: "Mobile App Development",
            disc: "Mobile apps conveniently list all your services in the palm of your clients.",
            imgs: "/assets/images/services/MobDev.jpg",
            urlPath: "mobile-app-development",
            altTag: "Mobile App Development"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(MyServicesCard, {
            title: "Web Development",
            disc: "Your website is the online showcase of your business and services.",
            imgs: "/assets/images/services/WebDev.webp",
            urlPath: "web-development",
            altTag: "Web Development"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(MyServicesCard, {
            title: "Content Writing",
            disc: "Think your business ideas need that much needed verbose flair?",
            imgs: "/assets/images/services/ContWrit.jpg",
            urlPath: "content-writing",
            altTag: "Content Writing"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(MyServicesCard, {
            title: "Multimedia & Animation",
            disc: "Smarter infographics leave a lasting impression upon your target audience.",
            imgs: "/assets/images/services/MultAni.jpg",
            urlPath: "animation-multimedia",
            altTag: "Animation Multimedia"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(MyServicesCard, {
            title: "Virtual Assistant",
            disc: "Virtual assistants help you plan and  organize your business better.",
            imgs: "/assets/images/services/VirtAssi.jpg",
            urlPath: "virtual-assistant",
            altTag: "Virtual Assistant"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
            className: "container text-center",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("a", {
              href: "services",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("button", {
                className: "services__button",
                children: [" ", "View All Services \xA0\xA0", " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("i", {
                  className: "fa fa-arrow-right"
                }), " "]
              })
            })
          })]
        })]
      })
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Services);

/***/ })

};
;