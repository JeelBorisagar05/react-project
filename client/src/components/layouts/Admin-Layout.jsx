import { NavLink, Outlet } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { MdOutlineContactPhone } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { RiServiceLine } from "react-icons/ri";


export const AdminLayout=()=>{
    return(
    <>
        <header>
        <div className="container">
            <nav>
                <ul>
                    <li><NavLink to="/admin/users"> <FaUserAlt />
                    users </NavLink></li>
                    <li><NavLink to="/admin/contacts"> <MdOutlineContactPhone />
                    contacts </NavLink></li>
                    <li><NavLink to="/admin/contacts"> <RiServiceLine />
                    services </NavLink></li>
                    <li><NavLink to="/admin/contacts"> <FaHome />
                    home </NavLink></li>
                </ul>
            </nav>
        </div>
        </header>
        <Outlet />
    </>
    );
};