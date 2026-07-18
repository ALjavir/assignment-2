import cat1 from "~/assets/image/home/cat-1.jpg";
import cat2 from "~/assets/image/home/cat-2.jpg";
import cat3 from "~/assets/image/home/cat-3.jpg";
import cat4 from "~/assets/image/home/cat-4.jpg";

 import "./category-section.css"
export default function Category() {
    const CatData = [
        {
            image: cat1,
            name: "Sharee Collections"
        },
        {
            image: cat2,
            name: "Three Pices Collections"
        },
        {
            image: cat3,
            name: "Lehenga Collections"
        },
        {
            image: cat4,
            name: "Wedding Collections"
        }
    ];

    const title = "Shop By Category"
    const subTitle = "Find your Perfect Style"

    return (
        <section id="category-section">
            <div className="category-header">
                <p className="category-header-subTitle"> {subTitle}</p>
                <h1 className="category-header-title" > {title}</h1>

            </div>
            <div className="category-card">
                {CatData.map((CatData, index) => (

                    <button key={index} value="" className="category-action-item">
                        <img className="category-card-image" src={CatData.image} alt="" />
                        <h1 className="category-card-name">{CatData.name}</h1>
                        
                        <div className="category-card-action">
                            <p className="category-card-action"> Explore All {CatData.name} →</p>
                        </div>
                    </button>
                ))}
            </div>
        </section>
    )
}