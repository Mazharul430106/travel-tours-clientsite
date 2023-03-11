import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import { FaCartArrowDown, FaUser } from 'react-icons/fa';

const Header = () => {
    const { user, logoutUser } = useContext(AuthContext);
    // console.log(user)

    const handleLogout = () => {
        logoutUser()
            .then(result => { })
            .catch(error => console.log(error))
    }

    const menuItems = <React.Fragment>
        <li><Link to='/'>Home</Link></li>
        <li tabIndex={0}>
            <Link className="justify-between">
                Pages
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
            </Link>
            <ul className="p-2 bg-slate-100 z-10">
                <li><Link to='/about'>About Us</Link></li>
                <li><Link to='/team'>Meet Our Team</Link></li>
                <li><Link to='/faq'>FAQ</Link></li>
                <li><Link to='/contact'>Contact Us</Link></li>
            </ul>
        </li>
        <li><Link to='/destinations'>Destination</Link></li>
        <li><Link to=''>Tours</Link>
            <ul className="p-2 bg-slate-100 z-10">
                <li><Link to='/standardTours'>Standard Tours</Link></li>
                <li><Link to='/boxesTours'>Boxes Tours</Link></li>
                <li><Link to='/toursGallery'>Tours Gallery</Link></li>
            </ul>
        </li>
        <li><Link to='/shop'>Shop</Link></li>

        {
            user?.uid ?
                <>
                    <li><Link onClick={handleLogout}>Logout</Link></li>
                </>
                :
                <>
                    <li><Link to='/register'>Register</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                </>
        }
        {
            user?.photoURL ? <li>
                <div className='tooltip tooltip-bottom' data-tip={user?.displayName}>
                    <img className='w-[30px] h-[30px] rounded-full' src={user.photoURL} alt="" />
                </div>
            </li>
                :
                <li><Link><FaUser></FaUser></Link></li>
        }

        <li><Link to=''><FaCartArrowDown></FaCartArrowDown></Link></li>
    </React.Fragment>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl">Travel Tours</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItems}
                </ul>
            </div>

        </div>
    );
};

export default Header;