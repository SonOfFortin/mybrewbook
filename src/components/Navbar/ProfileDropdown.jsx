import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import team3 from "../../assets/img/illustrations/avatar.png";
import Avatar from "../Common/Avatar";

const ProfileDropdown = () => {
    return (
        <Dropdown navbar={true} as="li">
            <Dropdown.Toggle
                bsPrefix="toggle"
                as={Link}
                to="#!"
                className="pe-0 ps-2 nav-link"
            >
                <Avatar src={team3} />
            </Dropdown.Toggle>

            <Dropdown.Menu className="dropdown-caret dropdown-menu-card  dropdown-menu-end">
                <div className="bg-white rounded-2 py-2 dark__bg-1000">
                    <Dropdown.Item as={Link} to="/user/profile">
                        <FontAwesomeIcon icon="user" className="me-1" />
                        <span>Profil</span>
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="/user/settings">
                        <FontAwesomeIcon icon="gear" className="me-1" />
                        <span>Configurations</span>
                    </Dropdown.Item>
                    <Dropdown.Divider />

                    <Dropdown.Item as={Link} to="/user/about">
                        <FontAwesomeIcon
                            icon={"circle-info"}
                            className="me-1"
                        />
                        <span>À propos</span>
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="/user/help">
                        <FontAwesomeIcon
                            icon={"question-circle"}
                            className="me-1"
                        />
                        <span>Aide</span>
                    </Dropdown.Item>
                    <Dropdown.Item as={Link} to="/user/support">
                        <FontAwesomeIcon icon="headset" className="me-1" />
                        <span>Support</span>
                    </Dropdown.Item>

                    <Dropdown.Divider />
                    <Dropdown.Item as={Link} to="/authentication/card/logout">
                        <FontAwesomeIcon
                            icon="right-to-bracket"
                            className="me-1"
                        />
                        <span>Se déconnecter</span>
                    </Dropdown.Item>
                </div>
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default ProfileDropdown;
