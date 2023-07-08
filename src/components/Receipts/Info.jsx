import { Row, Col, Card, Form, FloatingLabel } from "react-bootstrap";
import Flex from "../Common/Flex";
import bImg from "../../assets/img/illustrations/beer_glass.png";

const Info = () => {
    return (
        <Card className="h-md-100 w-md-100">
            <Card.Body as={Flex} alignItems="self" justifyContent="center">
                <Form className="w-100">
                    <Row className="g-2 align-items-center">
                        <Col xs="4">
                            <Flex justifyContent="center" className="mt-3">
                                <img
                                    src={bImg}
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
                                    class="btn btn-primary btn-sm"
                                >
                                    Changer l&#39;image
                                </button>
                            </Flex>
                        </Col>
                        <Col xs="8">
                            <Form.Group controlId="InfoName" className="mb-3">
                                <FloatingLabel label="Nom">
                                    <Form.Control placeholder="Nom de la recette" />
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group controlId="InfoAutor" className="mb-3">
                                <FloatingLabel label="Auteur">
                                    <Form.Control placeholder="Nom de l'auteur" />
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group controlId="Style">
                                <FloatingLabel label="Style">
                                    <Form.Select>
                                        <option value="0">Tout grain</option>
                                        <option value="1">
                                            Empâtage partiel
                                        </option>
                                        <option value="2">Extrait</option>
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

export default Info;
