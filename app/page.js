import Image from "next/image";
import "./globals.css";
import Nav from "./components/nav";
import Search from "./components/search";
import Footer from "./components/footer";

export default function Home() {
  return (
    <section className="container">
      <Nav/>
      <div className="image-container">
          <Image
          src="/images/home-photo.png"
          alt="book cover photo"
          height= {600}
          width= {990}
          id="cover-image"
          /> 
        <div className="text-in-image">
          <h1>Are you a bookaholic?</h1>
          <p>Let's find you a good one!</p>
          <button id="coverButton">See our bestsellers</button>
        </div>
      </div>
      <Search/>
      <Footer/>
    </section>
  );
}
