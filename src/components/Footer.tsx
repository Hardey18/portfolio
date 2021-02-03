import React from 'react'

function Footer() {
    const currentDate = new Date().getUTCFullYear()
    return (
        <div className="footer">
            <p>© {currentDate} Nurudeen Adewale</p>
        </div>
    )
}

export default Footer
