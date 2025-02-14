import React from "react";
import Link from "next/link";
import ToggleSVG from "./SVG/ToggleSVG";
import SolutionSvg from "./SVG/SolutionSvg";
import PricingSvg from "./SVG/PricingSvg";
import DemoSvg from "./SVG/DemoSvg";
import LoginSvg from "./SVG/LoginSvg";
import RegisterSvg from "./SVG/RegisterSvg";
import JobsAndWorksSvg from "./SVG/JobsAndWorksSvg";
import HireTalentSvg from "./SVG/HireTalentSvg";

function MobileViewDD({ type }) {
  return (
    <div className="dropdown svgDrop_down">
      <ToggleSVG />
      <ul className="dropdown-menu">
        {type === "lawyer" && (
          <Link href="/">
            <li className="dropdown-item">
              <PricingSvg name="Contract Review" />
            </li>
          </Link>
        )}
        <Link href="/solution">
          <li className="dropdown-item">
            <SolutionSvg />
          </li>
        </Link>
        <Link href="/recruitment">
            <li className="dropdown-item">
              <PricingSvg name='Supplier Agency'/>
            </li>
          </Link>
        {type !== "lawyer" && (
          <Link href="/lawyer">
            <li className="dropdown-item">
              <PricingSvg name="Lawyer Network" />
            </li>
          </Link>
        )}
        {(type === "talent" || type === "recruitment") && (
          <>
            <Link href="/job_work">
              <li className="dropdown-item">
                <JobsAndWorksSvg />
              </li>
            </Link>
            <Link href="/hire_talent">
              <li className="dropdown-item">
                <HireTalentSvg />
              </li>
            </Link>
          </>
        )}

        {type != "lawyer" && (
          <Link href="/pricing">
            <li className="dropdown-item">
              <PricingSvg />
            </li>
          </Link>
        )}

        <Link href="/book-a-demo">
          <li className="dropdown-item">
            <DemoSvg />
          </li>
        </Link>
        <Link href="/contactus">
            <li className="dropdown-item">
              <PricingSvg name="Contact Us" />
            </li>
          </Link>
        <Link href="https://app.agreementpaper.com/login" target="_blank">
          <li className="dropdown-item">
            <LoginSvg />
          </li>
        </Link>
        {/* {type === "lawyer" ? (
          <Link
            href="https://app.agreementpaper.com/signup_lawyer"
            target="_blank"
          >
            <li className="dropdown-item">
              <RegisterSvg />
            </li>
          </Link>
        ) : (
          <Link
            href="https://app.agreementpaper.com/signup_talent"
            target="_blank"
          >
            <li className="dropdown-item">
              <RegisterSvg />
            </li>
          </Link>
        )} */}
      </ul>
    </div>
  );
}

export default MobileViewDD;
