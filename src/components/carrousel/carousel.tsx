import "./carousel.css";
import { useEffect, useState } from "react";
import { CarouselProps } from "./carousel-props.ts";

export const Carousel = ({ slides }: CarouselProps) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        slides.forEach((slide) => {
            const img = new Image();
            img.src = slide.image;
        });
    }, [slides]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
        }, 5000);

        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div className="carousel">
            <div className="carousel-content">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`carousel-slide ${index === currentSlide ? "active" : ""}`}
                    >
                        {index === currentSlide && (
                            <img
                                src={slide.image}
                                alt={slide.title}
                                aria-description={slide.description}
                            />
                        )}
                    </div>
                ))}
            </div>
            <div className="carousel-indicators">
                {slides.map((_, index) => (
                    <span
                        key={index}
                        className={`indicator ${index === currentSlide ? "active" : ""}`}
                        onClick={() => setCurrentSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
};
