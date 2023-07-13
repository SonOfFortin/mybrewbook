import { useState } from "react";
import PropTypes from "prop-types";
import { Row, Col, Card, Form, FloatingLabel } from "react-bootstrap";
import Flex from "../Common/Flex";
import bImg from "../../assets/img/illustrations/beer_glass.png";
import { InfoStyle as DataInfoStyle } from "../../data/Receipts/InfoStyle";

const Info = ({ Name, Autor, StyleId, Image }) => {
    const [name, setName] = useState(Name);
    const [autor, setAutor] = useState(Autor);
    const [styleId, setStyleId] = useState(StyleId);

    return (
        <Card className="h-md-100 w-md-100">
            <Card.Body as={Flex}>
                <Form className="w-100">
                    <Row className="g-2 align-items-center">
                        <Col xs="4">
                            <Flex justifyContent="center" className="mt-3">
                                <img
                                    src={Image}
                                    aria-hidden
                                    alt="Image de la recette"
                                    loading="lazy"
                                    width="126"
                                    height="126"
                                    className="rounded"
                                />
                            </Flex>
                            <Flex justifyContent="center" className="mt-3">
                                <button
                                    type="submit"
                                    className="btn btn-primary btn-sm"
                                >
                                    Changer l&#39;image
                                </button>
                            </Flex>
                        </Col>
                        <Col xs="8">
                            <Form.Group controlId="InfoName" className="mb-3">
                                <FloatingLabel label="Nom">
                                    <Form.Control
                                        type="text"
                                        placeholder="Nom de la recette"
                                        value={name}
                                        onChange={e => {
                                            console.log(
                                                "e.target.value",
                                                e.target.value
                                            );
                                            setName(e.target.value);
                                        }}
                                    />
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group controlId="InfoAutor" className="mb-3">
                                <FloatingLabel label="Auteur">
                                    <Form.Control
                                        type="text"
                                        value={autor}
                                        placeholder="Nom de l'auteur"
                                        onChange={e => {
                                            console.log(
                                                "e.target.value",
                                                e.target.value
                                            );
                                            setAutor(e.target.value);
                                        }}
                                    />
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group controlId="Style">
                                <FloatingLabel label="Style">
                                    <Form.Select
                                        value={styleId}
                                        key={"cbo_style"}
                                        onChange={e => {
                                            console.log(
                                                "e.target.value",
                                                e.target.value
                                            );
                                            setStyleId(e.target.value);
                                        }}
                                    >
                                        {DataInfoStyle.map(e => (
                                            <option key={e.Id} value={e.Id}>
                                                {e.NomFR}
                                            </option>
                                        ))}
                                    </Form.Select>
                                </FloatingLabel>
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </Card.Body>
        </Card>
    );
};

Info.propTypes = {
    Name: PropTypes.string.isRequired,
    Autor: PropTypes.string.isRequired,
    StyleId: PropTypes.number.isRequired,
    Image: PropTypes.string.isRequired
};

Info.defaultProps = {
    Name: "",
    Autor: "",
    StyleId: 0,
    Image: bImg
};

export default Info;
