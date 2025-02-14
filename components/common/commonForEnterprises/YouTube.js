import React from 'react'

function YouTube() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="anvVideo_bx">
                            <div className="youtube_ifr">
                                <iframe
                                    className="video"
                                    width="560"
                                    height="315"
                                    src="https://www.youtube.com/embed/FhaVNfSr3RU"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default YouTube