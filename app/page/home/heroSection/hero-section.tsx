import heroImage from "~/assets/image/home/Hero.png";
import "./hero-section-style.css"
import { useState, useEffect } from "react";


export default function HeroSection() {
    const data = [heroImage, heroImage, heroImage, heroImage];
    const [currentIndex, setCurrentIndex] = useState(0);
    const autoScrollSpeed = 4000; // 4 seconds per slide

    useEffect(() => {
        // Set up the auto-scroll loop (Equivalent to Timer.periodic in Flutter)
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => 
                prevIndex === data.length - 1 ? 0 : prevIndex + 1
            );
        }, autoScrollSpeed);

        // Clean up the timer when the component unmounts (Equivalent to dispose())
        return () => clearInterval(timer);
    }, [data.length]);

    return (
        <div className="home-hero-section">
            
            {/* The Horizontal Slide Track */}
            <div 
                className="hero-slide-track"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {data.map((image, index) => (
                    <div key={index} className="hero-slide-item">
                        <img src={image} alt={`Featured banner ${index + 1}`} /> 
                    </div>
                ))}
            </div>

            {/* Dash Indicators Layout (PageView dots/dashes alternate) */}
            <div className="hero-indicators-container">
                {data.map((_, index) => (
                    <button
                        key={index}
                        className={`indicator-dash ${currentIndex === index ? "active" : ""}`}
                        onClick={() => setCurrentIndex(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

        </div>
    );
}