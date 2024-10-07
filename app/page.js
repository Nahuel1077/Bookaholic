import Image from "next/image";
import "./globals.css";
import Nav from "./components/nav";
import Search from "./components/search";
import Footer from "./components/footer";
<<<<<<< HEAD

export default function Home() {
  return (
    <section className="container">
=======
import Link from 'next/link';

export default function Home() {
  return (
    <section className="container form-container">
>>>>>>> master
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
<<<<<<< HEAD
          <button id="coverButton">See our bestsellers</button>
=======
          <Link href="/best-sellers">
            <button id="coverButton">See our bestsellers</button>
          </Link>
>>>>>>> master
        </div>
      </div>
      <Search/>
      <Footer/>
    </section>
  );
}
