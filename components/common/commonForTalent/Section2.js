import React from 'react';
import { useRouter } from "next/navigation";
import { BaseUrl } from "@/components/service/service";
function Section2({resultsData}) {
    const router = useRouter();
    return (
        <section className="sec_two">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="sec_one_heading">
                            <div>
                                <h5>Top Talent</h5>
                                <p>
                                    Agreement Talent is a 100% free resource for companies
                                </p>
                            </div>
                            <div>
                                <h6
                                    onClick={() => router.push("/hire_talent")}
                                    className="pointer_class"
                                >
                                    View All{" "}
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
                <div className="row mt-5">
                    {resultsData?.map((el, ind) => {
                        return (
                            <div className="col-12 col-md-6">
                                <div className="sec_two_bx_1" key={ind}>
                                    <div className="two_bx">
                                        <div className="roundes">
                                            <img
                                                src={
                                                    el?.user_detail?.profile_pic
                                                        ? `${BaseUrl}${el?.user_detail?.profile_pic}`
                                                        : "image/149071.png"
                                                }
                                            />
                                        </div>
                                        <div className="Microsoft">
                                            <p>
                                                {el?.user_detail?.first_name}{" "}
                                                {el?.user_detail?.last_name}
                                            </p>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={20}
                                                height={22}
                                                viewBox="0 0 20 22"
                                                fill="none"
                                            >
                                                <path
                                                    d="M11.5313 20.367C11.1043 20.773 10.5335 21 9.93954 21C9.34555 21 8.77481 20.773 8.34779 20.367C4.43742 16.626 -0.80296 12.4469 1.75261 6.37966C3.13439 3.09916 6.45127 1 9.93954 1C13.4278 1 16.7447 3.09916 18.1265 6.37966C20.6788 12.4393 15.4513 16.6389 11.5313 20.367Z"
                                                    stroke="#252525"
                                                    strokeWidth="1.5"
                                                />
                                                <path
                                                    d="M13.3846 10C13.3846 11.933 11.8417 13.5 9.93846 13.5C8.03521 13.5 6.49231 11.933 6.49231 10C6.49231 8.067 8.03521 6.5 9.93846 6.5C11.8417 6.5 13.3846 8.067 13.3846 10Z"
                                                    stroke="#252525"
                                                    strokeWidth="1.5"
                                                />
                                            </svg>{" "}
                                            <span>
                                                {" "}
                                                {el?.state_name} , {el?.country_name}{" "}
                                            </span>
                                        </div>
                                    </div>
                                    <button onClick={() => router.push("/hire_talent")}>
                                        {" "}
                                        Available{" "}
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    )
}

export default Section2