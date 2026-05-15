import { Link } from 'react-router'

function Logo() {
    return (
        <>
            <Link to="/" className="no-underline">
                <span className="font-logo-spline font-bold text-logo-cyan">CINEPHILE</span>
            </Link>
        </>
    )
}

export default Logo