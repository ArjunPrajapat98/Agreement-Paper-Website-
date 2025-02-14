import React from 'react'
import SvgForEnterPrise from './SVG/SvgForEnterPrise'
import SvgForEnterTalent from './SVG/SvgForEnterTalent'
import SvgForRecruitment from './SVG/SvgForRecruitment'
import { useRouter } from 'next/router';
import Link from 'next/link'

function ProductDropDown() {
    const router = useRouter();

    const functionNavigate = () => {
        router.push('/');
        const delay = setTimeout(() => {
            router.reload();
        }, 900)
        clearInterval = () => delay();
    }
    
    return (
        <div className="head_logo">
          
            <div className="dropdown">
                <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    Product
                </button>
                <ul className="dropdown-menu">
                    <Link href='' onClick={() => functionNavigate()}>
                        <li className="dropdown-item">
                            <SvgForEnterPrise />
                            <span className="header_resCls_ftn"> (Enterprises)</span>
                        </li>
                    </Link>
                    <Link href="/talent">
                        <li className="dropdown-item">
                            <SvgForEnterTalent />
                            <span className="header_resCls_ftn"> (Talent)</span>{" "}
                        </li>
                    </Link>
                    <Link href="/recruitment">
                        <li className="dropdown-item">
                            <SvgForRecruitment />
                            <span className="header_resCls_ftn"> (Supplier & Agency Network )</span>
                        </li>
                    </Link>
                    <Link href="/individual">
                        <li className="dropdown-item">
                            < SvgForEnterTalent />
                            <span className="header_resCls_ftn"> (Individual)</span>
                        </li>
                    </Link>
                    <Link href='/lawyer'>
                        <li className="dropdown-item">
                            <SvgForEnterPrise />
                            <span className="header_resCls_ftn"> (Lawyer Network)</span>
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default ProductDropDown