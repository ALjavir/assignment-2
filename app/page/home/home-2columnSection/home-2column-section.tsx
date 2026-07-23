import home2columnimg1 from "~/assets/image/home/home-2column-img-1.png";
import home2columnimg2 from "~/assets/image/home/home-2column-img-2.png";
import "./home-2column-section-stylr.css"

export default function Home2column() {
    const home2columnData = [
        {
            tile: "Timeless Elegance. Modern Comfort.",
            subTitle: 'Three Pices',
            image: home2columnimg1
        },
        {
            tile: "Timeless Wedding Fashion for Every Woman.",
            subTitle: 'Wedding Sets',
            image: home2columnimg2
        }
    ]
    return (
        <section className="home-2column-section">
            {home2columnData.map((home2columnData, index) => (
                <div key={index} className="home-2column-section-card">
                    <img className="home-2column-section-card-image" src={home2columnData.image} alt="" />
                    <p className="home-2column-section-card-subTitle">{home2columnData.subTitle}</p>
                    <h1 className="home-2column-section-card-title">{home2columnData.tile}</h1>
                    <button className="home-2column-section-card-btn">
                        Discover More
                    </button>
                </div>
            ))}
        </section>
    )
}