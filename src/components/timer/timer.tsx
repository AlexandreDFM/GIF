import { useState, useRef, useEffect } from 'react';
import './timer.css';

import cover1 from '../../assets/cover1.jpg';
import { MdSkipNext } from "react-icons/md";
import { MdSkipPrevious } from "react-icons/md";
import { IoPlaySharp } from "react-icons/io5";
import { IoPauseSharp } from "react-icons/io5";
import { MdPlaylistPlay } from "react-icons/md";
import { FaVolumeUp } from "react-icons/fa";
import { AiOutlineDownload } from "react-icons/ai";
import { RxReset } from "react-icons/rx";

import accappella from '../../assets/accapella.wav';

function Timer() {
    const [progress, setProgress] = useState(0);
    const [isSongIsPlaying, setIsSongIsPlaying] = useState(false);

    const audioRef = useRef(null);

    const playAudio = () => {
        if (audioRef.current) {
            audioRef.current.play();
            setIsSongIsPlaying(true);
        }
    };

    const pauseAudio = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            setIsSongIsPlaying(false);
        }
    };

    const handleTimeUpdate = () => {
        if (audioRef.current) {
            const currentProgress = (audioRef.current.currentTime / audioRef.current.duration) * 100;
            setProgress(currentProgress);
        }
    };

    useEffect(() => {
        const audioElement = audioRef.current;

        // Ajoute l'événement timeupdate
        if (audioElement) {
            audioElement.addEventListener('timeupdate', handleTimeUpdate);
        }

        // Nettoyage de l'événement lors de la destruction du composant
        return () => {
            if (audioElement) {
                audioElement.removeEventListener('timeupdate', handleTimeUpdate);
            }
        };
    }, []);

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
                        <AiOutlineDownload size={25} />
                        <MdSkipPrevious size={30} />
                        <audio ref={audioRef} src={accappella} />
                        <div className="play-pause" onClick={() => (isSongIsPlaying ? pauseAudio() : playAudio())}>
                            {isSongIsPlaying ? (
                                <IoPauseSharp size={15} />
                            ) : (
                                <IoPlaySharp size={15} />
                            )}
                        </div>
                        <MdSkipNext size={30} />

                        <div className='reset' onClick={() => {
                            setProgress(0);
                            audioRef.current.currentTime = 0;
                            pauseAudio();
                        }}>
                            <RxReset size={25} />
                        </div>

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
    );
}

export default Timer;
