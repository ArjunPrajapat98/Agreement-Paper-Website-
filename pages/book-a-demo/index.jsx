import Head from "next/head";
import { BaseUrl } from "@/components/service/service";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const companyArray = [
  { value: 1, label: "1 - 25" },
  { value: 1, label: "26 - 50" },
  { value: 1, label: "51 - 75" },
  { value: 1, label: "76 - 100" },
  { value: 1, label: "101 - 200" },
  { value: 1, label: "200 - 500" },
];

const BookADemo
  = () => {
    const router = useRouter();

    const [countryData, setCountryData] = useState([]);
    const [disabled, setDisabled] = useState(false);
console.log('countryData',countryData);
    const [form, setForm] = useState({
      first_name: "",
      last_name: "",
      phone: "",
      email: "",
      company_size: "",
      company_website: "",
      company_headquarter: "",
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
              {" "}Agreementpaper | Book a Demo | Contract Management Solutions{" "}
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
                <h1>All in one Contract Management solution</h1>
                <p>
                  With Agreementpaper, our AI-powered platform automates contract drafting, identifies risky clauses,
                  and ensures compliance with up to 40% higher accuracy.
                  You can reduce contract review time by 50%, lower legal costs by 30%,  
                  and execute contracts 70% faster with built-in e-signatures
                </p>
              </div>
            </div>

            <div className="contAct_rSide">
              <div>
                {/* <div style="width: 100%;"> */}

                <div className="inter_lSide _onTab_dev">
                  <h1>Hire, onboard, and manage your entire global team</h1>

                  <p>
                    We'll answer your country-specific hiring questions, anything
                    you want to know about how our product works, and general
                    advice on compliance and payroll.
                  </p>
                </div>

                <div className="getStart">
                  <div className="gtStr_head">
                    <h1>Get started with Agreement Paper</h1>
                    <p>Schedule a 30-minute product demo with expert Q&A</p>
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
                      <div className="form-floating">
                        <select
                          className="form-select"
                          id="floatingSelectGrid"
                          name="company_size"
                          value={form.company_size}
                          onChange={(e) => dropdownHander(e)}
                        >
                          <option disabled value="">
                            {" "}
                            Select...{" "}
                          </option>
                          {companyArray?.map((e, i) => {
                            return (
                              <option value={e.label} key={i}>
                                {" "}
                                {e.label}{" "}
                              </option>
                            );
                          })}
                        </select>
                        <label htmlFor="floatingSelectGrid">Company Size</label>
                      </div>
                    </div>

                    <div className="innrImp_input">
                      <div className="form-floating ">
                        <input
                          type="text"
                          className="form-control"
                          id="floating_cWeb"
                          placeholder="Company website"
                          name="company_website"
                          value={form.company_website}
                          onChange={(e) => onChangeFunction(e)}
                        />
                        <label htmlFor="floating_cWeb">Company website</label>
                      </div>
                    </div>

                    <div className="innrImp_input flWid_inp">
                      <div className="form-floating">
                        <select
                          className="form-select"
                          id="floatingCompany_headQuater"
                          name="company_headquarter"
                          value={form.company_headquarter}
                          onChange={(e) => dropdownHander(e)}
                        >
                          <option disabled value="">
                            {" "}
                            Select...{" "}
                          </option>
                          {countryData?.map((e, i) => {
                            return (
                              <option value={e.value} key={i}>
                                {" "}
                                {e.label}{" "}
                              </option>
                            );
                          })}
                        </select>
                        <label htmlFor="floatingCompany_headQuater">
                          Company headquarters
                        </label>
                      </div>
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
                          !form?.company_size ||
                          !form?.company_website ||
                          !form?.company_headquarter
                          ? "btmGt_demoBtn2"
                          : "btmGt_demoBtn"
                      }
                      onClick={!disabled ? bookDemoFunction : () => { }}
                      disabled={
                        !form?.first_name ||
                        !form?.last_name ||
                        !form?.phone ||
                        !form?.email ||
                        !form?.company_size ||
                        !form?.company_website ||
                        !form?.company_headquarter
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
