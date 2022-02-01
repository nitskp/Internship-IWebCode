import React from 'react'

const Video = props => {
    const videoUrl = props.videoUrl;
  return (
    <>
      <iframe
          title='youtube-video'
            src= {videoUrl}
            className="video"
          ></iframe>
    </>
  )
}

export default Video
