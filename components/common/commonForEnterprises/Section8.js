import React, { useState } from "react";
import { useRouter } from "next/router";
import toast, { Toaster } from "react-hot-toast";

function Section8() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [textShows, setTextShows] = useState(false)

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      setError("");
      toast.success("Subscribe succussfully");
      setTextShows(true);
      setEmail('')
    } else {
      setTextShows(false);
      setError("Please enter a valid email address.");
    }
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
    if (error) {
      setError("");
    }
  };

  return (
    <section className="sec_9">
    <Toaster position="top-center" reverseOrder={false} />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sec_9_heading">
              <h5>Subscribe Our Newsletter</h5>
              <p>
                Advertise your jobs to millions of monthly users and search 15.8
                millions CVs in our database.
              </p>
              <div className="divPcls_cs">
                <div className="sec_9_input">
                  <input
                    type="text"
                    name="email"
                    value={email}
                    placeholder="Enter your email"
                    onChange={handleChange}
                  />
                  <button onClick={(e) => handleSubmit(e)}>Subscribe</button>
                </div>
                {error && (
                    <div style={{ color: "red", fontSize: "15px", fontWeight:'600'}}>{error}</div>
                )}
                {textShows && <p className=""> Thank you for subscribing to our newsletters.<br /> We will keep you posted. <span className="tes_chorv"  onClick={() => router.push("/book-a-demo")}> Book a demo </span></p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section8;
