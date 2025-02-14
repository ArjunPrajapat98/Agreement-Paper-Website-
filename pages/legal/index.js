import Head from "next/head";
import Footer from "@/components/footer/Footer";
import Script from "next/script";
import Link from "next/link";
import { CountUp } from "use-count-up";

var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import dynamic from "next/dynamic";
import Header from "@/components/header/Header";
import React, { useEffect, useState } from "react";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

export default function Home() {
  // useEffect(() => {
  //   const sidebar = document?.querySelector('#sidebar');
  //   const sidebarToggler = document?.querySelector('.sidebar_toggler');

  //   const handleSidebarToggle = () => {
  //     sidebar?.classList?.toggle('show');
  //   };

  //   const handleOutsideClick = (e) => {
  //     if (e?.target?.id !== 'sidebar' && e?.target?.className !== 'sidebar_toggler') {
  //       sidebar?.classList?.remove('show');
  //     }
  //   };

  //   sidebarToggler?.addEventListener('click', handleSidebarToggle);
  //   window?.addEventListener('click', handleOutsideClick);

  //   return () => {
  //     sidebarToggler?.removeEventListener('click', handleSidebarToggle);
  //     window?.removeEventListener('click', handleOutsideClick);
  //   };
  // }, []);

  return (
    <>
      <div>
        <Head>
          <title>
            {" "}
            Agreement Paper - Privacy policy | #1 Top Job sites in Australia{" "}
          </title>
          <meta charSet="utf-8"></meta>
          <meta
            name="description"
            content="Hire Freelancers and Find Freelance Jobs Online - Read our privacy policy and find diverse candidates across sectors and experience levels."
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="canonical" href="https://www.agreementpaper.com/legal" />

        </Head>
      </div>

      {/* <div>

        <Header />

        <section className="bannerHead_bg landingBanr">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-md-9 col-xl-12">
                <div className="text-center anvHd_text lgHead_txt" data-aos="fade-up" data-aos-duration="1500">
                  <h1>Get the World’s Easiest All-In-One Contingent Labour Solution</h1>

                  <div className="brws_profBtn_bx">
                    <Link className="profileBr_btn getFree_ac ld_profNew" href="/book-a-demo"> Get Your Free Account </Link>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section> */}

      <div className="header">
        <Header />
        <div className="container">
          <div className="row header_bio">
            <div className="col-12 col-lg-6">
              <div className="head_details">
                <h2>
                  Get the World’s Easiest All-In-One Contingent Labour Solution
                </h2>
                <p></p>
                <div className="_demoBtn">
                <Link href="/book-a-demo" className="headB">
                  <span>Get a Demo today</span>
                </Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 laptop">
              <img src="image/laptop_img.png" alt="Generative AI Contract Management" />
            </div>

            <div className="col-12 col-lg-6 full_laptop">
              <img className="" src="image/laptop_full.png" alt="Contract Management Solution
" />
            </div>
          </div>
        </div>

        {/* <section className="verticleSlid_auto vr2_newSlid_owl">
          <div className="innerAutoSlide">
            <div className="container-fluid">
              <div className="ecsSlid_bx">
                <div className="cms-carousel section-padding ">
                  <OwlCarousel
                    loop={true}
                    items={5}
                    responsiveRefreshRate={0}
                    autoplay={true}
                    autoplayTimeout={1500}
                    autoplayHoverPause={true}
                    nav={true}
                    navText={[
                      "<i className='icon-arrow-prev'></i>",
                      "<i className='icon-arrow-next'></i>",
                    ]}
                    dots={false}
                    margin={30}
                    className="owl-theme"
                    responsive={{
                      0: {
                        items: 1,
                      },
                      767: {
                        items: 1,
                      },
                      768: {
                        items: 2,
                        margin: 15,
                      },
                      1199: {
                        items: 5,
                        margin: 24,
                      },
                      1920: {
                        items: 5,
                        margin: 24,
                      },
                    }}
                  >
                    <div className="slEd_into">
                      <div className="cmMang_bx">
                        <div className="cm_mngD">
                          <h5>Integrate with 19+ API</h5>
                          <p>
                            Integrate with latest apps
                            <br />
                            workday
                            <br />
                            fieldglass
                          </p>
                        </div>
                      </div>

                      <div className="btmImg_bx">
                        <img src="image/cmMang1.png" alt="img" />
                      </div>
                    </div>

                    <div className="slEd_into">
                      <div className="cmMang_bx">
                        <div className="cm_mngD">
                          <h5>Work tracking & invoicing</h5>
                          <p>
                            Timesheeting
                            <br />
                            timesheet approval
                            <br />
                            invoicing
                          </p>
                        </div>
                      </div>

                      <div className="btmImg_bx">
                        <img src="image/cmMang2.png" alt="img" />
                      </div>
                    </div>

                    <div className="slEd_into">
                      <div className="cmMang_bx">
                        <div className="cm_mngD">
                          <h5>Contract management</h5>
                          <p>
                            Able to execute contracts with ease.
                            <br />
                            print contracts with set templates.
                            <br />
                            track contract expiry.
                            <br />
                            event notifications.
                          </p>
                        </div>
                      </div>

                      <div className="btmImg_bx">
                        <img src="image/cmMang3.png" alt="img" />
                      </div>
                    </div>

                    <div className="slEd_into">
                      <div className="cmMang_bx">
                        <div className="cm_mngD">
                          <h5>Ecosystem for contract workers</h5>
                          <p>
                            Search new clients and connect for work search new
                            agencies and connect for recruitment search
                            resources with skills for job hunt work with best
                            teams.
                          </p>
                        </div>
                      </div>

                      <div className="btmImg_bx">
                        <img src="image/cmMang4.png" alt="img" />
                      </div>
                    </div>

                    <div className="slEd_into">
                      <div className="cmMang_bx">
                        <div className="cm_mngD">
                          <h5>Remote job discovery</h5>
                          <p>
                            Find latest jobs in the market post new jobs and get
                            heard enjoy filters with AI enabled search.
                          </p>
                        </div>
                      </div>

                      <div className="btmImg_bx">
                        <img src="image/cmMang5.png" alt="img" />
                      </div>
                    </div>
                  </OwlCarousel>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <section className="accordianMargin">
          <div
            className="accordion anvAccordian"
            id="accordionPanelsStayOpenExample"
          >
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseOne"
                  aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseOne"
                >
                  DISCLAIMER
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="panelsStayOpen-headingOne"
              >
                <div className="accordion-body">
                  <p className="fontWeit_pdd">
                    Welcome to our website. If you continue to browse and use
                    this website you are agreeing to comply with and be bound by
                    the following disclaimer, together with our terms and
                    conditions of use. <br /> <br />
                    The information contained in this website is for general
                    information purposes only and is provided by Kermetric
                    Solutions Pty Ltd (ABN 32 642 213 205) trading as Agreement
                    Paper. While we endeavour to keep the information up to date
                    and correct, we make no representations or warranties of any
                    kind, express or implied, about the completeness, accuracy,
                    reliability, suitability or availability with respect to the
                    website or the information, products, services or related
                    graphics contained on the website for any purpose. Any
                    reliance you place on such information is therefore strictly
                    at your own risk. You need to make your own enquiries to
                    determine if the information or products are appropriate for
                    your intended use. <br /> <br />
                    In no event will we be liable for any loss or damage
                    including without limitation, indirect or consequential loss
                    or damage, or any loss or damage whatsoever arising from
                    loss of data or profits arising out of, or in connection
                    with, the use of this website.
                    <br /> <br />
                    Through this website you may be able to link to other
                    websites which are not under the control of
                    https://agreementpaper.com. We have no control over the
                    nature, content and availability of those websites. The
                    inclusion of any links does not necessarily imply a
                    recommendation or endorse the views expressed within them.
                    <br /> <br />
                    Every effort is made to keep the website up and running
                    smoothly. However, Agreement Paper takes no responsibility
                    for, and will not be liable for, the website being
                    temporarily unavailable due to technical issues beyond our
                    control.
                    <br /> <br />
                  </p>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseTwo"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseTwo"
                >
                  COPYRIGHT
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingTwo"
              >
                <div className="accordion-body">
                  <p className="fontWeit_pdd">
                    This website and its contents are the copyright of Agreement
                    Paper – © 2023.
                    <br /> <br />
                    The ‘Agreement Paper’ word and device are registered
                    trademarks of Agreement Paper International and used under
                    licence. All rights reserved.
                    <br /> <br />
                    Any redistribution or reproduction of part or all of the
                    contents in any form is prohibited other than the following.
                    You may print or download contents to a local hard disk for
                    your personal and non-commercial use only. You may copy some
                    extracts only to individual third parties for their personal
                    use, but only if you acknowledge the website as the source
                    of the material.
                    <br /> <br />
                    You may not, except with our express written permission,
                    distribute or commercially exploit the content. You may not
                    transmit it or store it on any other website or other form
                    of electronic retrieval system.
                    <br /> <br />
                  </p>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseThree"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseThree"
                >
                  AGREEMENT PAPER PRIVACY POLICY
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingThree"
              >
                <div className="accordion-body">
                  <h6> Notice to Users </h6>
                  <p className="fontWeit_pdd">
                    In this privacy policy “we”, “us”, “our” or “Agreement
                    Paper” means Kermetric Solutions Pty Ltd (ABN 32 642 213
                    205) trading as Agreement Paper. Agreement Paper is
                    committed to complying with applicable privacy laws in
                    relation to any personal information that is provided to us
                    and stored on the Agreement Paper Platform (“Platform”).{" "}
                    <br /> <br />
                    By accessing the Platform and providing personal information
                    to us or consenting to a third party (such as your employer)
                    providing personal information to us, you consent to our
                    collection, use and disclosure of your personal information
                    in accordance with this privacy policy and any collection
                    notices provided to you from time to time. <br /> <br />
                    You further accept and agree to be bound by our Terms of Use
                    in respect of your access and use of the Platform which can
                    be found here https://agreementpaper.com/legal. <br />{" "}
                    <br />
                    In this privacy policy, the term: <br /> <br />
                    <strong> “Personal information” </strong> means (in summary)
                    any information or an opinion about an identified individual
                    or an individual who is reasonably identifiable.
                    <br /> <br />
                    <strong> “Australian Privacy Laws” </strong> means the
                    Privacy Act 1988 Cth including the Australian Privacy
                    Principles.
                    <br /> <br />
                  </p>
                  <h6> Collection of Personal Information </h6>
                  <p className="fontWeit_pdd">
                    You are not required to provide any personal information to
                    have general access to the Platform. However, in order to
                    access certain information, features, products, services or
                    other offerings (“Services”) through the Platform, you may
                    be required to provide personal information. <br /> <br />
                    We collect personal information about you from the following
                    sources:
                    <br />
                  </p>
                  <ul className="circleDisc1">
                    <li>
                      When you establish an account or register to access and
                      use the Platform or use any of the Services available
                      through the Platform.
                    </li>
                    <li>
                      {" "}
                      If you provide us with comments or suggestions, request
                      information about our Services, or contact our customer
                      service department via phone, email, or other forms of
                      communication.{" "}
                    </li>
                    <li>
                      {" "}
                      If you choose to use or participate in one of our various
                      programs (such as our referral service).{" "}
                    </li>
                    <li>
                      {" "}
                      From your transactions and other interactions with us, our
                      affiliates, and others, including our marketing partners
                      and third-party service providers.{" "}
                    </li>
                    <li>
                      {" "}
                      When you access products and services from our business
                      partners through the Platform. For example, if you select
                      to use the superannuation selection functionality provided
                      by Flare HR Pty Ltd (or its subsidiaries).{" "}
                    </li>
                    <li>
                      {" "}
                      When you use certain features of the Platform including
                      where you voluntarily submit personal information, for
                      example, in connection with requesting a price quote or
                      registering to receive a newsletter.{" "}
                    </li>
                    <li> From consumer and business reporting agencies. </li>
                    <li>
                      {" "}
                      From a third party (where you have consented) such as your
                      employer, where your employer provides information about
                      you to the Platform for the purpose of using our Services,
                      or where personal information is collected by our
                      third-party service providers who are permitted to
                      disclose that information to us. We may also collect
                      information from you through our related entities.{" "}
                    </li>
                    <li>
                      {" "}
                      As otherwise required to manage and deliver the Platform
                      and/or Services.{" "}
                    </li>
                  </ul>

                  <h6> Types Of Personal Information We Collect </h6>
                  <p className="fontWeit_pdd">
                    When you access or use the Platform or Services, we may
                    collect the following types of personal information: <br />
                  </p>
                  <ul className="circleDisc1">
                    <li>
                      {" "}
                      Name, address, date of birth, email address and telephone
                      numbers.{" "}
                    </li>
                    <li> Gender </li>
                    <li>
                      {" "}
                      Bank details, superannuation details and tax details
                      (including Tax File Numbers or TFN).{" "}
                    </li>
                    <li> Emergency contact details. </li>
                  </ul>
                  <p className="fontWeit_pdd">
                    If you provide your TFN to us, you consent to us storing and
                    using your TFN as authorised by law. Due to the sensitivity
                    of TFNs and the legal restraints on the use and disclosure
                    of TFNs, if you lose or forget your TFN, we will not be able
                    to provide it to you. You will have to ask the ATO for a
                    copy of it.
                  </p>

                  <h6> How We Use Personal Information </h6>
                  <p className="fontWeit_pdd">
                    Generally, we use your personal information for the
                    following purposes:
                  </p>
                  <ul className="circleDisc1">
                    <li>
                      {" "}
                      To operate the Platform and provide the Services to you
                      (including improving or developing the Platform and/or
                      Services).{" "}
                    </li>
                    <li>
                      {" "}
                      To cross-reference it with information we receive from
                      other third parties including our marketing partners and
                      business partners in order to provide you with an enhanced
                      and more personalised experience on the Platform.{" "}
                    </li>
                    <li>
                      {" "}
                      To respond to your comments or inquiries, resolve
                      disputes, contact you when necessary in connection with
                      the operation of the Platform and/or our Services or for
                      matters involving any product or service transactions, to
                      address problems on the Platform or with the Services, and
                      to enforce our agreements with you.{" "}
                    </li>
                    <li>
                      {" "}
                      For other third-party service providers to perform tasks
                      for us, such as providing marketing assistance and data
                      analysis, or to perform other services offered to users of
                      the Platform, when that information is necessary for them
                      to perform such services.{" "}
                    </li>
                    <li>
                      {" "}
                      So that we can detect and prevent any fraudulent or
                      malicious activity, and make sure that you are accessing
                      and using our Platform and Services fairly and in
                      accordance with our Terms of Use.{" "}
                    </li>
                    <li>
                      {" "}
                      To comply with our legal obligations and assist government
                      and law enforcement agencies or regulators.{" "}
                    </li>
                  </ul>

                  <h6> Disclosure Of Personal Information </h6>
                  <p className="fontWeit_pdd">
                    We may disclose your personal information to:
                  </p>
                  <ul className="circleDisc1">
                    <li> Our related entities. </li>
                    <li> Your employer. </li>
                    <li>
                      {" "}
                      Any third parties to whom you have directed or permitted
                      us to disclose your personal information.{" "}
                    </li>
                    <li>
                      {" "}
                      Third party service providers that provide us with
                      technical and support services.{" "}
                    </li>
                    <li> Our audit, legal and other professional advisers. </li>
                    <li>
                      {" "}
                      Law enforcement or government officials, if necessary to
                      comply with legal obligations{" "}
                    </li>
                    <li>
                      {" "}
                      The Australian Tax Office and other regulatory bodies, as
                      required in connection with the operation of the Platform
                      and Services.{" "}
                    </li>
                  </ul>
                  <p className="fontWeit_pdd">
                    If the ownership or control of all or part of our business
                    changes, we may transfer your personal information to the
                    new owner. <br /> <br />
                    Where we disclose your personal information to third
                    parties, we take reasonable steps to ensure that the
                    security of your personal information is subject to
                    appropriate safeguards. If you direct or permit us to
                    disclose your personal information to a third party through
                    use of the Platform, then please refer to that third party
                    provider’s privacy policy to understand the manner in which
                    that third party treats your personal information.
                  </p>

                  <h6> How we use Non-personal Information </h6>
                  <p className="fontWeit_pdd">
                    We may at times use the non-personally identifiable
                    information we collect:
                  </p>
                  <ul className="circleDisc1">
                    <li> Our related entities. </li>
                    <li>
                      {" "}
                      to improve the design and content of our Platform;{" "}
                    </li>
                    <li> to enable us to personalise your user experience; </li>
                    <li> to analyse Platform usage; and </li>
                    <li> to offer you Services. </li>
                  </ul>
                  <p className="fontWeit_pdd">
                    Aggregated Information: From time to time, we may collect
                    general, non-personal, statistical information about the
                    users of the Platform and Services. We collect this
                    information to determine information regarding the use of
                    our Platform, Services, and general information about our
                    customers. We may also group this information into aggregate
                    data to describe the use of our Platform and to provide
                    general aggregated information. The aggregated data will not
                    personally identify you or any users or visitors to the
                    Platform.
                  </p>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingFour">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseFour"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseFour"
                >
                  TECHNOLOGY
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingFour"
              >
                <div className="accordion-body">
                  <h6> &nbsp; Default Privacy and Security Features </h6>
                  <p className="fontWeit_pdd">
                    Connection to the Agreement Paper service is via secure
                    socket layer/transport layer security (SSL/TLS), ensuring
                    that our Clients have a secure connection to their data.
                  </p>
                  <h6> &nbsp; Logical separation of Customer data: </h6>
                  <ul className="circleDisc1">
                    <li>
                      {" "}
                      Hardware and software configurations are designed to
                      provide secure logical separations of Customer data that
                      permit each Customer to view only its related information.{" "}
                    </li>
                    <li>
                      {" "}
                      Multitenant security controls include unique,
                      non-predictable session tokens, configurable session
                      timeout values, password policies, sharing rules, and user
                      profiles.{" "}
                    </li>
                    <li>
                      {" "}
                      The Agreement Paper service supports delegated
                      authentication.{" "}
                    </li>
                  </ul>

                  <h6> &nbsp; Network security measures: </h6>
                  <ul className="circleDisc1">
                    <li> Multiple layers of external firewalls </li>
                    <li> Intrusion-detection sensors </li>
                    <li> Security event management system </li>
                    <li> Continuous external vulnerability scanning </li>
                  </ul>
                  <h6> &nbsp; Redundancy and Scalability </h6>
                  <p className="fontWeit_pdd">
                    The Agreement Paper service is highly scalable and
                    redundant, allowing for fluctuation in demand and expansion
                    of users while greatly reducing the threat of long-term
                    outages. Load-balanced networks, pools of application
                    servers, and clustered databases are features of our design.
                  </p>
                  <h6> &nbsp; Disaster Recovery </h6>
                  <p className="fontWeit_pdd">
                    All Customer data is stored in secure data centres and is
                    replicated over secure links to a disaster recovery data
                    centre. This design provides the ability to rapidly restore
                    the Agreement Paper service in the case of a catastrophic
                    loss.
                  </p>
                  <h6> &nbsp; Backups </h6>
                  <p className="fontWeit_pdd">
                    For more information on backups and information management,
                    please see our Information Management and Security
                    Statement, available in our Help Centre here.
                  </p>
                  <h6>
                    {" "}
                    &nbsp; Customer-Controlled Privacy and Security Settings{" "}
                  </h6>
                  <p className="fontWeit_pdd">
                    Clients may determine which of their respective designees
                    can access different categories of data.
                  </p>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingFive">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseFive"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseFive"
                >
                  TERMS OF USE
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingFive"
              >
                <div className="accordion-body">
                  <p className="fontWeit_pdd">
                    Effective 1 June 2019 <br /> <br />
                    Our goal at Agreement Paper is to help you and your team do
                    the best work of your lives. To do this, we need to keep our
                    products and services running smoothly, quickly, and without
                    distraction. For this to happen, we need help from you, our
                    users, to not to misuse or abuse our products and services.{" "}
                    <br /> <br />
                    You’ll see the word “services” a lot throughout this page.
                    That refers to all websites owned or operated by Agreement
                    Paper, such as https://agreementpaper.com/ or
                    https://app.agreementpaper.com/, and any related websites,
                    sub-domains and pages. <br /> <br />
                    What we won’t allow: <br />
                  </p>

                  <h6> &nbsp; Disruption </h6>
                  <ul className="circleDisc1">
                    <li>
                      {" "}
                      Compromising the integrity of our systems. This could
                      include probing, scanning, or testing the vulnerability of
                      any system or network that hosts our services,{" "}
                    </li>
                    <li>
                      {" "}
                      Tampering with, reverse-engineering, or hacking our
                      services, circumventing any security or authentication
                      measures, or attempting to gain unauthorised access to the
                      services, related systems, networks, or data,{" "}
                    </li>
                    <li>
                      {" "}
                      Modifying, disabling, or compromising the integrity or
                      performance of the services or related systems, network or
                      data,{" "}
                    </li>
                    <li>
                      {" "}
                      Deciphering any transmissions to or from the servers
                      running the services,{" "}
                    </li>
                    <li>
                      {" "}
                      Overwhelming or attempting to overwhelm our infrastructure
                      by imposing an unreasonably large load on our systems that
                      consume extraordinary resources (CPUs, memory, disk space,
                      bandwidth, etc.), such as:{" "}
                    </li>
                  </ul>
                  <div className="innerCircleDisc">
                    <ul className="circle_circle1">
                      <li>
                        {" "}
                        Using “robots,” “spiders,” “offline readers,” or other
                        automated systems to sends more request messages to our
                        servers than a human could reasonably send in the same
                        period of time by using a normal browser,{" "}
                      </li>
                      <li>
                        {" "}
                        Going far beyond the use parameters for any given
                        service as described in its corresponding documentation,
                        or{" "}
                      </li>
                    </ul>
                  </div>

                  <ul className="circleDisc1">
                    <li>
                      {" "}
                      Consuming an unreasonable amount of storage in a way
                      that’s unrelated to the purposes for which the services
                      were designed.{" "}
                    </li>
                  </ul>

                  <h6> &nbsp; Wrongful activities </h6>
                  <ul className="circleDisc1">
                    <li>
                      {" "}
                      Misrepresentation of yourself, or disguising the origin of
                      any content including by “spoofing”, “phishing”,
                      manipulating headers or other identifiers, impersonating
                      anyone else, or falsely implying any sponsorship or
                      association with Agreement Paper or any associated third
                      party,{" "}
                    </li>
                    <li>
                      {" "}
                      Using the services to violate the privacy of others,
                      including publishing or posting other people’s private and
                      confidential information without their express permission,
                      or collecting or gathering other people’s personal
                      information (including account names or information) from
                      our services,{" "}
                    </li>
                    <li>
                      {" "}
                      Using our services to stalk, harass, or post direct,
                      specific threats of violence against others,{" "}
                    </li>
                    <li>
                      {" "}
                      Using the Services for any illegal purpose, or in
                      violation of any laws (including without limitation data,
                      privacy, and export control laws),{" "}
                    </li>
                    <li>
                      {" "}
                      Accessing or searching any part of the services by any
                      means other than our publicly supported interfaces (for
                      example, “scraping”), or{" "}
                    </li>
                    <li>
                      {" "}
                      Using meta tags or any other “hidden text” including
                      Agreement Paper’s or our suppliers’ product names or
                      trademarks.{" "}
                    </li>
                  </ul>
                  <h6> &nbsp; Inappropriate communications </h6>
                  <ul className="circleDisc1">
                    <li>
                      {" "}
                      Using the services to generate or send unsolicited
                      communications, advertising, chain letters, or spam,{" "}
                    </li>
                    <li>
                      {" "}
                      Soliciting our users for commercial purposes, unless
                      expressly permitted by Agreement Paper,{" "}
                    </li>
                    <li>
                      {" "}
                      Disparaging Agreement Paper or our partners, vendors, or
                      affiliates,{" "}
                    </li>
                    <li>
                      {" "}
                      Promoting or advertising products or services other than
                      your own without appropriate authorisation,{" "}
                    </li>
                    <li> Inappropriate content, </li>
                    <li>
                      {" "}
                      Posting, uploading, sharing, submitting, or otherwise
                      providing content that:{" "}
                    </li>
                  </ul>
                  <div className="innerCircleDisc">
                    <ul className="circle_circle1">
                      <li>
                        {" "}
                        Infringes Agreement Paper’s or a third party’s
                        intellectual property or other rights, including any
                        copyright, trademark, patent, trade secret, moral
                        rights, privacy rights of publicity, or any other
                        intellectual property right or proprietary or
                        contractual right{" "}
                      </li>
                      <li> You don’t have the right to submit, </li>
                      <li>
                        {" "}
                        Is deceptive, fraudulent, illegal, obscene, defamatory,
                        libelous, threatening, harmful to minors, pornographic,
                        indecent, harassing, or hateful,{" "}
                      </li>
                      <li>
                        {" "}
                        Encourages illegal or tortious conduct or that is
                        otherwise inappropriate,{" "}
                      </li>
                      <li>
                        {" "}
                        Attacks others based on their race, ethnicity, national
                        origin, religion, sex, gender, sexual orientation,
                        disability, or medical condition,{" "}
                      </li>
                      <li>
                        {" "}
                        Contains viruses, bots, worms, scripting exploits, or
                        other similar materials,{" "}
                      </li>
                      <li> Is intended to be inflammatory, or </li>
                      <li>
                        {" "}
                        Could otherwise cause damage to Agreement Paper or any
                        third party.{" "}
                      </li>
                    </ul>
                  </div>
                  <p className="fontWeit_pdd">
                    In this Acceptable Use Policy, the term “content” means:
                  </p>
                  <div className="numberDisc">
                    <ul className="circle_circle1">
                      <li>
                        {" "}
                        Any information, data, text, software, code, scripts,
                        graphics, videos, messages, tags, interactive features,
                        or other materials that you post, upload, share, submit,
                        or otherwise provide in any manner to the services, and{" "}
                      </li>
                      <li>
                        {" "}
                        Any other materials, content, or data you provide to
                        Agreement Paper or use with the Services.{" "}
                      </li>
                    </ul>
                  </div>

                  <p className="fontWeit_pdd">
                    Without affecting any other remedies available to us,
                    Agreement Paper may permanently or temporarily terminate or
                    suspend a user’s account or access to the services without
                    notice or liability if Agreement Paper (in its sole
                    discretion) determines that a user has violated this
                    Acceptable Use Policy.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="accordion accordion-flush anvAccordian" id="accordionFlushExample">
              
              <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingOne">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                      DISCLAIMER
                  </button>
                  </h2>
                  <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body">
                      <p className='fontWeit_pdd'> 
                          Welcome to our website. If you continue to browse and use this website you are agreeing to comply with and be bound by the following disclaimer, together with our terms and conditions of use. <br/> <br/>
                          The information contained in this website is for general information purposes only and is provided by Kermetric Solutions Pty Ltd (ABN 32 642 213 205) trading as Agreement Paper. While we endeavour to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk. You need to make your own enquiries to determine if the information or products are appropriate for your intended use. <br/> <br/>
                          In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.<br/> <br/>
                          Through this website you may be able to link to other websites which are not under the control of https://agreementpaper.com. We have no control over the nature, content and availability of those websites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.<br/> <br/>
                          Every effort is made to keep the website up and running smoothly. However, Agreement Paper takes no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control.<br/> <br/>
                      </p>
                      </div>
                  </div>
              </div>

              <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                      COPYRIGHT
                  </button>
                  </h2>
                  <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">
                      <p className='fontWeit_pdd'>
                          This website and its contents are the copyright of Agreement Paper – © 2023.<br/> <br/>
                          The ‘Agreement Paper’ word and device are registered trademarks of Agreement Paper International and used under licence. All rights reserved.<br/> <br/>
                          Any redistribution or reproduction of part or all of the contents in any form is prohibited other than the following. You may print or download contents to a local hard disk for your personal and non-commercial use only. You may copy some extracts only to individual third parties for their personal use, but only if you acknowledge the website as the source of the material.<br/> <br/>
                          You may not, except with our express written permission, distribute or commercially exploit the content. You may not transmit it or store it on any other website or other form of electronic retrieval system.<br/> <br/>
                      </p>
                  </div>
                  </div>
              </div>

              <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                      AGREEMENT PAPER PRIVACY POLICY
                  </button>
                  </h2>
                  <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">
                      <h6> Notice to Users </h6> 
                      <p className='fontWeit_pdd'>
                          In this privacy policy “we”, “us”, “our” or “Agreement Paper” means Kermetric Solutions Pty Ltd (ABN 32 642 213 205) trading as Agreement Paper. Agreement Paper is committed to complying with applicable privacy laws in relation to any personal information that is provided to us and stored on the Agreement Paper Platform (“Platform”). <br/> <br/>
                          By accessing the Platform and providing personal information to us or consenting to a third party (such as your employer) providing personal information to us, you consent to our collection, use and disclosure of your personal information in accordance with this privacy policy and any collection notices provided to you from time to time. <br/> <br/>
                          You further accept and agree to be bound by our Terms of Use in respect of your access and use of the Platform which can be found here https://agreementpaper.com/legal. <br/> <br/>
                          In this privacy policy, the term: <br/> <br/>
                          <strong> “Personal information” </strong> means (in summary) any information or an opinion about an identified individual or an individual who is reasonably identifiable.<br/> <br/>
                          <strong> “Australian Privacy Laws” </strong> means the Privacy Act 1988 Cth including the Australian Privacy Principles.<br/> <br/>
                      </p>
                      <h6> Collection of Personal Information </h6>
                      <p className='fontWeit_pdd'>
                          You are not required to provide any personal information to have general access to the Platform. However, in order to access certain information, features, products, services or other offerings (“Services”) through the Platform, you may be required to provide personal information. <br/> <br/>
                          We collect personal information about you from the following sources:<br/> 
                      </p>
                      <ul className='circleDisc1'>
                          <li>When you establish an account or register to access and use the Platform or use any of the Services available through the Platform.</li>
                          <li> If you provide us with comments or suggestions, request information about our Services, or contact our customer service department via phone, email, or other forms of communication. </li>
                          <li> If you choose to use or participate in one of our various programs (such as our referral service). </li> 
                          <li> From your transactions and other interactions with us, our affiliates, and others, including our marketing partners and third-party service providers. </li> 
                          <li> When you access products and services from our business partners through the Platform. For example, if you select to use the superannuation selection functionality provided by Flare HR Pty Ltd (or its subsidiaries). </li> 
                          <li> When you use certain features of the Platform including where you voluntarily submit personal information, for example, in connection with requesting a price quote or registering to receive a newsletter. </li> 
                          <li> From consumer and business reporting agencies. </li> 
                          <li> From a third party (where you have consented) such as your employer, where your employer provides information about you to the Platform for the purpose of using our Services, or where personal information is collected by our third-party service providers who are permitted to disclose that information to us. We may also collect information from you through our related entities. </li> 
                          <li> As otherwise required to manage and deliver the Platform and/or Services. </li> 
                      </ul>

                      <h6> Types Of Personal Information We Collect </h6>
                      <p className='fontWeit_pdd'>
                      When you access or use the Platform or Services, we may collect the following types of personal information: <br/> 
                      </p>
                      <ul className='circleDisc1'>
                          <li> Name, address, date of birth, email address and telephone numbers. </li>
                          <li> Gender </li>    
                          <li> Bank details, superannuation details and tax details (including Tax File Numbers or TFN). </li>
                          <li> Emergency contact details. </li>
                      </ul>
                      <p className='fontWeit_pdd'>
                      If you provide your TFN to us, you consent to us storing and using your TFN as authorised by law.  Due to the sensitivity of TFNs and the legal restraints on the use and disclosure of TFNs, if you lose or forget your TFN, we will not be able to provide it to you. You will have to ask the ATO for a copy of it.
                      </p>

                      <h6> How We Use Personal Information </h6>
                      <p className='fontWeit_pdd'>
                      Generally, we use your personal information for the following purposes:
                      </p>
                      <ul className='circleDisc1'>
                          <li> To operate the Platform and provide the Services to you (including improving or developing the Platform and/or Services). </li>
                          <li> To cross-reference it with information we receive from other third parties including our marketing partners and business partners in order to provide you with an enhanced and more personalised experience on the Platform. </li>    
                          <li> To respond to your comments or inquiries, resolve disputes, contact you when necessary in connection with the operation of the Platform and/or our Services or for matters involving any product or service transactions, to address problems on the Platform or with the Services, and to enforce our agreements with you. </li>
                          <li> For other third-party service providers to perform tasks for us, such as providing marketing assistance and data analysis, or to perform other services offered to users of the Platform, when that information is necessary for them to perform such services. </li>
                          <li> So that we can detect and prevent any fraudulent or malicious activity, and make sure that you are accessing and using our Platform and Services fairly and in accordance with our Terms of Use. </li>
                          <li> To comply with our legal obligations and assist government and law enforcement agencies or regulators. </li>
                      </ul>

                      <h6> Disclosure Of Personal Information </h6>
                      <p className='fontWeit_pdd'>
                          We may disclose your personal information to:
                      </p>
                      <ul className='circleDisc1'>
                          <li> Our related entities. </li>
                          <li> Your employer. </li>    
                          <li> Any third parties to whom you have directed or permitted us to disclose your personal information. </li>
                          <li> Third party service providers that provide us with technical and support services. </li>
                          <li> Our audit, legal and other professional advisers. </li>
                          <li> Law enforcement or government officials, if necessary to comply with legal obligations </li>
                          <li> The Australian Tax Office and other regulatory bodies, as required in connection with the operation of the Platform and Services. </li>
                        </ul>
                      <p className='fontWeit_pdd'>
                      If the ownership or control of all or part of our business changes, we may transfer your personal information to the new owner. <br/> <br/>
                      Where we disclose your personal information to third parties, we take reasonable steps to ensure that the security of your personal information is subject to appropriate safeguards. If you direct or permit us to disclose your personal information to a third party through use of the Platform, then please refer to that third party provider’s privacy policy to understand the manner in which that third party treats your personal information.
                      </p>

                      <h6> How we use Non-personal Information </h6>
                      <p className='fontWeit_pdd'>
                      We may at times use the non-personally identifiable information we collect:
                      </p>
                      <ul className='circleDisc1'>
                      <li> Our related entities. </li>
                          <li> to improve the design and content of our Platform; </li>    
                          <li> to enable us to personalise your user experience; </li>
                          <li> to analyse Platform usage; and </li>    
                          <li> to offer you Services. </li>
                      </ul>
                      <p className='fontWeit_pdd'>
                      Aggregated Information: From time to time, we may collect general, non-personal, statistical information about the users of the Platform and Services.  We collect this information to determine information regarding the use of our Platform, Services, and general information about our customers. We may also group this information into aggregate data to describe the use of our Platform and to provide general aggregated information. The aggregated data will not personally identify you or any users or visitors to the Platform.
                      </p>

                  </div>
                  </div>
              </div>
              
              <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingFour">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                      TECHNOLOGY
                  </button>
                  </h2>
                  <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">
                      <h6> &nbsp; Default Privacy and Security Features  </h6>
                      <p className='fontWeit_pdd'>
                          Connection to the Agreement Paper service is via secure socket layer/transport layer security (SSL/TLS), ensuring that our Clients have a secure connection to their data.
                      </p>
                      <h6> &nbsp; Logical separation of Customer data: </h6>
                      <ul className='circleDisc1'>
                          <li> Hardware and software configurations are designed to provide secure logical separations of Customer data that permit each Customer to view only its related information. </li>
                          <li> Multitenant security controls include unique, non-predictable session tokens, configurable session timeout values, password policies, sharing rules, and user profiles. </li>
                          <li> The Agreement Paper service supports delegated authentication. </li>
                      </ul>

                      <h6> &nbsp; Network security measures: </h6>
                      <ul className='circleDisc1'>
                          <li> Multiple layers of external firewalls </li>
                          <li> Intrusion-detection sensors </li>
                          <li> Security event management system </li>
                          <li> Continuous external vulnerability scanning </li>
                      </ul>
                      <h6> &nbsp; Redundancy and Scalability </h6>
                      <p className='fontWeit_pdd'>
                      The Agreement Paper service is highly scalable and redundant, allowing for fluctuation in demand and expansion of users while greatly reducing the threat of long-term outages. Load-balanced networks, pools of application servers, and clustered databases are features of our design.
                      </p>
                      <h6> &nbsp; Disaster Recovery </h6>
                      <p className='fontWeit_pdd'>
                      All Customer data is stored in secure data centres and is replicated over secure links to a disaster recovery data centre. This design provides the ability to rapidly restore the Agreement Paper service in the case of a catastrophic loss.
                      </p>
                      <h6> &nbsp; Backups </h6>
                      <p className='fontWeit_pdd'>
                      For more information on backups and information management, please see our Information Management and Security Statement, available in our Help Centre here. 
                      </p>
                      <h6> &nbsp;  Customer-Controlled Privacy and Security Settings </h6>
                      <p className='fontWeit_pdd'>
                      Clients may determine which of their respective designees can access different categories of data.
                      </p>
                  
                  </div>
                  </div>
              </div>
              
              <div className="accordion-item">
                  
                  <h2 className="accordion-header" id="flush-headingFive">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                          TERMS OF USE
                      </button>
                  </h2>

                  <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                  
                  <div className="accordion-body">
                      <p className='fontWeit_pdd'>
                          Effective 1 June 2019 <br/> <br/>
                          Our goal at Agreement Paper is to help you and your team do the best work of your lives. To do this, we need to keep our products and services running smoothly, quickly, and without distraction. For this to happen, we need help from you, our users, to not to misuse or abuse our products and services. <br/> <br/>
                          You’ll see the word “services” a lot throughout this page. That refers to all websites owned or operated by Agreement Paper, such as https://agreementpaper.com/ or https://app.agreementpaper.com/, and any related websites, sub-domains and pages. <br/> <br/>
                          What we won’t allow: <br/>
                      </p>
                      
                      <h6> &nbsp; Disruption </h6>
                      <ul className='circleDisc1'>
                          <li> Compromising the integrity of our systems. This could include probing, scanning, or testing the vulnerability of any system or network that hosts our services, </li>
                          <li> Tampering with, reverse-engineering, or hacking our services, circumventing any security or authentication measures, or attempting to gain unauthorised access to the services, related systems, networks, or data, </li> 
                          <li> Modifying, disabling, or compromising the integrity or performance of the services or related systems, network or data, </li>
                          <li> Deciphering any transmissions to or from the servers running the services, </li>
                          <li> Overwhelming or attempting to overwhelm our infrastructure by imposing an unreasonably large load on our systems that consume extraordinary resources (CPUs, memory, disk space, bandwidth, etc.), such as: </li>
                      </ul>
                      <div className='innerCircleDisc'>
                      <ul className='circle_circle1'>
                          <li> Using “robots,” “spiders,” “offline readers,” or other automated systems to sends more request messages to our servers than a human could reasonably send in the same period of time by using a normal browser, </li>
                          <li> Going far beyond the use parameters for any given service as described in its corresponding documentation, or </li>
                      </ul>
                      
                      </div>
                      
                      <ul className='circleDisc1'>
                          <li> Consuming an unreasonable amount of storage in a way that’s unrelated to the purposes for which the services were designed. </li>
                      </ul>

                      <h6> &nbsp; Wrongful activities </h6>
                      <ul className='circleDisc1'>
                          <li> Misrepresentation of yourself, or disguising the origin of any content including by “spoofing”, “phishing”, manipulating headers or other identifiers, impersonating anyone else, or falsely implying any sponsorship or association with Agreement Paper or any associated third party, </li>
                          <li> Using the services to violate the privacy of others, including publishing or posting other people’s private and confidential information without their express permission, or collecting or gathering other people’s personal information (including account names or information) from our services, </li>
                          <li> Using our services to stalk, harass, or post direct, specific threats of violence against others, </li>
                          <li> Using the Services for any illegal purpose, or in violation of any laws (including without limitation data, privacy, and export control laws), </li>
                          <li> Accessing or searching any part of the services by any means other than our publicly supported interfaces (for example, “scraping”), or </li>
                          <li> Using meta tags or any other “hidden text” including Agreement Paper’s or our suppliers’ product names or trademarks. </li>
                      </ul>
                      <h6> &nbsp; Inappropriate communications </h6>
                      <ul className='circleDisc1'>
                          <li> Using the services to generate or send unsolicited communications, advertising, chain letters, or spam, </li>
                          <li> Soliciting our users for commercial purposes, unless expressly permitted by Agreement Paper, </li>
                          <li> Disparaging Agreement Paper or our partners, vendors, or affiliates, </li>
                          <li> Promoting or advertising products or services other than your own without appropriate authorisation, </li>
                          <li> Inappropriate content, </li>
                          <li> Posting, uploading, sharing, submitting, or otherwise providing content that: </li>
                      </ul>
                      <div className='innerCircleDisc'>
                          <ul className='circle_circle1'>
                              <li> Infringes Agreement Paper’s or a third party’s intellectual property or other rights, including any copyright, trademark, patent, trade secret, moral rights, privacy rights of publicity, or any other intellectual property right or proprietary or contractual right </li>
                              <li> You don’t have the right to submit, </li>
                              <li> Is deceptive, fraudulent, illegal, obscene, defamatory, libelous, threatening, harmful to minors, pornographic, indecent, harassing, or hateful, </li>
                              <li> Encourages illegal or tortious conduct or that is otherwise inappropriate, </li>
                              <li> Attacks others based on their race, ethnicity, national origin, religion, sex, gender, sexual orientation, disability, or medical condition, </li>
                              <li> Contains viruses, bots, worms, scripting exploits, or other similar materials, </li>
                              <li> Is intended to be inflammatory, or </li>
                              <li> Could otherwise cause damage to Agreement Paper or any third party. </li>
                          </ul>
                      </div>
                      <p className='fontWeit_pdd'>
                          In this Acceptable Use Policy, the term “content” means:
                      </p>
                      <div className='numberDisc'>
                          <ul className='circle_circle1'>
                              <li> Any information, data, text, software, code, scripts, graphics, videos, messages, tags, interactive features, or other materials that you post, upload, share, submit, or otherwise provide in any manner to the services, and </li>
                              <li> Any other materials, content, or data you provide to Agreement Paper or use with the Services. </li>
                          </ul>
                      </div>

                      <p className='fontWeit_pdd'>
                          Without affecting any other remedies available to us, Agreement Paper may permanently or temporarily terminate or suspend a user’s account or access to the services without notice or liability if Agreement Paper (in its sole discretion) determines that a user has violated this Acceptable Use Policy.
                      </p>

                  </div>
                  </div>
              </div>

          </div> */}
        </section>

        <Footer />
      </div>

      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossorigin="anonymous"
      ></Script>
    </>
  );
}
