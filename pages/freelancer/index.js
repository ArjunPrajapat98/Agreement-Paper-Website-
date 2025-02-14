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
          <title>Freelancer</title>
          <meta charSet="utf-8"></meta>
          <meta name="description" content="Freelancer" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="canonical" href="https://www.agreementpaper.com/freelancer" />
        </Head>
      </div>

      <div className="header">
        <Header />
        <div className="container">
          <div className="row header_bio">
            <div className="col-12 col-lg-6">
              <div className="head_details">
                <h2>
                  Empower your Business with better AI-powered copilot Contract
                  Management Solution
                </h2>
                <p>
                  AI-powered copilot that mitigate risk, increase compliance and
                  Operations for Global teams
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

        <section className="workPermitMargin permit_color">
          <div className="workPermit_details">
            <h4> Freelance </h4>
            {/* <div className="srchProf_byName_bx newBox_shaddow">
              <input
                placeholder="Search the glossary"
                type="text"
                name="search"
              />
              <button className="srcByName_inputField">
                <span>
                  <i className="fa-solid fa-magnifying-glass"></i>
                </span>
                Search
              </button>
            </div> */}
            <div className="mt-5">
              <strong> freelance FAQs </strong> <br />
              <br />
              <strong>
                {" "}
                <ul className="circleUl">
                  <li> The best talent </li>{" "}
                </ul>
              </strong>
              <p className="mt-4">
                {" "}
                Discover reliable professionals by exploring their portfolios
                and immersing yourself in the feedback shared on their profiles.
              </p>
            </div>

            <div className="mt-5">
              <strong>
                {" "}
                <ul className="circleUl">
                  <li> Fast bids </li>{" "}
                </ul>
              </strong>
              <p className="mt-4">
                {" "}
                Get quick, no-obligation quotes from skilled freelancers. 80% of
                jobs receive bids within 60 seconds. Your idea is just moments
                from reality.
              </p>
            </div>
            <div className="mt-5">
              <strong>
                {" "}
                <ul className="circleUl">
                  <li> Quality work </li>{" "}
                </ul>
              </strong>
              <p className="mt-4">
                With Freelancer's talent pool of over 60 million professionals
                at your fingertips, you'll find quality talent to get what you
                need done.
              </p>
              <p className="mt-4">
                Agreement Paper helps a variety of highly qualified freelancers
                find work. Professionals who specialize in things like software
                development, project management, and business consulting can
                particularly benefit from this site. However, note that
                Agreement Paper has a rigorous one-step selection process for
                identifying the best workers in any field.
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
