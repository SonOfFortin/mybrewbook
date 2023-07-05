import classNames from "classnames";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { Collapse, Nav } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import NavbarVerticalMenuItem from "./NavbarVerticalMenuItem";
import { useDispatch, useSelector } from "react-redux";
import { selectNavigation } from "../../utils/store/selectors";
import * as navActions from "../../utils/store/nav";

const CollapseItems = ({ route }) => {
    const { pathname } = useLocation();

    const openCollapse = childrens => {
        const checkLink = children => {
            if (children.to === pathname) {
                return true;
            }
            return (
                Object.prototype.hasOwnProperty.call(children, "children") &&
                children.children.some(checkLink)
            );
        };
        return childrens.some(checkLink);
    };

    const [open, setOpen] = useState(openCollapse(route.children));

    return (
        <Nav.Item as="li">
            <Nav.Link
                onClick={() => {
                    setOpen(!open);
                }}
                className={classNames("dropdown-indicator cursor-pointer", {
                    "text-500": !route.active
                })}
                aria-expanded={open}
                // {...route}
            >
                <NavbarVerticalMenuItem route={route} />
            </Nav.Link>
            <Collapse in={open}>
                <Nav className="flex-column nav" as="ul">
                    <NavbarVerticalMenu routes={route.children} />
                </Nav>
            </Collapse>
        </Nav.Item>
    );
};

CollapseItems.propTypes = {
    route: PropTypes.shape({
        name: PropTypes.string.isRequired,
        icon: PropTypes.string,
        children: PropTypes.array.isRequired,
        active: PropTypes.bool
    }).isRequired
};

const NavbarVerticalMenu = ({ routes }) => {
    const navigation = useSelector(selectNavigation);
    const dispatch = useDispatch();

    const handleNavItemClick = () => {
        if (navigation.showBurgerMenu) {
            dispatch(navActions.toggleBurgerMenu());
        }
    };
    return routes.map(route => {
        if (!route.children) {
            return (
                <Nav.Item as="li" key={route.name} onClick={handleNavItemClick}>
                    <NavLink
                        end={route.exact}
                        to={route.to}
                        state={{ open: route.to === "/authentication-modal" }}
                        className={({ isActive }) =>
                            isActive && route.to !== "#!"
                                ? "active nav-link"
                                : "nav-link"
                        }
                    >
                        <NavbarVerticalMenuItem route={route} />
                    </NavLink>
                </Nav.Item>
            );
        }
        return <CollapseItems route={route} key={route.name} />;
    });
};

NavbarVerticalMenu.propTypes = {
    routes: PropTypes.arrayOf(PropTypes.shape(NavbarVerticalMenuItem.propTypes))
        .isRequired
};

export default NavbarVerticalMenu;
