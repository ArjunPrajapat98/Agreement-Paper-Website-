import React from 'react';
import Link from "next/link";

function HomePageForEnterPrise() {
    return (
        <div>
            <div className="container">
                <div className="row header_bio">
                    <div className="col-12 col-lg-6">
                        <div className="head_details" data-aos="fade-up">
                            <h2>
                                Empower your Business with better <span> AI-powered </span>{" "}
                                copilot Contract
                                <span> Management Solution </span>
                            </h2>
                            <p>
                                AI-powered copilot that mitigate risk, increase compliance and
                                Operations for Global teams
                            </p>
                            <span> It's free for single users for limited access — no credit card needed. </span>
                            <div
                                className="_demoBtn mt-2" 
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                <Link href="/book-a-demo" className="headB">
                                    <span>Get Your Free Account</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 laptop">
                        <div data-aos="fade-up">
                            <img src="image/laptopp_img.svg" alt="laptopp_img.svg" />
                        </div>
                    </div>

                    <div className="col-12 col-lg-6 full_laptop">
                        <div data-aos="fade-up">
                            <img className="" src="image/laptop_full.png" alt="Contract Management Solution
" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePageForEnterPrise