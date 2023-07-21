import { useState } from "react";
import PropTypes from "prop-types";
import {
    Row,
    Col,
    Card,
    Form,
    FloatingLabel,
    Button,
    Modal
} from "react-bootstrap";
import Flex from "../Common/Flex";
import bImg from "../../assets/img/illustrations/beer_glass.png";
import ImageUpload from "../FileUpload/ImageUpload";

//Data
import { InfoStyle as DataInfoStyle } from "../../data/Receipts/InfoStyle";

const Info = ({ Name, Autor, StyleId, Image, handelChange }) => {
    const [show, setShow] = useState(false);
    const [files, setFiles] = useState([]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSave = e => {
        //handelChange
        console.log("icit");
        e.target.value = files?.length > 0 ? files[0] : bImg;
        e.target.id = "ImageSrc";

        handelChange(e);

        setShow(false);
    };

    return (
        <>
            <Card className="h-md-100 w-md-100">
                <Card.Body as={Flex}>
                    <Form className="w-100">
                        <Row className="g-2 align-items-center">
                            <Col xs="4">
                                <Flex justifyContent="center" className="mt-3">
                                    <img
                                        src={Image ? Image : bImg}
                                        aria-hidden
                                        alt="Image de la recette"
                                        loading="lazy"
                                        width="126"
                                        height="126"
                                        className="rounded"
                                    />
                                </Flex>
                                <Flex justifyContent="center" className="mt-3">
                                    <Button
                                        variant="outline-primary"
                                        onClick={handleShow}
                                        size="sm"
                                    >
                                        Changer l&#39;image
                                    </Button>
                                </Flex>
                            </Col>
                            <Col xs="8">
                                <Form.Group
                                    controlId="InfoName"
                                    className="mb-3"
                                >
                                    <FloatingLabel label="Nom">
                                        <Form.Control
                                            type="text"
                                            placeholder="Nom de la recette"
                                            id="Name"
                                            value={Name}
                                            onChange={handelChange}
                                        />
                                    </FloatingLabel>
                                </Form.Group>
                                <Form.Group
                                    controlId="InfoAutor"
                                    className="mb-3"
                                >
                                    <FloatingLabel label="Auteur">
                                        <Form.Control
                                            type="text"
                                            value={Autor}
                                            id="Autor"
                                            placeholder="Nom de l'auteur"
                                            onChange={handelChange}
                                        />
                                    </FloatingLabel>
                                </Form.Group>
                                <Form.Group controlId="Style">
                                    <FloatingLabel label="Style">
                                        <Form.Select
                                            value={StyleId}
                                            id="StyleId"
                                            key={"cbo_style"}
                                            onChange={handelChange}
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

            <Modal
                show={show}
                onHide={handleClose}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Uploader une image</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ImageUpload file={files} setFiles={setFiles} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-secondary" onClick={handleClose}>
                        Fermer
                    </Button>
                    <Button variant="outline-primary" onClick={handleSave}>
                        Enregistrer
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
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
