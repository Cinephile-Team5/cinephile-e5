import styles from './Header.module.css'
import Logo from "../shared/Logo"
import NavBar from "../navigationBar/NavBar"

function HeaderDesktop() {
    return (
        <div className={styles.headerDesktop}>
            <Logo />
            <NavBar />
            <div className='hidden md:flex md:flex-row md:py-2 gap-2'>
                <button className="text-gray font-logo-spline no-underline hover:bg-cyan-300 hover:text-bg-blue px-4 rounded-lg transition whitespace-nowrap">
                    Sign in
                </button>
                <button className="border-2 border-cyan-300 bg-cyan-300 text-bg-blue px-4 rounded-lg transition py-1 font-bold whitespace-nowrap">
                    Get Access
                </button>

            </div>
        </div>
    )
}

export default HeaderDesktop