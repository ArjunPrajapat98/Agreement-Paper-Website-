import Head from "next/head";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { BaseUrl } from "@/components/service/service";
import InputRange from "react-input-range";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import { useRouter } from "next/router";
import DropDown from "@/components/common/DropDown";
import axios from "axios";
import Link from "next/link";
import Skeleton from "@/components/skeleton/Skeleton";
// import ReactPaginate from 'react-paginate';

import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

const LIMIT_DATA = 5;

const modules = {
  toolbar: [[""]],
};

const formats = ["bold", "italic", "list", "bullet"];

const index = () => {
  const [resultsData, setResultsData] = useState([]);
  const [temp, setTemp] = useState(true);

  const [newSkills, setNewSkills] = useState([]);
  const [newCountry, setNewCountry] = useState([]);
  const [newLanguage, setNewLanguage] = useState([]);

  // const [page, setPage] = React.useState(1);
  // const [pageCount, setPageCount] = useState(0);
  // const [totalCount, setTotalCount] = useState(0)

  const router = useRouter();

  const [isSearchable, setIsSearchable] = useState(true);
  const [topResourceData, setTopResourcesData] = useState([]);
  const [topAgencyData, setTopAgencyData] = useState([]);

  const [payRate1, setPayRate1] = useState({
    min: +0,
    max: +100,
  });

  const [expValue, setExpValue] = useState("");

  const [filters, setFilters] = useState({
    search: "",
    skills: "",
    job_type: "",
    pay_rate_min: "",
    pay_rate_max: "",
    experience_name: "",
    language: "",
    company_country: "",
    company_state: "",
    created_at: "",
  });

  const getListData = async () => {
    await axios
      .get(BaseUrl + `/resources/skill/`)
      .then((resp) => {
        if (resp?.data) {
          setNewSkills(resp.data);
        }
      })
      .catch((error) => {});

    await axios
      .get(BaseUrl + `/accounts/country/`)
      .then((resp) => {
        if (resp?.data) {
          setNewCountry(resp.data);
        }
      })
      .catch((error) => {});

    await axios
      .get(BaseUrl + `/accounts/languages/`)
      .then((resp) => {
        if (resp?.data) {
          setNewLanguage(resp.data);
        }
      })
      .catch((error) => {});

    await axios
      .get(BaseUrl + `/resources/resources-profile/?limit=${LIMIT_DATA}`)
      .then((resp) => {
        if (resp?.data) {
          setTopResourcesData(resp?.data?.results);
        }
      })
      .catch((error) => {});

    await axios
      .get(BaseUrl + `/agency/agency-profile/?limit=${LIMIT_DATA}`)
      .then((resp) => {
        if (resp?.data) {
          setTopAgencyData(resp?.data?.results);
        }
      })
      .catch((error) => {});
  };

  useEffect(() => {
    getListData();
  }, []);

  useEffect(() => {
    setTemp(true);

    let params = `?limit=100&search=${filters.search}&job_type=${
      filters.job_type
    }&skills=${
      filters.skills.value != undefined ? filters.skills.value : ""
    }&language=${
      filters.language.value != undefined ? filters.language.value : ""
    }&company_country=${
      filters.company_country.value != undefined
        ? filters.company_country.value
        : ""
    }&pay_rate_min=${filters.pay_rate_min}&pay_rate_max=${
      filters.pay_rate_max
    }&experience_name=${filters.experience_name}&created_at=${
      filters.created_at
    }`;

    axios
      .get(BaseUrl + `/job/public-job-post/${params}`)
      .then((resp) => {
        if (resp?.data) {
          // setTotalCount(resp?.data?.count)
          setResultsData(resp?.data?.results);
          setTemp(false);
        }
      })
      .catch((error) => {});

    router.push(params);
  }, [filters]);

  const skillsSelectHandler = (element) => {
    if (element && element.value) {
      setFilters({ ...filters, skills: element });
    }
  };

  const countrySelectHandler = (element) => {
    if (element && element.value) {
      setFilters({ ...filters, company_country: element });
    }
  };

  const languageSelectHandler = (element) => {
    if (element && element.value) {
      setFilters({ ...filters, language: element });
    }
  };

  useEffect(() => {
    setFilters({
      ...filters,
      pay_rate_min: payRate1.min,
      pay_rate_max: payRate1.max,
    });
  }, [payRate1]);

  useEffect(() => {
    setFilters({ ...filters, experience_name: expValue });
  }, [expValue]);

  // onChange Handler

  const inputHandler = (e) => {
    let { name, value } = e.target;

    setFilters({ ...filters, [name]: value });
  };

  // Clear Out functions

  const all_Clear_funtion = () => {
    router.push("/job_work");

    setPayRate1({
      min: "",
      max: "",
    });

    setExpValue("");

    setFilters({
      ...filters,
      search: "",
      skills: "",
      job_type: "",
      pay_rate_min: "",
      pay_rate_max: "",
      experience_name: "",
      language: "",
      company_country: "",
      company_state: "",
      created_at: "",
    });
  };

  const jobTypeArray = [
    { value: "1", label: "Hourly ($/hour)", name: "job_type" },
    { value: "2", label: "Full-time (40 hrs/wk)", name: "job_type" },
    { value: "3", label: "Part-time (20 hrs/wk)", name: "job_type" },
  ];

  const onClickCheck = (e) => {
    setFilters({
      ...filters,
      job_type: filters.job_type === e.value ? "" : e.value,
    });
  };

  function taskDate(dateMilli) {
    var d = (new Date(dateMilli) + "").split(" ");
    d[2] = d[2] + ",";

    return [d[0], d[2]].join(" ");
  }

  useEffect(() => {
    const sidebar = document?.querySelector("#sidebar");
    const sidebarToggler = document?.querySelector(".sidebar_toggler");

    sidebarToggler?.addEventListener("click", () => {
      sidebar?.classList?.toggle("show");
    });

    window?.addEventListener("click", (e) => {
      if (
        e?.target?.id !== "sidebar" &&
        e?.target?.className !== "sidebar_toggler"
      ) {
        sidebar?.classList?.remove("show");
      }
    });
  }, []);

  useEffect(() => {
    document?.getElementById("btnadd")?.addEventListener("click", function () {
      document?.getElementById("collapsed")?.classList?.toggle("colapsible");
      document?.getElementById("btnadd")?.classList?.toggle("filternewBtn");
      // document.getElementById("bdFlow").classList.toggle("overFlow");
    });
  }, []);

  // useEffect(() => {
  //     setPageCount(Math.ceil(totalCount / 5))
  // }, [totalCount])

  //   useEffect(() => {
  //     setPageCount(Math.ceil(totalCount / LIMIT_DATA))
  // }, [totalCount])

  // const handleChange = (page_value) => {
  //   console.log("pageValue" , page_value);
  //   // setPage(page_value);
  //   // setFilters({ ...filters, offset: (LIMIT_DATA * (page_value - 1)) })
  // };

  return (
    <>
      <div>
        <Head>
          <title> Job - Work </title>
          <meta name="description" content="Job - Work" />
          <link rel="canonical" href="https://www.agreementpaper.com/job_work" />
        </Head>
      </div>
      <Header />

      <div>
        <section className="srchJob_archivePage">
          <div className="_fulWid_container">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-11"></div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="srchProf_byName_bx">
              <input
                placeholder="Search profiles by name or keywords"
                type="text"
                name="search"
                value={filters.search}
                onChange={(e) => inputHandler(e)}
              />
              <button className="srcByName_inputField">
                <span>
                  <i className="fa-solid fa-magnifying-glass"></i>
                </span>
                Search
              </button>
            </div>
          </div>

          <div className="container">
            <div id="collapsed" className="frelancerJob_gridBx">
              <div className="row">
                <div
                  className="col-sm-4 col-md-4 col-lg-3"
                  style={{ position: "relative" }}
                >
                  {/* <div className="col-sm-4 col-md-4 col-lg-3" style="position: relative;"> */}
                  <div className="srchProFilter_bx">
                    <div className="filterSrch1">
                      <h1>
                        Search <span>Profiles</span>
                      </h1>

                      <div className="clrAll_filterBx">
                        <h6>FILTERS</h6>
                        <span
                          className="pointer_class"
                          onClick={() => all_Clear_funtion()}
                        >
                          Clear all
                        </span>
                      </div>
                    </div>

                    <div className="filterSrch2">
                      <div className="clrAll_filterBx">
                        <h6>Skills</h6>
                        <span
                          className="pointer_class"
                          onClick={() => setFilters({ ...filters, skills: "" })}
                        >
                          Clear
                        </span>
                      </div>

                      <div>
                        <DropDown
                          className="basic-single"
                          classNamePrefix="anvTech_select"
                          isSearchable={isSearchable}
                          name="skills"
                          options={newSkills}
                          value={filters?.skills?.value ? filters.skills : 0}
                          onChange={(e) => {
                            skillsSelectHandler(e);
                          }}
                          valueText="id"
                          labelText="name"
                        />
                      </div>
                    </div>

                    <div className="filterSrch2">
                      <div className="clrAll_filterBx">
                        <h6> Date After </h6>
                        <span
                          className="pointer_class"
                          onClick={() =>
                            setFilters({ ...filters, created_at: "" })
                          }
                        >
                          Clear
                        </span>
                      </div>

                      <div>
                        <input
                          className="ctm_date_inp"
                          type="date"
                          name="created_at"
                          value={filters.created_at}
                          onChange={(e) => inputHandler(e)}
                        />
                      </div>
                    </div>

                    <div className="filterSrch3">
                      <div className="clrAll_filterBx">
                        <h6>Availability</h6>
                        <span
                          className="pointer_class"
                          onClick={() =>
                            setFilters({ ...filters, job_type: "" })
                          }
                        >
                          {" "}
                          Clear{" "}
                        </span>
                      </div>

                      <div className="checkBox_filterBx">
                        {jobTypeArray.map((el, ind) => {
                          return (
                            <React.Fragment key={ind}>
                              <input
                                className=""
                                id={ind}
                                type="checkbox"
                                checked={filters?.job_type === el?.value}
                                name={el.name}
                                value={
                                  filters?.job_type ? filters?.job_type : ""
                                }
                                onClick={(e) => onClickCheck(el)}
                                readOnly
                              />
                              <label htmlFor={ind}>&nbsp;{el.label}</label>
                              <br />
                            </React.Fragment>
                          );
                        })}
                      </div>
                    </div>

                    <div className="filterSrch4">
                      <div className="clrAll_filterBx">
                        <h6>Pay rate</h6>
                        <span
                          className="pointer_class"
                          onClick={() =>
                            setPayRate1({
                              ...payRate1,
                              min: "",
                              max: "",
                            })
                          }
                        >
                          Clear
                        </span>
                      </div>

                      <div>
                        <div className="rangeInputsBx">
                          <input
                            type="number"
                            maxLength="4"
                            value={payRate1.min}
                            className="from"
                            readOnly
                          />
                          <input
                            type="number"
                            maxLength="4"
                            value={payRate1.max}
                            className="to"
                            readOnly
                          />
                        </div>

                        <form className="form m-3">
                          <InputRange
                            inpuInputRangeClassNames="arjunsss"
                            name="anvRange_bx"
                            minValue={0}
                            maxValue={100}
                            formatLabel={(value) => `${value}`}
                            value={payRate1 ? payRate1 : null}
                            onChange={(e) => setPayRate1(e)}
                          />
                        </form>
                      </div>
                    </div>

                    <div className="filterSrch5">
                      <div className="clrAll_filterBx">
                        <h6>Years of experience</h6>
                        <span
                          className="pointer_class"
                          onClick={() => {
                            setExpValue("");
                            setFilters({ ...filters, experience_name: "" });
                          }}
                        >
                          Clear
                        </span>
                      </div>

                      <div>
                        <div className="rangeInputsBx">
                          <input
                            type="number"
                            maxLength="4"
                            value={expValue ? +expValue : 0}
                            className="from"
                            readOnly
                          />
                        </div>

                        <form className="form m-3">
                          <InputRange
                            name="anvRange_bx"
                            minValue={0}
                            maxValue={50}
                            value={expValue ? +expValue : 0}
                            onChange={(e) => setExpValue(e)}
                          />
                        </form>
                      </div>
                    </div>

                    <div className="filterSrch6">
                      <div className="clrAll_filterBx">
                        <h6> Country </h6>
                        <span
                          className="pointer_class"
                          onClick={() =>
                            setFilters({ ...filters, company_country: "" })
                          }
                        >
                          Clear
                        </span>
                      </div>

                      <div>
                        <DropDown
                          className="basic-single"
                          classNamePrefix="anvTech_select"
                          isSearchable={isSearchable}
                          name="company_country"
                          options={newCountry ? newCountry : []}
                          value={
                            filters?.company_country?.value
                              ? filters.company_country
                              : null
                          }
                          onChange={(e) => {
                            countrySelectHandler(e);
                          }}
                          valueText="id"
                          labelText="name"
                        />
                      </div>
                    </div>

                    <div className="filterSrch6">
                      <div className="clrAll_filterBx">
                        <h6>Languages</h6>
                        <span
                          className="pointer_class"
                          onClick={() =>
                            setFilters({ ...filters, language: "" })
                          }
                        >
                          Clear
                        </span>
                      </div>

                      <div>
                        <DropDown
                          className="basic-single"
                          classNamePrefix="anvTech_select"
                          isSearchable={isSearchable}
                          name="language"
                          options={newLanguage ? newLanguage : []}
                          value={
                            filters?.language?.value ? filters.language : null
                          }
                          onChange={(e) => {
                            languageSelectHandler(e);
                          }}
                          valueText="id"
                          labelText="name"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm-12 col-md-8 col-lg-6 mSlide">
                  {/* <div className="col-sm-12 col-md-8 col-lg-6 mSlide" style="position: relative;z-index: 9;"> */}
                  <div className="filterBtn_otr">
                    <button id="btnadd" className="toggle-filters">
                      {" "}
                      <i className="hi-filters-menu"></i> Filters{" "}
                    </button>
                  </div>
                  <div className="dispLay_resultBx">
                    <div className="disResult_head">
                      <h1 className="dlsH1_head">
                        {" "}
                        DISPLAYING TOTAL RESULTS DATA{" "}
                        {resultsData?.length > 0
                          ? resultsData?.length
                          : null}{" "}
                      </h1>
                    </div>

                    <div className="engr_qualifieDetailsBx">
                      {temp ? (
                        <Skeleton />
                      ) : (
                        resultsData?.map((el, ind) => {
                          return (
                            <React.Fragment key={ind}>
                              <div className="engrQual_innerBx jbWork_new">
                                <div className="engr_desigNateAnd_desc p-2">
                                  <div className="postAndHrs_bx">
                                    <div className="engrPostName">
                                      <div className="nw_engPost_nm">
                                        <h1>
                                          <Link
                                            href="https://app.agreementpaper.com"
                                            target="_blank"
                                            className="hv_color_css"
                                          >
                                            {el?.title}
                                          </Link>
                                        </h1>
                                        <div className="tagS mt-2 mb-2">
                                          {el?.job_type_value}
                                        </div>
                                      </div>
                                    </div>

                                    <div className="hrsTag_bx hrs_tagNew mt-2">
                                      {el?.show_job_pay_rate === true ? (
                                        <h6> {el?.currency_code} ***** /day</h6>
                                      ) : (
                                        <h6>
                                          {" "}
                                          {el?.currency_code} {el?.pay_rate}/day
                                        </h6>
                                      )}
                                    </div>
                                  </div>

                                  <div className="engrPlaceN_dateBx zMarg">
                                    <div className="engrPl_nm mR_cls_TB">
                                      <img
                                        className=""
                                        src="image/plPlace.png"
                                        alt="Location"
                                      />
                                      &nbsp;
                                      <span className="">
                                        {" "}
                                        {el?.company_city} {el?.company_state}{" "}
                                        {el?.company_country_name}{" "}
                                      </span>
                                    </div>

                                    <div className="engrPl_nm mR_cls_TB ">
                                      <img src="image/plBuilding.png" alt="img" />
                                      <span> {el?.company_name} </span>
                                    </div>

                                    <div className="engrPl_nm mR_cls_TB">
                                      <img src="image/plRemoteJob.png" alt="img" />
                                      <span> {el?.job_location_type} </span>
                                    </div>

                                    <div className="engrPl_nm mR_cls_TB">
                                      <img src="image/plDate.png" alt="img" />
                                      <span> {taskDate(el?.created_at)} </span>
                                    </div>
                                  </div>

                                  <p className="jbWork_inPara">
                                    <label> Job description </label>
                                    <ReactQuill
                                      className="ajn_clss"
                                      modules={modules}
                                      formats={formats}
                                      value={el.job_description}
                                      readOnly
                                    />
                                  </p>

                                  <label className="jb_skils_cls">
                                    {" "}
                                    Skills{" "}
                                  </label>
                                  <div className="skillTag_bx">
                                    {el.skills_data.map((e, i) => {
                                      return (
                                        <div className="mySkil_ajn" key={i}>
                                          {" "}
                                          {e.name}{" "}
                                        </div>
                                      );
                                    })}
                                  </div>

                                  {el?.is_company_site_link === true ? (
                                    <div className="skillTag_bx mt-3">
                                      <Link
                                        href={el?.company_website}
                                        target="_blank"
                                      >
                                        <div className="applyON_web">
                                          {" "}
                                          Apply on company site{" "}
                                        </div>
                                      </Link>
                                    </div>
                                  ) : (
                                    <></>
                                  )}
                                </div>
                              </div>
                            </React.Fragment>
                          );
                        })
                      )}

                      {temp ? (
                        <Skeleton />
                      ) : (
                        resultsData?.length === 0 && (
                          <>
                            <div className="engrQual_innerBx">
                              <div className="engr_desigNateAnd_desc">
                                <div className="postAndHrs_bx">
                                  <div className="engrPostName">
                                    <h1 className=""> &nbsp; No Data Found </h1>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </>
                        )
                      )}

                      {temp ? <Skeleton /> : <></>}
                    </div>
                  </div>
                  {/* <div className="page_inationSec mb-4">
                      <div className='ml-2'>
                      </div>
                      <div className="pagInation_box mt-4 margin_ml">
                        <div className="own_pagination">
                        <ReactPaginate
                            breakLabel="..."
                            nextLabel=">"
                            onPageChange={handleChange}
                            pageRangeDisplayed={5}
                            pageCount={pageCount}
                            activeClassName="acive_pageClas"
                            previousLabel="<"
                            renderOnZeroPageCount={null}
                          />
                        </div>
                      </div>
                  </div> */}
                </div>

                <div className="col-lg-3">
                  <div className="topAgen_bx">
                    <div className="getFreelancer">
                      <h1>Get your Freelancer profile up and running</h1>
                      <p>
                        View the step by step guide to set up a freelancer
                        profile so you can land your dream job
                      </p>
                      <a className="chekItOut_btn" href="">
                        Check it out
                      </a>
                    </div>

                    <div className="tpAgent_tpProfile">
                      <div className="tpAgency_bx">
                        <h1>TOP AGENCIES</h1>
                        {topAgencyData?.length > 0 ? (
                          topAgencyData?.map((el, ind) => {
                            return (
                              <div className="otrPaMatchBx" key={ind}>
                                <div className="profMatchBx">
                                  <div className="pa_details">
                                    <h6>
                                      {el?.user_detail?.first_name}{" "}
                                      {el?.user_detail?.last_name}
                                    </h6>
                                    <p>
                                      Company :{" "}
                                      {el?.company_name !== "null"
                                        ? el?.company_name
                                        : "-"}
                                    </p>

                                    <div className="pla_designBx">
                                      <img
                                        src="image/plPlace.png"
                                        alt="Location"
                                      />
                                      <span>
                                        {el?.district},{el?.state_name},
                                        {el?.country_name}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })
                        ) : (
                          <div className="otrPaMatchBx">
                            <div className="profMatchBx">
                              <div className="pa_details">
                                <h6>No Profile</h6>
                              </div>
                            </div>
                            <hr />
                          </div>
                        )}
                      </div>

                      {topResourceData?.length > 0 && (
                        <div className="tpProfiles">
                          <h1>Latest Profiles</h1>
                          {topResourceData?.map((el, ind) => {
                            return (
                              <div className="otrPaMatchBx" key={ind}>
                                <div className="profMatchBx">
                                  <div className="pa_details">
                                    <h6>
                                      {el?.user_detail?.first_name}{" "}
                                      {el?.user_detail?.last_name}
                                    </h6>
                                    <div className="pla_designBx">
                                      <span>Profile :</span>{" "}
                                      <span>{el?.current_job_title}</span>
                                    </div>
                                    <p>
                                      Experience : {el?.total_experience} Year
                                    </p>
                                    <p>
                                      Average Ratings : {el?.average_rating}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mui_pagination"></div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default index;
