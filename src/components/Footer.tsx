import React from 'react'

function Footer() {
    const currentYear = new Date().getUTCFullYear()
    return (
        <div className="footer">
            <p>© Nurudeen Adewale {currentYear}</p>
        </div>
    )
}

export default Footer
