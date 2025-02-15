import React from 'react'

function PricingSvg({name='Pricing'}) {
    return (
        <div className="drop-menu">
            <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M15 11.25C13.6193 11.25 12.5 12.0895 12.5 13.125C12.5 14.1605 13.6193 15 15 15C16.3807 15 17.5 15.8395 17.5 16.875C17.5 17.9105 16.3807 18.75 15 18.75M15 11.25C16.0885 11.25 17.0145 11.7718 17.3577 12.5M15 11.25V10M15 18.75C13.9115 18.75 12.9855 18.2282 12.6423 17.5M15 18.75V20"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                />
                <path
                    d="M2.5 15C2.5 10.5781 2.5 8.36722 3.816 6.89112C4.02649 6.65503 4.25847 6.43669 4.50932 6.23859C6.07767 5 8.42678 5 13.125 5H16.875C21.5732 5 23.9223 5 25.4907 6.23859C25.7415 6.43669 25.9735 6.65503 26.184 6.89112C27.5 8.36722 27.5 10.5781 27.5 15C27.5 19.4219 27.5 21.6328 26.184 23.1089C25.9735 23.345 25.7415 23.5633 25.4907 23.7614C23.9223 25 21.5732 25 16.875 25H13.125C8.42678 25 6.07767 25 4.50932 23.7614C4.25847 23.5633 4.02649 23.345 3.816 23.1089C2.5 21.6328 2.5 19.4219 2.5 15Z"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M23.1367 15H23.1255"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M6.875 15H6.86377"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
            <span className="header_resCls_ftn"> {name} </span>{" "}
        </div>
    )
}

export default PricingSvg