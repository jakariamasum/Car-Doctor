import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg'
const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-[#151515] text-white">
                <div className='w-[350px]'>
                    <img src={logo} className='text-white'/>
                    <p>Edwin Diaz is a software and web technologies engineer, a life coach trainer who is also a serial .</p>
                </div>
                <div>
                    <span className="footer-title font-bold">About</span>
                    <Link className="link link-hover">Home</Link>
                    <Link className="link link-hover">Service</Link>
                    <Link className="link link-hover">Contact</Link>
                </div>
                <div>
                    <span className="footer-title font-bold">Company</span>
                    <Link className="link link-hover">Why car hospital</Link>
                    <Link className="link link-hover">About</Link>
                </div>
                <div>
                    <span className="footer-title font-bold">Support</span>
                    <Link className="link link-hover">Support Center</Link>
                    <Link className="link link-hover">Feedback</Link>
                    <Link className="link link-hover">Accesbility</Link>
                </div>
            </footer>
        </div>
    );
};

export default Footer;