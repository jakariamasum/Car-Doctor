import { Link } from 'react-router-dom';
import logo from '../../assets/images/login/login.svg'
import { FaFacebookSquare, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { AuthContext } from '../../Provider/AuthProvider';
import { useContext } from 'react';
import Swal from 'sweetalert2';

const Login = () => {
    const {user,signIn}=useContext(AuthContext)
    console.log(user)

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email,password)
        .then(res=>{
            const loggedIn=res.user; 
            console.log(loggedIn); 
            Swal.fire({
                position: 'text-center',
                icon: 'success',
                title: 'Login Successful',
                showConfirmButton: false,
                timer: 1500
              })
              form.reset()
        })
        .catch(error=>console.log(error.message))
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src={logo} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border border-[#D0D0D0]">
                    <div className="card-body p-16" >
                        <h1 className="font-bold text-4xl text-center">Login</h1>
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Login"  className='btn btn-primary bg-[#FF3811] border-none'/>
                            </div>
                        </form>
                        <div className='text-center'>
                            <p className='font-semibold my-7'>Or Sign In With</p>
                            <div className='flex gap-2 justify-center'>
                                <FaFacebookSquare className='text-blue-500 ' />
                                <FaLinkedinIn className='text-blue-500 ' />
                                <FaGoogle className='text-[#0F9D58] ' />
                            </div>
                            <p className="text-center mt-2">Have an account? <Link to='/register'><span className='link text-[#FF3811]'>Sign In</span></Link> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;