import React, { lazy, Suspense } from "react";
import Head from "next/head";
import Script from "next/script";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ErrorBoundary from "../ErrorBoundary";

const Footer = lazy(() => import("@/components/footer/Footer"));
const LawyerNetwork = lazy(() => import("@/components/header/LawyerNetwork"));
const HomePageForLawyer = lazy(() =>
  import("@/components/common/commonForLawyer/Home")
);
const Section1 = lazy(() =>
  import("@/components/common/commonForRecruitment/Section1")
);
const Section2 = lazy(() =>
  import("@/components/common/commonForRecruitment/Section2")
);
const Section3 = lazy(() =>
  import("@/components/common/commonForRecruitment/Section3")
);
const YouTube = lazy(() =>
  import("@/components/common/commonForEnterprises/Section2")
);
const Section5 = lazy(() =>
  import("@/components/common/commonForEnterprises/Section5")
);
const Section6 = lazy(() =>
  import("@/components/common/commonForRecruitment/Section6")
);
const Section7 = lazy(() =>
  import("@/components/common/commonForEnterprises/Section7")
);
const Section8 = lazy(() =>
  import("@/components/common/commonForEnterprises/Section8")
);

var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}

export default function Home() {
  return (
    <>
      <div>
        <Head>
          <title>
            Agreement Paper : #1 Jobs, Employment, Recruitment and Career site
          </title>
          <meta
            name="description"
            content="Leading marketplace for freelancers, remote jobs & perfect hires. Streamline with Agreement Paper's end-to-end temp staffing, inc. contract management, Job to invoice & timesheets. Join now!"
          />
          <meta property="og:locale" content="en_AU" />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Agreement Paper : #1 Jobs, Employment, Recruitment and Career site "
          />
          <meta
            property="og:description"
            content="Leading marketplace for freelancers, remote jobs & perfect hires. Streamline with Agreement Paper's end-to-end temp staffing, inc. contract management, Job to invoice & timesheets. Join now!"
          />
          <meta property="og:url" content="https://agreementpaper.com/" />
          <meta property="og:site_name" content="Agreement paper" />
          <meta
            property="og:image"
            content="https://agreementpaper.com/_next/static/media/aggrement_onLgt_logo.d3cb1666.png"
          />
          <meta property="og:image:type" content="image/png" />
          <link
            rel="canonical"
            href="https://www.agreementpaper.com/recruitment"
          />
        </Head>
      </div>
      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <div className="header_3">
            <div className="container">
              <LawyerNetwork />
            </div>
            <HomePageForLawyer />
          </div>

          <main>
            <section className="workPermitMargin permit_color">
              <div className="workPermit_details">
                <h4> Our Offerings </h4>
                <div className="mt-5">
                  <strong>1. Exclusive Legal Community: </strong>
                  <p className="mt-2">
                  Connect with lawyers specializing in contract law, procurement, and compliance. <br />
                    <br />
                  </p>
                </div>

                <div className="">
                  <strong>2. Collaborative Opportunities: </strong>
                  <p className="mt-2">
                  Work with peers on complex contract reviews, negotiations, and legal strategies. <br />
                    <br />
                  </p>
                </div>

                <div className="">
                  <strong>3. AI-Powered Tools: </strong>
                  <p className="mt-2">
                  Access cutting-edge AI solutions from Agreementpaper to draft, review, and optimize contracts with ease. <br />
                    <br />
                  </p>
                </div>

                <div className="">
                  <strong>4. Knowledge Hub: </strong>
                  <p className="mt-2">
                  Stay updated with the latest trends, legal insights, and compliance standards tailored for contract management professionals. <br />
                    <br />
                  </p>
                </div>

                <div className="">
                  <strong>5. Enhanced Efficiency: </strong>
                  <p className="mt-2">
                  Save time and reduce errors with streamlined workflows for drafting, reviewing, and managing contracts. <br />
                    <br />
                  </p>
                </div>

                <div className="">
                  <strong>6. Business Growth:</strong>
                  <p className="mt-2">
                  Showcase your expertise, attract new clients, and build lasting professional relationships. <br />
                    <br />
                  </p>
                </div>

              </div>

              <div className="workPermit_details mt-5">
                <h4> Call-to-Action (CTA) </h4>
                <div className="mt-5">
                  <strong>Join the Lawyer Network on Agreementpaper </strong>
                  <p className="mt-2">
                  Be part of the community where technology meets legal expertise. Sign up today and transform the way you manage contracts! <br />
                    <br />
                  </p>
                </div>
              </div>
            </section>
          </main>
          <Footer />
        </Suspense>
      </ErrorBoundary>

      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossOrigin="anonymous"
      ></Script>
    </>
  );
}
