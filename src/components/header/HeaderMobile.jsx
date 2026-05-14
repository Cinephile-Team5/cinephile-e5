import styles from './Header.module.css'
import Logo  from '../shared/Logo'

function HeaderMobile() {
    return (
        <div className={styles.headerMobile}>
            <Logo />
        </div>
    )
}

export default HeaderMobile