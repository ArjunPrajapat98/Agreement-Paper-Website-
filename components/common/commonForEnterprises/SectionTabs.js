import React from 'react';


function SectionTabs() {
    return (
        <section className="sec_8">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="sec_8_heading tab-heading">
                            <h6>FEATURES</h6>
                            <h5>One platform- all that you need</h5>
                            <p>
                                Stop constantly switching between tools, devices, docs, and multi-channel conversations.
                            </p>
                        </div>
                    </div>
                </div>
                <>
                    <div className="row">
                        <div className="col-12">
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link btn-class  active"
                                        id="home-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#home"
                                        type="button"
                                        role="tab"
                                        aria-controls="home"
                                        aria-selected="true"
                                    >
                                        Contract Draft Assistance
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link btn-class "
                                        id="profile-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#profile"
                                        type="button"
                                        role="tab"
                                        aria-controls="profile"
                                        aria-selected="false"
                                    >
                                        eSign
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link btn-class "
                                        id="contact-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#contact"
                                        type="button"
                                        role="tab"
                                        aria-controls="contact"
                                        aria-selected="false"
                                    >
                                        Contract Review Assistance
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link btn-class "
                                        id="Supplier-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#Supplier"
                                        type="button"
                                        role="tab"
                                        aria-controls="Supplier"
                                        aria-selected="false"
                                    >
                                        Supplier & Agency Network
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link btn-class "
                                        id="Timesheets-tab"
                                        data-bs-toggle="tab"
                                        data-bs-target="#Timesheets"
                                        type="button"
                                        role="tab"
                                        aria-controls="Timesheets"
                                        aria-selected="false"
                                    >
                                        Timesheets and Invoicing
                                    </button>
                                </li>
                            </ul>
                            <div className="tab-content tab-container" >
                                <div
                                    className="tab-pane  show active tabbs"
                                    id="home"
                                    role="tabpanel"
                                    aria-labelledby="home-tab"
                                >
                                    <div  >
                                        <div className="row mobile-reverse gap-mobile-16">
                                            <div className="col-md-6">
                                                <div className="flex-col">
                                                    <h3 className="f-28 f-700">
                                                        Benefit from AI-driven Contract Draft Assistance for fast and precise contract creation.
                                                        {/* <br /> with few clicks */}
                                                    </h3>{" "}
                                                    <ul className="list-tick">
                                                        <li >
                                                            Use your own templates or select from our extensive template library.
                                                        </li>{" "}
                                                        <li >
                                                            Customize and format documents.
                                                        </li>{" "}
                                                        <li >
                                                            Control document access and permissions effectively.
                                                        </li>{" "}
                                                        <li >Collect internal approvals</li>{" "}
                                                        <li >
                                                            Access comprehensive audit trails, version control, and real-time tracking.
                                                        </li>{" "}
                                                        <li >Seamless Approval process</li>{" "}
                                                        <li >
                                                            Integrations with leading ERPs
                                                        </li>
                                                    </ul>{" "}
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
                                                {/* <div className="video_bx">
                                                    <video
                                                        width="100%"
                                                        loop
                                                        controls={true}
                                                        muted
                                                        autoplay="autoplay"
                                                        autoPlay
                                                        preload="none"
                                                        style={{ pointerEvents: "none" }}
                                                        playsinline
                                                        oncontextmenu={false}
                                                    >
                                                        <source src="image/Contract Draft Assistance.mp4" type="video/mp4" />
                                                    </video>
                                                </div> */}
                                                {/* <div className="img">Contract Management Trends.png
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
                                <div
                                    className="tab-pane  tabbs"
                                    id="profile"
                                    role="tabpanel"
                                    aria-labelledby="profile-tab"
                                >
                                    <div  >
                                        <div className="row mobile-reverse gap-mobile-16">
                                            <div className="col-md-6">
                                                <div className="flex-col">
                                                    <h3 className="f-28 f-700">
                                                        Secure and legally compliant E-signing for
                                                        <br />hassle-free contract execution.
                                                    </h3>{" "}
                                                    <ul className="list-tick">
                                                        <li >
                                                            Sign documents electronically from any device, anywhere.{" "}
                                                        </li>{" "}
                                                        <li >
                                                            Streamline the signing process with automated workflows and notifications.
                                                        </li>{" "}
                                                        <li >
                                                            Ensure authenticity with advanced encryption and audit trails.
                                                        </li>{" "}
                                                        <li >Integrate seamlessly with your existing digital tools for a unified experience.</li>{" "}

                                                    </ul>{" "}
                                                    <div className="buttons" >
                                                        <a href="https://app.agreementpaper.com/" target='_blank' className="loginBtn_bx black ">
                                                            <span>Get started free</span>
                                                        </a>{" "}
                                                        <a href="/book-a-demo" className="loginBtn_bx black transparent">
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
                                                            src="image/Aesign.png"
                                                            alt="The new standard in eSign"
                                                            loading="lazy"
                                                        />{" "}
                                                    </figure>
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>{" "}
                                </div>
                                <div
                                    className="tab-pane  tabbs"
                                    id="contact"
                                    role="tabpanel"
                                    aria-labelledby="contact-tab"
                                >
                                    <div style={{}}>
                                        <div className="row mobile-reverse gap-mobile-16">
                                            <div className="col-md-6">
                                                <div className="flex-col">
                                                    <h3 className="f-28 f-700">
                                                        AI-powered Contract Review Assistance to ensure thorough
                                                        <br /> and accurate contract analysis.
                                                    </h3>{" "}
                                                    <ul className="list-tick">
                                                        <li >Automatically identify and highlight potential risks and issues.</li>{" "}
                                                        <li >Suggest revisions and provide compliance checks with relevant legal standards.</li>{" "}
                                                        <li >
                                                            Streamline the review process to save time and reduce legal costs.
                                                        </li>{" "}
                                                        <li >Facilitate collaboration by allowing multiple stakeholders to review</li>{" "}
                                                        <li >Truly powerful search</li>{" "}

                                                    </ul>{" "}
                                                    <div className="buttons" >
                                                        <a href="https://app.agreementpaper.com/" target='_blank' className="loginBtn_bx black ">
                                                            <span>Get started free</span>
                                                        </a>{" "}
                                                        <a href="/book-a-demo" className="loginBtn_bx black transparent">
                                                            <span>Schedule a demo</span>{" "}

                                                        </a>
                                                    </div>
                                                </div>
                                            </div>{" "}
                                            <div className="col-md-1" />{" "}
                                            <div className="col-md-5">
                                                {/* <div className="video_bx">
                                                    <video
                                                        width="100%"
                                                        loop
                                                        // controls={ true}
                                                        muted
                                                        autoplay="autoplay"
                                                        autoPlay
                                                        preload="none"
                                                        style={{ pointerEvents: "none" }}
                                                        playsinline
                                                        oncontextmenu={false}
                                                    >
                                                        <source src="image/Contract Review Assistance.mp4" type="video/mp4" />
                                                    </video>
                                                </div> */}
                                                {/* <div className="img">
                                                    <figure >
                                                        <img
                                                            src="image/Arepository.png"
                                                            alt="The new standard in eSign"
                                                            loading="lazy"
                                                        />{" "}
                                                    </figure>
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane  tabbs"
                                    id="Supplier"
                                    role="tabpanel"
                                    aria-labelledby="Supplier-tab"
                                >
                                    <div style={{}}>
                                        <div className="row mobile-reverse gap-mobile-16">
                                            <div className="col-md-6">
                                                <div className="flex-col">
                                                    <h3 className="f-28 f-700">
                                                        Comprehensive Supplier Network for streamlined vendor management.
                                                        {/* <br /> and accurate contract analysis. */}
                                                    </h3>{" "}
                                                    <ul className="list-tick">
                                                        <li >Easily discover, connect, and collaborate with a wide range of suppliers.</li>{" "}
                                                        <li >Centralize communication and contract negotiations within the platform.</li>{" "}
                                                        <li >
                                                            Gain insights into supplier performance and compliance.
                                                        </li>{" "}
                                                        <li >Enhance procurement efficiency with integrated supplier onboarding and management tools.</li>{" "}

                                                    </ul>{" "}
                                                    <div className="buttons" >
                                                        <a href="https://app.agreementpaper.com/" target='_blank' className="loginBtn_bx black ">
                                                            <span>Get started free</span>
                                                        </a>{" "}
                                                        <a href="/book-a-demo" className="loginBtn_bx black transparent">
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
                                                            src="image/Arepository.png"
                                                            alt="The new standard in eSign"
                                                            loading="lazy"
                                                        />{" "}
                                                    </figure>
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="tab-pane  tabbs"
                                    id="Timesheets"
                                    role="tabpanel"
                                    aria-labelledby="Timesheets-tab"
                                >
                                    <div style={{}}>
                                        <div className="row mobile-reverse gap-mobile-16">
                                            <div className="col-md-6">
                                                <div className="flex-col">
                                                    <h3 className="f-28 f-700">
                                                        Integrated Service Timesheets and Invoicing for
                                                        <br /> seamless project tracking.
                                                    </h3>{" "}
                                                    <ul className="list-tick">
                                                        <li >Automatically generate timesheets linked to services rendered.</li>{" "}
                                                        <li >Simplify invoicing with accurate, real-time data from timesheets.</li>{" "}
                                                        <li >
                                                            Ensure compliance with automated billing and payment schedules.
                                                        </li>{" "}
                                                        <li >Centralize timesheet approvals and invoice management in one platform.</li>{" "}


                                                    </ul>{" "}
                                                    <div className="buttons" >
                                                        <a href="https://app.agreementpaper.com/" target='_blank' className="loginBtn_bx black ">
                                                            <span>Get started free</span>
                                                        </a>{" "}
                                                        <a href="/book-a-demo" className="loginBtn_bx black transparent">
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
                                                            src="image/Arepository.png"
                                                            alt="The new standard in eSign"
                                                            loading="lazy"
                                                        />{" "}
                                                    </figure>
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>

            </div>
        </section>
    )
}

export default SectionTabs