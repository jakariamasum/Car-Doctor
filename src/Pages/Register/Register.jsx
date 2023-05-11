import { Link } from 'react-router-dom';
import logo from '../../assets/images/login/login.svg'
import { FaFacebookSquare,FaGoogle,FaLinkedinIn } from "react-icons/fa";

const Register = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src={logo} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border border-[#D0D0D0]">
                    <div className="card-body p-16">
                        <h1 className="font-bold text-4xl text-center">Sign Up</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Confirm Password</span>
                            </label>
                            <input type="text" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary bg-[#FF3811] border-none">Sign Up</button>
                        </div>
                        <div className='text-center'>
                            <p className='font-semibold my-7'>Or Sign Up With</p>
                            <div className='flex gap-2 justify-center'>
                                <FaFacebookSquare className='text-blue-500 ' />
                                <FaLinkedinIn className='text-blue-500 ' />
                                <FaGoogle className='text-[#0F9D58] ' />
                            </div>
                            <p className="text-center mt-2">Already have an account? <Link to='/login'><span className='link text-[#FF3811]'>Login</span></Link> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;