import React, { lazy } from 'react';
const YouTube = lazy(() => import('./YouTube'));

function Section2() {
    return (
        <section className="sec_3_dedicated">

            <YouTube />

        </section>
    )
}

export default Section2