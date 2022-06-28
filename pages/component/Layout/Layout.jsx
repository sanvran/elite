import React from "react";
import Header from "../Layout/Header/Header.jsx";
import Footer from "../Layout/Footer/Footer.jsx";
import Loader from "./Loader/index.jsx";
import Head from "next/head";

// Schema markup data
const schemaData = 
{
    "@context": "https://schema.org/",
    "@type": "WebSite",
    "name": "SkyhawkKinetic",
    "url": "https://skyhawkKinetic.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "{search_term_string}",
      "query-input": "required name=search_term_string"
    }
}

function Layout({ children }) {
  return (
    <>
      <Head>
        <meta charSet="utf8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <meta name="author" content="Skyhawk Kinetic" />
        <meta name="keywords"
          content="skyhawk, remote staffing, business outsourcing, remote employee, business outsourcing solutions, online staffing agency, hire skyhawk India, remote staffing agency India, Hire an Employee, dedicated skyhawk, Hire a Dedicated Employee, hire remote employee India, hire employees in India, staffing solutions"/>
        {/* link */}
        <link rel="canonical" href="https://skyhawkkinetic.com" />
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700%7COpen+Sans:400,600&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="css/bootstrap.min.css" />
        <link rel="stylesheet" href="css/magnific-popup.css" />
        <link rel="stylesheet" href="css/themify-icons.css" />
        <link rel="stylesheet" href="css/all.min.css" />
        <link rel="stylesheet" href="css/animate.min.css" />
        <link rel="stylesheet" href="css/jquery.mb.YTPlayer.min.css" />
        <link rel="stylesheet" href="css/owl.carousel.min.css" />
        <link rel="stylesheet" href="css/owl.theme.default.min.css" />
        <link rel="stylesheet" href="css/style.css" />
        <link rel="stylesheet" href="css/responsive.css" />
        <link rel="shortcut icon" href="https://skyhawkkinetic.com/img/skyhawk_kinetic_logo.png"></link>
        {/* schema.org data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}/>
        {/* google analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-FPJ8R4T6NW"></script>
        <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FPJ8R4T6NW', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
      </Head>
      <Loader />
      <Header />
      {children}
      <Footer />
      {/* <!--bottom to top button start--> */}
      <button className="scroll-top scroll-to-target" data-target="html">
        <span className="ti-angle-up"></span>
      </button>
      {/* <!--bottom to top button end--> */}
      {/* <!--jQuery--> */}
      <script src="js/jquery-3.4.1.min.js"></script>
      {/* <!--Popper js--> */}
      <script src="js/popper.min.js"></script>
      {/* <!--Bootstrap js--> */}
      <script src="js/bootstrap.min.js"></script>
      {/* <!--Magnific popup js--> */}
      <script src="js/jquery.magnific-popup.min.js"></script>
      {/* <!--jquery easing js--> */}
      <script src="js/jquery.easing.min.js"></script>
      {/* <!--jquery ytplayer js--> */}
      <script src="js/jquery.mb.YTPlayer.min.js"></script>
      {/* <!--Isotope filter js--> */}
      <script src="js/mixitup.min.js"></script>
      {/* <!--wow js--> */}
      <script src="js/wow.min.js"></script>
      {/* <!--owl carousel js--> */}
      <script src="js/owl.carousel.min.js"></script>
      {/* <!--countdown js--> */}
      <script src="js/jquery.countdown.min.js"></script>
      {/* <!--custom js--> */}
      <script src="js/scripts.js"></script>  
    </>
  );
}

export default Layout;
