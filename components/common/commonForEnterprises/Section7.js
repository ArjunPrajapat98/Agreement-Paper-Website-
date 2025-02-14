import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import axios from "axios";
import { BaseUrl } from "@/components/service/service";
import Link from 'next/link';

function Section7() {
    const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
        ssr: false,
    });
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        getBlogsData();
    }, []);
    const getBlogsData = async () => {
        await axios
            .get(BaseUrl + `/blog/blogs/`)
            .then((resp) => {
                if (resp?.data) {
                    setBlogs(resp?.data)
                }
            })
            .catch((error) => { console.log('rerror', error); });
    }

    return (
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
                        {blogs?.length ? blogs?.map((blog, idx) => (
                            <div
                                className="_clsSayInner_bx"
                                data-aos="fade-up"
                                data-aos-duration="1500"
                            >
                                <div className="sec8_bx_1">
                                    <img src={blog?.thumbnail ? blog?.thumbnail : ''} alt="Blog1" />
                                    <h6>{blog?.heading}</h6>
                                    <h5>
                                        {blog?.title}
                                    </h5>
                                    <p>
                                        {blog?.description}
                                    </p>
                                    <Link href={`/blog/${blog?.slug}`}>
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
                                    </Link>
                                </div>
                            </div>
                        )) :
                            <>
                                <div
                                    className="_clsSayInner_bx"
                                    data-aos="fade-up"
                                    data-aos-duration="1500"
                                >
                                    <div className="sec8_bx_1">
                                        <img src="image/Blog 1.1.jpg" alt="Blog1" />
                                        <h6>LEADERSHIP</h6>
                                        <h5>
                                            10 Ways to Reduce Contract Risks with Advanced Contract Management Software
                                        </h5>
                                        <p>
                                            In today’s fast-paced business environment,
                                            effective contract management is crucial to minimizing risks that can lead to costly disputes,
                                            compliance issues, and revenue loss.
                                            Advanced Contract Management Software (CMS) has emerged as a key tool
                                            in mitigating these risks by providing organizations with automated processes,
                                            real-time insights, and enhanced collaboration. Here are ten ways to reduce contract
                                            risks using advanced CMS:
                                        </p>
                                        <a href="/blog">
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
                                        <img src="image/Blog 2.1.jpg" alt="Blog 2" />
                                        <h6>CONTRACT MANAGEMENT</h6>
                                        <h5>
                                            {" "}
                                            Top Contract Management Features Every B2B Company Needs in 2024{" "}
                                        </h5>
                                        <p>
                                            In the fast-evolving B2B landscape of 2024,
                                            contract management has emerged as a critical
                                            business function. As companies navigate an
                                            increasingly complex regulatory environment and
                                            seek to optimize their operations, robust contract
                                            management software (CMS) is no longer a luxury but a necessity.
                                            Here are the top contract management features every B2B company should prioritize in 2024.
                                        </p>
                                        <a href="/blog">
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
                                        <img src="image/Blog 3.1.jpg" alt="Blog 3" />
                                        <h6>AI-POWERED</h6>
                                        <h5>Why AI-Powered Contract Analysis is a Game Changer for B2B Negotiations</h5>
                                        <p>
                                            In the fast-paced world of B2B negotiations, where time is money and precision is key,
                                            the integration of AI-powered contract analysis has emerged as a game changer.
                                            As businesses evolve, the complexity of contracts has increased,
                                            often resulting in missed opportunities or unforeseen risks.
                                            AI-driven solutions, however, are revolutionizing how contracts are analyzed,
                                            offering a myriad of benefits that traditional methods simply cannot match.
                                        </p>
                                        <a href="/blog">
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
                            </>}
                    </OwlCarousel>
                </div>
            </div>
        </section>
    )
}

export default Section7