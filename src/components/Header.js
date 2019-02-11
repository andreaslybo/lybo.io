import React from 'react';
import {slide as Menu} from 'react-burger-menu';
import menuStyling from '../css/menuStyle.css';

import { Link, animateScroll as scroll } from "react-scroll";

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = { menuOpen: false };
    }

    handleClick = () => {
        console.log(this.state.menuOpen);
    }

    render() {
        return (
            <div className="nav">
                <Menu right styles={menuStyling} onClick={ this.handleClick }>
                    <Link offset={-100} smooth={true} to="main-1"><p>Hjem</p></Link>
                    <Link offset={-100} smooth={true} to="about-me"><p>Om meg</p></Link>
                    <Link offset={-100} smooth={true} to="work-main"><p>Jobb og utdanning</p></Link>
                    <Link offset={-100} smooth={true} to="main-contact"><p>Kontakt</p></Link>
                </Menu>
                <div className="bm-cross-button"></div>
            </div>
        );
    };
}
export default Header;