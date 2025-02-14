import React from 'react'

function Section3({isOpen}) {
  return (
      <section>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="enter_gif">
                  <h4>For Enterprise</h4>
                  <p className="">
                    Apply today and join a thriving community of highly-skilled
                    tech talent
                  </p>
                </div>
              </div>
            </div>
            <div className="row  gif_rw">
              <div className="col-12 col-md-6 ">
                <div className="gif_bx">
                  <h5>Contract Management made so Easy!!</h5>
                  <p>
                    Draft Contracts in a Matter of Seconds using your own or
                    Agreementpaper.com templates as a basis. Contract drafting
                    is not just easy but inherit your style.{" "}
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
                    <source src="image/1 st Contract.mp4" type="video/mp4" />
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
                      src="image/1st_Image_MSA_Ai_V1.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
              <div className="col-12 col-md-6 order-1 order-md-2">
                <div className="gif_bx_2">
                  <h5>With AI, Review contracts faster and better!!</h5>
                  <div>
                    <p>
                      Get your document reviewed in a single click. Identify
                      legal compliance issues, highlight business risks, and
                      review documents on your internal policies.
                    </p>
                    <p>
                      Built on thousands of Contracts, being signed every-day
                      Business functions to identify the usual Contract Terms
                      and conditions to mitigate business Risks
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row  gif_rw">
              <div className="col-12 col-md-6">
                <div className="gif_bx">
                  <h5>Protect your budget and custom Workflow!!</h5>
                  <p>
                    Agreementpaper help you execute contract with optimum budget
                    with tasks and inbuilt custom approval workflow.{" "}
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
                    <source src="image/Video SOW 1.1.mp4" type="video/mp4" />
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
                      src="image/Agreement_Paper_1st _Gif.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
              <div className="col-12 col-md-6 order-1 order-md-2">
                <div className="gif_bx_2">
                  <h5>Make compliance easy. Protect Confidentiality!!</h5>
                  <p>
                    All data stays with you. Privacy is at the heart of
                    Agreementpaper.com. All data in your legal & financial
                    documents would be part of your realm only, providing utmost
                    security.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section> 
  )
}

export default Section3