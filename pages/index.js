import React, { lazy, Suspense, useEffect, useState, startTransition } from 'react';
import Head from "next/head";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ErrorBoundary from "./ErrorBoundary";

const Footer = lazy(() => import("@/components/footer/Footer"));
const Header = lazy(() => import("@/components/header/Header"));
const HomePageForEnterPrise = lazy(() => import('@/components/common/commonForEnterprises/Home'));
const Section1 = lazy(() => import('@/components/common/commonForEnterprises/Section1'));
const Section2 = lazy(() => import('@/components/common/commonForEnterprises/Section2'));
const Section3 = lazy(() => import('@/components/common/commonForEnterprises/Section3'));
const Section4 = lazy(() => import('@/components/common/commonForEnterprises/Section4'));
const Section5 = lazy(() => import('@/components/common/commonForEnterprises/Section5'));
const Section6 = lazy(() => import('@/components/common/commonForEnterprises/Section6'));
const Section7 = lazy(() => import('@/components/common/commonForEnterprises/Section7'));
const Section8 = lazy(() => import('@/components/common/commonForEnterprises/Section8'));
const SectionBadges = lazy(() => import('@/components/common/commonForEnterprises/SectionBadges'));
const SectionTabs = lazy(() => import('@/components/common/commonForEnterprises/SectionTabs'));
const CookieBanner = lazy(() => import('@/components/cookies/CookieBanner'));


var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}

export default function Home() {

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const toggleDrawerBasedOnViewportWidth = () => {
      if (window && window.innerWidth < 992) {
        startTransition(() => {
          setIsOpen(false);
        });
      } else {
        startTransition(() => {
          setIsOpen(true);
        });
      }
    };

    if (window) {
      window.addEventListener("resize", toggleDrawerBasedOnViewportWidth);
    }

    toggleDrawerBasedOnViewportWidth();

    return () => {
      if (window) {
        window.removeEventListener("resize", toggleDrawerBasedOnViewportWidth);
      }
    };
  }, []);

  return (
    <>
      <div>
        <Head>
          <title>
            {/* Contract Management AI, Contingent labour, Spend Management Solution | Agreeementpaper */}
            Agreementpaper - Gen AI Contract Management Software and Solutions
          </title>
          <meta name="yandex-verification" content="cc79e6893068dd24" />
          <meta
            name="description"
            content="Agreementpaper is a premier Contract Management Software and solutions, designed for both B2B and B2C vendors and enterprises. Schedule your demo to know more."
          />
          <meta property="og:locale" content="en_AU" />
          <meta property="og:type" content="website" /> 
          <meta
            property="og:title"
            content="Empower your Business with better AI-powered copilot Contract Management Solution"
          />
          <meta
            property="og:description"
            content="Leading marketplace for freelancers, remote jobs & perfect hires. Streamline with Agreement Paper's end-to-end temp staffing, inc. contract management, Job to invoice & timesheets. Join now!"
          />
          <meta property="og:url" content="https://agreementpaper.com/" />
          <meta property="og:site_name" content="Agreement paper" />
          <meta
            property="og:image"
            content="https://agreementpaper.com/image/laptopp_img.svg"
          />
          <meta property="og:image:type" content="image/png" />
          <meta name="p:domain_verify" content="f60876df14ea548c9b44e13ee208671f" />
          <link rel="canonical" href="https://www.agreementpaper.com/" />
        </Head>
      </div>
      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <div className="header">
            <Header />
            <HomePageForEnterPrise />
          </div>
          <main>
            <CookieBanner />
            <Section1 />
            <Section2 />
            <SectionTabs />
            <Section3 isOpen={isOpen} />
            <Section4 />
            <SectionBadges />
            <Section5 />
            <Section6 />
            <Section7 />
            <Section8 />
          </main>
          <Footer />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}
