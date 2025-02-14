import React, { useEffect } from 'react'

function Section6() {

  useEffect(() => {
    document.querySelectorAll('.badgesSection img').forEach((img) => {
      img.style.cssText = '';
    });
  },[])

  return (
    <section className="sec_7">
      <div className="container">
        <div className="row sec_7_row">
          <div className="col-12 col-md-6">
            <div className="sec_7_part1">
              <h5>
                Our Recognitions: Trusted by the Industry's Finest
              </h5>
              <p>
                With accolades from Clutch, GoodFirms, and Topdevelopers,
                Agreementpaper stands as a recognized leader in AI-powered Contract Management solutions.
                Our industry-leading platform delivers innovative Gen AI tools,
                empowering businesses to manage contracts with unparalleled efficiency and precision.
                Join the ranks of our satisfied clients and experience the future of contract management today.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-6 d-flex justify-content-center">
            <div className="badgesSection">
              <a href="https://topfirms.co/companies/software-development/australia" target="_blank">
                <img src="image/topfirm.png" alt="topfirm" />
              </a>

              <a href="https://www.itfirms.co/top-wearable-app-development-companies/" target="_blank">
                <img src="image/itfirm.png" alt="itfirm" />
              </a>

              <a href="https://www.topdevelopers.co/directory/social-media-management-companies" target="_blank">
                <img src="image/topdeveloper.png" alt="topdeveloper" />
              </a>

              <a href="https://clutch.co/profile/agreementpapercom#highlights " target="_blank">
                <img src="image/Clutch.jpg" alt="Clutch" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section6