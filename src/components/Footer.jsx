import React from 'react'

function Footer() {
  return (
    <footer className="bg-[#0D0B1F]">
        <div className='footer-main-content'>
            <p className='footer-logo'>CINEPHILE</p>
            <p className='footer-copyright'>© 2024 CINEPHILE. PRECISION ENGINEERED STREAMING.</p>
        </div>

        <div className='footer-links'>
            <a href="#">PRIVACY POLICY</a>
            <a href="#">TERMS OF SERVICE</a>
            <a href="#">HELP CENTER</a>
            <a href="#">API</a>
        </div>

        <div className='footer-social'>
            <a href="#"><svg className="lenguages-icon"><use href="./assets/globe.svg"></use></svg></a>
            <a href="#"><svg className="share-icon"><use href="./assets/share.svg"></use></svg></a>
        </div>
    </footer>
  )
}

export default Footer