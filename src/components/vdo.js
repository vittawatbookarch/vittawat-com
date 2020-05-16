import React from "react"


const Video = ({ videoSrcURL, ...props }) => (


    <iframe className="vdogrid"
        src={videoSrcURL}
        allowFullScreen
        frameBorder="0"
        width="100%"
        height="315"


    />


)

export default Video