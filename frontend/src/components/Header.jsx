import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'

const Header = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation()
    const { user } = useSelector((state) => state.auth)

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')
    }

    return (
        <>
            {(user || location.pathname === "/login" || location.pathname === "/register" ) &&
                <header className='header'>
                    <div>
                        <ul className='left'>
                            <li className='logo'>
                                <Link to={`/${user ? user.username : ''}`}>LinkTree</Link>
                            </li>
                            {user &&
                                <li>
                                    <Link to='/admin'>Dashboard</Link>
                                </li>
                            }
                        </ul>
                    </div>
                    <ul className='right'>
                        {user ? 
                        (
                            <li>
                                <button className='btn' onClick={onLogout}>
                                    <FaSignOutAlt/> Logout
                                </button>
                            </li>
                        ) 
                        : (
                            <>
                                <li>
                                    <Link to='/login'>
                                        <FaSignInAlt /> Login
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/register'>
                                        <FaUser /> Register
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                </header>
            }
        </>
    )
}

export default Header