import { Link } from "react-router-dom"
import { MdScreenSearchDesktop } from "react-icons/md";

function Header(){
    return(
        <>
        <div className="flex justify-between items-center p-4">
            <div className="flex gap-1 font-bold text-4xl ml-50 mt-2 text-[#023e8a]">
            <h1><MdScreenSearchDesktop /></h1>
            <h1>JobHub</h1>
            </div>

            <ul className="flex gap-10 text-xl mr-100">
                <li className="text-[#023e8a] hover:text-purple-600 transition-colors duration-300"><Link to="/">Find jobs</Link></li>
                <li className="text-[#023e8a] hover:text-purple-600 transition-colors duration-300"><Link to="/Companies">Companies</Link></li>
                <li className="text-[#023e8a] hover:text-purple-600 transition-colors duration-300"><Link to="/AboutUs">About Us</Link></li>
                <li className="text-[#023e8a] hover:text-purple-600 transition-colors duration-300"><Link to="/Contact">Contact</Link></li>
            </ul>
        </div>
        
        </>
    )
}
export default Header