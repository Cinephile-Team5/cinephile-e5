import Logo from "../shared/Logo"
import styles from "./Footer.module.css"
function FooterWebMap() {
    return (
        <div  className={styles.footer}>
            <Logo />
            <p className="text-fluid-sm text-gray font-vietnam text-xs hidden md:block">
                @2024 CINEPHILE. PRECISION ENGINEERED STREAMING.</p>
            <div className={styles.footerWebMap}>
                <p>PRIVACY POLICY</p>
                <p>TERMS OF SERVICE</p>
                <p>HELP CENTER</p>
                <p>API</p>
             </div>
            <p className="text-fluid-sm text-gray font-vietnam text-xs md:hidden">
                @2024 CINEPHILE. PRECISION ENGINEERED STREAMING.
            </p>
        </div>
    )
}

export default FooterWebMap