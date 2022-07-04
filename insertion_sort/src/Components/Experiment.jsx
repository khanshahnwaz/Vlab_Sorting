
import { Link } from "react-router-dom";
import Eimage from './experiment.png';
const Experiment= ()=>{
    return (
    
      
        <div className="sm:flex justify-around opacity:100 pb-5 mt-5">
           <div className="bg-blue-900 lg:w-60 lg:h-max rounded lg:rounded lg:hover:bg-cyan-300 hover:text-gray-800 duration-300 w-28 h-28 m-4 lg:m-10 p-5" >
             <h2 className="text-white font-semibold text-center hover:text-gray-800  text-2xl"><Link to ='/Experiment/InsertionSort/Aim'>INSERTION SORT</Link></h2>
           </div>
           <img src={Eimage}  alt="Can't load." className="float-left lg: h-48 md:h-96 xl:h-fit"></img>
        </div>
        
        
    );
}

export default Experiment;