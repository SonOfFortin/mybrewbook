import { Card, OverlayTrigger, Tooltip } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Flex from "../Common/Flex";
import IconButton from "../Common/IconButton";

const Equipment = () => {
    return (
        <Card className="h-md-100">
            <Card.Header className="pb-0">
                <Flex
                    alignContent="center"
                    justifyContent="left"
                    direction="row-reverse"
                    className="w-100"
                >
                    <div className="p-2 d-flex bg-300 border border-400">
                        <IconButton size="sm" icon="trash-can"></IconButton>
                        <IconButton size="sm" icon="trash-can"></IconButton>
                        <IconButton size="sm" icon="trash-can"></IconButton>
                    </div>
                    <div
                        className="p-2 bg-300 flex-fill border border-400"
                        style={{ display: "contents" }}
                    >
                        <h5 className="mb-0 mt-2">
                            <span className="me-1">Équipement</span>
                            <span className="d-bloc text-truncate">
                                Brewbuilder BIAB
                            </span>
                        </h5>
                    </div>
                </Flex>

                <h5 className="mb-0 mt-2">
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
                </h5>
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
