import flashDealImg2 from "~/assets/image/home/flashDealImg-2.png";
import flashDealImg3 from "~/assets/image/home/flashDealImg-3.png";
import flashDealImg4 from "~/assets/image/home/flashDealImg-4.png";
import bag from "~/assets/image/home/bag.svg";
import "./featured-section-style.css"
export default function FeaturedSection() {
    const featuredSectionData = [
        {
            image: flashDealImg2,

        },
        {
            image: flashDealImg3,

        },
        {
            image: flashDealImg4,

        }
    ]
    const title = "Most Loved Collection"
    const subTitle = "Shop the styles our customers can't get enough of."
    return (
        <section id="FeaturedSection">
            <div className="category-header">
                <p className="category-header-subTitle"> {title}</p>
                <h1 className="category-header-title" > {subTitle}</h1>
            </div>

            <div className="FeaturedSection-grid">
                {featuredSectionData.map((item, index) => (
                    <div className="FeaturedSection-card">
                        <img
                            className="FeaturedSection-card-image"
                            src={item.image}
                        />
                        <button className="FeaturedSection-item-cart-background">
                            <img src={bag} alt={bag} height="48px" width="48px" />
                        </button>
                    </div>
                ))}
            </div>
        </section>
    )
} 