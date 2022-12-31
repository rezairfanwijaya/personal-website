// * import assets
import { Link } from 'react-router-dom';
import logo from '../assets/image/logo.png'

const NavbarProject = () => {
    return (<>
        <div className="navbar-project bg-dark-primary flex justify-between py-5">
            <div className="logo">
                <Link to={"/"}>
                    <img
                        className="block h-8 w-auto"
                        src={logo}
                        alt="logo"
                    />
                </Link>
            </div>
            <div className="hire">
                <a href="mailto: rezairfanwijaya23@gmail.com" className='hover:no-underline flex justify-between gap-1 items-center bg-primary px-4 py-2 rounded-sm hover:bg-primary-hover' target={'blank'}>
                    <div className="placeholder text-white text-sm font-semibold">
                        Hire Me
                    </div>
                </a>
            </div>
        </div>
    </>);
}

export default NavbarProject;