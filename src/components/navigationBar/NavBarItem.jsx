import { NavLink } from 'react-router-dom'

function NavBarItem({ to, children }) {
    return (
        <>
            <NavLink to={to} className={({ isActive }) =>
                isActive
                    ? "text-logo-cyan font-logo-spline border-b-2 border-cyan no-underline"
                    : "text-gray font-logo-spline no-underline"
            }
            >{children}
            </NavLink>

        </>
    )
}

export default NavBarItem