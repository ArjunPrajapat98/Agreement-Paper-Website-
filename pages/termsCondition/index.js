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

export default function Freelancer() {
  return (
    <>
      <div>
        <Head>
          <title>Freelancer</title>
          <meta charSet="utf-8"></meta>
          <meta name="description" content="Freelancer" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            rel="canonical"
            href="https://www.agreementpaper.com/freelancer"
          />
        </Head>
      </div>

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
              <img
                src="image/laptop_img.png"
                alt="Generative AI Contract Management"
              />
            </div>

            <div className="col-12 col-lg-6 full_laptop">
              <img
                className=""
                src="image/laptop_full.png"
                alt="Contract Management Solution
"
              />
            </div>
          </div>
        </div>

        <section className="workPermitMargin permit_color">
          <div className="">
            <h2> AGREEMENT PAPER PRIVACY POLICY </h2>
            <h6 className="mt-3"> Notice to Users </h6>
            <p className="fontWeit_pdd bg_hideColor">
              In this privacy policy “we”, “us”, “our” or “Agreement Paper”
              means Kermetric Solutions Pty Ltd (ABN 32 642 213 205) trading as
              Agreement Paper. Agreement Paper is committed to complying with
              applicable privacy laws in relation to any personal information
              that is provided to us and stored on the Agreement Paper Platform
              (“Platform”). <br /> <br />
              By accessing the Platform and providing personal information to us
              or consenting to a third party (such as your employer) providing
              personal information to us, you consent to our collection, use and
              disclosure of your personal information in accordance with this
              privacy policy and any collection notices provided to you from
              time to time. <br /> <br />
              You further accept and agree to be bound by our Terms of Use in
              respect of your access and use of the Platform which can be found
              here https://agreementpaper.com/legal. <br /> <br />
              In this privacy policy, the term: <br /> <br />
              <strong> “Personal information” </strong> means (in summary) any
              information or an opinion about an identified individual or an
              individual who is reasonably identifiable.
              <br /> <br />
              <strong> “Australian Privacy Laws” </strong> means the Privacy Act
              1988 Cth including the Australian Privacy Principles.
              <br /> <br />
            </p>
            <h6> Collection of Personal Information </h6>
            <p className="fontWeit_pdd bg_hideColor">
              You are not required to provide any personal information to have
              general access to the Platform. However, in order to access
              certain information, features, products, services or other
              offerings (“Services”) through the Platform, you may be required
              to provide personal information. <br /> <br />
              We collect personal information about you from the following
              sources:
              <br />
            </p>
            <ul className="circleDisc1 bg_hideColor">
              <li>
                When you establish an account or register to access and use the
                Platform or use any of the Services available through the
                Platform.
              </li>
              <li>
                {" "}
                If you provide us with comments or suggestions, request
                information about our Services, or contact our customer service
                department via phone, email, or other forms of communication.{" "}
              </li>
              <li>
                {" "}
                If you choose to use or participate in one of our various
                programs (such as our referral service).{" "}
              </li>
              <li>
                {" "}
                From your transactions and other interactions with us, our
                affiliates, and others, including our marketing partners and
                third-party service providers.{" "}
              </li>
              <li>
                {" "}
                When you access products and services from our business partners
                through the Platform. For example, if you select to use the
                superannuation selection functionality provided by Flare HR Pty
                Ltd (or its subsidiaries).{" "}
              </li>
              <li>
                {" "}
                When you use certain features of the Platform including where
                you voluntarily submit personal information, for example, in
                connection with requesting a price quote or registering to
                receive a newsletter.{" "}
              </li>
              <li> From consumer and business reporting agencies. </li>
              <li>
                {" "}
                From a third party (where you have consented) such as your
                employer, where your employer provides information about you to
                the Platform for the purpose of using our Services, or where
                personal information is collected by our third-party service
                providers who are permitted to disclose that information to us.
                We may also collect information from you through our related
                entities.{" "}
              </li>
              <li>
                {" "}
                As otherwise required to manage and deliver the Platform and/or
                Services.{" "}
              </li>
            </ul>

            <h6> Types Of Personal Information We Collect </h6>
            <p className="fontWeit_pdd bg_hideColor">
              When you access or use the Platform or Services, we may collect
              the following types of personal information: <br />
            </p>
            <ul className="circleDisc1 bg_hideColor">
              <li>
                {" "}
                Name, address, date of birth, email address and telephone
                numbers.{" "}
              </li>
              <li> Gender </li>
              <li>
                {" "}
                Bank details, superannuation details and tax details (including
                Tax File Numbers or TFN).{" "}
              </li>
              <li> Emergency contact details. </li>
            </ul>
            <p className="fontWeit_pdd bg_hideColor">
              If you provide your TFN to us, you consent to us storing and using
              your TFN as authorised by law. Due to the sensitivity of TFNs and
              the legal restraints on the use and disclosure of TFNs, if you
              lose or forget your TFN, we will not be able to provide it to you.
              You will have to ask the ATO for a copy of it.
            </p>

            <h6> How We Use Personal Information </h6>
            <p className="fontWeit_pdd bg_hideColor">
              Generally, we use your personal information for the following
              purposes:
            </p>
            <ul className="circleDisc1 bg_hideColor">
              <li>
                {" "}
                To operate the Platform and provide the Services to you
                (including improving or developing the Platform and/or
                Services).{" "}
              </li>
              <li>
                {" "}
                To cross-reference it with information we receive from other
                third parties including our marketing partners and business
                partners in order to provide you with an enhanced and more
                personalised experience on the Platform.{" "}
              </li>
              <li>
                {" "}
                To respond to your comments or inquiries, resolve disputes,
                contact you when necessary in connection with the operation of
                the Platform and/or our Services or for matters involving any
                product or service transactions, to address problems on the
                Platform or with the Services, and to enforce our agreements
                with you.{" "}
              </li>
              <li>
                {" "}
                For other third-party service providers to perform tasks for us,
                such as providing marketing assistance and data analysis, or to
                perform other services offered to users of the Platform, when
                that information is necessary for them to perform such services.{" "}
              </li>
              <li>
                {" "}
                So that we can detect and prevent any fraudulent or malicious
                activity, and make sure that you are accessing and using our
                Platform and Services fairly and in accordance with our Terms of
                Use.{" "}
              </li>
              <li>
                {" "}
                To comply with our legal obligations and assist government and
                law enforcement agencies or regulators.{" "}
              </li>
            </ul>

            <h6> Disclosure Of Personal Information </h6>
            <p className="fontWeit_pdd bg_hideColor">
              We may disclose your personal information to:
            </p>
            <ul className="circleDisc1 bg_hideColor">
              <li> Our related entities. </li>
              <li> Your employer. </li>
              <li>
                {" "}
                Any third parties to whom you have directed or permitted us to
                disclose your personal information.{" "}
              </li>
              <li>
                {" "}
                Third party service providers that provide us with technical and
                support services.{" "}
              </li>
              <li> Our audit, legal and other professional advisers. </li>
              <li>
                {" "}
                Law enforcement or government officials, if necessary to comply
                with legal obligations{" "}
              </li>
              <li>
                {" "}
                The Australian Tax Office and other regulatory bodies, as
                required in connection with the operation of the Platform and
                Services.{" "}
              </li>
            </ul>
            <p className="fontWeit_pdd bg_hideColor">
              If the ownership or control of all or part of our business
              changes, we may transfer your personal information to the new
              owner. <br /> <br />
              Where we disclose your personal information to third parties, we
              take reasonable steps to ensure that the security of your personal
              information is subject to appropriate safeguards. If you direct or
              permit us to disclose your personal information to a third party
              through use of the Platform, then please refer to that third party
              provider’s privacy policy to understand the manner in which that
              third party treats your personal information.
            </p>

            <h6> How we use Non-personal Information </h6>
            <p className="fontWeit_pdd bg_hideColor">
              We may at times use the non-personally identifiable information we
              collect:
            </p>
            <ul className="circleDisc1 bg_hideColor">
              <li> Our related entities. </li>
              <li> to improve the design and content of our Platform; </li>
              <li> to enable us to personalise your user experience; </li>
              <li> to analyse Platform usage; and </li>
              <li> to offer you Services. </li>
            </ul>
            <p className="fontWeit_pdd bg_hideColor">
              Aggregated Information: From time to time, we may collect general,
              non-personal, statistical information about the users of the
              Platform and Services. We collect this information to determine
              information regarding the use of our Platform, Services, and
              general information about our customers. We may also group this
              information into aggregate data to describe the use of our
              Platform and to provide general aggregated information. The
              aggregated data will not personally identify you or any users or
              visitors to the Platform.
            </p>
          </div>
          <div className="">
          <h2 className="mt-4"> TERMS OF USE </h2>
            <p className="fontWeit_pdd bg_hideColor">
              Effective 1 June 2019 <br /> <br />
              Our goal at Agreement Paper is to help you and your team do the
              best work of your lives. To do this, we need to keep our products
              and services running smoothly, quickly, and without distraction.
              For this to happen, we need help from you, our users, to not to
              misuse or abuse our products and services. <br /> <br />
              You’ll see the word “services” a lot throughout this page. That
              refers to all websites owned or operated by Agreement Paper, such
              as https://agreementpaper.com/ or https://app.agreementpaper.com/,
              and any related websites, sub-domains and pages. <br /> <br />
              What we won’t allow: <br />
            </p>

            <h6> &nbsp; Disruption </h6>
            <ul className="circleDisc1 bg_hideColor">
              <li>
                {" "}
                Compromising the integrity of our systems. This could include
                probing, scanning, or testing the vulnerability of any system or
                network that hosts our services,{" "}
              </li>
              <li>
                {" "}
                Tampering with, reverse-engineering, or hacking our services,
                circumventing any security or authentication measures, or
                attempting to gain unauthorised access to the services, related
                systems, networks, or data,{" "}
              </li>
              <li>
                {" "}
                Modifying, disabling, or compromising the integrity or
                performance of the services or related systems, network or data,{" "}
              </li>
              <li>
                {" "}
                Deciphering any transmissions to or from the servers running the
                services,{" "}
              </li>
              <li>
                {" "}
                Overwhelming or attempting to overwhelm our infrastructure by
                imposing an unreasonably large load on our systems that consume
                extraordinary resources (CPUs, memory, disk space, bandwidth,
                etc.), such as:{" "}
              </li>
            </ul>
            <div className="innerCircleDisc">
              <ul className="circle_circle1 bg_hideColor">
                <li>
                  {" "}
                  Using “robots,” “spiders,” “offline readers,” or other
                  automated systems to sends more request messages to our
                  servers than a human could reasonably send in the same period
                  of time by using a normal browser,{" "}
                </li>
                <li>
                  {" "}
                  Going far beyond the use parameters for any given service as
                  described in its corresponding documentation, or{" "}
                </li>
              </ul>
            </div>

            <ul className="circleDisc1 bg_hideColor">
              <li>
                {" "}
                Consuming an unreasonable amount of storage in a way that’s
                unrelated to the purposes for which the services were designed.{" "}
              </li>
            </ul>

            <h6> &nbsp; Wrongful activities </h6>
            <ul className="circleDisc1 bg_hideColor">
              <li>
                {" "}
                Misrepresentation of yourself, or disguising the origin of any
                content including by “spoofing”, “phishing”, manipulating
                headers or other identifiers, impersonating anyone else, or
                falsely implying any sponsorship or association with Agreement
                Paper or any associated third party,{" "}
              </li>
              <li>
                {" "}
                Using the services to violate the privacy of others, including
                publishing or posting other people’s private and confidential
                information without their express permission, or collecting or
                gathering other people’s personal information (including account
                names or information) from our services,{" "}
              </li>
              <li>
                {" "}
                Using our services to stalk, harass, or post direct, specific
                threats of violence against others,{" "}
              </li>
              <li>
                {" "}
                Using the Services for any illegal purpose, or in violation of
                any laws (including without limitation data, privacy, and export
                control laws),{" "}
              </li>
              <li>
                {" "}
                Accessing or searching any part of the services by any means
                other than our publicly supported interfaces (for example,
                “scraping”), or{" "}
              </li>
              <li>
                {" "}
                Using meta tags or any other “hidden text” including Agreement
                Paper’s or our suppliers’ product names or trademarks.{" "}
              </li>
            </ul>
            <h6> &nbsp; Inappropriate communications </h6>
            <ul className="circleDisc1 bg_hideColor">
              <li>
                {" "}
                Using the services to generate or send unsolicited
                communications, advertising, chain letters, or spam,{" "}
              </li>
              <li>
                {" "}
                Soliciting our users for commercial purposes, unless expressly
                permitted by Agreement Paper,{" "}
              </li>
              <li>
                {" "}
                Disparaging Agreement Paper or our partners, vendors, or
                affiliates,{" "}
              </li>
              <li>
                {" "}
                Promoting or advertising products or services other than your
                own without appropriate authorisation,{" "}
              </li>
              <li> Inappropriate content, </li>
              <li>
                {" "}
                Posting, uploading, sharing, submitting, or otherwise providing
                content that:{" "}
              </li>
            </ul>
            <div className="innerCircleDisc">
              <ul className="circle_circle1 bg_hideColor">
                <li>
                  {" "}
                  Infringes Agreement Paper’s or a third party’s intellectual
                  property or other rights, including any copyright, trademark,
                  patent, trade secret, moral rights, privacy rights of
                  publicity, or any other intellectual property right or
                  proprietary or contractual right{" "}
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
                  Encourages illegal or tortious conduct or that is otherwise
                  inappropriate,{" "}
                </li>
                <li>
                  {" "}
                  Attacks others based on their race, ethnicity, national
                  origin, religion, sex, gender, sexual orientation, disability,
                  or medical condition,{" "}
                </li>
                <li>
                  {" "}
                  Contains viruses, bots, worms, scripting exploits, or other
                  similar materials,{" "}
                </li>
                <li> Is intended to be inflammatory, or </li>
                <li>
                  {" "}
                  Could otherwise cause damage to Agreement Paper or any third
                  party.{" "}
                </li>
              </ul>
            </div>
            <p className="fontWeit_pdd bg_hideColor">
              In this Acceptable Use Policy, the term “content” means:
            </p>
            <div className="numberDisc">
              <ul className="circle_circle1 bg_hideColor">
                <li>
                  {" "}
                  Any information, data, text, software, code, scripts,
                  graphics, videos, messages, tags, interactive features, or
                  other materials that you post, upload, share, submit, or
                  otherwise provide in any manner to the services, and{" "}
                </li>
                <li>
                  {" "}
                  Any other materials, content, or data you provide to Agreement
                  Paper or use with the Services.{" "}
                </li>
              </ul>
            </div>

            <p className="fontWeit_pdd bg_hideColor">
              Without affecting any other remedies available to us, Agreement
              Paper may permanently or temporarily terminate or suspend a user’s
              account or access to the services without notice or liability if
              Agreement Paper (in its sole discretion) determines that a user
              has violated this Acceptable Use Policy.
            </p>
          </div>
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
