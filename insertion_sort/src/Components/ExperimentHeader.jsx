import vlab from './vlab.jpg';
import college from './LOGO.png';
import { Link } from 'react-router-dom';
const ExperimentHeader=(props)=>{
    return (
        
            <div className=' bg-gray-300'>
            <div className='flex justify-between py-3 px-14 mx-3'><img className='h-12 w-24' src={vlab} alt="Can't load."></img>
             <img className='h-12' src={college} alt="Can't load."></img>
            </div>
            <div>
                <ul className='check flex justify-center space-x-12  items-center font-bold  text-xl '>
                <Link to='/'> <li className='bg-gray-300 hover:bg-gray-100 hover:rounded-md hover:text-white'>Home</li></Link>
                <Link to='/Experiment/InsertionSort/Aim'><li className='bg-gray-300 hover:bg-gray-100 hover:rounded-md hover:text-white'>Aim</li></Link>
                  <Link to='/Experiment/InsertionSort/Theory'> <li className='bg-gray-300 hover:bg-gray-100 hover:rounded-md hover:text-white'>Theory</li></Link>
                    <Link to='/Experiment/InsertionSort/Practice'><li className='bg-gray-300 hover:bg-gray-100 hover:rounded-md hover:text-white'>Practice</li></Link>
                    <li className='bg-gray-300 hover:bg-gray-100 hover:rounded-md hover:text-white'>Procedure</li>
                    <Link to='/Experiment/InsertionSort/Simulation'><li className='bg-gray-300 hover:bg-gray-100 hover:rounded-md hover:text-white'>Simulation</li></Link>
                    <Link to='/Experiment/InsertionSort/Posttest'><li className='bg-gray-300 hover:bg-gray-100 hover:rounded-md hover:text-white'>Post Test</li></Link>

                    <Link to='/Experiment/InsertionSort/References'><li className='bg-gray-300 hover:bg-gray-100 hover:rounded-md hover:text-white'>References</li></Link>

                </ul>
                <hr></hr>
                
            </div>
            </div>
               
    );
}
export default ExperimentHeader;