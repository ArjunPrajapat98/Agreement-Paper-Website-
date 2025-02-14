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

export default function AustralianCitizenship() {
  // useEffect(() => {
  //   const sidebar = document.querySelector("#sidebar");
  //   const sidebarToggler = document.querySelector(".sidebar_toggler");

  //   const handleSidebarToggle = () => {
  //     sidebar.classList.toggle("show");
  //   };

  //   const handleOutsideClick = (e) => {
  //     if (
  //       e.target.id !== "sidebar" &&
  //       e.target.className !== "sidebar_toggler"
  //     ) {
  //       sidebar.classList.remove("show");
  //     }
  //   };

  //   sidebarToggler.addEventListener("click", handleSidebarToggle);
  //   window.addEventListener("click", handleOutsideClick);

  //   return () => {
  //     sidebarToggler.removeEventListener("click", handleSidebarToggle);
  //     window.removeEventListener("click", handleOutsideClick);
  //   };
  // }, []);

  return (
    <>
      <div>
        <Head>
          <title>
            Australian Permanent Residency, Immigration and Citizenship -
            Agreement Paper
          </title>
          <meta charSet="utf-8"></meta>
          <meta
            name="description"
            content="Stay informed about Australian Permanent Residency, Immigration, and Citizenship updates with AgreementPaper. Your source for the latest information."
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
      </div>

      <div className="header">
        <Header />
        <div className="container">
          <div className="row header_bio">
            <div className="col-12 col-lg-6">
              <div className="head_details">
                <h2>Australian Permanent Residency and Citizenship</h2>
                <p>
                  An Australian permanent resident refers to an individual who
                  possesses a permanent visa but has not obtained citizenship
                  status.
                </p>
                {/* <Link href="/book-a-demo" className="a_list_noSty">
                  <button>Get a Demo today</button>
                </Link> */}
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

        <section className="container permit_color">
          <div className="workPermit_details">
            <h5>
              {" "}
              Australian permanent residents and Australian citizens are
              distinct statuses, each carrying its own set of unique
              characteristics. Explore the significant disparities between them,
              and gain insight into the benefits and obligations associated with
              Australian citizenship.{" "}
            </h5>

            <p className="mt-4 sameH_clss">Permanent residency visa</p>

            <div className="">
              <p className="">
                An Australian permanent resident refers to an individual who
                possesses a permanent visa but has not obtained citizenship
                status.
              </p>
              <p>
                As a permanent resident, one enjoys the freedom to reside,
                pursue employment, and engage in educational pursuits within
                Australia without any limitations.
              </p>
            </div>

            <p className="fontHthr_clss">
              Applying for a permanent residency visa{" "}
            </p>
            <div className="">
              <p className="">
                To become a permanent resident, you must satisfy specific
                eligibility criteria, which vary based on your circumstances.
                You can apply for permanent residency on humanitarian grounds,
                as a migrant, or as part of a family unit.
              </p>
              <p>
                For detailed guidance on the permanent residency application
                process, please refer to the Department of Home Affairs website
                through this external link.
              </p>
            </div>

            <p className="mt-4 sameH_clss">Australian citizenship</p>

            <div className="">
              <p>
                Being an Australian citizen allows you to proudly proclaim, 'I
                am Australian.' For numerous immigrants in Melbourne, making
                Australia their permanent home is a cherished aspiration,
                accompanied by a host of privileges and obligations.
              </p>
            </div>

            <p className="fontHthr_clss mt-4">
              {" "}
              Acquiring Australian citizenship signifies a lasting <br />{" "}
              dedication to Australia and its core values.{" "}
            </p>

            <div className="mt-4">
              <h5>General eligibility criteria for citizenship</h5>
              <p className="mt-4">
                Typically, individuals aged 18 and above seeking Australian
                citizenship must meet the following criteria:
              </p>
              <ol className="mt-4">
                <li className="mt-2">
                  {" "}
                  <a>
                    {" "}
                    Successfully complete a citizenship test (unless aged 60 or
                    older).
                  </a>{" "}
                </li>
                <li className="mt-2">
                  {" "}
                  <a>
                    {" "}
                    Hold permanent residency status at both the time of
                    application and decision.
                  </a>{" "}
                </li>
                <li className="mt-2">
                  {" "}
                  <a>Fulfill the residence requirement. </a>{" "}
                </li>
                <li className="mt-2">
                  {" "}
                  <a>
                    {" "}
                    Demonstrate a likelihood to reside in Australia or maintain
                    a close and ongoing association with the country.
                  </a>{" "}
                </li>
                <li className="mt-2">
                  {" "}
                  <a> Maintain good character.</a>{" "}
                </li>
              </ol>
              <p className="mt-2">
                Children interested in Australian citizenship should be aware
                that distinct requirements apply. For comprehensive information,
                please refer to the Department of Home Affairs website via the
                provided external link.
              </p>
            </div>

            <div className="mt-5">
              <p className="sameH_clss">Residence requirement</p>
              <p className="mt-4">
                Adults who obtained permanent residency on or after 1 July 2007
                must have maintained lawful residence in Australia for a
                continuous period of four years immediately before seeking
                Australian citizenship. This period encompasses:
              </p>
              <ol className="mt-4">
                <li className="mt-2">
                  {" "}
                  <a> 12 months as a permanent resident.</a>{" "}
                </li>
                <li className="mt-2">
                  {" "}
                  <a> Absences from Australia not exceeding 12 months.</a>{" "}
                </li>
                <li className="mt-2">
                  {" "}
                  <a>
                    Absences from Australia not exceeding three months within
                    the 12 months before applying.
                  </a>{" "}
                </li>
              </ol>
              <p className="mt-2">
                You can use the Citizenship Wizard, accessible through the
                Department of Home Affairs website via the provided external
                link, to assess whether you satisfy the residence requirement.
              </p>
            </div>

            <div className="mt-5">
              <p className="sameH_clss">Citizenship test</p>
              <p className="mt-4">
                If you meet the standard eligibility requirements, you'll need
                to successfully complete a test as part of the Australian
                citizenship application process. However, individuals falling
                into specific categories, such as those under 18 or over 60
                years old, or those with significant hearing, speech, or sight
                impairments, are exempt from taking the test. <br /> <br />
                The Australian citizenship test is specifically crafted to
                assist prospective Australian citizens in acquiring knowledge
                about:
              </p>
              <ol className="mt-4">
                <li className="mt-2">
                  {" "}
                  <a> Australia's values</a>{" "}
                </li>
                <li className="mt-2">
                  {" "}
                  <a> Traditions</a>{" "}
                </li>
                <li className="mt-2">
                  {" "}
                  <a>History</a>{" "}
                </li>
                <li className="mt-2">
                  {" "}
                  <a>National symbols</a>{" "}
                </li>
              </ol>
              <p className="mt-2">
                Successfully completing this test is a vital step in ensuring
                that you possess the necessary understanding to actively engage
                in the Australian community as a citizen, enabling you to fully
                embrace the opportunities available in the country. It plays a
                role in fostering social cohesion and facilitating seamless
                integration into the community.
              </p>
            </div>

            <div className="mt-2">
              <strong>To be eligible to take the test, you must:</strong>
              <ol className="mt-4">
                <li className="mt-2">
                  {" "}
                  <a> Hold Australian permanent residency status.</a>{" "}
                </li>
                <li className="mt-2">
                  {" "}
                  <a>
                    {" "}
                    Cooperate with the department in confirming your identity
                    during the test registration process.
                  </a>{" "}
                </li>
                <li className="mt-2">
                  {" "}
                  <a>
                    {" "}
                    Consent to the department capturing a photograph of you or
                    provide one yourself.
                  </a>{" "}
                </li>
              </ol>
            </div>

            <div className="mt-5">
              <p className="sameH_clss"> Privileges of Australian citizens </p>
              <p>To be eligible to take the test, you must:</p>
              <ol className="mt-4">
                <li className="mt-2">
                  {" "}
                  <a> Reside in Australia.</a>{" "}
                </li>
                <li className="mt-2">
                  {" "}
                  <a>
                    {" "}
                    Apply for an Australian passport, allowing you to travel in
                    and out of Australia without the need for a resident return
                    visa.
                  </a>{" "}
                </li>

                <li className="mt-2">
                  {" "}
                  <a>
                    {" "}
                    Seek assistance from Australian diplomatic representatives
                    when abroad.
                  </a>{" "}
                </li>
                <li className="mt-2">
                  {" "}
                  <a> Pursue employment in the public service.</a>{" "}
                </li>
                <li className="mt-2">
                  {" "}
                  <a> Serve in the armed forces.</a>{" "}
                </li>
                <li className="mt-2">
                  {" "}
                  <a>
                    {" "}
                    Register your children born overseas after you've become an
                    Australian citizen as citizens by descent.
                  </a>{" "}
                </li>
                <li className="mt-2">
                  {" "}
                  <a> Qualify to stand for Parliament.</a>{" "}
                </li>
                <li className="mt-2">
                  {" "}
                  <a>
                    {" "}
                    Exercise your right to vote in the election of parliamentary
                    members.
                  </a>{" "}
                </li>
              </ol>
            </div>

            <div className="mt-5">
              <p className="sameH_clss">
                Responsibilities of Australian citizens
              </p>
              <p className="mt-4">
                Citizenship carries certain duties and obligations. These
                include:
              </p>
              <ol className="mt-4">
                <li className="mt-2">
                  {" "}
                  <a> Adhering to Australian laws.</a>{" "}
                </li>
                <li className="mt-2">
                  {" "}
                  <a>
                    {" "}
                    Being prepared to defend Australia in times of necessity.
                  </a>{" "}
                </li>
                <li className="mt-2">
                  {" "}
                  <a>Serving on a jury if called upon.</a>{" "}
                </li>
                <li className="mt-2">
                  {" "}
                  <a>
                    Enrolling on both federal and state/territory electoral
                    registers.
                  </a>{" "}
                </li>
                <li className="mt-2">
                  {" "}
                  <a>
                    Participating in the electoral process by voting in
                    elections.
                  </a>{" "}
                </li>
              </ol>
              <p className="mt-2 mb-4">
                For further details on the privileges and responsibilities
                associated with Australian citizenship, please visit the
                Department of Home Affairs website through the provided external
                link.
              </p>
            </div>
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
