import React from 'react';
import Link from "next/link";

function HomePageForRecruitment() {
  return (
    <div className="container">
    <div className="row header_bio_2">
      <div className="col-12">
        <div className="head_details_3">
          <h2>
            Connecting Suppliers and Agencies.
            <span>Empowering Success</span> Your Ultimate Supplier and Agency Network.
          </h2>
          <p>
            Don’t waste valuable time and money learning how to generate lead and manage talent supply.
            Let Agreement Paper start and manage your dream Agency and Resource Supplier firm in few clicks.
          </p>
          <div className="head_btns_2">
            <div data-aos="fade-left" data-aos-duration="1000">
              <Link
                href="https://app.agreementpaper.com/signup_recruitment"
                target="_blank"
              >
                <button className="start_btn_2">See the Platform</button>
              </Link>
            </div>
            <div data-aos="fade-right" data-aos-duration="1000">
              <Link href="/book-a-demo" className="a_list_noSty">
                <button className="browser_btn_2">Get A Demo</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12">
        <div
          className="head_3"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <img src="/image/head_3_pic.png" alt="Contract Compliance Management" />
        </div>
      </div>
    </div>
  </div>
  )
}

export default HomePageForRecruitment