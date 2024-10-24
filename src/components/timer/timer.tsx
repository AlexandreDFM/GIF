import { useState } from 'react'
import './timer.css'

import cover1 from '../../assets/cover1.jpg';
import { MdSkipNext } from "react-icons/md";
import { MdSkipPrevious } from "react-icons/md";
import { IoPlaySharp } from "react-icons/io5";
import { IoPauseSharp } from "react-icons/io5";
import { MdPlaylistPlay } from "react-icons/md";
import { FaVolumeUp } from "react-icons/fa";

function Timer() {
    const [progress, setProgress] = useState(30);
    const [isSongIsPlaying, setIsSongIsPlaying] = useState(false);

    return (
        <div className='timer'>
            <div className='timer-content'>
                <div className='timer-title'>
                    <img src={cover1} alt='cover1' />

                    <div className='info-title'>
                        <h1>Temples</h1>
                        <h3>Kadhja Bonet</h3>
                    </div>
                </div>

                <div className="progress-container">
                    <div className="progress-input">
                        <MdSkipPrevious size={30} />
                        <div className="play-pause" onClick={() => setIsSongIsPlaying(!isSongIsPlaying)}>
                            {
                                isSongIsPlaying ? 
                                (<IoPauseSharp size={15} />) :
                                (<IoPlaySharp size={15} />)
                            }
                        </div>
                        <MdSkipNext size={30} />
                    </div>

                    <div className="progress-bar">
                        <div className="progress-fill" style={{ width: `${progress}%` }}></div>
                    </div>
                </div>

                <div className='timer-options'>
                    <MdPlaylistPlay size={25} />
                    <FaVolumeUp size={25} />
                </div>
            </div>

        </div>
    )
}

export default Timer
