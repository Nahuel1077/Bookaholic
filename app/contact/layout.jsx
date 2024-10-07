'use client'
import Nav from "../components/nav.js";
import { useEffect } from 'react';
/* import Footer from "../components/footer.js"; */

export default function RootLayout({children}){
    useEffect(() => {
        const nav = document.getElementById("nav");

        function scrollFunction() {
            if (window.scrollY > 10) {
                nav.style.position = "fixed";
                nav.style.backgroundColor = "#001d82";
            } else {
                nav.style.position = "absolute"; 
                nav.style.backgroundColor = "transparent";
            }
        }
        if(window.innerWidth < 700){
            nav.style.display = "flex";
        }
        nav.style.position = "fixed";
        nav.style.backgroundColor = "rgb(23 23 23 / 93%)";

        window.addEventListener('scroll', scrollFunction);

        return () => {
            window.removeEventListener('scroll', scrollFunction);
        };
    }, []); 

    return(
        <section>
            <Nav id="nav"/>
                {children}
            
        </section>
    )
}