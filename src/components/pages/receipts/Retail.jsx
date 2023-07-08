import { Row, Col } from "react-bootstrap";

//Importation des controles
import Info from "../../../components/Receipts/Info";
import Equipment from "../../../components/Receipts/Equipment";
import InfoStyle from "../../../components/Receipts/InfoStyle";

const Retail = () => {
    return (
        <div>
            <Row className="g-3 mb-3">
                <Col xs={12} lg={6} xl={5}>
                    <Info />
                </Col>
                <Col xs={12} lg={6} xl={4}>
                    <Equipment />
                </Col>
                <Col xs={12} lg={6} xl={3}>
                    <InfoStyle />
                </Col>
            </Row>
        </div>
    );
};

export default Retail;
