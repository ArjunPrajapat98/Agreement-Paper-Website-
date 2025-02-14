import Head from "next/head";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { BaseUrl } from "@/components/service/service";
import InputRange from "react-input-range";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import DropDown from "@/components/common/DropDown";
import axios from "axios";

import Skeleton from "@/components/skeleton/Skeleton";
const LIMIT_DATA = 5;
const index = () => {
  const [resultsData, setResultsData] = useState([]);

  const [temp, setTemp] = useState(true);
  const [topResourceData, setTopResourcesData] = useState([]);
  const [topAgencyData, setTopAgencyData] = useState([]);
  const [newSkills, setNewSkills] = useState([]);
  const [newCountry, setNewCountry] = useState([]);
  const [newLanguage, setNewLanguage] = useState([]);

  const router = useRouter();

  const [isSearchable, setIsSearchable] = useState(true);

  const [payRate1, setPayRate1] = useState({
    min: +0,
    max: +100,
  });

  const [experience1, setExperience1] = useState({
    min: +0,
    max: +100,
  });

  const [filters, setFilters] = useState({
    search: "",
    skill: "",
    availability: "",
    pay_rate_min: "",
    pay_rate_max: "",
    experience_min: "",
    experience_max: "",
    language: "",
    country: "",
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

    let params = `?limit=100&search=${filters.search}&availability=${
      filters.availability
    }&skill=${
      filters.skill.value != undefined ? filters.skill.value : ""
    }&language=${
      filters.language.value != undefined ? filters.language.value : ""
    }&country=${
      filters.country.value != undefined ? filters.country.value : ""
    }&pay_rate_min=${filters.pay_rate_min}&pay_rate_max=${
      filters.pay_rate_max
    }&experience_min=${filters.experience_min}&experience_max=${
      filters.experience_max
    }&created_at=${filters.created_at}`;

    axios
      .get(BaseUrl + `/resources/resources-profile/${params}`)
      .then((resp) => {
        if (resp?.data) {
          setResultsData(resp?.data?.results);
          setTemp(false);
        }
      })
      .catch((error) => {});

    router.push(params);
  }, [filters]);

  const skillsSelectHandler = (element) => {
    if (element && element.value) {
      setFilters({ ...filters, skill: element });
    }
  };

  const countrySelectHandler = (element) => {
    if (element && element.value) {
      setFilters({ ...filters, country: element });
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
    setFilters({
      ...filters,
      experience_min: experience1.min,
      experience_max: experience1.max,
    });
  }, [experience1]);

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

    setExperience1({
      min: "",
      max: "",
    });

    setFilters({
      ...filters,
      search: "",
      skill: "",
      availability: "",
      pay_rate_min: "",
      pay_rate_max: "",
      experience: "",
      language: "",
      country: "",
      company_state: "",
      created_at: "",
    });
  };

  const jobTypeArray = [
    { value: "1", label: "Hourly ($/hour)", name: "availability" },
    { value: "3", label: "Full-time (40 hrs/wk)", name: "availability" },
    { value: "2", label: "Part-time (20 hrs/wk)", name: "availability" },
  ];

  const onClickCheck = (e) => {
    setFilters({
      ...filters,
      availability: filters.availability === e.value ? "" : e.value,
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

    const handleSidebarToggle = () => {
      sidebar?.classList?.toggle("show");
    };

    const handleOutsideClick = (e) => {
      if (
        e?.target?.id !== "sidebar" &&
        e?.target?.className !== "sidebar_toggler"
      ) {
        sidebar?.classList?.remove("show");
      }
    };

    sidebarToggler?.addEventListener("click", handleSidebarToggle);
    window?.addEventListener("click", handleOutsideClick);

    return () => {
      sidebarToggler?.removeEventListener("click", handleSidebarToggle);
      window?.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    document?.getElementById("btnadd")?.addEventListener("click", function () {
      document?.getElementById("collapsed")?.classList?.toggle("colapsible");
      document?.getElementById("btnadd")?.classList?.toggle("filternewBtn");
      // document.getElementById("bdFlow").classList.toggle("overFlow");
    });
  }, []);

  const availabilityFunction = (data) => {
    for (var i = 0; i < data.length; i++) {
      if (data[i].is_active === true) {
        return data[i].availability_value;
      }
    }
  };

  return (
    <>
      <div>
        <Head>
          <title>
            {" "}
            Hire Talent - Optimal Choice for International Recruitment{" "}
          </title>
          <meta
            name="description"
            content="Discover top Talent Management Freelancers in Australia on Agreementpaper, the leading global freelancing platform. Post your job, get matched, and excel in Talent Management!"
          />
          <link rel="canonical" href="https://www.agreementpaper.com/hire_talent" />
        </Head>
      </div>
      <Header />

      <div>
        <section className="srchJob_archivePage">
          <div className="_fulWid_container">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-11">
               
                </div>
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
                          onClick={() => setFilters({ ...filters, skill: "" })}
                        >
                          Clear
                        </span>
                      </div>

                      <div>
                        <DropDown
                          className="basic-single"
                          classNamePrefix="anvTech_select"
                          isSearchable={isSearchable}
                          name="skill"
                          options={newSkills ? newSkills : []}
                          value={filters?.skill?.value ? filters.skill : null}
                          onChange={(e) => {
                            skillsSelectHandler(e);
                          }}
                          valueText="id"
                          labelText="name"
                        />
                      </div>
                    </div>

                    <div className="filterSrch6">
                      <div className="clrAll_filterBx">
                        <h6> Country </h6>
                        <span
                          className="pointer_class"
                          onClick={() =>
                            setFilters({ ...filters, country: "" })
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
                          name="country"
                          options={newCountry ? newCountry : []}
                          value={
                            filters?.country?.value ? filters.country : null
                          }
                          onChange={(e) => {
                            countrySelectHandler(e);
                          }}
                          valueText="id"
                          labelText="name"
                        />
                      </div>
                    </div>

                  

                    <div className="filterSrch3">
                      <div className="clrAll_filterBx">
                        <h6>Availability</h6>
                        <span
                          className="pointer_class"
                          onClick={() =>
                            setFilters({ ...filters, availability: "" })
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
                                type="checkbox"
                                id={ind}
                                checked={filters?.availability === el?.value}
                                name={el.name}
                                value={
                                  filters?.availability
                                    ? filters?.availability
                                    : ""
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
                            value={payRate1}
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
                          onClick={() =>
                            setExperience1({
                              ...experience1,
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
                            value={experience1.min}
                            className="from"
                            readOnly
                          />
                          <input
                            type="number"
                            maxLength="4"
                            value={experience1.max}
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
                            value={experience1}
                            onChange={(e) => setExperience1(e)}
                          />
                        </form>
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
                        DISPLAYING TOTAL RESULTS DATA{" "}
                        {resultsData?.length > 0 ? resultsData?.length : null}{" "}
                      </h1>
                    </div>

                    <div className="engr_qualifieDetailsBx">
                      {temp ? (
                        <Skeleton />
                      ) : (
                        resultsData?.map((el, ind) => {
                          return (
                            <div className="engrQual_innerBx" key={ind}>
                              <div className="engrD_img pointer_class">
                                <Link
                                  href="https://app.agreementpaper.com/signup"
                                  // href={`/hire_talent/${el?.slug}`}
                                >
                                  <img
                                    className="img_width_cls"
                                    src={
                                      el?.user_detail?.profile_pic
                                        ? `${BaseUrl}${el?.user_detail?.profile_pic}`
                                        : "image/149071.png"
                                    }
                                    alt="img"
                                  />
                                </Link>
                              </div>

                              <div className="engr_desigNateAnd_desc">
                                <div className="postAndHrs_bx">
                                  <div className="engrPostName">
                                    <h1>
                                      <Link
                                        href="https://app.agreementpaper.com/signup"
                                        // href={`/hire_talent/${el?.slug}`}
                                        className="hv_color_css"
                                      >
                                        {el?.user_detail?.first_name}{" "}
                                        {el?.user_detail?.last_name}
                                      </Link>
                                      &nbsp; &nbsp;
                                      <Link
                                        // href={`/hire_talent/${el?.slug}`}
                                        href="https://app.agreementpaper.com/signup"
                                      >
                                        <button className="view_profileBtn">
                                          {" "}
                                          View Profile{" "}
                                        </button>
                                      </Link>
                                    </h1>
                                    <p>
                                      {/* {el?.about} <br /> */}
                                      {/* {el.tax_setting_value} */}
                                    </p>
                                  </div>

                                  {el?.work_preference?.length > 0 ? (
                                    <div className="hrsTag_bx">
                                      <div className="tagS">
                                        {availabilityFunction(
                                          el?.work_preference
                                        )}
                                      </div>
                                    </div>
                                  ) : (
                                    <></>
                                  )}
                                </div>

                                <div className="engrPlaceN_dateBx mt-2">
                                  <div className="engrPl_nm">
                                    <img
                                      src="image/plPlace.png"
                                      alt="Location"
                                    />
                                    &nbsp;
                                    <span> {el?.address} </span>
                                  </div>

                                  <div className="engrPl_nm">
                                    <img src="image/plBuilding.png" alt="img" />
                                    <span> {el?.state_name} </span>
                                  </div>

                                  <div className="engrPl_nm">
                                    <img src="image/plRemoteJob.png" alt="img" />
                                    <span> {el?.country_name} </span>
                                  </div>

                                  <div className="engrPl_nm">
                                    <img src="image/plDate.png" alt="img" />
                                    <span> {taskDate(el?.created_at)} </span>
                                  </div>
                                </div>

                                <div className="skillTag_bx">
                                  {el?.skill_set_data?.length > 0 &&
                                    el?.skill_set_data &&
                                    el?.skill_set_data?.map((e, i) => {
                                      return (
                                        <div className="mySkil" key={i}>
                                          {" "}
                                          {e.name}{" "}
                                        </div>
                                      );
                                    })}
                                </div>
                              </div>
                            </div>
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
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default index;
