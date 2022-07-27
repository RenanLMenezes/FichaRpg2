import React from "react";
import ReactDom from "react-dom";

import "../styles/navbar.css";

export default function NavBar(){
    return <>
        <div className="Nav-Bar-Dark">
            <img src="./logo.png" alt="" className="Nav-Logo"/>
            <div className="links-nav">
                <a href="/">Início</a>
                <a href="/create">Criar</a>
                <a href="#">Ajuda</a>
            </div>
        </div>
    </>
}
