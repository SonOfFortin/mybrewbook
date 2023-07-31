import { Card } from "react-bootstrap";
import IconButton from "../Common/IconButton";
import { Col, Form, Row } from "react-bootstrap/esm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RowSwitch from "../Common/RowSwitch";

const Equipment = ({ AutoScaling, handelChange }) => {
    let titre = "Brewbuilder BIAB";

    return (
        <Form className="w-100">
            <Card>
                <Card.Header className="w-100">
                    <Row className="p-2 align-self-end">
                        <Col
                            xs={7}
                            md={9}
                            lg={7}
                            xl={4}
                            xxl={7}
                            className="m-0 p-0"
                        >
                            <h5 className="pt-1 text-truncate">
                                {"Équipement " + titre}
                            </h5>
                        </Col>
                        <Col
                            xs={5}
                            md={3}
                            lg={5}
                            xl={8}
                            xxl={5}
                            className="p-0 m-0"
                        >
                            <div class="float-end p-0 m-0">
                                <IconButton
                                    size="sm"
                                    icon="scale-balanced"
                                    style={{ marginRight: "0.15em" }}
                                />
                                <IconButton
                                    size="sm"
                                    icon="arrow-right-arrow-left"
                                    style={{ marginRight: "0.15em" }}
                                />
                                <IconButton size="sm" icon="pen" />
                            </div>
                        </Col>
                    </Row>
                </Card.Header>
                <Card.Body>
                    <div>
                        Volume du brassage: 21L
                        <FontAwesomeIcon
                            icon={"circle-question"}
                            transform="shrink-1"
                            className="ms-1 text-400"
                        />
                    </div>
                    <div>
                        Temps d'ébulition: 60 min
                        <FontAwesomeIcon
                            icon={"circle-question"}
                            transform="shrink-1"
                            className="ms-1 text-400"
                        />
                    </div>
                    <div>Volume pre-ébulition: 30.52L</div>
                    <div>Efficacité de la brasserie: 65%</div>
                    <div>Efficacité de l'empâtage: 75.80%</div>

                    <Form.Group controlId="accEquipement" className="mb-3 g-2">
                        <RowSwitch
                            Icon="scale-balanced"
                            id="AutoScaling"
                            Label="Mise à l'échelle automatique"
                            Value={AutoScaling}
                            handelChange={handelChange}
                        />
                    </Form.Group>
                </Card.Body>
            </Card>
        </Form>
    );
};

export default Equipment;
