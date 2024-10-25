import { FormEvent, useEffect, useMemo, useState } from "react";
import "./Generate.css";
import heroImage from "../../assets/github-copilot.png";

import cover1 from "../../assets/cover1.jpg";
import cover2 from "../../assets/cover2.jpg";
import cover3 from "../../assets/cover3.jpg";
import cover4 from "../../assets/cover4.jpg";
import cover5 from "../../assets/cover5.jpg";
import cover6 from "../../assets/cover6.jpg";
import cover7 from "../../assets/cover7.jpg";

import a_cappella from "../../assets/accapella.wav";
import a_cappella2 from "../../assets/accapella2.wav";
import a_cappella3 from "../../assets/accapella3.wav";
import a_cappella4 from "../../assets/accapella4.wav";
import a_cappella5 from "../../assets/accapella5.wav";
import a_cappella6 from "../../assets/accapella6.wav";
import jones from "../../assets/jones.mp3";

import AudioWaveform from "../../components/AudioWaveform/AudioWaveform";
import { AiOutlineDownload } from "react-icons/ai";

export interface A_CappellaProps {
    id: number;
    img: string;
    title: string;
    description: string;
    song: string;
}

function A_CappellaGenerator() {
    const [input, setInput] = useState("");
    const [response, setResponse] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [durations, setDurations] = useState<number[]>([]);
    const [randomCover, setRandomCover] = useState<A_CappellaProps>({
        id: 0,
        img: "",
        title: "",
        description: "",
        song: "",
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate an AI response generation
        setTimeout(() => {
            setRandomCover(
                tabCover[Math.floor(Math.random() * tabCover.length)]
            );
            setResponse(`Generating a_cappella for: "${input}"...`);
            setIsLoading(false);
        }, 2000);
    };

    const tabCover: A_CappellaProps[] = useMemo(
        () => [
            {
                id: 1,
                img: cover1,
                title: "Vocal Studies",
                description: "Prefuse 73",
                song: a_cappella,
            },
            {
                id: 2,
                img: cover2,
                title: "Temples",
                description: "Kadhja Bonet",
                song: a_cappella2,
            },
            {
                id: 3,
                img: cover3,
                title: "Earth Tones",
                description: "The Du-Rites",
                song: a_cappella3,
            },
            {
                id: 4,
                img: cover4,
                title: "The Du-Rites",
                description: "The Du-Rites",
                song: a_cappella4,
            },
            {
                id: 5,
                img: cover5,
                title: "The Du-Rites",
                description: "The Du-Rites",
                song: a_cappella5,
            },
            {
                id: 6,
                img: cover6,
                title: "The Du-Rites",
                description: "The Du-Rites",
                song: a_cappella6,
            },
            {
                id: 7,
                img: cover7,
                title: "Les Jones",
                description: "The Du-Rites",
                song: jones,
            },
        ],
        []
    );

    useEffect(() => {
        const audioElements = tabCover.map((cover) => {
            const audio = new Audio(cover.song);
            audio.addEventListener("loadedmetadata", () => {
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
                audio.removeEventListener("loadedmetadata", () => {});
            });
        };
    }, [tabCover]);

    const formatDuration = (duration: number) => {
        if (!duration) return "0:00";
        const minutes = Math.floor(duration / 60);
        const seconds = Math.floor(duration % 60)
            .toString()
            .padStart(2, "0");
        return `${minutes}:${seconds}`;
    };

    return (
        <div className="a_cappella-generator">
            <div className="hero-section">
                <div className="content-hero">
                    <h1>A_Cappella Generator</h1>
                    <h3>
                        Create customized a_cappella vocals with the power of AI.
                    </h3>
                </div>
                <img src={heroImage} alt="a_cappella-hero" />
            </div>

            <div className="chat-section">
                <h1 className="chat-title">Request Your A_Cappella</h1>
                <form onSubmit={handleSubmit} className="input-with-button">
                    <div className="input-wrapper">
                        <input
                            type="text"
                            placeholder="Describe the voice style, lyrics, or melody..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            required
                        />
                        <button type="submit" disabled={isLoading}>
                            {isLoading ? "Generating..." : "Generate A_Cappella"}
                        </button>
                    </div>
                </form>


                <div className="response">{response && <p>{response}</p>}</div>

                <div className="samples-container">
                    {response && (
                        <>
                            <div>
                                <div key={randomCover.id} className="cover">
                                    <div className="info-spectre">
                                        <img
                                            src={randomCover.img}
                                            alt="cover"
                                        />
                                        <div className="titlecover">
                                            <h3>{randomCover.title}</h3>
                                            <p>{randomCover.description}</p>
                                        </div>
                                    </div>
                                    <AudioWaveform
                                        audioFile={randomCover.song}
                                    />
                                    <div className="download">
                                        <h3>
                                            {formatDuration(
                                                durations[randomCover.id]
                                            )}
                                        </h3>
                                        <a
                                            href={randomCover.song}
                                            download="my-audio-file.wav"
                                        >
                                            <AiOutlineDownload size={25} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default A_CappellaGenerator;
