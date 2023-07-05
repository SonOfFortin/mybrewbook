import React from "react";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import { useDispatch } from "react-redux";
import * as navActions from "../../utils/store/nav";

const renderTooltip = props => (
    <Tooltip style={{ position: "fixed" }} id="button-tooltip" {...props}>
        Toggle Navigation
    </Tooltip>
);

const ToggleButton = () => {
    const dispatch = useDispatch();

    const handleClick = () => {
        document
            .getElementsByTagName("html")[0]
            .classList.toggle("navbar-vertical-collapsed");

        dispatch(navActions.toggleNavbarVertical);
    };

    return (
        <OverlayTrigger placement={"left"} overlay={renderTooltip}>
            <div className="toggle-icon-wrapper">
                <Button
                    variant="link"
                    className="navbar-toggler-humburger-icon navbar-vertical-toggle"
                    id="toggleNavigationTooltip"
                    onClick={handleClick}
                >
                    <span className="navbar-toggle-icon">
                        <span className="toggle-line" />
                    </span>
                </Button>
            </div>
        </OverlayTrigger>
    );
};

export default ToggleButton;
