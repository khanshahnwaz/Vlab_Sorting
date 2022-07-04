 import vlab from './vlab.jpg';
import college from './LOGO.png';
import {Link} from 'react-router-dom';
import { ListTwoTone } from '@material-ui/icons';
const Header=(props)=>{
   
    const menuSelect=()=>{
        let list =document.querySelector('ul');
        let ico=document.querySelector('#menu');
        if(ico.name=="menu-outline"){ico.name="close-outline"
        list.classList.remove('hidden')
        
        list.classList.add('bg-blue-200');
        list.classList.add('absolute');
        list.classList.add('top-24');
        list.classList.add('left-0');
        list.classList.add('z-50');
        list.classList.add('transition');

        list.classList.add('duration-700');
        list.classList.add('ease-in-out')
        
        
    }else {ico.name="menu-outline"
       list.classList.add('hidden');
       list.classList.remove('transition');
       list.classList.remove('ease-in-out')

       list.classList.remove('duration-700');
    //    list.classList.remove('bg-blue-500');
       list.classList.remove('bg-blue-200');
       list.classList.remove('z-50');
       list.classList.remove('absolute');
        list.classList.remove('top-24');
        list.classList.remove('left-0');
        list.classList.remove('opacity-50')
        
    }      

        
    }
    return (
        
<>
<div className='bg-slate-300'>
        <div className='sticky sm:flex sm:justify-between sm:py-3 sm:px-14 sm:mx-3 flex justify-between p-2 '><a href='https://vlab.co.in/' target="_blank"><img className='h-14 w-24 ' alt="Can't load." src={vlab}></img></a>
             <a href='https://www.andcollege.du.ac.in/' target='_blank'><img className='h-14 w-24' alt="Can't load." src={college}></img></a>
            </div>
            <div className=' justify-end'>
                <span  className='text-3xl  cursor-pointer sm:hidden block'><ion-icon id="menu" name="menu-outline" onClick={menuSelect}></ion-icon></span>
                <ul className=' check sm:flex sm:justify-center sm:space-x-5 sm:font-bold sm:items-center font-semibold hidden text-xl '>
                <Link  to='/'><li className=' bg-gray-300 hover:bg-gray-100 hover:rounded-md hover:text-white '>Home</li></Link>
                <Link to='/Introduction'>   <li className='bg-gray-300 hover:bg-gray-100 hover:rounded-md hover:text-white '>Introduction</li></Link>
                <Link to='/Experiment'>  <li className='bg-gray-300 hover:bg-gray-100 hover:rounded-md hover:text-white '>Experiments</li></Link>
                <Link to='/Objective'> <li className='bg-gray-300 hover:bg-gray-100 hover:rounded-md hover:text-white '>Objective</li></Link>
                <Link to='/Target_Audience'> <li className='bg-gray-300 hover:bg-gray-100 hover:rounded-md hover:text-white '>Target Audience</li></Link>
                <Link to='/Feedback'><li className='bg-gray-300 hover:bg-gray-100 hover:rounded-md hover:text-white '>Feedback</li></Link>
                </ul>
                <hr></hr>
    
            
            </div>
            </div>
            </>
    );
}
export default Header;