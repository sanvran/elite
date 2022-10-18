"use strict";
(() => {
var exports = {};
exports.id = 3306;
exports.ids = [3306];
exports.modules = {

/***/ 4577:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(req, res) {
  let nodemailer = __webpack_require__(8123);

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.hostinger.com",
    auth: {
      user: 'info@skyhawkkinetic.com',
      pass: 'Skyhawk@2012new'
    },
    secure: true
  });
  const mailData = {
    from: 'info@skyhawkkinetic.com',
    to: 'info@skyhawkkinetic.com',
    subject: `Message From Skyhawk Kinetic Website: ${req.body.name}`,
    text: req.body.message + " | Sent from: " + 'info@skyhawkkinetic.com',
    html: `<div> Name: ${req.body.name} <p>Message:  ${req.body.message}</p> <p>Mobile no.: ${req.body.mobile}</p> </div><p>Email id: ${req.body.email}</p>`
  };
  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);else console.log(info);
  }); // console.log(req.body)    

  res.send('success');
}

/***/ }),

/***/ 8123:
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4577));
module.exports = __webpack_exports__;

})();