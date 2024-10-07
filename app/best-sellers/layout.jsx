import Nav from "../components/nav.js";
/* import Footer from "../components/footer.js"; */
import "./styles.css";
export default function RootLayout({ children }) {   

  return (
    <section>
      <Nav id="nav-no-responsive"/>
      {children} 
      {/* <Footer />  */}
    </section>
  )
}