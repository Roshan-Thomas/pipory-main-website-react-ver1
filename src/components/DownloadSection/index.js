import React, {useState} from 'react'
import {Button} from '../ButtonElement'
import { IoLogoGooglePlaystore, IoLogoApple } from 'react-icons/io5'
import logo from '../../images/gatsby-icon.png'
import {
    DownloadContainer,
    LogoWrap,
    Logo,
    DownloadWrapper,
    DownloadH2,
    DownloadLinksWrapper,
} from './DownloadElements'

const Download = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <>
            <DownloadContainer>
                <DownloadWrapper>
                    <LogoWrap>
                        <Logo src={logo} alt="pipory logo" />
                    </LogoWrap>
                    <DownloadH2>Available Now</DownloadH2>
                    <DownloadLinksWrapper>
                        <Button
                            to="/download"
                            onMouseEnter={onHover}
                            onMouseLeave={onHover}
                            primary="true"
                            fontBig="true"
                        >
                           <IoLogoApple /> Download on Appstore
                        </Button>
                        <Button
                            to="/download"
                            onMouseEnter={onHover}
                            onMouseLeave={onHover}
                            primary="true"
                            moveLeft="true"
                            fontBig="true"
                        >
                            <IoLogoGooglePlaystore />Download on Playstore 
                        </Button>
                    </DownloadLinksWrapper>
                </DownloadWrapper>
            </DownloadContainer>
        </>
    )
}

export default Download
