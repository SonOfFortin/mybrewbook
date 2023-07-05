import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { Navbar, Nav } from "react-bootstrap";
import classNames from "classnames";
import { navbarBreakPoint, topNavbarBreakpoint } from "../../config";
import { useDispatch, useSelector } from "react-redux";
import { selectNavigation } from "../../utils/store/selectors";
import * as navActions from "../../utils/store/nav";
import Logo from "../Common/Logo";

import NavbarTopDropDownMenus from "./NavbarTopDropDownMenus";
import TopNavRightSideNavItem from "./TopNavRightSideNavItem";

const NavbarTop = () => {
    const [showDropShadow, setShowDropShadow] = useState(false);
    const navigation = useSelector(selectNavigation);
    const dispatch = useDispatch();

    const handleBurgerMenu = () => {
        dispatch(navActions.toggleBurgerMenu());
    };

    const setDropShadow = () => {
        const el = document.documentElement;
        if (el.scrollTop > 0) {
            setShowDropShadow(true);
        } else {
            setShowDropShadow(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", setDropShadow);
        return () => window.removeEventListener("scroll", setDropShadow);
    }, []);

    const burgerMenuRef = useRef();

    return (
        <Navbar
            className={classNames("navbar-glass fs--1 navbar-top sticky-kit", {
                // 'navbar-glass-shadow': showDropShadow
                "navbar-glass-shadow": showDropShadow
            })}
            expand={true}
        >
            <NavbarTopElements
                navbarCollapsed={navbarCollapsed}
                handleBurgerMenu={handleBurgerMenu}
                burgerMenuRef={burgerMenuRef}
            />
        </Navbar>
    );
};

const NavbarTopElements = ({ handleBurgerMenu, navbarCollapsed }) => {
    const burgerMenuRef = useRef();
    return (
        <>
            <Navbar.Toggle
                ref={burgerMenuRef}
                className={classNames("toggle-icon-wrapper me-md-3 me-2", {
                    "d-lg-none": false,
                    [`d-${navbarBreakPoint}-none`]: true
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

            <Nav
                navbar
                className={`align-items-center d-none d-${topNavbarBreakpoint}-block`}
                as="ul"
            >
                <Nav.Item as="li"></Nav.Item>
            </Nav>
            <TopNavRightSideNavItem />
        </>
    );
};

NavbarTopElements.propTypes = {
    handleBurgerMenu: PropTypes.func,
    navbarCollapsed: PropTypes.bool
};
export default NavbarTop;
