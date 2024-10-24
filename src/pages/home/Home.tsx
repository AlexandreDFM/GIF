import './Home.css'
import homehero from '../../assets/homehero.png';
import cover1 from '../../assets/cover1.jpg';
import cover2 from '../../assets/cover2.jpg';
import cover3 from '../../assets/cover3.jpg';
import cover4 from '../../assets/cover4.jpg';
import cover5 from '../../assets/cover5.jpg';
import cover6 from '../../assets/cover6.jpg';
import cover7 from '../../assets/cover7.jpg';
import cover8 from '../../assets/cover8.jpg';
import cover9 from '../../assets/cover9.jpg';
import cover10 from '../../assets/cover10.jpg';
import cover11 from '../../assets/cover11.jpg';
import cover12 from '../../assets/cover12.jpg';

import accappella from '../../assets/accapella.wav';

function Home() {
    const tabCover = [
        { id: 1, img: cover1, title: 'Vocal Studies and Uplifting Beats', description: 'Prefuse 73', audio: accappella },
        { id: 2, img: cover2, title: 'Temples', description: 'Kadhja Bonet', audio: accappella },
        { id: 3, img: cover3, title: 'Earth Tones', description: 'The Du-Rites', audio: accappella },
        { id: 4, img: cover4, title: 'Kollection 6', description: 'Kendrick Lamar', audio: accappella },
        { id: 5, img: cover5, title: 'The Epic', description: 'Kamasi Washington', audio: accappella },
        { id: 6, img: cover6, title: 'The Dream', description: 'Akif', audio: accappella },
    ]

    const tabCover2 = [
        { id: 1, img: cover7, title: 'Vocal Studies and Uplifting Beats', description: 'Prefuse 73', audio: accappella },
        { id: 2, img: cover8, title: 'Temples', description: 'Kadhja Bonet', audio: accappella },
        { id: 3, img: cover9, title: 'Earth Tones', description: 'The Du-Rites', audio: accappella },
        { id: 4, img: cover10, title: 'Kollection 6', description: 'Kendrick Lamar', audio: accappella },
        { id: 5, img: cover11, title: 'The Epic', description: 'Kamasi Washington', audio: accappella },
        { id: 6, img: cover12, title: 'The Dream', description: 'Akif', audio: accappella },
    ]

    return (
        <div className="home">
            <div className='home-flex'>
                <div className='home-hero'>
                    <div className='content-hero'>
                        <p>
                            ARTIST OF THE MONTH
                        </p>

                        <div className='title-hero'>
                            <h1>R&B Hits</h1>
                            <h3>
                                Hot Shot, Confession, Beyonce, Usher, The Dream, Akif, Princeton Michael...
                            </h3>
                        </div>

                        <div className='bot-hero'>
                            <span>50,034 likes</span> • 213 songs, 13 hr 45 min
                        </div>
                    </div>

                    <img src={homehero} alt='home-hero' />
                </div>

                <div className='home-hero2'>
                    <div className='content-hero'>
                        <div>
                            <p>
                                BECOME A CREATIF PRODUCER
                            </p>

                            <h3>
                                Find the perfect voice for your next hit
                            </h3>
                        </div>

                        <button>
                            Get Started
                        </button>
                    </div>
                </div>
            </div>

            <div className="home-content">
                <h1 className='title-home-one'>
                    New Releases
                </h1>

                <div className='cover'>
                    <div className="grid-container">
                        {
                            tabCover.map((cover) => (
                                <div key={cover.id} className="grid-item">
                                    <div className='on-hover'></div>
                                    <img src={cover.img} alt='cover1' />
                                    <h1>
                                        {cover.title.length > 17 ? `${cover.title.substring(0, 17)}...` : cover.title}
                                    </h1>
                                    <p>
                                        {cover.description.length > 17 ? `${cover.description.substring(0, 17)}...` : cover.description}
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                </div>

            </div>
            <div className='trait'></div>

            <div className="home-content">
                <h1 className='title-home-one'>
                    Recommended for You
                </h1>

                <div className='cover'>
                    <div className="grid-container">
                        {
                            tabCover2.map((cover) => (
                                <div key={cover.id} className="grid-item">
                                    <div className='on-hover'></div>
                                    <img src={cover.img} alt='cover1' />
                                    <h1>
                                        {cover.title.length > 17 ? `${cover.title.substring(0, 17)}...` : cover.title}
                                    </h1>
                                    <p>
                                        {cover.description.length > 17 ? `${cover.description.substring(0, 17)}...` : cover.description}
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home
