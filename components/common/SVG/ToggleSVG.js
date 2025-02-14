import React from 'react'

function ToggleSVG() {
    return (
        <div data-bs-toggle="dropdown" aria-expanded="false">
            <svg
                className="notOpen"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="18"
                viewBox="0 0 24 18"
                fill="none"
            >
                <path
                    d="M2 2L22 2"
                    stroke="#253053"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M2 9.00009L22 9.00009"
                    stroke="#253053"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M2 15.9999L22 15.9999"
                    stroke="#253053"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </div>
    )
}

export default ToggleSVG