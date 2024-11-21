import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import image from '../../assets/placeholder.jpg'
import HostModal from "../Modal/HostRequestModal";
import { useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";



const Navbar = () => {

    const { user, logout, setLoading } = useAuth();
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const axiosSecure = useAxiosSecure();

    const closeModal = () =>{
        setIsOpen(false)
    }

    const handleLogout = async () => {
        try {
            setLoading(true)
            // user logout
            await logout();
            navigate('/')
        } catch (err) {
            console.log(err);
        }
    }

    const handleModal = async () =>{
        console.log('i am in req to host');
        const currentUser = {
            email: user.email,
            role: 'seller',
            status: 'Requested'
        }
        try{
            const {data} = await axiosSecure.put('/users', currentUser)
            console.log(data);
            if(data.modifiedCount > 0){
                toast.success('Success! Please wait for admin confirmation')
            }else{
                toast.success('Success! Please wait for admin approval')
            }
        }catch(err){
            console.log(err);
            toast.error(err.message)
        }finally{
            closeModal();
        }
        
    }



    const navLinks = <>
        <div className="sm:flex md:gap-3 items-center justify-center">

            <li><NavLink to='/' className={({ isActive }) => isActive ? 'text-green-600 border p-2 rounded-md border-green-600 font-mono' : 'font-normal'}>Home</NavLink></li>
            <li><NavLink to='/products' className={({ isActive }) => isActive ? 'text-green-600 border p-2 rounded-md border-green-600 font-mono' : 'font-normal'}>Products</NavLink></li>
            <li><NavLink to='/about' className={({ isActive }) => isActive ? 'text-green-600 border p-2 rounded-md border-green-600 font-mono' : 'font-normal'}>About</NavLink></li>
            <li><NavLink to='/contact' className={({ isActive }) => isActive ? 'text-green-600 border p-2 rounded-md border-green-600 font-mono' : 'font-normal'}>Contact</NavLink></li>


        </div>
    </>

    return (
        <div className="navbar bg-base-200 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navLinks}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost text-xl font-mono bg-green-400 hover:bg-green-500 text-white">ShopNestQuest</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <div className='hidden md:block'>
                    {/* {!user && ( */}
                    <button
                        onClick={() => setIsOpen(true)}
                        // disabled={!user}
                        className='disabled:cursor-not-allowed cursor-pointer hover:bg-neutral-300 py-3 px-4 text-sm font-semibold rounded-full flex transition gap-4'
                    >
                        Host your home
                    </button>
                    {/* )} */}
                </div>
                {/* modal */}

                <HostModal isOpen={isOpen} closeModal={closeModal} handleModal={handleModal}></HostModal>

                {user ? <div className="dropdown dropdown-bottom dropdown-end">
                    <div tabIndex={0} role="button" className="rounded-full">
                        <div className="w-10 rounded-full" title={user?.displayName || 'No Name'}>
                            <img className="rounded-full" referrerPolicy="no-referrer" src={`${user?.photoURL || image}`} />
                        </div>
                    </div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li className="my-3"><Link to='/dashboard'>Dashboard</Link></li>
                        <li><button onClick={handleLogout} className="btn bg-green-500 text-white hover:bg-green-400">Logout</button></li>
                    </ul>
                </div> : <div className="navbar-end flex gap-4">
                    <Link to='/login' className="btn btn-outline hover:bg-green-500 border-green-500 hover:border-green-500">Login</Link>
                    <Link to='/register' className="btn bg-green-500 hover:bg-green-400 text-white">Register</Link>
                </div>}

            </div>
        </div>
    );
};

export default Navbar;