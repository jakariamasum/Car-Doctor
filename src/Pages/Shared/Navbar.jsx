import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
const Navbar = () => {
    const { user,logOut } = useContext(AuthContext);
    const handleLogOut=()=>{
        logOut()
        .then(res=>{
            console.log(res.user)
            Swal.fire({
                position: 'text-center',
                icon: 'success',
                title: 'Logout Successful',
                showConfirmButton: false,
                timer: 1500
              })
        })
        .catch({})
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">

                {/* <Link className="btn btn-ghost normal-case text-xl">daisyUI</Link> */}
                <img src={logo} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link>Home</Link></li>
                    <li><Link>About</Link></li>
                    <li><Link>Blog</Link></li>
                    <li><Link>Contact</Link></li>
                    {
                        user? <>
                        <li><Link to='/orders'>My Orders</Link></li>
                        <li><Link to='/' onClick={handleLogOut}>LogOut</Link></li>
                        </>:
                        <li><Link to='/login'>Login</Link></li>
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <Link className="btn btn-outline btn-warning">Appoiment</Link>
            </div>
        </div>
    );
};

export default Navbar;