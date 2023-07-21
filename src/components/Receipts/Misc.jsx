import { Card } from "react-bootstrap";
import Flex from "../Common/Flex";

const Misc = () => {
    return (
        <Card className="h-md-100">
            <Card.Header className="pb-0"></Card.Header>
            <Card.Body
                as={Flex}
                alignItems="end"
                justifyContent="between"
            ></Card.Body>
        </Card>
    );
};

export default Misc;
