import { Card } from "react-bootstrap";
import Flex from "../Common/Flex";
import ImageUpload from "../FileUpload/ImageUpload";

const InfoStyle = () => {
    return (
        <Card className="h-md-100">
            <Card.Header className="pb-0"></Card.Header>
            <Card.Body as={Flex} alignItems="end" justifyContent="between">
                <ImageUpload />
            </Card.Body>
        </Card>
    );
};

export default InfoStyle;
