import MyPhoto from '../assets/pexels-luis-gomes-166706-546819.jpg'
import { Fragment } from 'react'
import Projects from './Projects'
import Contact from './Contact'
function Content()
{
   return(
      <main className="bg-stone-950 min-h-screen text-white px-6 py-12">
         <div className='flex flex-col md:flex-row gap-15'>
         <img src={MyPhoto} alt="Profile" className="rounded-lg shadow-lg px-7 py-13 w-4xl h-3xl  " />
         <div className="text-left p-20  ml-10 text-2xl px-6 py-12 max-w-4xl">
            <h1 className="text-5xl text-white"><b>About Me</b></h1>
            <h1 className="animate-pulse text-white p-4 rounded text-center "><b>I'M Rohith Software Engineer</b></h1>
            <p className="">
               I am a dedicated Computer Science student eager to apply my skills in real-world projects while continuously expanding my
 knowledge. With hands-on experience in developing applications and websites, I have a strong foundation in programming
 concepts and a focus on delivering effective solutions. I am driven to contribute to organizational goals and further enhance my
 technical expertise
            </p>
            <div className="flex flex-row md:flex-row gap-6 p-6">
               <div className="flex 1"> 
                  <a href="">Github</a>
               </div>
            </div>
         </div>
         </div>
         <Projects/>
      
      </main>
   )
}
export default Content