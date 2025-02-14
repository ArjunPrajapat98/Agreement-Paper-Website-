import Head from "next/head";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Link from "next/link";
import React, { useEffect } from "react";

var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import dynamic from "next/dynamic";
import Section1 from "@/components/common/commonForEnterprises/Section1";
import Section2 from "@/components/common/commonForEnterprises/Section2";
import Section4 from "@/components/common/commonForEnterprises/Section4";
import Section5 from "@/components/common/commonForEnterprises/Section5";
import Section8 from "@/components/common/commonForEnterprises/Section8";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const index = () => {
  useEffect(() => {
    const sidebar = document?.querySelector("#sidebar");
    const sidebarToggler = document?.querySelector(".sidebar_toggler");

    const handleSidebarToggle = () => {
      sidebar?.classList?.toggle("show");
    };

    const handleOutsideClick = (e) => {
      if (
        e?.target?.id !== "sidebar" &&
        e?.target?.className !== "sidebar_toggler"
      ) {
        sidebar?.classList?.remove("show");
      }
    };

    sidebarToggler?.addEventListener("click", handleSidebarToggle);
    window?.addEventListener("click", handleOutsideClick);

    return () => {
      sidebarToggler?.removeEventListener("click", handleSidebarToggle);
      window?.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <>
      <div>
        
      <Head>
          <title>
            Gen AI Contract Management Software Pricing | Agreementpaper{" "}
          </title>
          <meta
            name="description"
            content="Agreementpaper's Contract Management Software features affordable plans with unlimited users, 24/7 support, financial insights, and compliance. Start now. "
          />
          <link rel="canonical" href="https://www.agreementpaper.com/enterprise_pricing" />
        </Head>
      </div>

      <div className="header">
        <Header />
        <div className="container">
          <div className="row header_bio">
            <div className="col-12 col-lg-6">
              <div className="head_details">
                <h2>
                  The only global-first HR platform for managing everything
                </h2>
                <p>
                  Choose from a variety of plug-and-play products to take any
                  challenge head on, no matter your team size or location.
                </p>
                <div className="_demoBtn">
                  <Link href="/book-a-demo" className="headB">
                    <span>Get a Demo today</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 ">
              <div className="_globe">
                <img src="image/circRota_img.png" alt="Contract Lifecycle Management" />
              </div>
           
            </div>
          </div>
        </div>
      </div>

      <main>

        <section className="img_section">
          <Section1 />
        </section>

        <div>
          <section className="priceSec">
            <div className="container">
              <div className="esGridfy">
                <div className="col-12">
                  <div className="prcIng_uppHead">
                    <h1 data-aos="fade-up" data-aos-duration="1500">
                      Pricing
                    </h1>
                    <p data-aos="fade-up" data-aos-duration="1500">
                      Get the power of customization you need to manage your
                      business
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="prcContain_tabBx">
              <div className="container">
                <div
                  className="col-12"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <div className="agencY_contentBx">
                    <div className="emergBx midEmerg">
                      <h6> Free </h6>
                      {/* <p className="emerHrd">
                        Free
                      </p> */}

                      <div className="emrBotm_ct">
                        <div>
                          <ul>
                            <li>AI Assisted Contract Review</li>
                            <li>AI Assisted Contract Draft</li>
                            <li>
                            AI Assisted Holistic Contract Review
                            </li>
                            <li>Contracts creation and approval</li>
                            <li>10 eSigns </li>
                            <li>Unlimited Collaboration</li>
                          </ul>
                        </div>

                        <div className="trailBtn">
                          <Link href="https://app.agreementpaper.com/login">
                            {" "}
                            Free
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="emergBx">
                      <h6> Pro </h6>
                      {/* <p className="emerHrd">
                        Pro
                      </p> */}

                      <div className="emrBotm_ct">
                        <div>
                          <ul>
                            <li>AI Assisted Contract Review</li>
                            <li>AI Assisted Contract Draft</li>
                            <li>
                            AI Assisted Holistic Contract Review
                            </li>
                            <li>Contracts creation and approval</li>
                            <li>Unlimited eSigns ( Fair value to 30 per month)</li>
                            <li>Unlimited Collaboration</li>
                            <li>
                            Email Notifications
                            </li>
                            <li>Role based user management</li>
                            <li>Workflows for internal approvals</li>
                          </ul>
                        </div>

                        <div className="trailBtn">
                          <Link href="https://app.agreementpaper.com/login">
                            {" "}
                            $ 19.00
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="emergBx midEmerg">
                      <h6> Team </h6>
                      {/* <p className="emerHrd">
                       Team
                      </p> */}

                      <div className="emrBotm_ct">
                        <div>
                           <ul>
                            <li>AI Assisted Contract Review</li>
                            <li>AI Assisted Contract Draft</li>
                            <li>
                            AI Assisted Holistic Contract Review
                            </li>
                            <li>Contracts creation and approval</li>
                            <li>Unlimited eSigns ( Fair value to 30 per month)</li>
                            <li>Unlimited Collaboration</li>
                            <li>
                            Email Notifications
                            </li>
                            <li>
                            Role based user management
                            </li>
                            <li>
                            Workflows for internal approvals
                            </li>
                            <li>
                            Customizable alerts/notifications
                            </li>
                            <li>
                            Business template library
                            </li>
                            <li>
                            Job posting 
                            </li>
                            <li>
                            Timesheet and approval
                            </li>
                            <li>
                            Invoicing
                            </li>
                          </ul>
                        </div>

                        <div className="trailBtn">
                          <Link href="/book-a-demo">
                            {" "}
                            $ 39.00{" "}
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="emergBx">
                      <h6>Enterprise</h6>
                      {/* <p className="emerHrd">
                      Enterprise
                      </p> */}

                      <div className="emrBotm_ct">
                        <div>
                          <ul>
                            <li>AI Assisted Contract Review</li>
                            <li>AI Assisted Contract Draft</li>
                            <li>
                            AI Assisted Holistic Contract Review
                            </li>
                            <li>Contracts creation and approval</li>
                            <li>Unlimited eSigns ( Fair value to 30 per month)</li>
                            <li>Unlimited Collaboration</li>
                            <li>
                            Email Notifications
                            </li>
                            <li>
                            Role based user management
                            </li>
                            <li> Workflows for internal approvals </li>
                            <li> Customizable alerts/notifications </li>
                            <li> Business template library </li>
                            <li> Custom branding/Priority support </li>
                            <li> Job posting  </li>
                            <li> Timesheet and approval </li>
                            <li> Invoicing </li>
                            <li> Advance user management </li>
                            <li> Advance eSign settings </li>
                            <li> Customizable platform security </li>
                            <li> AI Assisted Contract Review </li>
                          </ul>
                        </div>

                        <div className="trailBtn">
                          <Link href="/book-a-demo"> $ 59.00 </Link>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Section2 />

        <section>
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-6">
                <div className="sec4_img">
                  <img src="image/sec_4_img.png" alt="Smart contract management software" />
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="sec4_details">
                  <h4>For Enterprise</h4>
                  <p className="new_fsInd">We understand your Contract Risks</p>
                  <p className="new_fsInd">
                    Get Contract Clauses Risk identified, Monitored &amp;
                    Mitigated
                  </p>
                  <div className="sec4_data">
                    <div className="sec4_4Data">
                      <h6>Hire the best technical talent</h6>
                      <p>
                        Agreementpaper focus on identifying Contract Risk early
                        and help you before you signing it to give you piece of
                        mind{" "}
                      </p>
                    </div>
                    <div className="sec4_4Data">
                      <h6>Get expertly matched</h6>
                      <p>
                        It is being built on thousands of Contracts, being
                        signed every day in Supply chain, Finance and HR
                        functions to identify the usual Contract Terms and
                        conditions to mitigate business Risks
                      </p>
                    </div>
                  </div>
                  <div className="sec4_data">
                    <div className="sec4_4Data">
                      <h6>Protect your budget</h6>
                      <p>
                        In word of SAAS, Agreementpaper.com identify Contract
                        clauses for Data Privacy, Indemnity and Data leakage as
                        well
                      </p>
                    </div>
                    <div className="sec4_4Data">
                      <h6>Make compliance easy</h6>
                      <p>
                        AI model can be fine tuned with existing Contracts which
                        has been signed in previous years on Enterprise
                        solution. All data stays with you.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="trailBtn mt-5">
                    <Link href="https://app.agreementpaper.com/signup_enterprise">
                      {" "}
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Section4 />
        <Section5 />
   

        <section className="sec_7">
          <div className="container">
            <div className="row sec_7_row">
              <div className="col-12 col-md-6">
                <div className="sec_7_part1">
                  <h5>Find the talent needed to get your business growing</h5>
                  <p>
                    We know how important quality talent is. That’s why we only
                    accept top tier talent–so that you can spend less time
                    vetting and more time innovating.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="sec_7_right_bx">
                  <div className="sec_7_bx_1">
                    <img src="image/sec_7_pic1.png" alt="GetApp" />
                    <div className="star_bx">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={110}
                        height={18}
                        viewBox="0 0 110 18"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_13_2113)">
                          <path
                            d="M9.01096 0.130859C8.7817 0.190945 8.57389 0.341543 8.45245 0.582395C8.57415 0.341543 8.7817 0.1912 9.01096 0.130859Z"
                            fill="#FFDC69"
                          />
                          <path
                            d="M18.02 6.24792L12.5045 5.46502L10.0378 0.582776C9.87583 0.261639 9.56046 0.101074 9.24509 0.101074V15.2643L14.178 17.7978C14.8265 18.131 15.5847 17.593 15.4609 16.8873L14.519 11.5211L18.5099 7.7209C19.0347 7.2213 18.7452 6.3507 18.02 6.24792Z"
                            fill="#FFDC69"
                          />
                          <path
                            d="M4.31208 17.7983L9.24496 15.2648V0.101562C9.16618 0.101562 9.08741 0.111789 9.01072 0.131732C8.78146 0.191817 8.57365 0.342415 8.45221 0.583268L7.3208 2.82304L5.98578 5.46551L4.48874 5.67798L0.470577 6.24841C0.243928 6.28062 0.0599403 6.3875 -0.0701339 6.53503C-0.0960441 6.56443 -0.120123 6.59562 -0.141584 6.6281C-0.184506 6.69304 -0.219053 6.76284 -0.243131 6.83622C-0.25517 6.87278 -0.265115 6.91012 -0.272182 6.94796C-0.27951 6.9858 -0.283958 7.0244 -0.286052 7.06276C-0.292595 7.19085 -0.268779 7.32099 -0.214342 7.44372C-0.170373 7.54293 -0.107298 7.63753 -0.0190988 7.72139L3.97185 11.5216L3.13644 16.2791L3.02966 16.8876C3.02469 16.9155 3.02364 16.9426 3.02129 16.9697C3.01972 16.9855 3.01684 17.0019 3.01631 17.0177C3.01527 17.0604 3.01736 17.1021 3.02233 17.143C3.09326 17.7139 3.74468 18.0898 4.31208 17.7983Z"
                            fill="#FFC864"
                          />
                          <path
                            d="M22.5908 7.06255C22.5929 7.02394 22.5974 6.98559 22.6047 6.94775C22.5976 6.98534 22.5929 7.02369 22.5908 7.06255Z"
                            fill="#FFDC69"
                          />
                          <path
                            d="M31.8881 0.130859C31.6589 0.190945 31.451 0.341543 31.3293 0.582395C31.4513 0.341543 31.6589 0.1912 31.8881 0.130859Z"
                            fill="#FFDC69"
                          />
                          <path
                            d="M27.3238 5.68359L23.3478 6.24788C23.1664 6.27345 23.0125 6.3476 22.8916 6.45141C23.0125 6.3476 23.1664 6.27396 23.3478 6.24839L27.3238 5.68359Z"
                            fill="#FFDC69"
                          />
                          <path
                            d="M25.8936 17.0178C25.8938 17.0022 25.897 16.9858 25.8985 16.9697C25.8972 16.9858 25.8941 17.0019 25.8936 17.0178Z"
                            fill="#FFDC69"
                          />
                          <path
                            d="M22.8575 7.72103C22.7693 7.63717 22.7062 7.54282 22.6622 7.44336C22.7062 7.54231 22.7695 7.63717 22.8575 7.72103L26.8484 11.5212L26.0133 16.2787L26.8487 11.5207L22.8575 7.72103Z"
                            fill="#FFDC69"
                          />
                          <path
                            d="M40.8969 6.24792L35.3815 5.46502L32.9148 0.582776C32.7525 0.261639 32.4374 0.101074 32.122 0.101074V15.2643L37.0549 17.7978C37.7035 18.131 38.4617 17.593 38.3379 16.8873L37.3959 11.5211L41.3869 7.7209C41.9116 7.2213 41.6222 6.3507 40.8969 6.24792Z"
                            fill="#FFDC69"
                          />
                          <path
                            d="M27.1896 17.7983L32.1225 15.2648V0.101562C32.0437 0.101562 31.9649 0.111789 31.8883 0.131732C31.659 0.191817 31.4512 0.342415 31.3295 0.583268L30.4425 2.33878L28.8628 5.46577L27.3236 5.68438L23.3476 6.24892C23.1662 6.27449 23.0123 6.34813 22.8914 6.45193C22.831 6.50384 22.7789 6.56341 22.7357 6.62835C22.6711 6.72551 22.6266 6.83494 22.6048 6.94847C22.5975 6.98631 22.5931 7.02491 22.591 7.06327C22.5842 7.19136 22.6082 7.32151 22.6627 7.44423C22.7066 7.54344 22.7697 7.63804 22.8579 7.7219L26.8489 11.5221L26.0135 16.2801L25.9067 16.8886C25.9017 16.9165 25.9007 16.9436 25.8983 16.9707C25.8973 16.9865 25.8939 17.0029 25.8933 17.0187C25.8923 17.0614 25.8944 17.1031 25.8994 17.144C25.9708 17.714 26.6222 18.0898 27.1896 17.7983Z"
                            fill="#FFC864"
                          />
                          <path
                            d="M63.774 6.24792L58.2586 5.46502L55.7919 0.582776C55.6296 0.261639 55.3145 0.101074 54.9991 0.101074V15.2643L59.932 17.7978C60.5805 18.131 61.3387 17.593 61.2149 16.8873L60.273 11.5211L64.264 7.7209C64.789 7.2213 64.4992 6.3507 63.774 6.24792Z"
                            fill="#FFDC69"
                          />
                          <path
                            d="M45.5554 6.72848C45.5892 6.65868 45.6329 6.59373 45.6847 6.53467C45.6329 6.59322 45.5894 6.65868 45.5554 6.72848Z"
                            fill="#FFDC69"
                          />
                          <path
                            d="M54.7009 0.158203C54.4988 0.228516 54.3167 0.365816 54.2073 0.582889C54.3169 0.366071 54.4986 0.228516 54.7009 0.158203Z"
                            fill="#FFDC69"
                          />
                          <path
                            d="M45.7352 7.72103C45.647 7.63717 45.5839 7.54282 45.5399 7.44336C45.5841 7.54231 45.6472 7.63717 45.7352 7.72103L49.7261 11.5212L48.891 16.2787L49.7264 11.5207L45.7352 7.72103Z"
                            fill="#FFDC69"
                          />
                          <path
                            d="M45.4688 7.06255C45.4708 7.02394 45.4753 6.98559 45.4826 6.94775C45.4753 6.98534 45.4708 7.02369 45.4688 7.06255Z"
                            fill="#FFDC69"
                          />
                          <path
                            d="M50.067 17.7983L54.9999 15.2648V0.101562C54.8976 0.101562 54.7979 0.124574 54.7008 0.158324C54.4987 0.228636 54.3166 0.365936 54.2072 0.58301L53.3202 2.33852L51.7405 5.46551L50.2437 5.67798L46.2255 6.24841C45.9989 6.28062 45.8149 6.3875 45.6848 6.53503C45.6327 6.59409 45.5896 6.65954 45.5555 6.72883C45.5215 6.79812 45.4969 6.87227 45.4828 6.94796C45.4754 6.9858 45.471 7.0244 45.4689 7.06275C45.4621 7.19085 45.4862 7.32099 45.5406 7.44372C45.5846 7.54293 45.6477 7.63753 45.7359 7.72139L49.7268 11.5216L48.8914 16.2796L48.7846 16.8881C48.7796 16.916 48.7786 16.9431 48.7762 16.9702C48.7752 16.986 48.7718 17.0024 48.7713 17.0182C48.7702 17.0609 48.7723 17.1026 48.7773 17.1435C48.848 17.7139 49.4996 18.0898 50.067 17.7983Z"
                            fill="#FFC864"
                          />
                          <path
                            d="M68.6133 7.72103C68.5251 7.63717 68.4621 7.54282 68.4181 7.44336C68.4621 7.54231 68.5254 7.63717 68.6133 7.72103L72.6043 11.5212L71.7691 16.2787L72.6043 11.5207L68.6133 7.72103Z"
                            fill="#FFDC69"
                          />
                          <path
                            d="M68.3895 6.83557C68.4139 6.76218 68.4482 6.69213 68.4911 6.62744C68.4479 6.69238 68.4139 6.76218 68.3895 6.83557Z"
                            fill="#FFDC69"
                          />
                          <path
                            d="M68.3467 7.06255C68.3488 7.02394 68.3532 6.98559 68.3606 6.94775C68.3532 6.98534 68.3488 7.02369 68.3467 7.06255Z"
                            fill="#FFDC69"
                          />
                          <path
                            d="M77.6433 0.130859C77.414 0.190945 77.2062 0.341543 77.0845 0.582395C77.2065 0.341543 77.414 0.1912 77.6433 0.130859Z"
                            fill="#FFDC69"
                          />
                          <path
                            d="M86.6524 6.24792L81.1372 5.46502L78.6705 0.582776C78.5085 0.261639 78.1931 0.101074 77.8778 0.101074V15.2643L82.8106 17.7978C83.4592 18.131 84.2171 17.593 84.0933 16.8873L83.1514 11.5211L87.1424 7.7209C87.6671 7.2213 87.3774 6.3507 86.6524 6.24792Z"
                            fill="#FFDC69"
                          />
                          <path
                            d="M72.945 17.7983L77.8778 15.2648V0.101562C77.7991 0.101562 77.7203 0.111789 77.6436 0.131732C77.4143 0.191817 77.2068 0.342415 77.0848 0.583268L75.9534 2.82304L74.6184 5.46551L73.1216 5.67798L69.1035 6.24841C68.8768 6.28062 68.6928 6.3875 68.5627 6.53503C68.5368 6.56443 68.513 6.59562 68.4913 6.6281C68.4484 6.69304 68.4138 6.76284 68.3898 6.83622C68.3777 6.87278 68.3678 6.91011 68.3607 6.94796C68.3534 6.9858 68.3489 7.0244 68.3468 7.06275C68.34 7.19085 68.3641 7.32099 68.4185 7.44372C68.4625 7.54293 68.5256 7.63753 68.6138 7.72139L72.6047 11.5216L71.7696 16.2796L71.6628 16.8881C71.6578 16.916 71.6568 16.9431 71.6544 16.9702C71.6534 16.986 71.65 17.0024 71.6495 17.0182C71.6484 17.0609 71.6502 17.1026 71.6555 17.1435C71.7261 17.7139 72.3776 18.0898 72.945 17.7983Z"
                            fill="#FFC864"
                          />
                          <path
                            d="M102.48 7.52791L101.943 6.46377L100.755 4.11328L99.5679 6.46377L99.0301 7.52791L97.828 7.69871L95.1729 8.07558L97.0944 9.90525L97.9641 10.7337L97.7589 11.9029L97.3051 14.4863L99.6802 13.2664L100.755 12.7144L101.83 13.2664L104.205 14.4863L103.751 11.9029L103.546 10.7337L104.416 9.90525L106.338 8.07558L103.682 7.69871L102.48 7.52791Z"
                            fill="white"
                          />
                          <path
                            d="M109.53 6.24743L104.015 5.46479L101.548 0.582291C101.386 0.261155 101.071 0.100586 100.755 0.100586C100.44 0.100586 100.125 0.261155 99.9627 0.582291L97.496 5.46479L91.9805 6.24743C91.2553 6.35047 90.9661 7.22107 91.4903 7.72067L95.4813 11.5214L94.5394 16.8879C94.4415 17.4463 94.8956 17.8994 95.4106 17.8994C95.5467 17.8994 95.6867 17.8677 95.8221 17.7984L100.755 15.2648L105.688 17.7984C105.823 17.8677 105.964 17.8994 106.099 17.8994C106.615 17.8994 107.069 17.446 106.971 16.8879L106.029 11.5214L110.02 7.72067C110.545 7.22107 110.255 6.35047 109.53 6.24743ZM104.416 9.90496L103.546 10.7334L103.752 11.9031L104.206 14.4863L101.831 13.2667L100.755 12.7146L99.6803 13.2667L97.3055 14.4863L97.7593 11.9031L97.9647 10.7334L97.0948 9.90496L95.1735 8.0753L97.8286 7.69843L99.0307 7.52814L99.568 6.46399L100.755 4.11351L101.943 6.46399L102.48 7.52814L103.683 7.69843L106.338 8.0753L104.416 9.90496Z"
                            fill="#FFC864"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_13_2113">
                            <rect width={110} height={18} fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <p>4.8/5</p>
                    </div>
                  </div>
                  <div className="sec_7_bx_1">
                    <img src="image/finRat2 - Copy.png" alt="Capterra" />
                    <div className="star_bx_2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={110}
                        height={18}
                        viewBox="0 0 110 18"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_13_2113)">
                          <path
                            d="M9.01096 0.130859C8.7817 0.190945 8.57389 0.341543 8.45245 0.582395C8.57415 0.341543 8.7817 0.1912 9.01096 0.130859Z"
                            fill="#FFDC69"
                          />
                          <path
                            d="M18.02 6.24792L12.5045 5.46502L10.0378 0.582776C9.87583 0.261639 9.56046 0.101074 9.24509 0.101074V15.2643L14.178 17.7978C14.8265 18.131 15.5847 17.593 15.4609 16.8873L14.519 11.5211L18.5099 7.7209C19.0347 7.2213 18.7452 6.3507 18.02 6.24792Z"
                            fill="#FFDC69"
                          />
                          <path
                            d="M4.31208 17.7983L9.24496 15.2648V0.101562C9.16618 0.101562 9.08741 0.111789 9.01072 0.131732C8.78146 0.191817 8.57365 0.342415 8.45221 0.583268L7.3208 2.82304L5.98578 5.46551L4.48874 5.67798L0.470577 6.24841C0.243928 6.28062 0.0599403 6.3875 -0.0701339 6.53503C-0.0960441 6.56443 -0.120123 6.59562 -0.141584 6.6281C-0.184506 6.69304 -0.219053 6.76284 -0.243131 6.83622C-0.25517 6.87278 -0.265115 6.91012 -0.272182 6.94796C-0.27951 6.9858 -0.283958 7.0244 -0.286052 7.06276C-0.292595 7.19085 -0.268779 7.32099 -0.214342 7.44372C-0.170373 7.54293 -0.107298 7.63753 -0.0190988 7.72139L3.97185 11.5216L3.13644 16.2791L3.02966 16.8876C3.02469 16.9155 3.02364 16.9426 3.02129 16.9697C3.01972 16.9855 3.01684 17.0019 3.01631 17.0177C3.01527 17.0604 3.01736 17.1021 3.02233 17.143C3.09326 17.7139 3.74468 18.0898 4.31208 17.7983Z"
                            fill="#FFC864"
                          />
                          <path
                            d="M22.5908 7.06255C22.5929 7.02394 22.5974 6.98559 22.6047 6.94775C22.5976 6.98534 22.5929 7.02369 22.5908 7.06255Z"
                            fill="#FFDC69"
                          />
                          <path
                            d="M31.8881 0.130859C31.6589 0.190945 31.451 0.341543 31.3293 0.582395C31.4513 0.341543 31.6589 0.1912 31.8881 0.130859Z"
                            fill="#FFDC69"
                          />
                          <path
                            d="M27.3238 5.68359L23.3478 6.24788C23.1664 6.27345 23.0125 6.3476 22.8916 6.45141C23.0125 6.3476 23.1664 6.27396 23.3478 6.24839L27.3238 5.68359Z"
                            fill="#FFDC69"
                          />
                          <path
                            d="M25.8936 17.0178C25.8938 17.0022 25.897 16.9858 25.8985 16.9697C25.8972 16.9858 25.8941 17.0019 25.8936 17.0178Z"
                            fill="#FFDC69"
                          />
                          <path
                            d="M22.8575 7.72103C22.7693 7.63717 22.7062 7.54282 22.6622 7.44336C22.7062 7.54231 22.7695 7.63717 22.8575 7.72103L26.8484 11.5212L26.0133 16.2787L26.8487 11.5207L22.8575 7.72103Z"
                            fill="#FFDC69"
                          />
                          <path
                            d="M40.8969 6.24792L35.3815 5.46502L32.9148 0.582776C32.7525 0.261639 32.4374 0.101074 32.122 0.101074V15.2643L37.0549 17.7978C37.7035 18.131 38.4617 17.593 38.3379 16.8873L37.3959 11.5211L41.3869 7.7209C41.9116 7.2213 41.6222 6.3507 40.8969 6.24792Z"
                            fill="#FFDC69"
                          />
                          <path
                            d="M27.1896 17.7983L32.1225 15.2648V0.101562C32.0437 0.101562 31.9649 0.111789 31.8883 0.131732C31.659 0.191817 31.4512 0.342415 31.3295 0.583268L30.4425 2.33878L28.8628 5.46577L27.3236 5.68438L23.3476 6.24892C23.1662 6.27449 23.0123 6.34813 22.8914 6.45193C22.831 6.50384 22.7789 6.56341 22.7357 6.62835C22.6711 6.72551 22.6266 6.83494 22.6048 6.94847C22.5975 6.98631 22.5931 7.02491 22.591 7.06327C22.5842 7.19136 22.6082 7.32151 22.6627 7.44423C22.7066 7.54344 22.7697 7.63804 22.8579 7.7219L26.8489 11.5221L26.0135 16.2801L25.9067 16.8886C25.9017 16.9165 25.9007 16.9436 25.8983 16.9707C25.8973 16.9865 25.8939 17.0029 25.8933 17.0187C25.8923 17.0614 25.8944 17.1031 25.8994 17.144C25.9708 17.714 26.6222 18.0898 27.1896 17.7983Z"
                            fill="#FFC864"
                          />
                          <path
                            d="M63.774 6.24792L58.2586 5.46502L55.7919 0.582776C55.6296 0.261639 55.3145 0.101074 54.9991 0.101074V15.2643L59.932 17.7978C60.5805 18.131 61.3387 17.593 61.2149 16.8873L60.273 11.5211L64.264 7.7209C64.789 7.2213 64.4992 6.3507 63.774 6.24792Z"
                            fill="#FFDC69"
                          />
                          <path
                            d="M45.5554 6.72848C45.5892 6.65868 45.6329 6.59373 45.6847 6.53467C45.6329 6.59322 45.5894 6.65868 45.5554 6.72848Z"
                            fill="#FFDC69"
                          />
                          <path
                            d="M54.7009 0.158203C54.4988 0.228516 54.3167 0.365816 54.2073 0.582889C54.3169 0.366071 54.4986 0.228516 54.7009 0.158203Z"
                            fill="#FFDC69"
                          />
                          <path
                            d="M45.7352 7.72103C45.647 7.63717 45.5839 7.54282 45.5399 7.44336C45.5841 7.54231 45.6472 7.63717 45.7352 7.72103L49.7261 11.5212L48.891 16.2787L49.7264 11.5207L45.7352 7.72103Z"
                            fill="#FFDC69"
                          />
                          <path
                            d="M45.4688 7.06255C45.4708 7.02394 45.4753 6.98559 45.4826 6.94775C45.4753 6.98534 45.4708 7.02369 45.4688 7.06255Z"
                            fill="#FFDC69"
                          />
                          <path
                            d="M50.067 17.7983L54.9999 15.2648V0.101562C54.8976 0.101562 54.7979 0.124574 54.7008 0.158324C54.4987 0.228636 54.3166 0.365936 54.2072 0.58301L53.3202 2.33852L51.7405 5.46551L50.2437 5.67798L46.2255 6.24841C45.9989 6.28062 45.8149 6.3875 45.6848 6.53503C45.6327 6.59409 45.5896 6.65954 45.5555 6.72883C45.5215 6.79812 45.4969 6.87227 45.4828 6.94796C45.4754 6.9858 45.471 7.0244 45.4689 7.06275C45.4621 7.19085 45.4862 7.32099 45.5406 7.44372C45.5846 7.54293 45.6477 7.63753 45.7359 7.72139L49.7268 11.5216L48.8914 16.2796L48.7846 16.8881C48.7796 16.916 48.7786 16.9431 48.7762 16.9702C48.7752 16.986 48.7718 17.0024 48.7713 17.0182C48.7702 17.0609 48.7723 17.1026 48.7773 17.1435C48.848 17.7139 49.4996 18.0898 50.067 17.7983Z"
                            fill="#FFC864"
                          />
                          <path
                            d="M68.6133 7.72103C68.5251 7.63717 68.4621 7.54282 68.4181 7.44336C68.4621 7.54231 68.5254 7.63717 68.6133 7.72103L72.6043 11.5212L71.7691 16.2787L72.6043 11.5207L68.6133 7.72103Z"
                            fill="#FFDC69"
                          />
                          <path
                            d="M68.3895 6.83557C68.4139 6.76218 68.4482 6.69213 68.4911 6.62744C68.4479 6.69238 68.4139 6.76218 68.3895 6.83557Z"
                            fill="#FFDC69"
                          />
                          <path
                            d="M68.3467 7.06255C68.3488 7.02394 68.3532 6.98559 68.3606 6.94775C68.3532 6.98534 68.3488 7.02369 68.3467 7.06255Z"
                            fill="#FFDC69"
                          />
                          <path
                            d="M77.6433 0.130859C77.414 0.190945 77.2062 0.341543 77.0845 0.582395C77.2065 0.341543 77.414 0.1912 77.6433 0.130859Z"
                            fill="#FFDC69"
                          />
                          <path
                            d="M86.6524 6.24792L81.1372 5.46502L78.6705 0.582776C78.5085 0.261639 78.1931 0.101074 77.8778 0.101074V15.2643L82.8106 17.7978C83.4592 18.131 84.2171 17.593 84.0933 16.8873L83.1514 11.5211L87.1424 7.7209C87.6671 7.2213 87.3774 6.3507 86.6524 6.24792Z"
                            fill="#FFDC69"
                          />
                          <path
                            d="M72.945 17.7983L77.8778 15.2648V0.101562C77.7991 0.101562 77.7203 0.111789 77.6436 0.131732C77.4143 0.191817 77.2068 0.342415 77.0848 0.583268L75.9534 2.82304L74.6184 5.46551L73.1216 5.67798L69.1035 6.24841C68.8768 6.28062 68.6928 6.3875 68.5627 6.53503C68.5368 6.56443 68.513 6.59562 68.4913 6.6281C68.4484 6.69304 68.4138 6.76284 68.3898 6.83622C68.3777 6.87278 68.3678 6.91011 68.3607 6.94796C68.3534 6.9858 68.3489 7.0244 68.3468 7.06275C68.34 7.19085 68.3641 7.32099 68.4185 7.44372C68.4625 7.54293 68.5256 7.63753 68.6138 7.72139L72.6047 11.5216L71.7696 16.2796L71.6628 16.8881C71.6578 16.916 71.6568 16.9431 71.6544 16.9702C71.6534 16.986 71.65 17.0024 71.6495 17.0182C71.6484 17.0609 71.6502 17.1026 71.6555 17.1435C71.7261 17.7139 72.3776 18.0898 72.945 17.7983Z"
                            fill="#FFC864"
                          />
                          <path
                            d="M102.48 7.52791L101.943 6.46377L100.755 4.11328L99.5679 6.46377L99.0301 7.52791L97.828 7.69871L95.1729 8.07558L97.0944 9.90525L97.9641 10.7337L97.7589 11.9029L97.3051 14.4863L99.6802 13.2664L100.755 12.7144L101.83 13.2664L104.205 14.4863L103.751 11.9029L103.546 10.7337L104.416 9.90525L106.338 8.07558L103.682 7.69871L102.48 7.52791Z"
                            fill="white"
                          />
                          <path
                            d="M109.53 6.24743L104.015 5.46479L101.548 0.582291C101.386 0.261155 101.071 0.100586 100.755 0.100586C100.44 0.100586 100.125 0.261155 99.9627 0.582291L97.496 5.46479L91.9805 6.24743C91.2553 6.35047 90.9661 7.22107 91.4903 7.72067L95.4813 11.5214L94.5394 16.8879C94.4415 17.4463 94.8956 17.8994 95.4106 17.8994C95.5467 17.8994 95.6867 17.8677 95.8221 17.7984L100.755 15.2648L105.688 17.7984C105.823 17.8677 105.964 17.8994 106.099 17.8994C106.615 17.8994 107.069 17.446 106.971 16.8879L106.029 11.5214L110.02 7.72067C110.545 7.22107 110.255 6.35047 109.53 6.24743ZM104.416 9.90496L103.546 10.7334L103.752 11.9031L104.206 14.4863L101.831 13.2667L100.755 12.7146L99.6803 13.2667L97.3055 14.4863L97.7593 11.9031L97.9647 10.7334L97.0948 9.90496L95.1735 8.0753L97.8286 7.69843L99.0307 7.52814L99.568 6.46399L100.755 4.11351L101.943 6.46399L102.48 7.52814L103.683 7.69843L106.338 8.0753L104.416 9.90496Z"
                            fill="#FFC864"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_13_2113">
                            <rect width={110} height={18} fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <p>4.8/5</p>
                    </div>
                  </div>
                  <div className="sec_7_bx_1">
                    <img src="image/finRat3 - Copy.png" alt="GitHub" />
                    <div className="star_bx">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={110}
                        height={18}
                        viewBox="0 0 110 18"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_13_2113)">
                          <path
                            d="M9.01096 0.130859C8.7817 0.190945 8.57389 0.341543 8.45245 0.582395C8.57415 0.341543 8.7817 0.1912 9.01096 0.130859Z"
                            fill="#FFDC69"
                          />
                          <path
                            d="M18.02 6.24792L12.5045 5.46502L10.0378 0.582776C9.87583 0.261639 9.56046 0.101074 9.24509 0.101074V15.2643L14.178 17.7978C14.8265 18.131 15.5847 17.593 15.4609 16.8873L14.519 11.5211L18.5099 7.7209C19.0347 7.2213 18.7452 6.3507 18.02 6.24792Z"
                            fill="#FFDC69"
                          />
                          <path
                            d="M4.31208 17.7983L9.24496 15.2648V0.101562C9.16618 0.101562 9.08741 0.111789 9.01072 0.131732C8.78146 0.191817 8.57365 0.342415 8.45221 0.583268L7.3208 2.82304L5.98578 5.46551L4.48874 5.67798L0.470577 6.24841C0.243928 6.28062 0.0599403 6.3875 -0.0701339 6.53503C-0.0960441 6.56443 -0.120123 6.59562 -0.141584 6.6281C-0.184506 6.69304 -0.219053 6.76284 -0.243131 6.83622C-0.25517 6.87278 -0.265115 6.91012 -0.272182 6.94796C-0.27951 6.9858 -0.283958 7.0244 -0.286052 7.06276C-0.292595 7.19085 -0.268779 7.32099 -0.214342 7.44372C-0.170373 7.54293 -0.107298 7.63753 -0.0190988 7.72139L3.97185 11.5216L3.13644 16.2791L3.02966 16.8876C3.02469 16.9155 3.02364 16.9426 3.02129 16.9697C3.01972 16.9855 3.01684 17.0019 3.01631 17.0177C3.01527 17.0604 3.01736 17.1021 3.02233 17.143C3.09326 17.7139 3.74468 18.0898 4.31208 17.7983Z"
                            fill="#FFC864"
                          />
                          <path
                            d="M22.5908 7.06255C22.5929 7.02394 22.5974 6.98559 22.6047 6.94775C22.5976 6.98534 22.5929 7.02369 22.5908 7.06255Z"
                            fill="#FFDC69"
                          />
                          <path
                            d="M31.8881 0.130859C31.6589 0.190945 31.451 0.341543 31.3293 0.582395C31.4513 0.341543 31.6589 0.1912 31.8881 0.130859Z"
                            fill="#FFDC69"
                          />
                          <path
                            d="M27.3238 5.68359L23.3478 6.24788C23.1664 6.27345 23.0125 6.3476 22.8916 6.45141C23.0125 6.3476 23.1664 6.27396 23.3478 6.24839L27.3238 5.68359Z"
                            fill="#FFDC69"
                          />
                          <path
                            d="M25.8936 17.0178C25.8938 17.0022 25.897 16.9858 25.8985 16.9697C25.8972 16.9858 25.8941 17.0019 25.8936 17.0178Z"
                            fill="#FFDC69"
                          />
                          <path
                            d="M22.8575 7.72103C22.7693 7.63717 22.7062 7.54282 22.6622 7.44336C22.7062 7.54231 22.7695 7.63717 22.8575 7.72103L26.8484 11.5212L26.0133 16.2787L26.8487 11.5207L22.8575 7.72103Z"
                            fill="#FFDC69"
                          />
                          <path
                            d="M40.8969 6.24792L35.3815 5.46502L32.9148 0.582776C32.7525 0.261639 32.4374 0.101074 32.122 0.101074V15.2643L37.0549 17.7978C37.7035 18.131 38.4617 17.593 38.3379 16.8873L37.3959 11.5211L41.3869 7.7209C41.9116 7.2213 41.6222 6.3507 40.8969 6.24792Z"
                            fill="#FFDC69"
                          />
                          <path
                            d="M27.1896 17.7983L32.1225 15.2648V0.101562C32.0437 0.101562 31.9649 0.111789 31.8883 0.131732C31.659 0.191817 31.4512 0.342415 31.3295 0.583268L30.4425 2.33878L28.8628 5.46577L27.3236 5.68438L23.3476 6.24892C23.1662 6.27449 23.0123 6.34813 22.8914 6.45193C22.831 6.50384 22.7789 6.56341 22.7357 6.62835C22.6711 6.72551 22.6266 6.83494 22.6048 6.94847C22.5975 6.98631 22.5931 7.02491 22.591 7.06327C22.5842 7.19136 22.6082 7.32151 22.6627 7.44423C22.7066 7.54344 22.7697 7.63804 22.8579 7.7219L26.8489 11.5221L26.0135 16.2801L25.9067 16.8886C25.9017 16.9165 25.9007 16.9436 25.8983 16.9707C25.8973 16.9865 25.8939 17.0029 25.8933 17.0187C25.8923 17.0614 25.8944 17.1031 25.8994 17.144C25.9708 17.714 26.6222 18.0898 27.1896 17.7983Z"
                            fill="#FFC864"
                          />
                          <path
                            d="M63.774 6.24792L58.2586 5.46502L55.7919 0.582776C55.6296 0.261639 55.3145 0.101074 54.9991 0.101074V15.2643L59.932 17.7978C60.5805 18.131 61.3387 17.593 61.2149 16.8873L60.273 11.5211L64.264 7.7209C64.789 7.2213 64.4992 6.3507 63.774 6.24792Z"
                            fill="#FFDC69"
                          />
                          <path
                            d="M45.5554 6.72848C45.5892 6.65868 45.6329 6.59373 45.6847 6.53467C45.6329 6.59322 45.5894 6.65868 45.5554 6.72848Z"
                            fill="#FFDC69"
                          />
                          <path
                            d="M54.7009 0.158203C54.4988 0.228516 54.3167 0.365816 54.2073 0.582889C54.3169 0.366071 54.4986 0.228516 54.7009 0.158203Z"
                            fill="#FFDC69"
                          />
                          <path
                            d="M45.7352 7.72103C45.647 7.63717 45.5839 7.54282 45.5399 7.44336C45.5841 7.54231 45.6472 7.63717 45.7352 7.72103L49.7261 11.5212L48.891 16.2787L49.7264 11.5207L45.7352 7.72103Z"
                            fill="#FFDC69"
                          />
                          <path
                            d="M45.4688 7.06255C45.4708 7.02394 45.4753 6.98559 45.4826 6.94775C45.4753 6.98534 45.4708 7.02369 45.4688 7.06255Z"
                            fill="#FFDC69"
                          />
                          <path
                            d="M50.067 17.7983L54.9999 15.2648V0.101562C54.8976 0.101562 54.7979 0.124574 54.7008 0.158324C54.4987 0.228636 54.3166 0.365936 54.2072 0.58301L53.3202 2.33852L51.7405 5.46551L50.2437 5.67798L46.2255 6.24841C45.9989 6.28062 45.8149 6.3875 45.6848 6.53503C45.6327 6.59409 45.5896 6.65954 45.5555 6.72883C45.5215 6.79812 45.4969 6.87227 45.4828 6.94796C45.4754 6.9858 45.471 7.0244 45.4689 7.06275C45.4621 7.19085 45.4862 7.32099 45.5406 7.44372C45.5846 7.54293 45.6477 7.63753 45.7359 7.72139L49.7268 11.5216L48.8914 16.2796L48.7846 16.8881C48.7796 16.916 48.7786 16.9431 48.7762 16.9702C48.7752 16.986 48.7718 17.0024 48.7713 17.0182C48.7702 17.0609 48.7723 17.1026 48.7773 17.1435C48.848 17.7139 49.4996 18.0898 50.067 17.7983Z"
                            fill="#FFC864"
                          />
                          <path
                            d="M68.6133 7.72103C68.5251 7.63717 68.4621 7.54282 68.4181 7.44336C68.4621 7.54231 68.5254 7.63717 68.6133 7.72103L72.6043 11.5212L71.7691 16.2787L72.6043 11.5207L68.6133 7.72103Z"
                            fill="#FFDC69"
                          />
                          <path
                            d="M68.3895 6.83557C68.4139 6.76218 68.4482 6.69213 68.4911 6.62744C68.4479 6.69238 68.4139 6.76218 68.3895 6.83557Z"
                            fill="#FFDC69"
                          />
                          <path
                            d="M68.3467 7.06255C68.3488 7.02394 68.3532 6.98559 68.3606 6.94775C68.3532 6.98534 68.3488 7.02369 68.3467 7.06255Z"
                            fill="#FFDC69"
                          />
                          <path
                            d="M77.6433 0.130859C77.414 0.190945 77.2062 0.341543 77.0845 0.582395C77.2065 0.341543 77.414 0.1912 77.6433 0.130859Z"
                            fill="#FFDC69"
                          />
                          <path
                            d="M86.6524 6.24792L81.1372 5.46502L78.6705 0.582776C78.5085 0.261639 78.1931 0.101074 77.8778 0.101074V15.2643L82.8106 17.7978C83.4592 18.131 84.2171 17.593 84.0933 16.8873L83.1514 11.5211L87.1424 7.7209C87.6671 7.2213 87.3774 6.3507 86.6524 6.24792Z"
                            fill="#FFDC69"
                          />
                          <path
                            d="M72.945 17.7983L77.8778 15.2648V0.101562C77.7991 0.101562 77.7203 0.111789 77.6436 0.131732C77.4143 0.191817 77.2068 0.342415 77.0848 0.583268L75.9534 2.82304L74.6184 5.46551L73.1216 5.67798L69.1035 6.24841C68.8768 6.28062 68.6928 6.3875 68.5627 6.53503C68.5368 6.56443 68.513 6.59562 68.4913 6.6281C68.4484 6.69304 68.4138 6.76284 68.3898 6.83622C68.3777 6.87278 68.3678 6.91011 68.3607 6.94796C68.3534 6.9858 68.3489 7.0244 68.3468 7.06275C68.34 7.19085 68.3641 7.32099 68.4185 7.44372C68.4625 7.54293 68.5256 7.63753 68.6138 7.72139L72.6047 11.5216L71.7696 16.2796L71.6628 16.8881C71.6578 16.916 71.6568 16.9431 71.6544 16.9702C71.6534 16.986 71.65 17.0024 71.6495 17.0182C71.6484 17.0609 71.6502 17.1026 71.6555 17.1435C71.7261 17.7139 72.3776 18.0898 72.945 17.7983Z"
                            fill="#FFC864"
                          />
                          <path
                            d="M102.48 7.52791L101.943 6.46377L100.755 4.11328L99.5679 6.46377L99.0301 7.52791L97.828 7.69871L95.1729 8.07558L97.0944 9.90525L97.9641 10.7337L97.7589 11.9029L97.3051 14.4863L99.6802 13.2664L100.755 12.7144L101.83 13.2664L104.205 14.4863L103.751 11.9029L103.546 10.7337L104.416 9.90525L106.338 8.07558L103.682 7.69871L102.48 7.52791Z"
                            fill="white"
                          />
                          <path
                            d="M109.53 6.24743L104.015 5.46479L101.548 0.582291C101.386 0.261155 101.071 0.100586 100.755 0.100586C100.44 0.100586 100.125 0.261155 99.9627 0.582291L97.496 5.46479L91.9805 6.24743C91.2553 6.35047 90.9661 7.22107 91.4903 7.72067L95.4813 11.5214L94.5394 16.8879C94.4415 17.4463 94.8956 17.8994 95.4106 17.8994C95.5467 17.8994 95.6867 17.8677 95.8221 17.7984L100.755 15.2648L105.688 17.7984C105.823 17.8677 105.964 17.8994 106.099 17.8994C106.615 17.8994 107.069 17.446 106.971 16.8879L106.029 11.5214L110.02 7.72067C110.545 7.22107 110.255 6.35047 109.53 6.24743ZM104.416 9.90496L103.546 10.7334L103.752 11.9031L104.206 14.4863L101.831 13.2667L100.755 12.7146L99.6803 13.2667L97.3055 14.4863L97.7593 11.9031L97.9647 10.7334L97.0948 9.90496L95.1735 8.0753L97.8286 7.69843L99.0307 7.52814L99.568 6.46399L100.755 4.11351L101.943 6.46399L102.48 7.52814L103.683 7.69843L106.338 8.0753L104.416 9.90496Z"
                            fill="#FFC864"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_13_2113">
                            <rect width={110} height={18} fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <p>4.7/5</p>
                    </div>
                  </div>
                  <div className="sec_7_bx_1">
                    <img src="image/finRat4 - Copy.png" alt="Behance" />
                    <div className="star_bx_2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={110}
                        height={18}
                        viewBox="0 0 110 18"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_13_2113)">
                          <path
                            d="M9.01096 0.130859C8.7817 0.190945 8.57389 0.341543 8.45245 0.582395C8.57415 0.341543 8.7817 0.1912 9.01096 0.130859Z"
                            fill="#FFDC69"
                          />
                          <path
                            d="M18.02 6.24792L12.5045 5.46502L10.0378 0.582776C9.87583 0.261639 9.56046 0.101074 9.24509 0.101074V15.2643L14.178 17.7978C14.8265 18.131 15.5847 17.593 15.4609 16.8873L14.519 11.5211L18.5099 7.7209C19.0347 7.2213 18.7452 6.3507 18.02 6.24792Z"
                            fill="#FFDC69"
                          />
                          <path
                            d="M4.31208 17.7983L9.24496 15.2648V0.101562C9.16618 0.101562 9.08741 0.111789 9.01072 0.131732C8.78146 0.191817 8.57365 0.342415 8.45221 0.583268L7.3208 2.82304L5.98578 5.46551L4.48874 5.67798L0.470577 6.24841C0.243928 6.28062 0.0599403 6.3875 -0.0701339 6.53503C-0.0960441 6.56443 -0.120123 6.59562 -0.141584 6.6281C-0.184506 6.69304 -0.219053 6.76284 -0.243131 6.83622C-0.25517 6.87278 -0.265115 6.91012 -0.272182 6.94796C-0.27951 6.9858 -0.283958 7.0244 -0.286052 7.06276C-0.292595 7.19085 -0.268779 7.32099 -0.214342 7.44372C-0.170373 7.54293 -0.107298 7.63753 -0.0190988 7.72139L3.97185 11.5216L3.13644 16.2791L3.02966 16.8876C3.02469 16.9155 3.02364 16.9426 3.02129 16.9697C3.01972 16.9855 3.01684 17.0019 3.01631 17.0177C3.01527 17.0604 3.01736 17.1021 3.02233 17.143C3.09326 17.7139 3.74468 18.0898 4.31208 17.7983Z"
                            fill="#FFC864"
                          />
                          <path
                            d="M22.5908 7.06255C22.5929 7.02394 22.5974 6.98559 22.6047 6.94775C22.5976 6.98534 22.5929 7.02369 22.5908 7.06255Z"
                            fill="#FFDC69"
                          />
                          <path
                            d="M31.8881 0.130859C31.6589 0.190945 31.451 0.341543 31.3293 0.582395C31.4513 0.341543 31.6589 0.1912 31.8881 0.130859Z"
                            fill="#FFDC69"
                          />
                          <path
                            d="M27.3238 5.68359L23.3478 6.24788C23.1664 6.27345 23.0125 6.3476 22.8916 6.45141C23.0125 6.3476 23.1664 6.27396 23.3478 6.24839L27.3238 5.68359Z"
                            fill="#FFDC69"
                          />
                          <path
                            d="M25.8936 17.0178C25.8938 17.0022 25.897 16.9858 25.8985 16.9697C25.8972 16.9858 25.8941 17.0019 25.8936 17.0178Z"
                            fill="#FFDC69"
                          />
                          <path
                            d="M22.8575 7.72103C22.7693 7.63717 22.7062 7.54282 22.6622 7.44336C22.7062 7.54231 22.7695 7.63717 22.8575 7.72103L26.8484 11.5212L26.0133 16.2787L26.8487 11.5207L22.8575 7.72103Z"
                            fill="#FFDC69"
                          />
                          <path
                            d="M40.8969 6.24792L35.3815 5.46502L32.9148 0.582776C32.7525 0.261639 32.4374 0.101074 32.122 0.101074V15.2643L37.0549 17.7978C37.7035 18.131 38.4617 17.593 38.3379 16.8873L37.3959 11.5211L41.3869 7.7209C41.9116 7.2213 41.6222 6.3507 40.8969 6.24792Z"
                            fill="#FFDC69"
                          />
                          <path
                            d="M27.1896 17.7983L32.1225 15.2648V0.101562C32.0437 0.101562 31.9649 0.111789 31.8883 0.131732C31.659 0.191817 31.4512 0.342415 31.3295 0.583268L30.4425 2.33878L28.8628 5.46577L27.3236 5.68438L23.3476 6.24892C23.1662 6.27449 23.0123 6.34813 22.8914 6.45193C22.831 6.50384 22.7789 6.56341 22.7357 6.62835C22.6711 6.72551 22.6266 6.83494 22.6048 6.94847C22.5975 6.98631 22.5931 7.02491 22.591 7.06327C22.5842 7.19136 22.6082 7.32151 22.6627 7.44423C22.7066 7.54344 22.7697 7.63804 22.8579 7.7219L26.8489 11.5221L26.0135 16.2801L25.9067 16.8886C25.9017 16.9165 25.9007 16.9436 25.8983 16.9707C25.8973 16.9865 25.8939 17.0029 25.8933 17.0187C25.8923 17.0614 25.8944 17.1031 25.8994 17.144C25.9708 17.714 26.6222 18.0898 27.1896 17.7983Z"
                            fill="#FFC864"
                          />
                          <path
                            d="M63.774 6.24792L58.2586 5.46502L55.7919 0.582776C55.6296 0.261639 55.3145 0.101074 54.9991 0.101074V15.2643L59.932 17.7978C60.5805 18.131 61.3387 17.593 61.2149 16.8873L60.273 11.5211L64.264 7.7209C64.789 7.2213 64.4992 6.3507 63.774 6.24792Z"
                            fill="#FFDC69"
                          />
                          <path
                            d="M45.5554 6.72848C45.5892 6.65868 45.6329 6.59373 45.6847 6.53467C45.6329 6.59322 45.5894 6.65868 45.5554 6.72848Z"
                            fill="#FFDC69"
                          />
                          <path
                            d="M54.7009 0.158203C54.4988 0.228516 54.3167 0.365816 54.2073 0.582889C54.3169 0.366071 54.4986 0.228516 54.7009 0.158203Z"
                            fill="#FFDC69"
                          />
                          <path
                            d="M45.7352 7.72103C45.647 7.63717 45.5839 7.54282 45.5399 7.44336C45.5841 7.54231 45.6472 7.63717 45.7352 7.72103L49.7261 11.5212L48.891 16.2787L49.7264 11.5207L45.7352 7.72103Z"
                            fill="#FFDC69"
                          />
                          <path
                            d="M45.4688 7.06255C45.4708 7.02394 45.4753 6.98559 45.4826 6.94775C45.4753 6.98534 45.4708 7.02369 45.4688 7.06255Z"
                            fill="#FFDC69"
                          />
                          <path
                            d="M50.067 17.7983L54.9999 15.2648V0.101562C54.8976 0.101562 54.7979 0.124574 54.7008 0.158324C54.4987 0.228636 54.3166 0.365936 54.2072 0.58301L53.3202 2.33852L51.7405 5.46551L50.2437 5.67798L46.2255 6.24841C45.9989 6.28062 45.8149 6.3875 45.6848 6.53503C45.6327 6.59409 45.5896 6.65954 45.5555 6.72883C45.5215 6.79812 45.4969 6.87227 45.4828 6.94796C45.4754 6.9858 45.471 7.0244 45.4689 7.06275C45.4621 7.19085 45.4862 7.32099 45.5406 7.44372C45.5846 7.54293 45.6477 7.63753 45.7359 7.72139L49.7268 11.5216L48.8914 16.2796L48.7846 16.8881C48.7796 16.916 48.7786 16.9431 48.7762 16.9702C48.7752 16.986 48.7718 17.0024 48.7713 17.0182C48.7702 17.0609 48.7723 17.1026 48.7773 17.1435C48.848 17.7139 49.4996 18.0898 50.067 17.7983Z"
                            fill="#FFC864"
                          />
                          <path
                            d="M68.6133 7.72103C68.5251 7.63717 68.4621 7.54282 68.4181 7.44336C68.4621 7.54231 68.5254 7.63717 68.6133 7.72103L72.6043 11.5212L71.7691 16.2787L72.6043 11.5207L68.6133 7.72103Z"
                            fill="#FFDC69"
                          />
                          <path
                            d="M68.3895 6.83557C68.4139 6.76218 68.4482 6.69213 68.4911 6.62744C68.4479 6.69238 68.4139 6.76218 68.3895 6.83557Z"
                            fill="#FFDC69"
                          />
                          <path
                            d="M68.3467 7.06255C68.3488 7.02394 68.3532 6.98559 68.3606 6.94775C68.3532 6.98534 68.3488 7.02369 68.3467 7.06255Z"
                            fill="#FFDC69"
                          />
                          <path
                            d="M77.6433 0.130859C77.414 0.190945 77.2062 0.341543 77.0845 0.582395C77.2065 0.341543 77.414 0.1912 77.6433 0.130859Z"
                            fill="#FFDC69"
                          />
                          <path
                            d="M86.6524 6.24792L81.1372 5.46502L78.6705 0.582776C78.5085 0.261639 78.1931 0.101074 77.8778 0.101074V15.2643L82.8106 17.7978C83.4592 18.131 84.2171 17.593 84.0933 16.8873L83.1514 11.5211L87.1424 7.7209C87.6671 7.2213 87.3774 6.3507 86.6524 6.24792Z"
                            fill="#FFDC69"
                          />
                          <path
                            d="M72.945 17.7983L77.8778 15.2648V0.101562C77.7991 0.101562 77.7203 0.111789 77.6436 0.131732C77.4143 0.191817 77.2068 0.342415 77.0848 0.583268L75.9534 2.82304L74.6184 5.46551L73.1216 5.67798L69.1035 6.24841C68.8768 6.28062 68.6928 6.3875 68.5627 6.53503C68.5368 6.56443 68.513 6.59562 68.4913 6.6281C68.4484 6.69304 68.4138 6.76284 68.3898 6.83622C68.3777 6.87278 68.3678 6.91011 68.3607 6.94796C68.3534 6.9858 68.3489 7.0244 68.3468 7.06275C68.34 7.19085 68.3641 7.32099 68.4185 7.44372C68.4625 7.54293 68.5256 7.63753 68.6138 7.72139L72.6047 11.5216L71.7696 16.2796L71.6628 16.8881C71.6578 16.916 71.6568 16.9431 71.6544 16.9702C71.6534 16.986 71.65 17.0024 71.6495 17.0182C71.6484 17.0609 71.6502 17.1026 71.6555 17.1435C71.7261 17.7139 72.3776 18.0898 72.945 17.7983Z"
                            fill="#FFC864"
                          />
                          <path
                            d="M102.48 7.52791L101.943 6.46377L100.755 4.11328L99.5679 6.46377L99.0301 7.52791L97.828 7.69871L95.1729 8.07558L97.0944 9.90525L97.9641 10.7337L97.7589 11.9029L97.3051 14.4863L99.6802 13.2664L100.755 12.7144L101.83 13.2664L104.205 14.4863L103.751 11.9029L103.546 10.7337L104.416 9.90525L106.338 8.07558L103.682 7.69871L102.48 7.52791Z"
                            fill="white"
                          />
                          <path
                            d="M109.53 6.24743L104.015 5.46479L101.548 0.582291C101.386 0.261155 101.071 0.100586 100.755 0.100586C100.44 0.100586 100.125 0.261155 99.9627 0.582291L97.496 5.46479L91.9805 6.24743C91.2553 6.35047 90.9661 7.22107 91.4903 7.72067L95.4813 11.5214L94.5394 16.8879C94.4415 17.4463 94.8956 17.8994 95.4106 17.8994C95.5467 17.8994 95.6867 17.8677 95.8221 17.7984L100.755 15.2648L105.688 17.7984C105.823 17.8677 105.964 17.8994 106.099 17.8994C106.615 17.8994 107.069 17.446 106.971 16.8879L106.029 11.5214L110.02 7.72067C110.545 7.22107 110.255 6.35047 109.53 6.24743ZM104.416 9.90496L103.546 10.7334L103.752 11.9031L104.206 14.4863L101.831 13.2667L100.755 12.7146L99.6803 13.2667L97.3055 14.4863L97.7593 11.9031L97.9647 10.7334L97.0948 9.90496L95.1735 8.0753L97.8286 7.69843L99.0307 7.52814L99.568 6.46399L100.755 4.11351L101.943 6.46399L102.48 7.52814L103.683 7.69843L106.338 8.0753L104.416 9.90496Z"
                            fill="#FFC864"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_13_2113">
                            <rect width={110} height={18} fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <p>4.6/5</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="sec_8">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="sec_8_heading">
                  <h5>Get Every Single Update&nbsp;Blog</h5>
                  <p>
                    Various versions have evolved over the years, sometimes by
                    accident, sometimes on purpose (injected humour and the
                    like).
                  </p>
                </div>
              </div>
            </div>
            <div className="clsSay-carousel section-padding">
              <OwlCarousel
                loop={true}
                items={3}
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
                    dotsEach: 1,
                    items: 1,
                  },
                  767: {
                    dotsEach: 1,
                    items: 1,
                  },
                  768: {
                    dotsEach: 1,
                    items: 2,
                    margin: 15,
                  },
                  992: {
                    dotsEach: 2,
                    items: 3,
                    margin: 30,
                  },
                  1920: {
                    dotsEach: 3,
                    items: 3,
                  },
                }}
              >
                <div
                  className="_clsSayInner_bx"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <div className="sec8_bx_1">
                    <img src="image/sec_8_2.png" alt="img" />
                    <h6>LEADERSHIP</h6>
                    <h5>The Pros of Outsourcing your HR Department</h5>
                    <p>
                      There are full service engage company is to provide
                      solution for employees needs training manage the entire HR
                      department for companies.
                    </p>
                    <a href="">
                      Read More{" "}
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={22}
                          height={22}
                          viewBox="0 0 22 22"
                          fill="none"
                        >
                          <path
                            d="M12.6667 9.3335L1 21.0002"
                            stroke="#252525"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M16.9013 1.13797L14.8317 1.32612C11.4786 1.63095 9.802 1.78337 9.40745 2.87313C9.0129 3.9629 10.2033 5.1533 12.5841 7.5341L14.4656 9.41556C16.8464 11.7964 18.0368 12.9868 19.1265 12.5922C20.2163 12.1977 20.3687 10.5211 20.6736 7.16797L20.8617 5.09836C21.0452 3.07943 21.137 2.06996 20.5334 1.46631C19.9297 0.862663 18.9202 0.954432 16.9013 1.13797Z"
                            stroke="#252525"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
                <div
                  className="_clsSayInner_bx"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <div className="sec8_bx_1">
                    <img src="image/sec_8_1.png" alt="img" />
                    <h6>CONSULTATION</h6>
                    <h5>Best Service provides for Small Businesses</h5>
                    <p>
                      There are full service engage company is to provide
                      solution for employees needs training manage the entire HR
                      department for companies.
                    </p>
                    <a href="">
                      Read More{" "}
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={22}
                          height={22}
                          viewBox="0 0 22 22"
                          fill="none"
                        >
                          <path
                            d="M12.6667 9.3335L1 21.0002"
                            stroke="#252525"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M16.9013 1.13797L14.8317 1.32612C11.4786 1.63095 9.802 1.78337 9.40745 2.87313C9.0129 3.9629 10.2033 5.1533 12.5841 7.5341L14.4656 9.41556C16.8464 11.7964 18.0368 12.9868 19.1265 12.5922C20.2163 12.1977 20.3687 10.5211 20.6736 7.16797L20.8617 5.09836C21.0452 3.07943 21.137 2.06996 20.5334 1.46631C19.9297 0.862663 18.9202 0.954432 16.9013 1.13797Z"
                            stroke="#252525"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>

                <div
                  className="_clsSayInner_bx"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <div className="sec8_bx_1">
                    <img src="image/sec_8_2.png" alt="img" />
                    <h6>LEADERSHIP</h6>
                    <h5>The Pros of Outsourcing your HR Department</h5>
                    <p>
                      There are full service engage company is to provide
                      solution for employees needs training manage the entire HR
                      department for companies.
                    </p>
                    <a href="">
                      Read More{" "}
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={22}
                          height={22}
                          viewBox="0 0 22 22"
                          fill="none"
                        >
                          <path
                            d="M12.6667 9.3335L1 21.0002"
                            stroke="#252525"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M16.9013 1.13797L14.8317 1.32612C11.4786 1.63095 9.802 1.78337 9.40745 2.87313C9.0129 3.9629 10.2033 5.1533 12.5841 7.5341L14.4656 9.41556C16.8464 11.7964 18.0368 12.9868 19.1265 12.5922C20.2163 12.1977 20.3687 10.5211 20.6736 7.16797L20.8617 5.09836C21.0452 3.07943 21.137 2.06996 20.5334 1.46631C19.9297 0.862663 18.9202 0.954432 16.9013 1.13797Z"
                            stroke="#252525"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>

                <div
                  className="_clsSayInner_bx"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <div className="sec8_bx_1">
                    <img src="image/sec_8_3.png" alt="img" />
                    <h6>FRANCHISING</h6>
                    <h5>Guide to HR adviser and Clients lessening</h5>
                    <p>
                      There are full service engage company is to provide
                      solution for employees needs training manage the entire HR
                      department for companies.
                    </p>
                    <a href="">
                      Read More{" "}
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={22}
                          height={22}
                          viewBox="0 0 22 22"
                          fill="none"
                        >
                          <path
                            d="M12.6667 9.3335L1 21.0002"
                            stroke="#252525"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M16.9013 1.13797L14.8317 1.32612C11.4786 1.63095 9.802 1.78337 9.40745 2.87313C9.0129 3.9629 10.2033 5.1533 12.5841 7.5341L14.4656 9.41556C16.8464 11.7964 18.0368 12.9868 19.1265 12.5922C20.2163 12.1977 20.3687 10.5211 20.6736 7.16797L20.8617 5.09836C21.0452 3.07943 21.137 2.06996 20.5334 1.46631C19.9297 0.862663 18.9202 0.954432 16.9013 1.13797Z"
                            stroke="#252525"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </section>
      <Section8 />
      </main>

      <Footer />
    </>
  );
};

export default index;
