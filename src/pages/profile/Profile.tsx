import './Profile.css'
import cover1 from '../../assets/cover1.jpg';
import cover2 from '../../assets/cover2.jpg';
import cover3 from '../../assets/cover3.jpg';
import cover4 from '../../assets/cover4.jpg';
import cover5 from '../../assets/cover5.jpg';
import cover6 from '../../assets/cover6.jpg';
import account from '../../assets/guy.jpg';

import { IoPlaySharp } from "react-icons/io5";
import { AiOutlineDownload } from "react-icons/ai";

import accappella from '../../assets/accapella.wav';
import accappella2 from '../../assets/accapella2.wav';
import accappella3 from '../../assets/accapella3.wav';
import accappella4 from '../../assets/accapella4.wav';
import accappella5 from '../../assets/accapella5.wav';
import accappella6 from '../../assets/accapella6.wav';

import AudioWaveform from '../../components/AudioWaveform/AudioWaveform';
import {useState, useEffect, useMemo} from 'react';

function Profile() {
    const [durations, setDurations] = useState<number[]>([]);
    const tabCover = useMemo(() => [
        { id: 1, img: cover1, title: 'Vocal Studies', description: 'Prefuse 73', song: accappella },
        { id: 2, img: cover2, title: 'Temples', description: 'Kadhja Bonet', song: accappella2 },
        { id: 3, img: cover3, title: 'Earth Tones', description: 'The Du-Rites', song: accappella3 },
        { id: 4, img: cover4, title: 'The Du-Rites', description: 'The Du-Rites', song: accappella4 },
        { id: 5, img: cover5, title: 'The Du-Rites', description: 'The Du-Rites', song: accappella5 },
        { id: 6, img: cover6, title: 'The Du-Rites', description: 'The Du-Rites', song: accappella6 },
    ], []);

    useEffect(() => {
        const audioElements = tabCover.map((cover) => {
            const audio = new Audio(cover.song);
            audio.addEventListener('loadedmetadata', () => {
                setDurations((prevDurations) => {
                    const newDurations = [...prevDurations];
                    newDurations[cover.id] = audio.duration;
                    return newDurations;
                });
            });
            return audio;
        });

        return () => {
            audioElements.forEach((audio) => {
                audio.removeEventListener('loadedmetadata', () => { });
            });
        };
    }, [tabCover]);


    const formatDuration = (duration: number) => {
        if (!duration) return '0:00';
        const minutes = Math.floor(duration / 60);
        const seconds = Math.floor(duration % 60).toString().padStart(2, '0');
        return `${minutes}:${seconds}`;
    };

    return (
        <div className='profile'>
            <div className="profile-container">
                <div className="profile-content">
                    <div className='img-profile'>
                        <img src={account} alt="account" />
                    </div>

                    <div className='info-profile'>
                        <div>
                            <h2>John Doe</h2>
                            <p>Man singer specializing in R&B and Soul music</p>
                            <h3>
                                • R&B • Soul • 105 samples
                            </h3>
                        </div>

                        <div className='preview'>
                            <button>
                                <IoPlaySharp />
                                Preview
                            </button>
                        </div>
                    </div>
                </div>

            </div>
            <div className='trait'></div>

            <div className='artist-desc'>
                <p>
                    John Doe is an American singer, songwriter, and record producer. He is known for his distinctive falsetto and eccentric music style. He has received numerous awards, including 11 Grammy Awards, 7 Billboard Music Awards, and 6 American... <span>Read more</span>
                </p>
            </div>
            <div className='trait'></div>

            <div className='samples'>
                <h2>Samples</h2>


                <div className='samples-container'>
                    {tabCover.map((cover) => (
                        <div>
                            <div className='trait2'></div>
                            <div key={cover.id} className='cover'>
                                <div className='info-spectre'>
                                    <img src={cover.img
                                    } alt="cover" />
                                    <div className='titlecover'>
                                        <h3>{cover.title}</h3>
                                        <p>{cover.description}</p>
                                    </div>
                                </div>
                                <AudioWaveform audioFile={cover.song} />

                                <div className='download'>
                                    <h3>{formatDuration(durations[cover.id])}</h3>

                                    <a href={cover.song} download="my-audio-file.wav">
                                        <AiOutlineDownload size={25} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Profile
