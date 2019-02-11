import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

const Main = () => {
    return (
        <div id="main-1">
        <script src="../js/.shape.js"></script>
            <div id="main-1-fadein"></div>
            <div id="shapes">
                <script src="../js/scroll.js"></script>
                <script src="../js/shape.js"></script>
                <div id="main-1-text-container">
                    <span id="sometext">Hei, verden!</span>
                    <h1 id="headline">Andreas
                        <a className="bolder"> LYBO</a>
                    </h1>
                    <p className="top">Fullstack Utvikler</p>
                    <Link offset={-100} smooth={true} to="about-me">
                        <p className="about-me">Tjenester</p>
                    </Link>
                </div>

                <div className="shape circle"></div>
                <div className="shape triangle-yellow"></div>
                <div className="shape line-pink"></div>
                <div className="shape plus-cyan"></div>

                <div className="shape-opposite circle-red"></div>
                <div className="shape-opposite triangle-cyan"></div>
                <div className="shape-opposite line-green"></div>
                <div className="shape-opposite plus-orange"></div>
            </div>
        </div>
    );
}

export default Main;