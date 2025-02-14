import React from "react";
import Link from "next/link";

function NavLinks({ type }) {
  const renderLinks = () => {
    switch (type) {
      case "enterprise":
        return (
          <ul className="midLinks">
            <li>
              <Link href="/solution"> Solution </Link>
            </li>
            {/* <li>
                            <Link href="/talent">{" "}Talent{" "}</Link>
                        </li> */}
            <li>
              <Link href="/recruitment">Supplier & Agency Network</Link>
            </li>
            <li>
              <Link href="/lawyer">Lawyer Network</Link>
            </li>
            <li>
              <Link href="/enterprise_pricing">Pricing</Link>
            </li>
            <li>
              <Link href="/book-a-demo">Demo</Link>
            </li>
            <li>
              <Link href="/contactus">Contact Us</Link>
            </li>
            <li className="beta_e">
              <strong>Beta version</strong>
            </li>
          </ul>
        );
      case "talent":
        return (
          <ul className="midLinks">
            <li>
              <a href="/job_work"> Jobs & Work </a>
            </li>
            <li>
              <Link href="/hire_talent">Hire Talent</Link>
            </li>
            <li>
              <Link href="/enterprise_pricing">Pricing</Link>
            </li>
            <li>
              <Link href="/book-a-demo"> Demo </Link>
            </li>
            <li>
              <Link href="/contactus">Contact Us</Link>
            </li>
            <li className="beta_t">
              <strong>Beta version</strong>
            </li>
          </ul>
        );
      case "recruitment":
        return (
          <ul className="midLinks">
            <li>
              <a href="/job_work">Jobs & Work</a>
            </li>
            <li>
              <Link href="/hire_talent">Hire Talent</Link>
            </li>
            <li>
              <Link href="/enterprise_pricing">Pricing</Link>
            </li>
            <li>
              <Link href="/book-a-demo"> Demo </Link>
            </li>
            <li>
              <Link href="/contactus">Contact Us</Link>
            </li>
            <li className="beta_r">
              <strong>Beta version</strong>
            </li>
          </ul>
        );
      case "lawyer_network":
        return (
          <ul className="midLinks">
            <li>
              <Link href="/"> Contract Review </Link>
            </li>
            <li>
              <Link href="/solution"> Solution </Link>
            </li>
            <li>
              <Link href="/book-a-demo">Demo</Link>
            </li>
            <li>
              <Link href="/contactus">Contact Us</Link>
            </li>
            <li className="beta_e">
              <strong>Beta version</strong>
            </li>
          </ul>
        );
      default:
        return null;
    }
  };

  return <>{renderLinks()}</>;
}

export default NavLinks;
