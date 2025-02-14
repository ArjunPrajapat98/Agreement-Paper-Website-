import Link from 'next/link';
import React, { useState, useRef } from 'react';

function HomePageForEnterPrise() {
    const [visibleContent, setVisibleContent] = useState("Sales");
    const sectionRefs = {
        1: useRef(null),
        2: useRef(null),
        3: useRef(null),
        4: useRef(null),
        5: useRef(null),
        6: useRef(null),
    };
    const scrollToSection = (section) => {
        sectionRefs[section]?.current?.scrollIntoView({
            behavior: 'smooth',
        });
    };

    return (
        <div>
            <div className="enterprise-container content-container">
                <div className="enterprise-content">
                    <div className="enterprise-row">
                        <div className="enterprise-col-left">
                            <div className='solutionSker'>
                                <h6 className="enterprise-heading">BY TEAMS</h6>
                                <Link href='/'>Back</Link>
                            </div>
                            <div className="enterprise-inner-row">
                                <div className="enterprise-inner-col">
                                    <ul className="enterprise-list">
                                        <li className="enterprise-list-item" onClick={() => {
                                            setVisibleContent("Sales")
                                            scrollToSection(1)
                                        }}>
                                            <span className='enterprise-item-head' >Sales</span><br />
                                            Close deals faster and delight your customersdelight
                                        </li>
                                        <li className="enterprise-list-item" onClick={() => setVisibleContent("HR")}>
                                            <span className='enterprise-item-head'>HR</span><br />
                                            Automate all HR docs and support scale
                                        </li>
                                        <li className="enterprise-list-item" onClick={() => setVisibleContent("Legal")}>
                                            <span className='enterprise-item-head' >Legal</span><br />
                                            Create, review, close faster and be effortlessly compliant
                                        </li>
                                    </ul>
                                </div>
                                <div className="enterprise-inner-col">
                                    <ul className="enterprise-list">
                                        <li className="enterprise-list-item" onClick={() => setVisibleContent("Procurement")}>
                                            <span className='enterprise-item-head' >Procurement</span><br />
                                            Better control for more efficiencies
                                        </li>
                                        <li className="enterprise-list-item" onClick={() => setVisibleContent("Finance")}>
                                            <span className='enterprise-item-head' >Finance</span><br />
                                            Scale responsibly and efficiently
                                        </li>
                                        <li className="enterprise-list-item" onClick={() => setVisibleContent("Freelancers")}>
                                            <span className='enterprise-item-head' >Freelancers</span><br />
                                            Manage less, do more and carry your work with you
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="enterprise-col-right">
                            <h6 className="enterprise-heading">BY USE CASES</h6>
                            <div className="enterprise-inner-row">
                                <div className="enterprise-inner-col">
                                    <ul className="enterprise-list">
                                        <li className="enterprise-list-item">eSignatures</li>
                                        <li className="enterprise-list-item">Quotes and proposals</li>
                                        <li className="enterprise-list-item">Sales contracts</li>
                                        <li className="enterprise-list-item">All business and personal docs</li>
                                    </ul>
                                </div>
                                <div className="enterprise-inner-col">
                                    <ul className="enterprise-list">
                                        <li className="enterprise-list-item">Offers and employment letters</li>
                                        <li className="enterprise-list-item">Vendor contracts</li>
                                        <li className="enterprise-list-item">Funding docs</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>


                        <div className="">
                            {visibleContent === "Sales" && (
                                <div
                                    className="tab-pane  show active tabbs"
                                    id="home"
                                    role="tabpanel"
                                    aria-labelledby="home-tab"
                                    ref={sectionRefs[1]}
                                >
                                    <div  >
                                        <div className="row mobile-reverse gap-mobile-16">
                                            <div className="col-md-6">
                                                <div className="flex-col">
                                                    <h3 className="f-28 f-700">
                                                        Sales: Close deals faster and delight your customers
                                                    </h3>
                                                    <ul className="list-tick">
                                                        <li>Streamline the sales process with efficient document management.</li>
                                                        <li>Automate contracts, proposals, and agreements to reduce manual effort.</li>
                                                        <li>Enhance customer experience by delivering accurate and timely documents.</li>
                                                        <li>Close deals faster with electronic signatures and automated workflows.</li>
                                                    </ul>
                                                    <div className="buttons" >
                                                        <a href="https://app.agreementpaper.com/" className="loginBtn_bx black " target='_blank'>
                                                            <span>Get started free</span>
                                                        </a>{" "}
                                                        <a href="book-a-demo" className="loginBtn_bx black  transparent">
                                                            <span>Schedule a demo</span>{" "}

                                                        </a>
                                                    </div>
                                                </div>
                                            </div>{" "}
                                            <div className="col-md-1" />{" "}
                                            <div className="col-md-5">
                                                {/* <div className="img">
                                                    <figure >
                                                        <img
                                                            src="image/Atemp.png"
                                                            alt="The new standard in eSign"
                                                            loading="lazy"
                                                        />{" "}
                                                    </figure>
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>{" "}
                                </div>
                            )}
                            {visibleContent === "HR" && (
                                <div className="content-section">
                                    <div
                                        className="tab-pane  show active tabbs"
                                        id="home"
                                        role="tabpanel"
                                        aria-labelledby="home-tab"
                                        ref={sectionRefs[2]}
                                    >
                                        <div className="row mobile-reverse gap-mobile-16">
                                            <div className="col-md-6">
                                                <div className="flex-col">
                                                    <h3 className="f-28 f-700">
                                                        HR: Automate all HR docs and support scale
                                                    </h3>
                                                    <ul className="list-tick">
                                                        <li>Centralize HR document creation, storage, and management.</li>
                                                        <li>Automate employee contracts, offer letters, and onboarding paperwork.</li>
                                                        <li>Ensure compliance with local regulations and organizational policies.</li>
                                                        <li>Scale HR processes as your business grows without increasing workload.</li>
                                                    </ul>
                                                    <div className="buttons" >
                                                        <a href="https://app.agreementpaper.com/" className="loginBtn_bx black " target='_blank'>
                                                            <span>Get started free</span>
                                                        </a>{" "}
                                                        <a href="/book-a-demo" className="loginBtn_bx black  transparent">
                                                            <span>Schedule a demo</span>{" "}

                                                        </a>
                                                    </div>
                                                </div>
                                            </div>{" "}
                                            <div className="col-md-1" />{" "}
                                            <div className="col-md-5">
                                                {/* <div className="img">
                                                    <figure >
                                                        <img
                                                            src="image/Atemp.png"
                                                            alt="The new standard in eSign"
                                                            loading="lazy"
                                                        />{" "}
                                                    </figure>
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>{" "}
                                </div>
                            )}
                            {visibleContent === "Legal" && (
                                <div className="content-section">
                                    <div
                                        className="tab-pane  show active tabbs"
                                        id="home"
                                        role="tabpanel"
                                        aria-labelledby="home-tab"
                                        ref={sectionRefs[3]}
                                    >
                                        <div className="row mobile-reverse gap-mobile-16">
                                            <div className="col-md-6">
                                                <div className="flex-col">
                                                    <h3 className="f-28 f-700">
                                                        Legal: Create, review, close faster and be effortlessly compliant
                                                    </h3>
                                                    <ul className="list-tick">
                                                        <li>Simplify legal document creation and collaboration.</li>
                                                        <li>Automate contract review processes with pre-approved templates.</li>
                                                        <li>Ensure compliance with legal standards and mitigate risks.</li>
                                                        <li>Speed up contract finalization with electronic signatures and approvals.</li>
                                                    </ul>
                                                    <div className="buttons" >
                                                        <a href="https://app.agreementpaper.com/" className="loginBtn_bx black " target='_blank'>
                                                            <span>Get started free</span>
                                                        </a>{" "}
                                                        <a href="/book-a-demo" className="loginBtn_bx black  transparent">
                                                            <span>Schedule a demo</span>{" "}

                                                        </a>
                                                    </div>
                                                </div>
                                            </div>{" "}
                                            <div className="col-md-1" />{" "}
                                            <div className="col-md-5">
                                                {/* <div className="img">
                                                    <figure >
                                                        <img
                                                            src="image/Atemp.png"
                                                            alt="The new standard in eSign"
                                                            loading="lazy"
                                                        />{" "}
                                                    </figure>
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>{" "}
                                </div>
                            )}
                            {visibleContent === "Procurement" && (
                                <div className="content-section">
                                    <div
                                        className="tab-pane  show active tabbs"
                                        id="home"
                                        role="tabpanel"
                                        aria-labelledby="home-tab"
                                        ref={sectionRefs[4]}
                                    >
                                        <div className="row mobile-reverse gap-mobile-16">
                                            <div className="col-md-6">
                                                <div className="flex-col">
                                                    <h3 className="f-28 f-700">
                                                        Procurement: Better control for more efficiencies
                                                    </h3>
                                                    <ul className="list-tick">
                                                        <li>Streamline purchase order creation, contract management, and supplier agreements.</li>
                                                        <li>Gain better visibility and control over procurement processes.</li>
                                                        <li>Automate approval workflows to reduce delays and inefficiencies.</li>
                                                        <li>Ensure compliance with procurement policies and regulations.</li>
                                                    </ul>
                                                    <div className="buttons" >
                                                        <a href="https://app.agreementpaper.com/" className="loginBtn_bx black " target='_blank'>
                                                            <span>Get started free</span>
                                                        </a>{" "}
                                                        <a href="/book-a-demo" className="loginBtn_bx black  transparent">
                                                            <span>Schedule a demo</span>{" "}

                                                        </a>
                                                    </div>
                                                </div>
                                            </div>{" "}
                                            <div className="col-md-1" />{" "}
                                            <div className="col-md-5">
                                                {/* <div className="img">
                                                    <figure >
                                                        <img
                                                            src="image/Atemp.png"
                                                            alt="The new standard in eSign"
                                                            loading="lazy"
                                                        />{" "}
                                                    </figure>
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>{" "}
                                </div>
                            )}
                            {visibleContent === "Finance" && (
                                <div className="content-section">
                                    <div
                                        className="tab-pane  show active tabbs"
                                        id="home"
                                        role="tabpanel"
                                        aria-labelledby="home-tab"
                                        ref={sectionRefs[5]}
                                    >
                                        <div className="row mobile-reverse gap-mobile-16">
                                            <div className="col-md-6">
                                                <div className="flex-col">
                                                    <h3 className="f-28 f-700">
                                                        Finance: Scale responsibly and efficiently
                                                    </h3>
                                                    <ul className="list-tick">
                                                        <li>Automate financial document workflows for faster approvals.</li>
                                                        <li>Manage contracts, invoices, and budget approvals with ease.</li>
                                                        <li>Ensure compliance with financial regulations and reporting standards.</li>
                                                        <li>Enable scalable financial operations while maintaining accuracy.</li>
                                                    </ul>
                                                    <div className="buttons" >
                                                        <a href="https://app.agreementpaper.com/" className="loginBtn_bx black " target='_blank'>
                                                            <span>Get started free</span>
                                                        </a>{" "}
                                                        <a href="/book-a-demo" className="loginBtn_bx black  transparent">
                                                            <span>Schedule a demo</span>{" "}

                                                        </a>
                                                    </div>
                                                </div>
                                            </div>{" "}
                                            <div className="col-md-1" />{" "}
                                            <div className="col-md-5">
                                                {/* <div className="img">
                                                    <figure >
                                                        <img
                                                            src="image/Atemp.png"
                                                            alt="The new standard in eSign"
                                                            loading="lazy"
                                                        />{" "}
                                                    </figure>
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>{" "}
                                </div>
                            )}
                            {visibleContent === "Freelancers" && (
                                <div className="content-section">
                                    <div
                                        className="tab-pane  show active tabbs"
                                        id="home"
                                        role="tabpanel"
                                        aria-labelledby="home-tab"
                                        ref={sectionRefs[6]}
                                    >
                                        <div className="row mobile-reverse gap-mobile-16">
                                            <div className="col-md-6">
                                                <div className="flex-col">
                                                    <h3 className="f-28 f-700">
                                                        Freelancers: Manage less, do more and carry your work with you
                                                    </h3>
                                                    <ul className="list-tick">
                                                        <li>Simplify project management and client agreements with automation.</li>
                                                        <li>Create, send, and track invoices and contracts from anywhere.</li>
                                                        <li>Manage multiple clients efficiently with automated workflows.</li>
                                                        <li>Stay organized with a centralized hub for all your freelance documents.</li>
                                                    </ul>
                                                    <div className="buttons" >
                                                        <a href="https://app.agreementpaper.com/" className="loginBtn_bx black " target='_blank'>
                                                            <span>Get started free</span>
                                                        </a>{" "}
                                                        <a href="/book-a-demo" className="loginBtn_bx black  transparent">
                                                            <span>Schedule a demo</span>{" "}

                                                        </a>
                                                    </div>
                                                </div>
                                            </div>{" "}
                                            <div className="col-md-1" />{" "}
                                            <div className="col-md-5">
                                                {/* <div className="img">
                                                    <figure >
                                                        <img
                                                            src="image/Atemp.png"
                                                            alt="The new standard in eSign"
                                                            loading="lazy"
                                                        />{" "}
                                                    </figure>
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>{" "}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePageForEnterPrise;
