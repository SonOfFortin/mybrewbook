import { Card, OverlayTrigger, Tooltip } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Flex from "../Common/Flex";

const Equipment = () => {
    return (
        <Card className="h-md-100">
            <Card.Header className="pb-0">
                <h6 className="mb-0 mt-2">
                    <span className="me-1">Équipement</span>
                    <span className="d-bloc text-truncate">
                        Brewbuilder BIAB
                    </span>
                    <OverlayTrigger
                        placement="top"
                        overlay={
                            <Tooltip style={{ position: "fixed" }}>
                                Calculated according to last week's sales
                            </Tooltip>
                        }
                    >
                        <span>
                            <FontAwesomeIcon
                                icon={["far", "question-circle"]}
                                transform="shrink-1"
                                className="ms-1 text-400"
                                id="weeklySalesTooltip"
                            />
                        </span>
                    </OverlayTrigger>
                </h6>
            </Card.Header>
            <Card.Body
                as={Flex}
                alignItems="end"
                justifyContent="between"
            ></Card.Body>
        </Card>
    );
};

export default Equipment;
