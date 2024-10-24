import "./Landing.css";
import cover1 from "../../assets/cover1.jpg";
import cover2 from "../../assets/cover2.jpg";
import cover3 from "../../assets/cover3.jpg";
import voices from "../../assets/voices.jpg";
import quality from "../../assets/quality.jpg";
import collaborative from "../../assets/collaborative.jpg";
import {Carousel} from "../../components/carrousel/carousel.tsx";
import {CarouselSlide} from "../../components/carrousel/carousel-props.ts";

export default function Landing() {
    const slides: CarouselSlide[] = [
        { image: cover1, title: "Discover New Music", description: "Explore new songs and albums from your favorite artists." },
        { image: cover2, title: "Create Playlists", description: "Create playlists with your favorite songs and share them with your friends." },
        { image: cover3, title: "Download Music", description: "Download songs to listen offline without using your data." }
    ];

    return (

        <>
            <div className={"landing-page"}>

            <header className="landing-header">
                <nav className="landing-navbar">
                    <div className="logo">Eumag</div>
                    <ul className="nav-links">
                        <li><a href="#">Support</a></li>
                        <li><a href="#">Download</a></li>
                        <li><a href={"/login"} className={"btn btn-primary"}>Sign In</a></li>
                    </ul>
                </nav>
            </header>

                {/*This is a platform designed to connect singers and composers in a collaborative space for music creation. The platform allows singers to upload and share acapella recordings, giving composers easy access to raw vocal tracks to inspire new musical compositions. This platform streamlines the process of finding fresh vocal talent and provides a space where musicians from around the world can collaborate. Singers can showcase their voices, even without a studio, while composers can browse a variety of acapella tracks to find the perfect match for their next project. It aims to be a hub for creative musical partnerships and innovation.*/}
            <section className="hero">
                <div className="hero-content">
                    <h1>Find the ideal voice for you</h1>
                    <p>Discover new music and collaborate with singers from around the world.</p>
                    <a href="#" className="btn btn-primary">Get Started</a>
                </div>
                <div className="hero-image">
                    {/*<div style={{width: "100%", maxWidth: "600px", margin: "0 auto"}}>*/}
                        <Carousel slides={slides}/>
                    {/*<img src={cover1} alt={"Music streaming"}/>*/}
                </div>
            </section>

            <section className="features">
                <h2>Why Choose Us?</h2>
                <div className="features-container">
                    <div className="feature-item">
                        <h3>Millions of Voices</h3>
                        <p>Find the perfect voice for your music. </p>
                        <img src={voices} alt="Millions of Voices"/>
                    </div>
                    <div className="feature-item">
                        <h3>High Quality Sound</h3>
                        <p>Crystal clear sound quality to complement your music.</p>
                        <img src={quality} alt="High Quality Sound"/>
                    </div>
                    <div className="feature-item">
                        <h3>Collaborative Space</h3>
                        <p>Connect with singers and composers from around the world.</p>
                        <img src={collaborative} alt="Collaborative Space"/>
                    </div>
                </div>
            </section>

            <section className="cta">
                <h2>Join Millions of Singers and Composers Today</h2>
                <div style={{display: "flex", gap: "3rem", justifyContent: "center"}}>
                    <a href="#" className="btn btn-secondary">Try it Free for 30 Days</a>
                    <a href={"#"} className={"btn btn-primary"}>Learn More</a>
                </div>
            </section>

            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-section">
                        <h3>Company</h3>
                        <ul>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Jobs</a></li>
                            <li><a href="#">Press</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>Resources</h3>
                        <ul>
                            <li><a href="#">Help Center</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">FAQs</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>Legal</h3>
                        <ul>
                            <li><a href="#">Terms of Service</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Cookies</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
            </div>
        </>
    );
}
