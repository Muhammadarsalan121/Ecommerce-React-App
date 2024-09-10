import { Link } from "react-router-dom"
import "./Navbar.css"

function Navbar() {
  return (
    <>
    <div className="main-link">
    <Link className="link" to="">Home</Link>
    <Link className="link" to="About">About</Link>
    <Link className="link" to="Contact">Contact</Link>
    <Link className="link" to="Service">Service</Link>
    </div>
    </>
  )
}

export default Navbar