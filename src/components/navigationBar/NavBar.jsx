import styles from "./NavBar.module.css"
import NavBarItem from "./NavBarItem";

function NavBar() {
    return (
        <nav className={styles.navBar}>
            <NavBarItem to={"/"}>{"Movies"}</NavBarItem>
            <NavBarItem to={"/pricing"}>{"Pricing"}</NavBarItem>
            <NavBarItem to={"/contact"}>{"Contact"}</NavBarItem>
        </nav>
    )
}

export default NavBar;