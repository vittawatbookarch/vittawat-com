import React from 'react'



import "../components/style.css"
import Header2 from "../components/header2"
import Footer from "../components/footer"
import Video from "../components/vdo"


import "../styles/styles.scss"

const Sound = ({ data }) => (

  <div className="indexcontainer">


    <Header2 />
    <div className="grid-container2">
      <div className="soundvdo">
        <Video
          videoSrcURL="https://www.youtube.com/embed/aARrKIzx10A" frameborder="0" />
      </div>
      <p className="undertextvdo">Vikteerut spring / summer collection </p>
      <p className="undertextvdo2">Composing /Producing / Mixing / Mastering </p>

      <div className="soundvdo2">
        <Video
          videoSrcURL="https://www.youtube.com/embed/pbX7BqrfY70" frameborder="0" />
      </div>
      <p className="undertextvdo"> Vouge behind the scene </p>
      <p className="undertextvdo2">Composing /Producing / Mixing / Mastering </p>

      <div className="soundvdo">
        <Video
          videoSrcURL="https://www.youtube.com/embed/tYWeYQr5HBU" frameborder="0"
        />
      </div>
      <p className="undertextvdo"> Change is present by SC ASSET </p>
      <p className="undertextvdo2">Composing /Producing / Mixing </p>

      <div className="soundvdo2">
        <Video
          videoSrcURL="https://www.youtube.com/embed/js4HBqVeqv0" frameborder="0"
        />
      </div>
      <p className="undertextvdo"> follows band </p>
      <p className="undertextvdo2">Composing /Producing / Mixing </p>

      <div className="soundvdo">
        <Video
          videoSrcURL="https://www.youtube.com/embed/HGwIWgqydzg" frameborder="0"
        />
      </div>
      <p className="undertextvdo"> follows band </p>
      <p className="undertextvdo2">Composing /Producing / Mixing </p>

      <div className="soundvdo2">
        <Video
          videoSrcURL="https://www.youtube.com/embed/B-yAJqgC1Nk" frameborder="0"
        />
      </div>
      <p className="undertextvdo"> follows band </p>
      <p className="undertextvdo2">Composing /Producing / Mixing </p>


      <div className="soundvdo">
        <Video
          videoSrcURL="https://www.youtube.com/embed/hjfZDTw6YRc" frameborder="0"
        />
      </div>
      <p className="undertextvdo"> Juicenest commercial </p>
      <p className="undertextvdo2">Composing /Producing / Mixing </p>

      <div className="soundvdo2">
        <Video
          videoSrcURL="https://www.youtube.com/embed/seGGuQm2Q20" frameborder="0"
        />
      </div>
      <p className="undertextvdo"> Olay commercial </p>
      <p className="undertextvdo2">Composing /Producing / Mixing </p>

      <div className="soundvdo">
        <Video
          videoSrcURL="https://player.vimeo.com/video/255180116" width="640" height="360" frameborder="0"
        />
      </div>
      <p className="undertextvdo"> Royal gem pavilion presentation </p>
      <p className="undertextvdo2">Composing /Producing / Mixing </p>



    </div >

    <Footer />

  </ div >




)



export default Sound
