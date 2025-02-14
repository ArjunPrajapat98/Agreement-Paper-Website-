import React from 'react'

const commonLength = [1, 2, 3, 4]

function Skeleton(props) {

    const renderCompnent = (comp) => {
        return (
            commonLength.map((item, index) => (
                <tr key={index}>
                    {
                        [1, 2, 3, 4, 5].map((item2, index2) => (
                            <td className="tg-cly1" key={index2}>
                                <div className="line"></div>
                            </td>
                        ))
                    }
                </tr>
            )))
    }

    return (
        <>
            <table className='skeleton_table'>
                <tbody className="tg" >
                    {renderCompnent(props)}
                </tbody>
            </table>

        </>
    )
}

export default Skeleton;