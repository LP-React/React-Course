import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context';

export const Navbar = () => {

    const navigate = useNavigate();
    const { user, logout } = useContext(AuthContext)

    const onLogout = () => {

        logout();

        navigate('/Login', {
            replace: true
        })
    }


    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-3">

            <Link
                className="navbar-brand"
                to="/"
            >
                Mangas
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/Oyasumi-PunPun"
                    >
                        Oyasumi Punpun
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/Dead-Demon-De-De-De-Destruction"
                    >
                        Dead Demon De-De-De-Destruction
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/Evangelion"
                    >
                        Evangelion
                    </NavLink>

                    <NavLink
                        className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to="/Search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">

                    <span className='nav-item nav-link text-info'>
                        { user?.name }
                    </span>

                    <button className='nav-item nav-link btn' onClick={onLogout}>
                        Logout
                    </button>

                </ul>
            </div>
        </nav>
    )
}