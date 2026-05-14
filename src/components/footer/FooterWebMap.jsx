import Logo from "../shared/Logo"

function FooterWebMap() {
    return (
        <div className="flex flex-col flex-wrap justify-center text-center md:flex" >
            <Logo />
            <div className="flex flex-wrap justify-center text-center pw-4/5 mx-auto  gap-2 py-4 text-gray font-logo-spline  md:w-4/5">
                <p>PRIVACY POLICY</p>
                <p>TERMS OF SERVICE</p>
                <p>HELP CENTER</p>
                <p>API</p>
            </div>
            <p className="text-fluid-sm text-gray font-vietnam text-xs py-2">@2024 CINEPHILE. PRECISION ENGINEERED STREAMING.</p>
        </div>
    )
}

export default FooterWebMap