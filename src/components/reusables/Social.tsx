import React, { FC } from 'react'

interface SocialProps {
    link: string
    icon: any
}

const Social: FC<SocialProps> = ({ link, icon }) => {
    return (
        <div>
            {/* <FaTwitter size={40} color=" #e84ca6"/>
            <FaLinkedin size={40}/>
            <HiMail size={40}/> */}
            <a href={link} target="_blank" rel="noreferrer" style={{color: "#e84ca6"}}>{icon}</a>
        </div>
    )
}

export default Social
