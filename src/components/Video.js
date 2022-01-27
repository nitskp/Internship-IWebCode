import React from 'react'

const Video = props => {
    const videoUrl = props.videoUrl;
  return (
    <>
      <iframe
            src= {videoUrl}
            className="video"
            width="500px"
            height="350px"
          ></iframe>
    </>
  )
}

export default Video
