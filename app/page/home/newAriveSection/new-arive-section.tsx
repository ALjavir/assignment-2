import"./new-arive-section-style.css";
import newArivimg1 from "~/assets/image/home/newArive-1.png";
import newArivimg2 from "~/assets/image/home/newArive-2.png";
import newArivimg3 from "~/assets/image/home/newArive-3.png";
import newArivimg4 from "~/assets/image/home/newArive-4.png";
import newArivimg5 from "~/assets/image/home/newArive-5.png";
import newArivimg6 from "~/assets/image/home/newArive-6.png";
import newArivimg7 from "~/assets/image/home/newArive-7.png";
import newArivimg8 from "~/assets/image/home/newArive-8.png";
import bag from "~/assets/image/home/bag.svg";

export default function NewArive() {
    const newArivedata = [
        {
            image: newArivimg1,
            name: "Mauve Pink Embroidered Tissue Lehenga",
            price: 27225
        },
        {
            image: newArivimg2,
            name: "Wine Maroon Embroidered Anarkali Suit",
            price: 25000
        }
        ,
        {
            image: newArivimg3,
            name: "Black Silk Eid Lehenga & Choli",
            price: 21500
        }
        ,
        {
            image: newArivimg4,
            name: "Woven Design Organza Saree",
            price: 52220
        }
        ,
        {
            image: newArivimg5,
            name: "Woven Design Organza Saree",
            price: 52220
        }
        ,
        {
            image: newArivimg6,
            name: "Woven Design Organza Saree",
            price: 52220
        }
        ,
        {
            image: newArivimg7,
            name: "Woven Design Organza Saree",
            price: 52220
        }
        ,
        {
            image: newArivimg8,
            name: "Woven Design Organza Saree",
            price: 52220
        }

    ];
    const title = "New Arrivals"
    const subTitle = "The latest styles you'll love."
    return (
        <section className="newArive-section">
            <p className="home-newArive-header-subTitle">{subTitle}</p>
            <h1 className="home-newArive-header-title">{title}</h1>
            {newArivedata.map((item, index) => (
                <button key={index} className="home-newArive-section-card">
                    <img
                        className="home-newArive-section-card-image"
                        src={item.image}
                        alt={item.name || "Product image"}
                    />
                    <div className="home-newArive-card-overlay">
                        <div className="home-newArive-card-text">
                            <h1 className="home-newArive-section-card-title">{item.name}</h1>
                            <h1 className="home-newArive-section-card-price">
                                {typeof item.price === 'number'
                                    ? `BDT ${item.price.toLocaleString('en-BD', { minimumFractionDigits: 2 })}`
                                    : item.price}
                            </h1>
                        </div>

                        <button className="flashDeal-item-cart-background">
                            <img src={bag} alt={bag} height="20px" width="20px" />
                        </button>
                    </div>
                </button>
            ))}

            {/* --- Bottom View All Action Button --- */}
            <div className="newArive-view-all-container">
                <button className="newArive-view-all-btn">
                    View All New Products
                </button>
            </div>
        </section>
    )
}