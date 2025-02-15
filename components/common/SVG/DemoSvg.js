import React from 'react'

function DemoSvg() {
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
                    d="M17.5 2.5H12.5C8.40096 2.5 6.35144 2.5 4.89863 3.51727C4.36113 3.89363 3.89363 4.36113 3.51727 4.89863C2.5 6.35144 2.5 8.40096 2.5 12.5C2.5 16.599 2.5 18.6486 3.51727 20.1014C3.89363 20.6389 4.36113 21.1064 4.89863 21.4827C6.35144 22.5 8.40096 22.5 12.5 22.5H17.5C21.599 22.5 23.6486 22.5 25.1014 21.4827C25.6389 21.1064 26.1064 20.6389 26.4827 20.1014C27.5 18.6486 27.5 16.599 27.5 12.5C27.5 8.40096 27.5 6.35144 26.4827 4.89863C26.1064 4.36113 25.6389 3.89363 25.1014 3.51727C23.6486 2.5 21.599 2.5 17.5 2.5Z"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                />
                <path
                    d="M13.75 18.75H16.25"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M18.125 27.5L17.7306 26.9764C16.8416 25.7961 16.6212 23.993 17.1835 22.5M11.875 27.5L12.2694 26.9764C13.1584 25.7961 13.3788 23.993 12.8165 22.5"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                />
                <path
                    d="M8.75 27.5H21.25"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                />
            </svg>{" "}
            <span className="header_resCls_ftn"> Demo </span>
        </div>
    )
}

export default DemoSvg