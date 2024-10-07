<<<<<<< HEAD
import Link from 'next/link';

export default function Nav(){
    
    
    return(
        <nav className="nav nav-responsive">
            <div>
                <img src="/images/logo-nav.svg" id="nav-logo"/>
=======
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
    }, []); 
    
    return(
        <nav className="nav nav-responsive" id="nav">
            <div>
                <Link href="/">
                    <img src="/images/logo-nav.svg" id="nav-logo"/>
                </Link>
>>>>>>> master
            </div>
            <div className="nav-list">
                <ul>
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