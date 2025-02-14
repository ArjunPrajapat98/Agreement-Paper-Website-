import Head from "next/head";
import { BaseUrl } from "@/components/service/service";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const BookADemo
    = () => {
        const router = useRouter();

        const [countryData, setCountryData] = useState([]);
        const [disabled, setDisabled] = useState(false);

        const [form, setForm] = useState({
            first_name: "",
            last_name: "",
            phone: "",
            email: "",
            topic: "",
            subject: "",
            tellusmore: "",
            company_size: 1,
            company_website: "test.com",
            company_headquarter: 9,
        });

        const onChangeFunction = (e) => {
            let { name, value } = e.target;
            setForm({ ...form, [name]: value });
        };

        const dropdownHander = (e) => {
            let { name, value } = e.target;
            setForm({ ...form, [name]: value });
        };

        useEffect(() => {
            axios
                .get(BaseUrl + `/accounts/country/`)
                .then((resp) => {
                    if (resp?.data) {
                        let response = resp?.data?.map((el) => {
                            return {
                                value: el?.id,
                                label: el?.name,
                            };
                        });
                        setCountryData(response);
                    }
                })
                .catch((error) => { });
        }, []);

        const bookDemoFunction = () => {
            setDisabled(true);
            axios
                .post(BaseUrl + `/accounts/contact-us/`, form)
                .then((resp) => {
                    toast.success("Message send succussfully");

                    setForm({});
                    setDisabled(false);
                    setTimeout(() => {
                        router.back();
                    }, 1000);
                })
                .catch((error) => {
                    setDisabled(false);
                    if (error?.response?.data?.email) {
                        toast.error(`${error?.response?.data?.email[0]}`);
                    }
                });
        };

        return (
            <>
                <div>
                    <Head>
                        <title>
                            {" "}Agreementpaper | Contact| Contract Management Solutions{" "}
                        </title>
                        <meta
                            name="description"
                            content="Book a free demo to optimize, automate, and streamline your entire contract process. Enhance contract management with AI-powered solutions today!"
                        />
                        <link rel="canonical" href="https://www.agreementpaper.com/book-a-demo" />
                    </Head>
                </div>
                <nav className="oneSide_nv">
                    <a href="/">
                        <img
                            className="_inTab"
                            src="/image/aggrement_onLgt_logo.png"
                            alt="Agreementpaper "
                        />
                        <img
                            className="_outTab"
                            src="/image/aggrement_onDrk_logo.png"
                            alt="Agreementpaper"
                        />
                    </a>
                </nav>
                <Toaster position="top-center" reverseOrder={false} />

                <section className="contAct_flexSec">
                    <div className="contAct_ortBx">
                        <div className="contAct_lSide">
                            <div className="inter_lSide">
                                <h1>Contact Us</h1>
                                <span>We’re available any time, wherever you are in Australia.</span>

                                <h3>Phone</h3>
                                <span>1800 232 682</span>
                                <hr />
                                <h3>Email</h3>
                                <span>General enquiries: <a className="color-white" href="mailto:info@agreementpaper.com">info@agreementpaper.com</a></span><br />
                                <span>Media enquiries: <a className="color-white"  href="mailto:info@agreementpaper.com">info@agreementpaper.com</a></span>
                                <hr />
                                <h3>Office Location</h3>
                                <span>
                                    Because we’re a fully online firm, our team services clients all across Australia. Our head office is located at:
                                    <br />
                                    Wyndham's Innovation Hub, 600 Sneydes Road, Werribee
                                </span>
                            </div>


                        </div>

                        <div className="contAct_rSide">
                            <div>
                                <div className="getStart">
                                    <div className="gtStr_head">
                                        <h1>Get started with Agreement Paper</h1>
                                        <p>Have questions about our products or need help using them? Get in touch</p>
                                    </div>
                                    <div className="inptFlex_bx">
                                        <div className="innrImp_input">
                                            <div className="form-floating ">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="floating_fname"
                                                    placeholder="First name"
                                                    name="first_name"
                                                    value={form.first_name}
                                                    onChange={(e) => onChangeFunction(e)}
                                                />
                                                <label htmlFor="floating_fname">First name</label>
                                            </div>
                                        </div>

                                        <div className="innrImp_input">
                                            <div className="form-floating ">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="floating_lname"
                                                    placeholder="Last name"
                                                    name="last_name"
                                                    value={form.last_name}
                                                    onChange={(e) => onChangeFunction(e)}
                                                />
                                                <label htmlFor="floating_lname">Last name</label>
                                            </div>
                                        </div>

                                        <div className="innrImp_input">
                                            <div className="form-floating ">
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    id="floating_phone"
                                                    placeholder="Phone number"
                                                    name="phone"
                                                    value={form.phone}
                                                    onChange={(e) => onChangeFunction(e)}
                                                />
                                                <label htmlFor="floating_phone">Phone number</label>
                                            </div>
                                        </div>

                                        <div className="innrImp_input">
                                            <div className="form-floating">
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="floatingEmail"
                                                    placeholder="Email "
                                                    name="email"
                                                    value={form.email}
                                                    onChange={(e) => onChangeFunction(e)}
                                                />
                                                <label htmlFor="floatingEmail">Email id</label>
                                            </div>
                                        </div>

                                        <div className="innrImp_input">
                                            <div className="form-floating ">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="floating_cWeb"
                                                    placeholder="Topic"
                                                    name="topic"
                                                    value={form?.topic}
                                                    onChange={(e) => onChangeFunction(e)}
                                                />
                                                <label htmlFor="floating_cWeb">Topic</label>
                                            </div>
                                        </div>

                                        <div className="innrImp_input">
                                            <div className="form-floating ">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="floating_cWeb"
                                                    placeholder="Subject"
                                                    name="subject"
                                                    value={form.subject}
                                                    onChange={(e) => onChangeFunction(e)}
                                                />
                                                <label htmlFor="floating_cWeb">Subject</label>
                                            </div>
                                        </div>

                                        <div className="innrImp_input flWid_inp">
                                            <textarea
                                                type="text"
                                                className="form-control"
                                                id="floating_cWeb"
                                                placeholder="Tell us more"
                                                name="tellsumore"
                                                value={form.tellsumore}
                                                onChange={(e) => onChangeFunction(e)}>

                                            </textarea>
                                        </div>
                                    </div>

                                    <div className="btmGt_bx">
                                        <p className="btnGt_para">
                                            We respect your data. By submitting this form, you agree
                                            that we may use ​this information in accordance with our{" "}
                                            <a href="/legal">Privacy policy.</a>{" "}
                                        </p>
                                        <button
                                            className={
                                                !form?.first_name ||
                                                    !form?.last_name ||
                                                    !form?.phone ||
                                                    !form?.email ||
                                                    !form?.topic ||
                                                    !form?.subject
                                                    ? "btmGt_demoBtn2"
                                                    : "btmGt_demoBtn"
                                            }
                                            onClick={!disabled ? bookDemoFunction : () => { }}
                                            disabled={
                                                !form?.first_name ||
                                                !form?.last_name ||
                                                !form?.phone ||
                                                !form?.email ||
                                                !form?.topic ||
                                                !form?.subject
                                            }
                                        >
                                            Book a demo
                                        </button>

                                        <div className="ctr_headOr_emp mt-3">
                                            <a href="/difference-between-contract-labor-vs-employee" className="contractEmp">
                                                Contractor or employee?
                                            </a>{" "}
                                            <a href="/" className="signD_up">
                                                Sign up here
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    };

export default BookADemo
    ;
