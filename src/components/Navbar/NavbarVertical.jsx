import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Nav, Navbar, Row, Col } from "react-bootstrap";
import { navbarBreakPoint } from "../../config";
import Flex from "../Common/Flex";
import Logo from "../Common/Logo";
import NavbarVerticalMenu from "./NavbarVerticalMenu";
import ToggleButton from "./ToggleButton";
import routes from "../../routes/siteMaps";
import { capitalize } from "../../helpers/utils";
import { useSelector } from "react-redux";
import { selectNavigation } from "../../utils/store/selectors";

const NavbarVertical = () => {
    const navigation = useSelector(selectNavigation);

    const HTMLClassList = document.getElementsByTagName("html")[0].classList;

    useEffect(() => {
        if (navigation.isNavbarVerticalCollapsed) {
            HTMLClassList.add("navbar-vertical-collapsed");
        } else {
            HTMLClassList.remove("navbar-vertical-collapsed");
        }
        return () => {
            HTMLClassList.remove("navbar-vertical-collapsed-hover");
        };
    }, [navigation.isNavbarVerticalCollapsed, HTMLClassList]);

    //Control mouseEnter event
    let time = null;
    const handleMouseEnter = () => {
        if (navigation.isNavbarVerticalCollapsed) {
            time = setTimeout(() => {
                HTMLClassList.add("navbar-vertical-collapsed-hover");
            }, 100);
        }
    };
    const handleMouseLeave = () => {
        clearTimeout(time);
        HTMLClassList.remove("navbar-vertical-collapsed-hover");
    };

    const NavbarLabel = ({ label }) => (
        <Nav.Item as="li">
            <Row className="mt-3 mb-2 navbar-vertical-label-wrapper">
                <Col
                    xs="auto"
                    className="navbar-vertical-label navbar-vertical-label"
                >
                    {label}
                </Col>
                <Col className="ps-0">
                    <hr className="mb-0 navbar-vertical-divider"></hr>
                </Col>
            </Row>
        </Nav.Item>
    );

    return (
        <Navbar
            expand={navbarBreakPoint}
            className={classNames("navbar-vertical")}
            variant="light"
        >
            <Flex alignItems="center">
                <ToggleButton />
                <Logo at="navbar-vertical" width={40} />
            </Flex>
            <Navbar.Collapse
                in={navigation.showBurgerMenu}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                    backgroundImage: "none"
                }}
            >
                <div className="navbar-vertical-content scrollbar">
                    <Nav className="flex-column" as="ul">
                        {routes.map(route => (
                            <Fragment key={route.label}>
                                {!route.labelDisable && (
                                    <NavbarLabel
                                        label={capitalize(route.label)}
                                    />
                                )}
                                <NavbarVerticalMenu routes={route.children} />
                            </Fragment>
                        ))}
                    </Nav>
                </div>
            </Navbar.Collapse>
        </Navbar>
    );
};

NavbarVertical.propTypes = {
    label: PropTypes.string
};

export default NavbarVertical;
