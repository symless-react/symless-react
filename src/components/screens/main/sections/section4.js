import React from 'react'
import YouTube from 'react-youtube'

export default function Section(props) {
  const settings = {
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      }
    };
  return (
    <section className="green-bg">
      <div className="container">
        <div className='embed-container'>
          <YouTube
            videoId="vJlUiQZ84Uw"
            opts={settings}
            />
        </div>
      </div>
    </section>
  )
}
