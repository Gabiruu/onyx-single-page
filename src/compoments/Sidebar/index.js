import React from 'react'

import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute
} from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <>
            <SidebarContainer isOpen={isOpen} onClick={toggle}>
                <Icon onClick={toggle}>
                    <CloseIcon />
                </Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink
                            to='about'
                            onClick={toggle}
                            smooth={true}
                            duration={500}
                            spy={true}
                            osffset={-120}
                            exact='true'
                        >About
                        </SidebarLink>
                        <SidebarLink to='discover'
                            onClick={toggle}
                            smooth={true}
                            duration={500}
                            spy={true}
                            osffset={-120}
                            exact='true'>
                            Discover
                        </SidebarLink>
                        <SidebarLink to='services'
                            onClick={toggle}
                            smooth={true}
                            duration={500}
                            spy={true}
                            osffset={320}
                            exact='true'>
                            Services
                        </SidebarLink>
                        <SidebarLink to='signup'
                            onClick={toggle}
                            smooth={true}
                            duration={500}
                            spy={true}
                            osffset={-120}
                            exact='true'>
                            Sign Up
                        </SidebarLink>
                    </SidebarMenu>
                    <SideBtnWrap>
                        <SidebarRoute to='signin'>
                            Sign In
                        </SidebarRoute>
                    </SideBtnWrap>
                </SidebarWrapper>
            </SidebarContainer>
        </>
    )
}

export default Sidebar
