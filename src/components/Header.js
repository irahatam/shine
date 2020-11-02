import React from "react";

function Header() {
    return (
        <header className="Header"> 
            <div>
                <h1> SHINE Indonesia </h1>
            </div>
            <nav>
                <a href="#about"> About Us </a>
                <a href="#people"> Our People </a>
                <a href="#programs"> Our Programs </a>
                <a href="/article/"> Articles </a>
            </nav>
        </header>
    );
}

export default Header;