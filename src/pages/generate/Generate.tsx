import { useEffect, useMemo, useState } from "react";
import "./Generate.css";
import heroImage from "../../assets/github-copilot.png";

import cover1 from "../../assets/cover1.jpg";
import cover2 from "../../assets/cover2.jpg";
import cover3 from "../../assets/cover3.jpg";
import cover4 from "../../assets/cover4.jpg";
import cover5 from "../../assets/cover5.jpg";
import cover6 from "../../assets/cover6.jpg";

import accappella from "../../assets/accapella.wav";
import accappella2 from "../../assets/accapella2.wav";
import accappella3 from "../../assets/accapella3.wav";
import accappella4 from "../../assets/accapella4.wav";
import accappella5 from "../../assets/accapella5.wav";
import accappella6 from "../../assets/accapella6.wav";
import AudioWaveform from "../../components/AudioWaveform/AudioWaveform";
import { AiOutlineDownload } from "react-icons/ai";

function AcapellaGenerator() {
    const [input, setInput] = useState("");
    const [response, setResponse] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [durations, setDurations] = useState<number[]>([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate an AI response generation
        setTimeout(() => {
            setResponse(`Generating acapella for: "${input}"...`);
            setIsLoading(false);
        }, 2000);
    };

    const tabCover = useMemo(
        () => [
            {
                id: 1,
                img: cover1,
                title: "Vocal Studies",
                description: "Prefuse 73",
                song: accappella,
            },
            {
                id: 2,
                img: cover2,
                title: "Temples",
                description: "Kadhja Bonet",
                song: accappella2,
            },
            {
                id: 3,
                img: cover3,
                title: "Earth Tones",
                description: "The Du-Rites",
                song: accappella3,
            },
            {
                id: 4,
                img: cover4,
                title: "The Du-Rites",
                description: "The Du-Rites",
                song: accappella4,
            },
            {
                id: 5,
                img: cover5,
                title: "The Du-Rites",
                description: "The Du-Rites",
                song: accappella5,
            },
            {
                id: 6,
                img: cover6,
                title: "The Du-Rites",
                description: "The Du-Rites",
                song: accappella6,
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
        <div className="acapella-generator">
            <div className="hero-section">
                <div className="content-hero">
                    <h1>Acapella Generator</h1>
                    <h3>
                        Create customized acapella vocals with the power of AI.
                    </h3>
                </div>
                <img src={heroImage} alt="acapella-hero" />
            </div>

            <div className="chat-section">
                <h1 className="chat-title">Request Your Acapella</h1>
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
                            {isLoading ? "Generating..." : "Generate Acapella"}
                        </button>
                    </div>
                </form>

                <div className="response">{response && <p>{response}</p>}</div>
                <div className="samples-container">
                    {tabCover.map((cover) => (
                        <div>
                            <div className="trait2"></div>
                            <div key={cover.id} className="cover">
                                <div className="info-spectre">
                                    <img src={cover.img} alt="cover" />
                                    <div className="titlecover">
                                        <h3>{cover.title}</h3>
                                        <p>{cover.description}</p>
                                    </div>
                                </div>
                                <AudioWaveform audioFile={cover.song} />

                                <div className="download">
                                    <h3>
                                        {formatDuration(durations[cover.id])}
                                    </h3>

                                    <a
                                        href={cover.song}
                                        download="my-audio-file.wav"
                                    >
                                        <AiOutlineDownload size={25} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default AcapellaGenerator;
