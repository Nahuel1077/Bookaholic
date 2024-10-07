"use client"
import Image from "next/image";
import { Cormorant } from "next/font/google";

const cormorant = Cormorant({ 
    subsets: ['latin'],
    weight: ["400", "600"],
    style: ["normal", "italic"]
});


const submitForm = (e) => {  
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    alert("Form submitted successfully!");
}

export default function Footer(){

    return(
        <div className="flex form-container bg-black inherit">
            <div className="footer-text">
                <p className={cormorant.className}>Bookaholic is a website designed to be your help when you are craving for something to read. For us, addicted to reading, it is a gamechanger when it comes to finding a good book. We'll be happy to help you</p>
                <p className={cormorant.className}>Follow us on our social media for interesting content!</p>
            </div>
            <div className="footer-social-media">
                <a href="#" className="no-decoration transform">Instagram</a>
                <a href="#" className="no-decoration transform">Facebook</a>
                <a href="#" className="no-decoration transform">Twitter</a>
            </div>
            <div className="contact-form">
                <form className="form flex">
                    <p className="section-text">Any thoughts? Let's get in touch</p>
                    <input type="text" placeholder="Name" id="name"></input>
                    <input type="email" placeholder="Email" id="email"></input>
                    <textarea placeholder="Message" id="message"></textarea>
                    <button className="buttons" type="submit" id="form-submit" onClick={submitForm}>Submit</button>
                </form>
            </div>
            <div className="image-container">
                <Image
                src="/images/logo.svg"
                alt="logo"
                height= {250}
                width= {250}
                id="logo"
                /> 
                <p className="no-decoration">2024 - Bookaholic © - All rights reserved</p>
            </div>
        </div>
    )
}