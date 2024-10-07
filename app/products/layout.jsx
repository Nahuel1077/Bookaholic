<<<<<<< HEAD
import Nav from "../components/nav.js";
import Footer from "../components/footer.js";
import "./styles.css";
export default function RootLayout({ children }) {   

  return (
    <section>
      <Nav className="nav-no-responsive"/>
      {children} 
      <Footer /> 
    </section>
  )
=======
'use client'
import { useEffect } from 'react';
import Nav from '/app/components/nav'

export default function RootLayout({children}){
  useEffect(() => {
      const nav = document.getElementById("nav");

      function scrollFunction() {
          if (window.scrollY <= 0) {
              nav.style.position = "sticky";
              nav.style.backgroundColor = "#0000009e";
          } /* else {
              nav.style.position = "absolute"; 
              nav.style.backgroundColor = "transparent";
          } */
      }
      if(window.innerWidth < 700){
        nav.style.position = "fixed"
          nav.style.display = "flex";
      }
      nav.style.position = "sticky";
      nav.style.backgroundColor = "rgb(23 23 23 / 93%)";

      window.addEventListener('scroll', scrollFunction);

      return () => {
          window.removeEventListener('scroll', scrollFunction);
      };
  }, []); 


    return (
      <section className="products-background">
        <div className="bg-black">
          <Nav id="nav"/>
          {children}
        </div>
      </section>
    );
>>>>>>> master
}