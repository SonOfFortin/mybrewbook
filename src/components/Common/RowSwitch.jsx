import { Row, Col, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RowSwitch = ({ Icon, Label, Value, handelChange }) => {
    return (
        <Row className="g-2">
            <Col xs={7} lg={9}>
                <FontAwesomeIcon icon={Icon} className="me-1" />
                {" " + Label}
            </Col>
            <Col xs={5} lg={3}>
                <div className="float-end">
                    <Form.Check
                        type="switch"
                        defaultChecked={Value}
                        onChange={handelChange}
                    />
                </div>
            </Col>
        </Row>
    );
};

export default RowSwitch;
