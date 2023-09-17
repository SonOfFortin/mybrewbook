import { useState } from "react";
import {
    Card,
    Row,
    Col,
    Form,
    OverlayTrigger,
    Tooltip,
    Modal,
    Button
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconButton from "../Common/IconButton";

const Fermentables = () => {
    let fermList = [
        {
            id: 1,
            name: "Pale Ale Crisp",
            type: {
                id: 1,
                name: "Céréale",
                value: "7.9",
                unit: "EBC",
                icon: "wheat-awn",
                iconColor: "rgb(255, 191, 66)"
            },
            unit: "kg",
            value: "5.22",
            percent: "81.2",
            inStock: false
        },
        {
            id: 2,
            name: "Munich Malt Bairds",
            type: {
                id: 1,
                name: "Céréale",
                value: "9.9",
                unit: "EBC",
                icon: "wheat-awn",
                iconColor: "rgb(255, 191, 66)"
            },
            unit: "g",
            value: "600",
            percent: "9.3",
            inStock: false
        },
        {
            id: 3,
            name: "Candi Sugar, Clear",
            type: {
                id: 2,
                name: "Sucre",
                value: "1",
                unit: "EBC",
                icon: "candy-cane",
                iconColor: "rgb(255, 230, 153)"
            },
            unit: "g",
            value: "510",
            percent: "7.9",
            inStock: true
        },
        {
            id: 4,
            name: "Cara Crisp",
            type: {
                id: 1,
                name: "Céréale",
                value: "34.5",
                unit: "EBC",
                icon: "wheat-awn",
                iconColor: "rgb(166, 62, 0)"
            },
            unit: "g",
            value: "100",
            percent: "1.6",
            inStock: false
        }
    ];

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSave = e => {
        //handelChange
        /*console.log("icit");
        e.target.value = files?.length > 0 ? files[0] : bImg;
        e.target.id = "ImageSrc";

        handelChange(e);

        setShow(false);*/
    };

    return (
        <Form className="w-100">
            <Card className="h-md-100">
                <Card.Header className="pb-0">
                    <Row>
                        <Col xs={11}>
                            <h5 className="pt-1 text-truncate">
                                Fermentecibles (6.43 kg)
                            </h5>
                        </Col>
                        <Col xs={1} className="p-0 m-0">
                            <div class="p-0 m-0">
                                <IconButton
                                    size="sm"
                                    icon="pen"
                                    onClick={handleShow}
                                />
                            </div>
                        </Col>
                    </Row>
                </Card.Header>
                <hr />
                <Card.Body className="pt-0">
                    <div id="fermList" className="w-100 ">
                        {fermList.map(e => {
                            return (
                                <Row className="m-0 p-0 pt-1 pb-1 cardList-body-col">
                                    <Col xs={1}>
                                        {e.inStock ? (
                                            <OverlayTrigger
                                                placement="top"
                                                overlay={
                                                    <Tooltip
                                                        style={{
                                                            position: "fixed"
                                                        }}
                                                    >
                                                        En inventaire
                                                    </Tooltip>
                                                }
                                            >
                                                <FontAwesomeIcon
                                                    icon="circle-check"
                                                    className="me-1 text-success"
                                                />
                                            </OverlayTrigger>
                                        ) : (
                                            <OverlayTrigger
                                                placement="top"
                                                overlay={
                                                    <Tooltip
                                                        style={{
                                                            position: "fixed"
                                                        }}
                                                    >
                                                        Pas dans l'inventaire
                                                    </Tooltip>
                                                }
                                            >
                                                <FontAwesomeIcon
                                                    icon="circle-xmark"
                                                    className="me-1 text-danger"
                                                />
                                            </OverlayTrigger>
                                        )}
                                    </Col>
                                    <Col xs={2}>
                                        <div className="float-end">
                                            {e.value + " " + e.unit}
                                        </div>
                                    </Col>
                                    <Col xs={7}>
                                        {e.type.name}
                                        <br />

                                        {e.type.icon ? (
                                            <FontAwesomeIcon
                                                icon={e.type.icon}
                                                className="me-1"
                                                style={{
                                                    color: e.type.iconColor
                                                }}
                                            />
                                        ) : (
                                            <span
                                                style={{
                                                    width: "20px",
                                                    display: "inline-block"
                                                }}
                                            />
                                        )}
                                        {" " + e.type.value + " " + e.type.unit}
                                    </Col>
                                    <Col xs={2}>
                                        <div className="float-end">
                                            {e.percent + " %"}
                                        </div>
                                    </Col>
                                </Row>
                            );
                        })}
                    </div>
                    <div id="FermFooter" className="float-end pt-3">
                        <div className="float-end">
                            Densité pre-ébullition: 1.049
                        </div>
                        <br />
                        <div className="float-end">Densité initiale: 1.064</div>
                        <br />
                        <div className="float-end">Couleur: 13.2 EBC</div>
                    </div>
                </Card.Body>
            </Card>
            <Modal
                show={show}
                onHide={handleClose}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Ajouter un fermentable</Modal.Title>
                </Modal.Header>
                <Modal.Body></Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-secondary" onClick={handleClose}>
                        Supprimer
                    </Button>
                    <Button variant="outline-secondary" onClick={handleClose}>
                        Fermer
                    </Button>
                    <Button variant="outline-primary" onClick={handleSave}>
                        Enregistrer
                    </Button>
                </Modal.Footer>
            </Modal>
        </Form>
    );
};

export default Fermentables;
