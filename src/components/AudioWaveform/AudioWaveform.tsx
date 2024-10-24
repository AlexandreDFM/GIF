import React, { useEffect, useRef, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';
import { IoPlaySharp, IoPauseSharp } from "react-icons/io5";
import { RxReset } from "react-icons/rx";
import './audio.css';

const AudioWaveform = ({ audioFile }) => {
    const waveformRef = useRef(null);
    const wavesurfer = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayPause = () => {
        if (wavesurfer.current.isPlaying()) {
            wavesurfer.current.pause();
            setIsPlaying(false);
        } else {
            wavesurfer.current.play();
            setIsPlaying(true);
        }
    };

    useEffect(() => {
        if (waveformRef.current) {
            // Initialisation de WaveSurfer après une interaction utilisateur
            wavesurfer.current = WaveSurfer.create({
                container: waveformRef.current,
                waveColor: 'rgb(55, 55, 55)',
                progressColor: 'rgb(180, 180, 180)',
                height: 40,
                barWidth: 2,
                responsive: true,
                cursorWidth: 0,
            });

            // Charger le fichier audio
            wavesurfer.current.load(audioFile);

            // Nettoyage lors du démontage
            return () => wavesurfer.current.destroy();
        }
    }, [audioFile]);

    return (
        <div className='audiocss'>
            <div onClick={handlePlayPause} style={{ cursor: 'pointer' }}>
                {isPlaying ? (
                    <IoPauseSharp size={25} />
                ) : (
                    <IoPlaySharp size={25} />
                )}
            </div>
            
            <RxReset size={25} onClick={() => wavesurfer.current.seekTo(0)} style={{ cursor: 'pointer' }} />


            <div ref={waveformRef} style={{ flex: 1 }} /> {/* La waveform prend tout l'espace disponible */}
        </div>
    );
};

export default AudioWaveform;
