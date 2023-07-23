import { useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";

//Importation des controles
import Equipment from "../../../components/Receipts/Equipment";
import Fermentables from "../../../components/Receipts/Fermentables";
import FermentationProfile from "../../../components/Receipts/FermentationProfile";
import Hops from "../../../components/Receipts/Hops";
import Info from "../../../components/Receipts/Info";
import InfoStyle from "../../../components/Receipts/InfoStyle";
import MashProfile from "../../../components/Receipts/MashProfile";
import Misc from "../../../components/Receipts/Misc";
import Other from "../../../components/Receipts/Other";
import Water from "../../../components/Receipts/Water";
import Yeast from "../../../components/Receipts/Yeast";

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
    const [info, setInfo] = useState({
        Name: receiptInfo.Name,
        Autor: receiptInfo.Autor,
        StyleId: receiptInfo.StyleId,
        ImageSrc: receiptInfo.Image
    });

    const handelInfoChange = e => {
        console.log("icit 2");
        setInfo(prev => ({
            ...prev,
            [e.target.id]:
                e.target.id === "StyleId"
                    ? parseInt(e.target.value)
                    : e.target.value
        }));
    };

    return (
        <>
            <Row className="g-3 mb-3">
                <Col xs={12} lg={6} xl={5}>
                    <Info
                        Name={info.Name}
                        Autor={info.Autor}
                        StyleId={info.StyleId}
                        Image={info.ImageSrc}
                        handelChange={handelInfoChange}
                    />
                </Col>
                <Col xs={12} lg={6} xl={4}>
                    <Equipment />
                </Col>
                <Col xs={12} lg={6} xl={3}>
                    <InfoStyle />
                </Col>
            </Row>
            <Row className="g-2 mb-2">
                <Col xs={12} lg={6}>
                    <Fermentables />
                </Col>
                <Col xs={12} lg={6}>
                    <Hops />
                </Col>
            </Row>
            <Row className="g-2 mb-2">
                <Col xs={12} lg={6}>
                    <Misc />
                </Col>
                <Col xs={12} lg={6}>
                    <Yeast />
                </Col>
            </Row>
            <Row className="g-2 mb-2">
                <Col xs={12} lg={6}>
                    <MashProfile />
                </Col>
                <Col xs={12} lg={6}>
                    <FermentationProfile />
                </Col>
            </Row>
            <Row className="g-2 mb-2">
                <Col xs={12}>
                    <Water />
                </Col>
            </Row>
            <Row className="g-2 mb-2">
                <Col xs={12}>
                    <Other />
                </Col>
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
                        <Col xs={6}>{info.Name}</Col>
                        <Col xs={6}>Autor</Col>
                        <Col xs={6}>{info.Autor}</Col>
                        <Col xs={6}>StyleId</Col>
                        <Col xs={6}>{info.StyleId}</Col>
                        <Col xs={6}>Image</Col>
                        <Col xs={6}>{info.ImageSrc}</Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    );
};

export default Retail;
