import MyPhoto from '../assets/pexels-luis-gomes-166706-546819.jpg'
import { Fragment } from 'react'
import Projects from './Projects'
import Contact from './Contact'
import Github from './icons/github'
import linkedin from './icons/linkedin'
function Content()
{
   return(
      <main className="bg-stone-950 min-h-screen text-white px-6 py-12">
         <div className='flex flex-col md:flex-row gap-15'>
         <img src={MyPhoto} alt="Profile" className="rounded-lg shadow-lg max-w-4xl min-w-2xs px-7 py-13  max-h-3xl min-h-4xs " />
         <div className="text-left p-20  ml-10 text-2xl px-6 py-12 ">
            <h1 className="text-5xl text-white"><b>Rohith U</b></h1>
            <h1 className="text-gray-300 p-4 rounded text-center italic "><b>Software Engineer</b></h1>
            <p className="text-justify">
               I am a dedicated Computer Science student eager to apply my skills in real-world projects while continuously expanding my
 knowledge. With hands-on experience in developing applications and websites, I have a strong foundation in programming
 concepts and a focus on delivering effective solutions. I am driven to contribute to organizational goals and further enhance my
 technical expertise
            </p>
 <Github className="inline-block items-center"/>
    
         </div>
         </div>
         <Projects/>
      
      </main>
   )
}
export default Content