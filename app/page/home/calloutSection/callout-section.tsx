import "./callout-section-style.css";
import calloutImg1 from "~/assets/image/home/callout-img-1.png";
import calloutImg2 from "~/assets/image/home/callout-img-2.png";
import calloutImg3 from "~/assets/image/home/callout-img-3.png";
import calloutImg4 from "~/assets/image/home/callout-img-4.png";
import calloutImg5 from "~/assets/image/home/callout-img-5.png";


export default function CallOutSection() {
    const callOutData = [
        {
            image: calloutImg5,
            title: 'Three Pices',
            subtitle: 'Timeless Elegance. Modern Comfort.'

        },
        {
            image: calloutImg1,
            title: 'Wedding Sets',
            subtitle: 'Timeless Wedding Fashion for Every Woman.'
        }, {
            image: calloutImg2,
            title: 'Wedding Sets',
            subtitle: 'Timeless Wedding Fashion for Every Woman.'
        }, {
            image: calloutImg3,
            title: 'Wedding Sets',
            subtitle: 'Timeless Wedding Fashion for Every Woman.'
        }, {
            image: calloutImg4,
            title: 'Wedding Sets',
            subtitle: 'Timeless Wedding Fashion for Every Woman.'
        }

    ]
    const heroData = callOutData[0];
    const gridData = callOutData.slice(1);
    return (
        <section className="callout-section">

            <div className="callout-card callout-hero-card">
                <img className="callout-card-img callout-hero-card-img" src={heroData.image} alt={heroData.title || ""} />
                <div className="callout-card-overlay">
                    <p className="callout-card-subtitle">{heroData.title}</p>
                    <h1 className="callout-card-title">{heroData.subtitle}</h1>
                     <button className="home-2column-section-card-btn">
                        Discover More
                    </button>
                </div>
            </div>


            <div className="callout-grid-container">
                {gridData.map((item, index) => (
                    <div key={index} className="callout-card callout-grid-card">
                        <img className="callout-card-img" src={item.image} alt={item.title || ""} />
                        <div className="callout-card-overlay">
                            <p className="callout-card-subtitle">{item.title}</p>
                            <h1 className="callout-card-title">{item.subtitle}</h1>
                            <button className="callout-card-btn">Discover More</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}