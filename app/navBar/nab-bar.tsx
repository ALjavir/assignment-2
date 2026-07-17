import { IoStorefrontOutline } from "react-icons/io5";
import { BiTargetLock } from "react-icons/bi"; 
import menu from "~/assets/image/navBar/Menu.svg";
import logo from "~/assets/image/navBar/Logo.svg";
import cart from "~/assets/image/navBar/cart.svg";
import contact from "~/assets/image/navBar/contact.svg";


import "./nav-bar-style.css"

export default function NavBar() {
    return (
        <header className="nabVar-container">
            <button className="menu-btn">
                <img src={menu} alt="Dazzling Diva"  />
            </button>


            <button className="logo">
                <img src={logo} alt="Dazzling Diva" className="logo-img" />
            </button>


            <div className="header-actions">
                <button className="action-item">
                  <IoStorefrontOutline size={20} />
                    <span>Store</span>
                </button>

                <button className="action-item">
                   <BiTargetLock size={20} />
                    <span>Track Order</span>
                </button>


                <button className="icon-btn">
                    <img src={cart} alt="Dazzling Diva"className="icon-btn-icon" />
                </button>

                <button className="icon-btn">
                    <img src={contact} alt="Dazzling Diva" className="icon-btn-icon" />
                </button>
            </div>
        </header>
    )
}