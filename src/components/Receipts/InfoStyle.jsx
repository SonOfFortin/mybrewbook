import { Card, ProgressBar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import React from "react";

const storageStatus = [
    {
        name: "Regular",
        size: 895,
        color: "primary"
    },
    {
        name: "System",
        size: 379,
        color: "info"
    },
    {
        name: "Shared",
        size: 192,
        color: "success"
    },
    {
        name: "Free",
        size: 576,
        color: "200"
    }
];

const InfoStyle = () => {
    const totalStorage = storageStatus
        .map(d => d.size)
        .reduce((total, currentValue) => total + currentValue, 0);

    return (
        <Card className="h-md-100">
            <Card.Header className="pb-0">
                <FontAwesomeIcon icon="book-open" className="me-1" />
                20C&nbsp;Imperial Stout
            </Card.Header>
            <Card.Body>
                <div
                    className="d-flex"
                    style={{
                        height: "20px",
                        width: "100%",
                        marginBottom: "2px"
                    }}
                >
                    <div
                        className="rounded-1"
                        style={{
                            backgroundColor: "rgba(168, 44, 44,1)",
                            marginRight: 6,
                            color: "white",
                            width: "48px",
                            fontSize: ".75em",
                            paddingLeft: 5,
                            fontWeight: "bold",
                            paddingTop: 2,
                            height: "100%"
                        }}
                    >
                        ABV
                    </div>
                    <div
                        style={{
                            width: "100%"
                        }}
                    >
                        <ProgressBar
                            style={{ height: 20 }}
                            className="shadow-none rounded-2 mb-3"
                        >
                            <ProgressBar
                                now="15"
                                variant="200"
                                className="overflow-visible position-relative rounded-end rounded-pill"
                            ></ProgressBar>
                            <ProgressBar
                                now="70"
                                style={{ backgroundColor: "green" }}
                                className="overflow-visible position-relative"
                                label="152"
                            >
                                <div>342</div>
                            </ProgressBar>
                        </ProgressBar>
                    </div>
                </div>
                <div
                    className="d-flex"
                    style={{
                        backgroundColor: "blue",
                        height: "20px",
                        width: "100%",
                        marginBottom: "2px"
                    }}
                >
                    w
                </div>
                <div
                    className="d-flex"
                    style={{
                        backgroundColor: "green",
                        height: "20px",
                        width: "100%",
                        marginBottom: "2px"
                    }}
                >
                    w
                </div>
                <ProgressBar
                    style={{ height: 10 }}
                    className="shadow-none rounded-4 mb-3"
                >
                    {storageStatus.map((status, index) => (
                        <ProgressBar
                            // variant={status.color}
                            variant={`${
                                status.color.split("-")[1] || status.color
                            }`}
                            now={(status.size * 100) / totalStorage}
                            key={status.name}
                            className={classNames(
                                "overflow-visible position-relative",
                                {
                                    "rounded-end rounded-pill": index === 0,
                                    "rounded-start rounded-pill":
                                        index === storageStatus.length - 1,
                                    "border-end border-white border-2":
                                        index !== storageStatus.length - 1,
                                    "rounded-0":
                                        index !== storageStatus.length - 1 &&
                                        index !== 0
                                }
                            )}
                        />
                    ))}
                </ProgressBar>

                <div>
                    <HorizontalBulletGraph
                        title="ABV"
                        scaleMin={100}
                        scaleMax={300}
                        PerformanceVal={275}
                        SymbolMarker={265}
                        BadVal={200}
                        SatisfactoryVal={250}
                        height={20}
                        width={640}
                        goodColor="#dddddd"
                        badColor="#999999"
                        satisfactoryColor="#bbbbbb"
                    />
                </div>
            </Card.Body>
        </Card>
    );
};

const HorizontalBulletGraph = ({
    title,
    scaleMin,
    scaleMax,
    PerformanceVal,
    SymbolMarker,
    BadVal,
    SatisfactoryVal,
    titleStyle,
    badColor,
    satisfactoryColor,
    goodColor,
    height,
    width
}) => {
    // Normalize values which exceed scaleMax prop
    let badVal = Math.min(BadVal, scaleMax),
        satisfactoryVal = Math.min(SatisfactoryVal, scaleMax),
        symbolMarker = Math.min(SymbolMarker, scaleMax);

    // Scale tick component props to specified component width prop
    let widthScale = width / (scaleMax - scaleMin);

    let horizontalBulletGraphStyles = {
        display: "flex",
        justifyContent: "flex-end"
    };

    let graphStyles = {
        position: "relative"
    };

    let goodValStyles = {
        backgroundColor: goodColor,
        height: height + "px",
        width: width + "px",
        zIndex: 1
    };

    let titleStyles = {
        fontSize: "18px",
        lineHeight: height + "px",
        margin: "0",
        textAlign: "right",
        whiteSpace: "nowrap"
    };

    let legendStyles = {
        paddingRight: "10px"
    };

    let satisfactoryValStyles = {
        backgroundColor: satisfactoryColor,
        height: height + "px",
        left: "0",
        position: "absolute",
        top: "0",
        width: (SatisfactoryVal - scaleMin) * widthScale + "px",
        zIndex: 2
    };

    let badValStyles = {
        backgroundColor: "black",
        height: height + "px",
        left: "0",
        position: "absolute",
        top: "0",
        width: (badVal - scaleMin) * widthScale + "px",
        zIndex: 3
    };

    let symbolMarkerWidth = width * 0.01,
        // Should not exceed boundaries qualitative range boundaries
        symbolMarkerPos = (symbolMarker - scaleMin) * widthScale * 0.99;

    let symbolMarkerStyles = {
        backgroundColor: "black",
        left: symbolMarkerPos + "px",
        height: height * 1.4 + "px",
        marginTop: "-4px",
        position: "absolute",
        top: "0",
        width: symbolMarkerWidth + "px",
        zIndex: 4
    };

    return (
        <div style={horizontalBulletGraphStyles}>
            <div style={legendStyles}>
                <p style={titleStyles}>{title}</p>
            </div>

            <div className="Graph rounded-2" style={graphStyles}>
                <div style={goodValStyles}></div>

                {!isNaN(satisfactoryVal) && (
                    <div style={satisfactoryValStyles}></div>
                )}

                {!isNaN(badVal) && <div style={badValStyles}></div>}

                {!isNaN(symbolMarker) && <div style={symbolMarkerStyles}></div>}
            </div>
        </div>
    );
};

export default InfoStyle;
