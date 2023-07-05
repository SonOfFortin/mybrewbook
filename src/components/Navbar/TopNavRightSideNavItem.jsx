import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Nav, OverlayTrigger, Tooltip } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme } from "../../utils/store/selectors";
import * as themeActions from "../../utils/store/theme";
import NotificationDropdown from "./NotificationDropdown";
import ProfileDropdown from "./ProfileDropdown";

const TopNavRightSideNavItem = () => {
    const theme = useSelector(selectTheme);
    const dispatch = useDispatch();

    return (
        <Nav
            navbar
            className="navbar-nav-icons ms-auto flex-row align-items-center"
            as="ul"
        >
            <Nav.Item as={"li"}>
                <Nav.Link
                    className="px-2 theme-control-toggle"
                    onClick={() => dispatch(themeActions.toggle())}
                >
                    <OverlayTrigger
                        key="left"
                        placement={"left"}
                        overlay={
                            <Tooltip
                                style={{ position: "fixed" }}
                                id="ThemeColor"
                            >
                                {theme
                                    ? "Switch to light theme"
                                    : "Switch to dark theme"}
                            </Tooltip>
                        }
                    >
                        <div className="theme-control-toggle-label">
                            <FontAwesomeIcon
                                icon={theme ? "sun" : "moon"}
                                className="fs-0"
                            />
                        </div>
                    </OverlayTrigger>
                </Nav.Link>
            </Nav.Item>

            <NotificationDropdown />
            <ProfileDropdown />
        </Nav>
    );
};

export default TopNavRightSideNavItem;
