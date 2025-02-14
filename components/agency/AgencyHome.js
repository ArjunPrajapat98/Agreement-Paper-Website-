import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const AgencyHome = () => { 

  const router = useRouter();

  return (
    <section className="bannerHead_bg">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="text-center anvHd_text">
              <h1>The FREE way to find the world’s best remote talent</h1>
              <p>
                Agreement Talent is a 100% free resource for companies looking
                to find talent across the globe. No fees, no markups, no
                middlemen.
              </p>
              <div className="searchBanner_bar">
                <input type="text" placeholder="Search by keywords" />
                <button className="anvSrh_btn" onClick={() => router.push('/job_work')}>
                  <img src="image/search_icon.png" alt="img" />
                </button>
              </div>
              <div className="brws_profBtn_bx">
                <Link className="profileBr_btn" href="/hire_talent">
                  Start a Profile
                </Link>
                <Link className="profileBr_btn" href="/job_work">
                  Browse
                </Link>
              </div>
              {/* <div className="yWe_link">
                <a href="">
                  Why we are free{" "}
                  <span>
                    <i className="fa-solid fa-chevron-right" />
                  </span>
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgencyHome;
