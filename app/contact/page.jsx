'use client'
import Image from 'next/image'
export default function Contact(){

    const submitForm = (e) => {  
        e.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
        console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
        alert("Form submitted successfully!");
    }

    return(
        <div className="flex">
            <div className="gap contact-background flex">
                <form className="form flex contact">
                    <p className="section-text">Get in contact with us</p>
                    <input type="text" placeholder="Name" id="name"></input>
                    <input type="email" placeholder="Email" id="email"></input>
                    <textarea placeholder="Message" id="message"></textarea>
                    <button className="buttons" type="submit" id="form-submit" onClick={submitForm}>Submit</button>
                </form>
            
                <div className="footer-social-media">
                    <a href="#" className="no-decoration transform">Instagram</a>
                    <a href="#" className="no-decoration transform">Facebook</a>
                    <a href="#" className="no-decoration transform">Twitter</a>
                </div>
                <div className="image-container contact-background">
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
        </div>
    )
}