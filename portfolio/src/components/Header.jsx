import { Fragment } from "react"
import Contact from "./Contact"
const Header=()=>
{
   return(
      <Fragment>
         <header id="Nav-bar" className="bg-black color-white text-white flex flex-row content-center justify-between items-center text-2xl p-4">
            <h1 className="ml-5 text-5xl"><b>ROHITH U</b></h1>
            <ul className="flex flex-row justify-between items-center p-4  gap-50 mr-5">
            <li><a href="#Home" id="Home">Home</a></li>
          <li><a href="Contact" id="About-Me">About Me</a></li>
          <li><a href="portfolio/src/components/Contact.jsx" id="Contact">Contact</a></li>
          </ul>
         </header>
      </Fragment>
   )
}
export default Header


