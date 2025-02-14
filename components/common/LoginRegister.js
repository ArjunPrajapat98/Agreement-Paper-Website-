import React from 'react';
import Link from "next/link";

function LoginRegister({ type }) {
    const renderLinks = () => {
        switch (type) {
            case "enterprise":
                return (
                    <div className="head_menu">
                        <Link
                            href="https://app.agreementpaper.com/login"
                            target="_blank"
                            className="a_list_noSty loginBtn_bx mobHide"
                        >
                            <span>Login</span>
                        </Link>
                        <div class="signDropdown">
                            <button class="a_list_noSty registerBtn_bx">
                                {" "}
                                <span> Register </span>{" "}
                            </button>
                            <div class="dropdownContent">
                                <Link href="https://app.agreementpaper.com/signup_enterprise"> Enterprise </Link>
                                <Link href="https://app.agreementpaper.com/signup_recruitment"> Supplier & Agency Network  </Link>
                                <Link href="https://app.agreementpaper.com/signup_talent"> Talent </Link>
                                <Link href="https://app.agreementpaper.com/signup_individual"> Individual Buyer </Link>
                                <Link href="https://app.agreementpaper.com/signup_lawyer"> Lawyer Network </Link>
                            </div>
                        </div>
                    </div>
                );
                case "lawyer":
                return (
                    <div className="head_menu">
                        <Link
                            href="https://app.agreementpaper.com/login"
                            target="_blank"
                            className="a_list_noSty loginBtn_bx mobHide"
                        >
                            <span>Login</span>
                        </Link>
                        <Link
                            href="https://app.agreementpaper.com/signup_lawyer"
                            target="_blank"
                            className="a_list_noSty registerBtn_bx mobHide"
                        >
                            <span>Register</span>
                        </Link>
                    </div>
                );
            case "talent":
                return (
                    <div className="head_menu">
                        <Link
                            href="https://app.agreementpaper.com/login"
                            target="_blank"
                            className="a_list_noSty loginBtn_bx mobHide"
                        >
                            <span>Login</span>
                        </Link>
                        <Link
                            href="https://app.agreementpaper.com/signup_talent"
                            target="_blank"
                            className="a_list_noSty registerBtn_bx mobHide"
                        >
                            <span>Register</span>
                        </Link>
                    </div>
                );
            case "recruitment":
                return (
                    <div className="head_menu">
                        <Link
                            href="https://app.agreementpaper.com/login"
                            target="_blank"
                            className="a_list_noSty loginBtn_bx mobHide"
                        >
                            <span>Login</span>
                        </Link>
                        <Link
                            href="https://app.agreementpaper.com/signup_recruitment"
                            target="_blank"
                            className="a_list_noSty registerBtn_bx mobHide"
                        >
                            <span>Register</span>
                        </Link>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <>
            {renderLinks()}
        </>
    );
}

export default LoginRegister;
