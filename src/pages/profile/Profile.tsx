import './Profile.css'
import cover1 from '../../assets/cover1.jpg';
import cover2 from '../../assets/cover2.jpg';
import cover3 from '../../assets/cover3.jpg';
import cover4 from '../../assets/cover4.jpg';
import cover5 from '../../assets/cover5.jpg';
import cover6 from '../../assets/cover6.jpg';
import cover7 from '../../assets/cover7.jpg';
import cover8 from '../../assets/cover8.jpg';

function Profile() {
  const tabCover = [
    { id: 1, img: cover1, title: 'Vocal Studies and Uplifting Beats', description: 'Prefuse 73' },
    { id: 2, img: cover2, title: 'Temples', description: 'Kadhja Bonet' },
    { id: 3, img: cover3, title: 'Earth Tones', description: 'The Du-Rites' },
    { id: 4, img: cover4, title: 'Kollection 6', description: 'Kendrick Lamar' },
    { id: 5, img: cover5, title: 'The Epic', description: 'Kamasi Washington' },
    { id: 6, img: cover6, title: 'The Dream', description: 'Akif' },
    { id: 7, img: cover7, title: 'The Dream', description: 'Akif' },
    { id: 8, img: cover8, title: 'The Dream', description: 'Akif' }
  ]
  return (
    <>
      <div className="profile-container">
        <div className="profile-hero">
          <div className='profile-hero-image'>
            <img src="https://reactnative.dev/docs/assets/p_cat1.png" alt="profile" />
          </div>
          <div className='profile-acapella-extract'>
            <div className='profile-acapella'>
              <div className='first'>
                01
              </div>
              <div className='line'>
                -----------------------
              </div>
              <div className='second'>
                02
              </div>
            </div>
            <div className='profile-next-prev'>
              <button className="prev">◀</button>
              <button className="next">▶</button>
            </div>
          </div>

        </div>
        <div className="profile-content">
          <h3 className='work'>Musician</h3>
          <h1 className='name'>Scool Beat</h1>
          <p className='description'>Is a old guy who is bad at managing his lane but at least he is a good frontend developper and musician</p>
          <h2 className='read-more'>Read More</h2>
          <h3 className='some-music'>Some of his music :</h3>
          <div className="home-content">
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
        </div>
      </div>
    </>
  )
}

export default Profile
