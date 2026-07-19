import fleshDeal from "~/assets/image/home/flashDeal.jpg";
import fleshDealTitle from "~/assets/image/home/Flash Deals Title.png";
import flashDealImg1 from "~/assets/image/home/flashDealImg-1.png";
import flashDealImg2 from "~/assets/image/home/flashDealImg-2.png";
import flashDealImg3 from "~/assets/image/home/flashDealImg-3.png";
import flashDealImg4 from "~/assets/image/home/flashDealImg-4.png";
import bag from "~/assets/image/home/bag.svg";
import "./fleshdeal-section-style.css"

export default function FlashDeal() {
    const flashDealItem = [
        {
            image: flashDealImg1,
            discount_per: 30,
            name: 'Mauve Pink Embroidered Tissue Lehenga',
            price: 19057,
        },
        {
            image: flashDealImg2,
            discount_per: 20,
            name: 'Wine Maroon Embroidered Anarkali Suit',
            price: 15785,
        },
        {
            image: flashDealImg3,
            discount_per: 10,
            name: 'Black Silk Eid Lehenga & Choli',
            price: 13635,
        },
        {
            image: flashDealImg4,
            discount_per: 50,
            name: 'Woven Design Organza Saree',
            price: 26113,
        }
    ]
    return (
        <section className="flashDeal-section">
            <div className="flashDeal-section-card" >
                <img src={fleshDeal} alt="" className="fleshDeal-img" />
                <img src={fleshDealTitle} alt="" className="fleshDealTitle-img" />
                <div className="flashDeal-timer-container">
                    <div className="flashDeal-timer-group">
                        <div className="flashDeal-timer-card">10</div>
                        <span className="flashDeal-timer-label">Days</span>
                    </div>

                    <div className="flashDeal-timer-divider">:</div>

                    <div className="flashDeal-timer-group">
                        <div className="flashDeal-timer-card">03</div>
                        <span className="flashDeal-timer-label">Hours</span>
                    </div>

                    <div className="flashDeal-timer-divider">:</div>

                    <div className="flashDeal-timer-group">
                        <div className="flashDeal-timer-card">09</div>
                        <span className="flashDeal-timer-label">Minutes</span>
                    </div>

                    <div className="flashDeal-timer-divider">:</div>

                    <div className="flashDeal-timer-group">
                        <div className="flashDeal-timer-card">50</div>
                        <span className="flashDeal-timer-label">Sec</span>
                    </div>
                </div>
                <h1 className="flashDeal-off-per"> UP TO <span className="flashDeal-per-num">50%</span> OFF</h1>
                <p className="flashDeal-mess">Because Every Woman Deserves to Shine.
                    Grab It Before It's Gone!
                </p>

            </div>
           
                <div className="flashDeal-section-item">
                    {flashDealItem.map((item, index) => {
                        const rawDiscountPrice = item.price - (item.price * item.discount_per) / 100;
                        const formattedDiscountPrice = rawDiscountPrice.toLocaleString('en-BD', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
                        const formattedOriginalPrice = item.price.toLocaleString('en-BD', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
                        return (
                            <div key={index} className="flashDeal-item-continer">
                                <div className="flashDeal-item-img-continer">
                                    <img className="flashDeal-item-img" src={item.image} alt={item.name} />
                                    <div className="flashDeal-item-offer">
                                        <h1 className="flashDeal-item-offer-num">{item.discount_per}%</h1>
                                    </div>
                                    <button className="flashDeal-item-cart-background">
                                        <img  src={bag} alt={bag} height="20px"  width="20px"/>
                                    </button>
                                    <div className="flashDeal-item-select-option">
                                        <h1 className="flashDeal-item-select-option-txt">Select Option</h1>
                                    </div>
                                </div>
                                <h1 className="flashDeal-item-name">{item.name}</h1>
                                <h1 className="flashDeal-item-discount-price">BDT {formattedDiscountPrice}</h1>
                                <h1 className="flashDeal-item-price">BDT {formattedOriginalPrice}</h1>
                            </div>
                        );
                    })}
                </div>
 
        </section>
    )
} 