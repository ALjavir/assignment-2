import fleshDeal from "~/assets/image/home/flashDeal.jpg";
import fleshDealTitle from "~/assets/image/home/Flash Deals Title.png";
import "./fleshdeal-section-style.css"

export default function FlashDeal() {

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
                <h1>Hellow world</h1>
            </div>

               
        </section>
    )
} 