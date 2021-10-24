import React from 'react';
import Industry from '../music/Industry.mp3';
import { Howl } from 'howler';

const audioMuic = [
  {sound: {Industry}, label: "Música"}
]

const Music = (props) => {

  const audiosMusic = (
    audioMuic.map((music) => {
      <source src={music.sound} />
    })
  )
  
  
  const sound = new Howl({
    src: ["", "", ""],
    html5: true,
    autoplay: true,
    loop: true,
    volume: 1,
  });


    return (
        <div className="audio-spotify">
                  <div className="button-spotify">

                    <i class="fas fa-compact-disc"></i>

                    <button onClick={() => sound.play()} >Ouvir</button>
          

                  </div>
                </div>
    )
}

export default Music;
