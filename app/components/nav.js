'use client'
import Link from 'next/link';
import { useEffect } from 'react';

export default function Nav(){
    
    
    useEffect(() => {
        function scrollFunction() {
            const nav = document.getElementById("nav");
            if (window.scrollY > 707) {
                nav.style.position = "fixed";
                nav.style.backgroundColor = "rgb(23 23 23 / 93%)";
                nav.style.transition = ".5s ease"
            } else {
                nav.style.position = "absolute"; 
                nav.style.backgroundColor = "transparent";
                nav.style.transition = ".5s ease"
            }
        }

        window.addEventListener('scroll', scrollFunction);

        return () => {
            window.removeEventListener('scroll', scrollFunction);
        };

        
        function navCollapse(){
            const navList = document.getElementById("nav-list");
            if (navList.style.display = "none"){
                btnMenu.style.display = "none";
                navList.style.display = "flex";
                navList.style.flexDirection = "column";
            } else {navList.style.display = "none"};
        }
        
    }, []); 

    function navCollapse(){
        const navList = document.getElementById("nav-list");
        const ulList = document.getElementById("ul-list");
        const btnMenu = document.getElementById("btn-nav-collapsed");
        if (navList.style.display = "none"){
            btnMenu.style.visibility = "collapse";
            navList.style.display = "flex";
            navList.style.width = "100%";
            navList.style.justifyContent = "flex-start"
            ulList.style.gap = "10px";
            ulList.style.margin = "0";
            ulList.style.padding = "0";
        } else {navList.style.display = "none"};
    }
    
    return(
        <nav className="nav nav-responsive" id="nav">
            <div className="nav-collapsed">
                <Link href="/">
                    <img src="/images/logo-nav.svg" id="nav-logo"/>
                </Link>
                <button id="btn-nav-collapsed" onClick={navCollapse}>
                    <svg id="nav-menu" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>
                </button>
            </div>
            <div className="nav-list" id="nav-list">
                <ul id="ul-list">
                    <li>
                        <Link href="/products" className="link">Products</Link>
                    </li>
                    <li>
                        <Link href="/contact" className="link">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}