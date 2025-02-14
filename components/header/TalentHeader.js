import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import ProductDropDown from "../common/ProductDropDown";
import MobileViewDD from "../common/MobileViewDD";
import NavLinks from "../common/NavLinks";
import SvgForEnterTalent from "../common/SVG/SvgForEnterTalent";
import LoginRegister from "../common/LoginRegister";

const structData = {
  "@context": "http://schema.org/",
  "@type": "website",
  name: "Contract Management AI, Contingent labour, Spend Management Solution| Agreeementpaper",
  url: "https://agreementpaper.com",
  logo: "https://agreementpaper.com/_next/static/media/aggrement_onLgt_logo.d3cb1666.png",
  description:
    "Top job marketplace for freelancers, remote jobs & ideal hires. Get contingent labor solutions with Agreement Paper. #1 choice! Register now.",
  brand: {
    "@type": "Thing",
    name: "Agreement Paper",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "Australia",
  },
  offers: {
    "@type": "Offer",
    priceCurrency: "USD",
    price: "100",
  },
  sameAs: [
    "https://www.facebook.com/profile.php?id=100095324688755",
    "https://www.linkedin.com/company/agreementpaper-com/",
  ],
};

const TalentHeader = () => {
  const router = useRouter();

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "G-4F0QV2R06R");
  }, []);

  useEffect(() => {
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = "03838c24-284f-44fa-8de1-2702cc316c7b";
    (function () {
      const d = window && window.document;
      const s = d.createElement("script");
      s.src = "https://client.crisp.chat/l.js";
      s.async = 1;
      d.getElementsByTagName("head")[0].appendChild(s);
    })();
  }, []);



  return (
    <>
      <Head>
        <script
          key="structured-1"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structData) }}
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-4F0QV2R06R"
        ></script>
      </Head>

      <div className="container">
        <nav>
          <div className="head_logo">
            <Link href="/">
              <SvgForEnterTalent />
            </Link>
            <ProductDropDown />
          </div>
          <NavLinks type="talent" />
          <div className="head_menu">
            <LoginRegister type="enterprise" />
            <MobileViewDD type="talent" />
          </div>
        </nav>
      </div>
    </>
  );
};

export default TalentHeader;
