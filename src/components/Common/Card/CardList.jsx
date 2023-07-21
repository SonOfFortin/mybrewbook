import React, { useState } from "react";
import { Card, Collapse, Row, Col } from "react-bootstrap";
import CardHeader from "./CardHeader";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Flex from "../Flex";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import bImg from "../../../assets/img/illustrations/beer_glass.png";

const CardList = ({ IsCollapse, Title, Data }) => {
    const [open, setOpen] = useState(!IsCollapse);

    return (
        <Card className={"cardList"}>
            <CardHeader
                title={Title + " (" + Data.length + ")"}
                endEl={
                    <Link
                        className="card-link fw-normal"
                        to="#!"
                        onClick={() => setOpen(!open)}
                    >
                        <FontAwesomeIcon
                            icon={open ? "chevron-up" : "chevron-down"}
                            className="fs--2"
                        />
                    </Link>
                }
            />

            <Collapse in={open}>
                <Card.Body className="cardList-body">
                    <Row className="g-3">
                        {Data.length > 0 &&
                            Data.map(e => {
                                return (
                                    <Col
                                        key={e.Id}
                                        xs={12}
                                        lg={4}
                                        className="cardList-body-col m-0"
                                    >
                                        <Link
                                            to={e.NavigateTo}
                                            className="cardList-body-col-link rounded-3"
                                        >
                                            <Flex
                                                alignContent="center"
                                                className="mb-2 mt-2"
                                            >
                                                <img
                                                    className="me-2 rounded-3"
                                                    src={
                                                        e.Img !== ""
                                                            ? e.Img
                                                            : bImg
                                                    }
                                                    width={50}
                                                    height={50}
                                                    alt=""
                                                />
                                                <div
                                                    className="mt-2"
                                                    style={{
                                                        overflow: "hidden"
                                                    }}
                                                >
                                                    <h2 className="fs-0 mb-0 text-truncate">
                                                        {e.Title}
                                                    </h2>
                                                    <h6 className="text-truncate">
                                                        {e.Describe}
                                                    </h6>
                                                </div>
                                            </Flex>
                                        </Link>
                                    </Col>
                                );
                            })}
                    </Row>
                </Card.Body>
            </Collapse>
        </Card>
    );
};

CardList.propTypes = {
    IsCollapse: PropTypes.bool.isRequired,
    Title: PropTypes.string.isRequired,
    Data: PropTypes.arrayOf(
        PropTypes.shape({
            NavigateTo: PropTypes.string.isRequired,
            Title: PropTypes.string.isRequired,
            Describe: PropTypes.string.isRequired,
            Img: PropTypes.string.isRequired
        })
    ).isRequired
};

CardList.defaultProps = { IsCollapse: true, Title: "", Data: [] };

export default CardList;
