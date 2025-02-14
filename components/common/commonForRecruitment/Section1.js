import React from 'react'

function Section1({isOpen}) {
  return (
    <section className="sec_3_one">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="sec_3_heading">
            <h6>
              Are you getting&nbsp;results like this from your Agreement
              Paper?
            </h6>
            <p>
              Various versions have evolved over the years, sometimes by
              accident, sometimes on purpose (injected humour and the
              like).
            </p>
          </div>
        </div>
      </div>
      <div className="row sec_3_row">
        <div className="col-6 col-md-4">
          <div className="sec_3_p2">
            <h6>65%</h6>
            <p>Reduced job ad spend by</p>
          </div>
        </div>
        <div className="col-6 col-md-4">
          <div className="sec_3_p2">
            <h6>$5K</h6>
            <p>Reduced expenses by 5K</p>
          </div>
        </div>
        <div className="col-6 col-md-4">
          <div className="sec_3_p2">
            <h6>50%</h6>
            <p>Reduced search time by</p>
          </div>
        </div>
        <div className="col-6 col-md-4">
          <div className="sec_3_p2">
            <h6>75%</h6>
            <p>Reduced clicks per task by</p>
          </div>
        </div>
        <div className="col-6 col-md-4">
          <div className="sec_3_p2">
            <h6>50%</h6>
            <p>Increased efficiency by</p>
          </div>
        </div>
        <div className="col-6 col-md-4">
          <div className="sec_3_p2">
            <h6>50%</h6>
            <p>Reduced time-to-hire by</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="sec_3_ftr">
            <h6>
              Simplifying Supply Network for Agencies,
            </h6>
            <h6>
              Service Procurement teams and
              Service provider teams who want everything in one place.
            </h6>
            <p>
              Without any <span>COMPLEXITY.</span>
            </p>
          </div>
        </div>
      </div>
   
         <div className="row  gif_rw">
          <div className="col-12 col-md-6 ">
            <div className="gif_bx">
              <h5>Hire the best technical talent</h5>
              <p>
                Agreementpaper focus on identifying Contract Risk early
                and help you before you signing it to give you piece of
                mind{" "}
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6 ">
            <div className="video_bx">
              <video
                width="100%"
                loop
                controls={isOpen ? false : true}
                muted
                autoplay="autoplay"
                autoPlay
                preload="none"
                style={{ pointerEvents: isOpen && "none" }}
                playsinline
                oncontextmenu={false}
              >
                <source
                  src="image/Agreement_Paper_1st _Gif.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
        <div className="row  gif_rw">
          <div className="col-12 col-md-6 order-2 order-md-1">
            <div className="video_bx">
              <video
                width="100%"
                loop
                controls={isOpen ? false : true}
                muted
                autoplay="autoplay"
                autoPlay
                preload="none"
                style={{ pointerEvents: isOpen && "none" }}
                playsinline
                oncontextmenu={false}
              >
                <source
                  src="image/Mitigate Your Risk.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
          <div className="col-12 col-md-6 order-1 order-md-2">
            <div className="gif_bx_2">
              <h5>Get expertly matched</h5>
              <div>
                <p>
                  It is being built on thousands of Contracts, being
                  signed every day in Supply chain, Finance and HR
                  functions to identify the usual Contract Terms and
                  conditions to mitigate business Risks
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row  gif_rw">
          <div className="col-12 col-md-6">
            <div className="gif_bx">
              <h5>Protect your budget</h5>
              <p>
                In word of SAAS, Agreementpaper.com identify Contract
                clauses for Data Privacy, Indemnity and Data leakage as
                well{" "}
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="video_bx">
              <video
                width="100%"
                loop
                controls={isOpen ? false : true}
                muted
                autoplay="autoplay"
                autoPlay
                preload="none"
                style={{ pointerEvents: isOpen && "none" }}
                playsinline
                oncontextmenu={false}
              >
                <source
                  src="image/Protect your Budget.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
        <div className="row rs_gif_rw ">
          <div className="col-12 col-md-6 order-2 order-md-1">
            <div className="video_bx">
              <video
                width="100%"
                loop
                controls={isOpen ? false : true}
                muted
                autoplay="autoplay"
                autoPlay
                preload="none"
                style={{ pointerEvents: isOpen && "none" }}
                playsinline
                oncontextmenu={false}
              >
                <source
                  src="image/New Make compliance easy.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
          <div className="col-12 col-md-6 order-1 order-md-2">
            <div className="gif_bx_2">
              <h5>Make compliance easy</h5>
              <p>
                AI model can be fine tuned with existing Contracts which
                has been signed in previous years on Enterprise solution.
                All data stays with you.{" "}
              </p>
            </div>
          </div>
        </div>
    </div>
  </section>
  )
}

export default Section1