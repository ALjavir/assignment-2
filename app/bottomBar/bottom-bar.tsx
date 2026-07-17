import { FiChevronDown } from "react-icons/fi";
import "./bottom-bar-style.css"

import newIcon from "~/assets/image/navBar/new-icons.svg";
import search from "~/assets/image/navBar/search.svg";

export default function BottomBar() {
    const data = ["Category-1", "Category-2", "Category-3", "Category-4", "Category-5"];
    const dataProduct = ["All Product", "Tops", "Category-3", "Category-4", "Category-5","Category-6",,"Category-7","Category-8","Category-9","Category-10",];

    return (
        <header className="bottomBar-container">
            <div className="sec-1">
                <div className="category-dropdown-wrapper">
                    <select id="categories" name="categories" defaultValue="">
                        <option value="" disabled hidden>
                            Select Category
                        </option>
                        {data.map((category, index) => (
                            <option key={index} value={category.toLowerCase()}>
                                {category}
                            </option>
                        ))}
                    </select>
                    <div className="select-arrow-btn">
                        <FiChevronDown size={18} />
                    </div>
                </div>

                <button className="action-item-bottomNav">
                    <img src={newIcon} alt="" height={24} width={24} />
                    <span>New In</span>
                </button>

                <button className="action-item-bottomNav">
                    <img src={newIcon} alt="" height={24} width={24} />
                    <span>Offers</span>
                </button>

            </div>


            <div className="search-bar-container">
                <input
                    type="text"
                    placeholder="search..."
                    className="search-input"
                />
                <button className="search-btn">
                    <img src={search} alt="Search" />
                </button>

            </div>

            <div className="sec-3">
                {dataProduct.map((category, index) => (
                   
                            <button key={index} value={category}className="action-item-bottomNav">
                                {category}
                            </button>
                        ))}
            </div>

        </header>
    );
}