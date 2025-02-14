import React from 'react';
import Link from "next/link";

function Section1({jobsData}) {
  return (
    <section className="sec_one">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sec_one_heading">
              <div>
                <h5>Browse Jobs by&nbsp;Skill</h5>
                <p>Get some inspirations from 1800+ skills</p>
              </div>
              <div>
                <h6
                  onClick={() => router.push("/job_work")}
                  className="pointer_class"
                >
                  Browse by&nbsp;Skill{" "}
                  <span>
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={38}
                      height={20}
                      viewBox="0 0 38 20"
                      fill="none"
                    >
                      <path
                        d="M23.2505 10L2.00049 10"
                        stroke="#252525"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M32.9954 13.205L30.9418 14.7276C27.6144 17.1946 25.9508 18.428 24.6006 17.8654C23.2505 17.3028 23.2505 15.376 23.2505 11.5225L23.2505 8.47728C23.2505 4.6238 23.2505 2.69705 24.6006 2.13443C25.9508 1.5718 27.6144 2.80527 30.9417 5.27221L32.9954 6.79484C34.9988 8.28019 36.0005 9.02287 36.0005 9.99991C36.0005 10.977 34.9988 11.7196 32.9954 13.205Z"
                        stroke="#252525"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="row card_row">
          {jobsData?.length > 0 &&
            jobsData?.map((el, ind) => {
              return (
                <div className="col-12 col-md-3 p-0" key={ind}>
                  <div className="card_bx">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={73}
                        height={67}
                        viewBox="0 0 73 67"
                        fill="none"
                      >
                        <ellipse
                          cx="47.0659"
                          cy="42.0136"
                          rx={25}
                          ry="24.9047"
                          fill="#FF521D"
                          fillOpacity="0.22"
                        />
                        <path
                          d="M2 24.0822C2 13.6726 2 8.46773 5.25691 5.23386C8.51382 2 13.7557 2 24.2396 2C34.7234 2 39.9653 2 43.2223 5.23386C46.4792 8.46773 46.4792 13.6726 46.4792 24.0822C46.4792 34.4919 46.4792 39.6967 43.2223 42.9305C39.9653 46.1644 34.7234 46.1644 24.2396 46.1644C13.7557 46.1644 8.51382 46.1644 5.25691 42.9305C2 39.6967 2 34.4919 2 24.0822Z"
                          stroke="#FF521D"
                          strokeWidth={3}
                        />
                        <path
                          d="M2 17.1088L46.4792 17.1088"
                          stroke="#FF521D"
                          strokeWidth={3}
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12.5342 10.1355H12.5552"
                          stroke="#FF521D"
                          strokeWidth={3}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M21.8985 10.1355H21.9194"
                          stroke="#FF521D"
                          strokeWidth={3}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M33.6036 26.4066L36.475 28.864C37.6821 29.8971 38.2856 30.4136 38.2856 31.0555C38.2856 31.6974 37.6821 32.2139 36.475 33.247L33.6036 35.7044"
                          stroke="#FF521D"
                          strokeWidth={3}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M14.8754 26.4066L12.004 28.864C10.7969 29.8971 10.1934 30.4136 10.1934 31.0555C10.1934 31.6974 10.7969 32.2139 12.004 33.247L14.8754 35.7044"
                          stroke="#FF521D"
                          strokeWidth={3}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M26.5809 24.0822L21.8989 38.0288"
                          stroke="#FF521D"
                          strokeWidth={3}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <h6>{el?.job_type_value} </h6>
                      <h5>{el?.title}</h5>
                    </div>
                    <div>
                      <Link href="/job_work">View All Skills</Link>
                    </div>
                  </div>
                </div>
              );
            })}

        </div>
      </div>
    </section>
  )
}

export default Section1