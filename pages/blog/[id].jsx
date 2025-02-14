import React, { useEffect, useState } from "react";
import Head from "next/head";
import Footer from "@/components/footer/Footer";
import Script from "next/script";
import Link from "next/link";
import { BaseUrl } from "@/components/service/service";
import axios from "axios";
import { useRouter } from 'next/router';
var $ = require("jquery");
if (typeof window !== "undefined") {
    window.$ = window.jQuery = require("jquery");
}

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import dynamic from "next/dynamic";
import Header from "@/components/header/Header";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
});

export default function WorkPermit() {
    const router = useRouter();
    const { id } = router.query;
 
    const [blog, setBlog] = useState([])
    useEffect(() => {
        getBlogsData();
    }, [id]);

    const getBlogsData = async () => {
     
            await axios
            .get(BaseUrl + `/blog/blogs/${id}/`)
            .then((resp) => {
                if (resp?.data) {
                    setBlog(resp?.data)
                }
            })
            .catch((error) => { console.log('rerror', error); });
    }

    return (
        <>
            <div>
                <Head>
                    <title>
                        What is a Work Permit and how to apply for a USA work permit
                    </title>
                    <meta charSet="utf-8"></meta>
                    <meta
                        name="description"
                        content="Follow Agreementpaper to know about latest updates of work permit, valadity and how to apply for work permit in USA or other counteries."
                    />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="canonical" href="https://www.agreementpaper.com/what-is-work-permit" />
                </Head>
            </div>

            <div className="header">
                <Header />
                <div className="container">
                    <div className="row header_bio">
                        <div className="col-12 col-lg-6">
                            <div className="head_details">
                                <h2>{blog?.heading}</h2>
                                <p>{blog?.title} </p>


                                <div className="_demoBtn">
                                    <Link href="/book-a-demo" className="headB">
                                        <span>Get a Demo today</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 laptop">
                            <img src={blog?.banner} alt="Generative AI Contract Management" />
                        </div>

                        {/* <div className="col-12 col-lg-6 full_laptop">
                            <img className="" src="image/laptop_full.png" alt="Contract Management Solution" />
                        </div> */}
                    </div>
                </div>



                <section className="workPermitMargin permit_color">
                    <div className="workPermit_details">

                        <h4>{blog?.heading}</h4>
                        <p>{blog?.title} </p>
                       
                        <div className="mt-5">
                            <HtmlContent content={ blog?.content } />
                        </div>
                    </div>
                </section>

                <Footer />
            </div>

            <Script
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
                crossorigin="anonymous"
            ></Script>
        </>
    );
}

const HtmlContent = ({ content }) => {
    return (
      <div dangerouslySetInnerHTML={{ __html: content }} />
    );
  };