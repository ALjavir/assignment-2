import { useState } from "react";
import "./top-add-bar-style.css"

export default function TopAddBar() {
    const [isVisible, setIsVisible] = useState(true);

    const data = "⏳ Limited Time! Enjoy 15% OFF on Regular Items — Online Only. Shop Before It Ends!";

    if (!isVisible) return null;

    return (
        <header className="topAddBar">
            <h1>
                {data}
            </h1>
            <button className="x-btn"
                onClick={() => setIsVisible(false)}>
                X
            </button>
        </header>
    );
}