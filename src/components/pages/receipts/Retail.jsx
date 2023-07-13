import { Card, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";

//Importation des controles
import Info from "../../../components/Receipts/Info";
import Equipment from "../../../components/Receipts/Equipment";
import InfoStyle from "../../../components/Receipts/InfoStyle";

//Data
import ReceiptsList from "../../../data/tmp/Receipts";

const DefReceipt = {
    Id: -1,
    ...Info.defaultProps,
    ClassificationRecipes: 0
};

const Retail = () => {
    const { id: receipttId } = useParams();
    const receiptId = parseInt(receipttId);
    const receiptInfo =
        ReceiptsList.find(e => e.Id === receiptId) ?? DefReceipt;

    return (
        <div>
            <Row className="g-3 mb-3">
                <Col xs={12} lg={6} xl={5}>
                    <Info
                        Name={receiptInfo.Name}
                        Autor={receiptInfo.Autor}
                        StyleId={receiptInfo.StyleId}
                        Image={receiptInfo.Image}
                    />
                </Col>
                {/*<Col xs={12} lg={6} xl={4}>
                    <Equipment />
                </Col>
                <Col xs={12} lg={6} xl={3}>
                    <InfoStyle />
                </Col>*/}
            </Row>
            <Card className="h-md-100 w-md-100">
                <Card.Header className="pb-0">
                    <h1 className="text-center">Débug</h1>
                </Card.Header>

                <Card.Body>
                    <Row>
                        <Col xs={12}>
                            <hr />
                            <h5 className="text-center">Détail</h5>
                            <hr />
                        </Col>
                        <Col xs={6}>Id</Col>
                        <Col xs={6}>{receiptInfo.Id}</Col>
                        <Col xs={6}>ClassificationRecipes</Col>
                        <Col xs={6}>{receiptInfo.ClassificationRecipes}</Col>
                    </Row>
                    <Row>
                        <Col xs={12} className="text-center">
                            <hr />
                            <h5 className="text-center">Info</h5>
                            <hr />
                        </Col>
                        <Col xs={6}>Name</Col>
                        <Col xs={6}>{receiptInfo.Name}</Col>
                        <Col xs={6}>Autor</Col>
                        <Col xs={6}>{receiptInfo.Autor}</Col>
                        <Col xs={6}>StyleId</Col>
                        <Col xs={6}>{receiptInfo.StyleId}</Col>
                        <Col xs={6}>Image</Col>
                        <Col xs={6}>{receiptInfo.Image}</Col>
                    </Row>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Retail;
