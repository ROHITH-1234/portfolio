import MyPhoto from '../assets/carrental.jpg';
import MyPhoto2 from '../assets/mockinterview.webp';
import MyPhoto3 from '../assets/top-view-confident-courier-guy-medical-mask-wearing-hat-sitting-scooter-delivering-orders-pastel-peach-background.jpg';

const Projects = () => {
  const git_carrental = () => {
    window.location.href = "https://github.com/ROHITH-1234/formernuts";
  }
  const git_community = () => {
    window.location.href = "https://github.com/ROHITH-1234/community-driven-delivery-";
  }
  const git_aimock = () => {
    window.location.href = "https://github.com/ROHITH-1234/ai-mock-interview";
  }

  return (
    <div className="p-6">
      <h1 className="text-white text-4xl font-bold text-center mb-10">Projects</h1>

      <div className="flex flex-wrap justify-center gap-8">
        {/* Card 1 */}
        <div
          className="w-full sm:w-80 lg:w-96 cursor-pointer bg-stone-800 rounded-xl overflow-hidden shadow-lg hover:bg-stone-900 transition duration-300"
          onClick={git_carrental}
        >
          <img src={MyPhoto} alt="Car Rental" className="w-full h-48 object-cover" />
          <h2 className="text-white text-center text-xl font-semibold p-4">
            Car Rental Management System
          </h2>
        </div>

        {/* Card 2 */}
        <div
          className="w-full sm:w-80 lg:w-96 cursor-pointer bg-stone-800 rounded-xl overflow-hidden shadow-lg hover:bg-stone-900 transition duration-300"
          onClick={git_aimock}
        >
          <img src={MyPhoto2} alt="AI Mock Interview" className="w-full h-48 object-cover" />
          <h2 className="text-white text-center text-xl font-semibold p-4">
            AI Mock Interview Platform
          </h2>
        </div>

        {/* Card 3 */}
        <div
          className="w-full sm:w-80 lg:w-96 cursor-pointer bg-stone-800 rounded-xl overflow-hidden shadow-lg hover:bg-stone-900 transition duration-300"
          onClick={git_community}
        >
          <img src={MyPhoto3} alt="Community Delivery" className="w-full h-48 object-cover" />
          <h2 className="text-white text-center text-xl font-semibold p-4">
            Community-Driven Delivery
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Projects;

// import MyPhoto from '../assets/carrental.jpg';
// import MyPhoto2 from '../assets/mockinterview.webp';
// import MyPhoto3 from '../assets/top-view-confident-courier-guy-medical-mask-wearing-hat-sitting-scooter-delivering-orders-pastel-peach-background.jpg';


// const Projects=()=>
// {
//    const git_carrental=()=>{
//       window.location.href="https://github.com/ROHITH-1234/formernuts";
//    }
//    const git_community=()=>{
//       window.location.href="https://github.com/ROHITH-1234/community-driven-delivery-";
//    }
//    const git_aimock=()=>{
//       window.location.href="https://github.com/ROHITH-1234/ai-mock-interview";
//    }
//    return(
//       <div> 
//          <h1 className="text-white text-5xl"><b>Projects</b></h1>
//       <div>
//          <div className="flex gap-6 p-6 ">
//             <div className="flex-2 duration-300 hover:bg-stone-900" onClick={git_carrental}>
//                         <img src={MyPhoto} alt="Profile" className="rounded-lg shadow-lg px-7 py-13 w-4xl h-3xl " />
//                         <h1 className="p-5 mt-5 text-center text-2xl"><b>Car rental Management System</b></h1>
//             </div>      
//             <div className="flex-2 duration-300 hover:bg-stone-900 "onClick={git_aimock}>
//                <img src={MyPhoto2} alt="Profile" className="rounded-lg shadow-lg px-7 py-13 w-4xl h-3xl" />
//                <h1 className="p-5 mt-5 text-center text-2xl"><b>AI mock Interview platfrom</b></h1>
//                <h1></h1>
//             </div>
//             <div className="flex-2 duration-300 hover:bg-stone-900"onClick={git_community}>
//                <img src={MyPhoto3} alt="Profile" className="rounded-lg shadow-lg px-7 py-13 w-4xl h-3xl" />
//                <h1 className="p-5 mt-5 text-center text-2xl"><b>community delivery driven</b></h1>
//             </div>

//          </div>
//       </div>
//       </div>
//    )
// }
// export default Projects

