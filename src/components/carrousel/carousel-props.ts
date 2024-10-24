export interface CarouselSlide {
    title: string;
    image: string;
    description: string;
}

export interface CarouselProps {
    slides: CarouselSlide[];
}