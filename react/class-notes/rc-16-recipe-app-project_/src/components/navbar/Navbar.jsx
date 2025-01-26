import React, { useState } from 'react'
import { Hamburger, Logo, Menu, MenuLink, Nav } from "./NavbarStyles";
import logo from "../../assets/lezzet.png"
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <Nav>
      <Logo to="/">


        <img src={logo} width={60} alt="" />
      </Logo>
      <span>recipe</span>
      <Hamburger>
        <RxHamburgerMenu />
      </Hamburger>
      <Menu>
        <MenuLink to="/about">About</MenuLink>
        <a href='www.github.com'>Github</a>
        <MenuLink to="/">Logout</MenuLink>
      </Menu>
    </Nav>
  )
}

export default Navbar