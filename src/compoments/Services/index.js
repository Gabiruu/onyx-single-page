import React from 'react'
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-3.svg'

import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements'
const Services = () => {
    return (
        <>
            <ServicesContainer id="services">
                <ServicesH1>Nossos Serviços</ServicesH1>
                <ServicesWrapper>

                    <ServicesCard>
                        <ServicesIcon src={Icon1} />
                        <ServicesH2>Transporte com garantia</ServicesH2>
                        <ServicesP>Suas jóias são tranpotadas com o mais alto nível de segurânça.</ServicesP>
                    </ServicesCard>

                    <ServicesCard>
                        <ServicesIcon src={Icon2} />
                        <ServicesH2>Acompanhe sempre</ServicesH2>
                        <ServicesP>Com o nosso App exclusivo você pode acompanhar cada processo</ServicesP>
                    </ServicesCard>

                    <ServicesCard>
                        <ServicesIcon src={Icon3} />
                        <ServicesH2>Serviço completo</ServicesH2>
                        <ServicesP>Oferecemos uma gama completa de serviços para sua jóia</ServicesP>
                    </ServicesCard>
                </ServicesWrapper>
            </ServicesContainer>
        </>
    )
}

export default Services
