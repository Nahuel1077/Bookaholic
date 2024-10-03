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
}