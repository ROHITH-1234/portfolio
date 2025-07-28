import { Fragment } from "react"
import Contact from "./Contact"
const Header=()=>
{
   return(
      <Fragment>
         <header id="Nav-bar" className="bg-black  color-white text-white  text-2xl p-4 w-screen">
            <h1 className=" text-5xl pb-4 inline-block "><b>Portfolio</b></h1>
            <ul className="float-right p-2 flex flex-row justify-between items-center   gap-30 mr-5">
            <li><a href="#Home" id="Home">Home</a></li>
          <li><a href="Contact" id="About-Me">About Me</a></li>
          <li><a href="portfolio/src/components/Contact.jsx" id="Contact">Contact</a></li>
          </ul>
         </header>
      </Fragment>
   )
}
export default Header


