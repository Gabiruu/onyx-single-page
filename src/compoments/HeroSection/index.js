import React, { useState } from 'react'
import { Button } from '../ButtonElement'
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from './HeroElements'
import Video from '../../videos/video.mp4'

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <>
            <HeroContainer id='home'>
                <HeroBg>
                    <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
                </HeroBg>
                <HeroContent>
                    <HeroH1>Segurança e rapidez na entrega</HeroH1>
                    <HeroP>
                        Trabalhamos com protocolos avançados de segurança desde o envio até a entrega da sua jóia.
                    </HeroP>
                    <HeroBtnWrapper>
                        <Button to="signup"
                            onMouseEnter={onHover}
                            onMouseLeave={onHover}
                            primary='true'
                            dark='true'
                            smooth={true}
                            duration={500}
                            spy={true}
                            osffset={-80}
                            exact='true'
                        >
                            Conheça nosso sistema {hover ? <ArrowForward /> : <ArrowRight />}
                        </Button>
                    </HeroBtnWrapper>
                </HeroContent>
            </HeroContainer>
        </>
    )
}

export default HeroSection
