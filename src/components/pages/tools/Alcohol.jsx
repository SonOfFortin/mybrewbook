import { useState, useEffect } from "react";
import { Row, Col, Card, Form, FloatingLabel } from "react-bootstrap";

const Alcohol = () => {
    const [dInit, setDInit] = useState(1);
    const [dEnd, setDEnd] = useState(1);
    const [infoCal, setInfoCal] = useState({
        MsgError: "",
        TauxAlcoolVol: 0,
        TauxAlcoolMas: 0,
        ExOriginal: 0,
        ExApparent: 0,
        ExReel: 0
    });

    useEffect(() => {
        if (dInit < 1 || dInit >= 2 || dEnd < 1 || dEnd >= 2) {
            let msgError = "";

            if (dInit < 1 || dInit >= 2) {
                msgError = "La densité initiale est invalide \n";
            }

            if (dEnd < 1 || dEnd >= 2) {
                msgError += "La densité finale est invalide";
            }

            setInfoCal(prevInfo => ({
                ...prevInfo,
                MsgError: msgError
            }));

            return () => {};
        }

        if (dInit <= dEnd) {
            setInfoCal(prevInfo => ({
                ...prevInfo,
                MsgError:
                    "La densité final ne peut etre plus grande que la densité initiale"
            }));

            return () => {};
        }

        setInfoCal(prevInfo => ({
            ...prevInfo,
            MsgError: "",
            TauxAlcoolVol: 0,
            TauxAlcoolMas: 0,
            ExOriginal: 0,
            ExApparent: 0,
            ExReel: 0
        }));

        return () => {};
    }, [dInit, dEnd]);

    return (
        <Row className="g-2 mb-2">
            <Col xs={12}>
                <Card className="h-md-100 w-md-100">
                    <Card.Header className="pb-0">Alcool</Card.Header>
                    <Card.Body>
                        <Form className="w-100">
                            <Form.Group
                                controlId="AlcoolDInit"
                                className="mb-3"
                            >
                                <FloatingLabel label="Densité initiale">
                                    <Form.Control
                                        type="number"
                                        placeholder="Densité initiale"
                                        id="dInit"
                                        value={parseFloat(dInit).toFixed(3)}
                                        onChange={e => {
                                            setDInit(e.target.value);
                                        }}
                                        min={1.0}
                                        max={2.0}
                                        step={0.001}
                                        precision={3}
                                    />
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group controlId="AlcoolDEnd" className="mb-3">
                                <FloatingLabel label="Densité finale">
                                    <Form.Control
                                        type="number"
                                        placeholder="Nom de la recette"
                                        id="dEnd"
                                        value={parseFloat(dEnd).toFixed(3)}
                                        onChange={e => {
                                            setDEnd(e.target.value);
                                        }}
                                        min={1.0}
                                        max={2.0}
                                        step={0.001}
                                        precision={3}
                                    />
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group
                                controlId="AlcoolDetail"
                                className="mb-3"
                            >
                                <div
                                    className="rounded p-2"
                                    style={{
                                        backgroundColor: "var(--mbb-body-bg)",
                                        border: "var(--mbb-border-width) solid var(--mbb-input-border-color)",
                                        color: "var(--mbb-card-cap-color)"
                                    }}
                                >
                                    {infoCal.MsgError === "" ? (
                                        <>
                                            <p className="fs-2 m-0 mb-1 fw-bold">
                                                <span className="text-success">
                                                    Taux d'alcool par volume (%
                                                    alc./vol){" "}
                                                </span>
                                                <span
                                                    className="fw-bold fs-2"
                                                    style={{
                                                        color: "var(--mbb-body-color)"
                                                    }}
                                                >
                                                    {infoCal.TauxAlcoolVol}%
                                                </span>
                                            </p>
                                            <p className="fs-1 m-0 fw-bold">
                                                Taux d'alcool massique{" "}
                                                <span
                                                    style={{
                                                        color: "var(--mbb-body-color)"
                                                    }}
                                                >
                                                    {infoCal.TauxAlcoolMas}%
                                                </span>
                                            </p>
                                            <p className="fs-1 m-0 fw-bold">
                                                Extrait original
                                                <span
                                                    style={{
                                                        color: "var(--mbb-body-color)"
                                                    }}
                                                >
                                                    {" " +
                                                        infoCal.ExOriginal +
                                                        " "}
                                                    &#xB0;Plato
                                                </span>
                                            </p>
                                            <p className="fs-1 m-0 fw-bold">
                                                Extrait apparent
                                                <span
                                                    style={{
                                                        color: "var(--mbb-body-color)"
                                                    }}
                                                >
                                                    {" " +
                                                        infoCal.ExApparent.toFixed(
                                                            2
                                                        ) +
                                                        " "}
                                                    &#xB0;Plato
                                                </span>
                                            </p>
                                            <p className="fs-1 m-0 fw-bold">
                                                Extrait réel
                                                <span
                                                    style={{
                                                        color: "var(--mbb-body-color)"
                                                    }}
                                                >
                                                    {" " +
                                                        infoCal.ExReel.toFixed(
                                                            2
                                                        ) +
                                                        " "}
                                                    &#xB0;Plato
                                                </span>
                                            </p>
                                        </>
                                    ) : (
                                        <>
                                            <pre className="fs-2 m-0 mb-1 fw-bold text-danger">
                                                {infoCal.MsgError}
                                            </pre>
                                        </>
                                    )}
                                </div>
                            </Form.Group>
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default Alcohol;
