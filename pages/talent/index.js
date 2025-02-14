import React, { lazy, Suspense, useEffect, useState, startTransition } from 'react';
import Head from "next/head";
import Script from "next/script";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import axios from "axios";
import { BaseUrl } from "@/components/service/service";
import ErrorBoundary from "../ErrorBoundary";
var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}

const Footer = lazy(() => import("@/components/footer/Footer"));
const TalentHeader = lazy(() => import("@/components/header/TalentHeader"));
const HomePageForTalent = lazy(() => import('@/components/common/commonForTalent/Home'));
const Section1 = lazy(() => import('@/components/common/commonForTalent/Section1'));
const Section2 = lazy(() => import('@/components/common/commonForTalent/Section2'));
const Section3 = lazy(() => import('@/components/common/commonForEnterprises/Section5'));
const Section4 = lazy(() => import('@/components/common/commonForTalent/Section4'));


export default function Home() {
  const [resultsData, setResultsData] = useState([]);
  const [jobsData, setJobsData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);


  useEffect(() => {
    try {
      let params = `?limit=6`;

      axios
        .get(BaseUrl + `/resources/resources-profile/${params}`)
        .then((resp) => {
          if (resp?.data) {
            setResultsData(resp?.data?.results);
          }
        })
        .catch((error) => { });
    } catch (error) { }
  }, []);

  useEffect(() => {
    try {
      let params = `?limit=8`;
      axios
        .get(BaseUrl + `/job/public-job-post/${params}`)
        .then((resp) => {
          if (resp?.data) {
            setJobsData(resp?.data?.results);
          }
        })
        .catch((error) => { });
    } catch (error) { }
  }, []);

  useEffect(() => {
    const toggleDrawerBasedOnViewportWidth = () => {
      if (window && window?.innerWidth < 992) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };

    window &&
      window?.addEventListener("resize", toggleDrawerBasedOnViewportWidth);

    toggleDrawerBasedOnViewportWidth();

    return () => {
      window &&
        window?.removeEventListener("resize", toggleDrawerBasedOnViewportWidth);
    };
  }, []);

  return (
    <>
      <div>
        <Head>
          <title>
          Find Global Remote Talent | Remote Staffing Services | Agreementpaper
          </title>
          <meta
            name="description"
            content="Agreementpaper is the top job portal for remote talent worldwide. No fees, no markups, no middlemen—just the best employment and career opportunities for companies."
          />
          <meta property="og:locale" content="en_AU" />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="The FREE way to become the world’s best remote talent "
          />
          <meta
            property="og:description"
            content="Leading marketplace for freelancers, remote jobs & perfect hires. Streamline with Agreement Paper's end-to-end temp staffing, inc. contract management, Job to invoice & timesheets. Join now!"
          />
          <meta property="og:url" content="https://agreementpaper.com/" />
          <meta property="og:site_name" content="Agreement paper" />
          <meta
            property="og:image"
            content="https://agreementpaper.com/image/Contract%20Management%20Trends.png"
          />
          <meta property="og:image:type" content="image/png" />
          <link rel="canonical" href="https://www.agreementpaper.com/talent" />
        </Head>
      </div>
      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <div className="header_2">
            <div className="container">
              <TalentHeader />
              <HomePageForTalent />
            </div>
            <main>
              <Section1 jobsData={jobsData} />
              <Section2 resultsData={resultsData} />
              <Section3 />
              <Section4 />
            </main>
            <Footer />
          </div>
        </Suspense>
      </ErrorBoundary>

      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossorigin="anonymous"
      ></Script>
    </>
  );
}
