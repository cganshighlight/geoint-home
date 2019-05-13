import React from "react";
import SwipeDrawer from "./SwipeDrawer";
import PopUpMenu from "./PopUpMenu";

export class Header extends React.Component{
    render(){
        return(
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top material-box-shadow-header">
                <div className="container">
                        <SwipeDrawer />
                    <div class="collapse navbar-collapse justify-content-end mr-auto" id="navbarSupportedContent">
                        <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">GS Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Blog</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><PopUpMenu /></a>
                        </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}