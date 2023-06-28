import React, { useRef } from "react";
import { Navbar } from "react-bootstrap";
import classNames from "classnames";

function Header() {
    return (
        <Navbar
            className={classNames("navbar-glass fs--1 navbar-top sticky-kit")}
            expand={topNavbarBreakpoint}
        >
            <NavbarTopElements
                navbarCollapsed={navbarCollapsed}
                navbarPosition={navbarPosition}
                handleBurgerMenu={handleBurgerMenu}
                burgerMenuRef={burgerMenuRef}
            />
        </Navbar>
    );
}

const NavbarTopElements = ({
    navbarPosition,
    handleBurgerMenu,
    navbarCollapsed
}) => {
    const burgerMenuRef = useRef();
    return (
        <>
            <Navbar.Toggle
                ref={burgerMenuRef}
                className={classNames("toggle-icon-wrapper me-md-3 me-2", {
                    "d-lg-none":
                        navbarPosition === "top" ||
                        navbarPosition === "double-top",
                    [`d-${navbarBreakPoint}-none`]:
                        navbarPosition === "vertical" ||
                        navbarPosition === "combo"
                })}
                as="div"
            >
                <button
                    className="navbar-toggler-humburger-icon btn btn-link d-flex flex-center"
                    onClick={handleBurgerMenu}
                    id="burgerMenu"
                >
                    <span className="navbar-toggle-icon">
                        <span className="toggle-line" />
                    </span>
                </button>
            </Navbar.Toggle>

            <Logo at="navbar-top" width={40} id="topLogo" />

            {navbarPosition === "top" || navbarPosition === "combo" ? (
                <Navbar.Collapse
                    in={navbarCollapsed}
                    className="scrollbar pb-3 pb-lg-0"
                >
                    <Nav navbar>
                        <NavbarTopDropDownMenus />
                    </Nav>
                </Navbar.Collapse>
            ) : (
                <Nav
                    navbar
                    className={`align-items-center d-none d-${topNavbarBreakpoint}-block`}
                    as="ul"
                >
                    <Nav.Item as="li">
                        <SearchBox autoCompleteItem={autoCompleteInitialItem} />
                    </Nav.Item>
                </Nav>
            )}
            <TopNavRightSideNavItem />
        </>
    );
};

export default Header;
