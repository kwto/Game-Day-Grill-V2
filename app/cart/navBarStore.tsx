import React, {useState} from "react";
import {Dropdown, Nav, Navbar, NavDropdown} from "react-bootstrap";
import Image from "next/image";
import logo from "@/src/images/free-shopping.png";

export const NavBarStore = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [showMenuItems, setShowMenuItems] = useState(false);
    const [show, setShow] = useState(false);

    const handleSelect = () => {
        setDropdownOpen(!dropdownOpen);
    }

    const showDropdown = () => {
        setShow(true);
    }

    const hideDropdown = () => {
        setShow(false);
    }

    return (
        <Navbar bg="white" expand="lg" className="flex justify-between items-center">
            <Navbar.Brand href="/menu">
                <Image src={logo} alt="Logo" className="logo" width={150} height={50}/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav" className="ml-auto">
                <Nav className="flex space-x-5 text-white">
                    <Nav.Link href="/" className="text-white">Home</Nav.Link>
                    <Nav.Link href="contact" className="text-white">About</Nav.Link>
                    <Dropdown
                        onMouseOver={handleSelect}
                        show={dropdownOpen}
                        onMouseEnter={() => setShowMenuItems(true)}
                        onMouseLeave={() => setShowMenuItems(false)}
                    >
                        {!showMenuItems &&
                            <Dropdown.Toggle variant="success" id="dropdown-basic" onMouseEnter={showDropdown}
                                             onMouseLeave={hideDropdown}>
                                Menu
                            </Dropdown.Toggle>
                        }
                        {showMenuItems &&
                            <Dropdown.Menu>
                                <NavDropdown.Item eventKey="1" href="/menu">Menu </NavDropdown.Item>
                                <NavDropdown.Item eventKey="2" href="/physicalmenu">| Physical Menu </NavDropdown.Item>
                                <NavDropdown.Item eventKey="3" href="/cart">| Cart</NavDropdown.Item>
                            </Dropdown.Menu>
                        }
                    </Dropdown>
                    <Nav.Link href="catering" className="text-white">Catering</Nav.Link>
                    <Nav.Link href="reservation" className="text-white">Reservation</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}