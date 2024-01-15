import Image from "next/image";
import logo from "@/src/images/logo.png";
import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";

export const NavBar = () => {
    const [open, setOpen] = useState(false);

    const toggleOpen = () => setOpen(!open);

    return (
        <Navbar bg="light" expand="lg" className="flex justify-between items-center">
            <Navbar.Brand href="/">
                <Image src={logo} alt="Logo" className="logo" width={150} height={50}/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="flex space-x-5 text-white">
                    <Nav.Link href="/" className="text-white">HOME</Nav.Link>
                    <Nav.Link href="contact" className="text-white">ABOUT US</Nav.Link>
                    <Nav.Link href="menu" className="text-white">MENU</Nav.Link>
                    <Nav.Link href="catering" className="text-white">CATERING</Nav.Link>
                    <Nav.Link href="menuinperson" className="text-white">PHYSICAL MENU</Nav.Link>
                    <Nav.Link href="reservation" className="text-white">RESERVATIONS</Nav.Link>
                    </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}