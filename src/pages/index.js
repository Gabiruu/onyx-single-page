import React, { useState } from 'react'
import Footer from '../compoments/Footer';
import HeroSection from '../compoments/HeroSection';
import InfoSection from '../compoments/InfoSection';
import { homeObjOne, homeObjTwo, homeObjThree } from '../compoments/InfoSection/Data';
import Navbar from '../compoments/Navbar'
import Services from '../compoments/Services';
import Sidebar from '../compoments/Sidebar'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <InfoSection {...homeObjThree} />
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <Services />
            <Footer />
        </>
    )
}

export default Home
