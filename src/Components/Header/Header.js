import React, { Component } from "react";
import "./Header.css";

import DropdownMenu from "../DropdownMenu/DropdownMenu";

class Header extends Component {

    render() {
        return (
            <header className="header-container">
                <img src="./assets/logo.svg" width="40" alt="PlayAroundMe logo" />
				<div className="flex-full flex-row">
					<button className="header-link">How-To</button>
					<button className="header-link">About</button>
					<DropdownMenu />
				</div>
            </header>
        );
    }

}

export default Header;