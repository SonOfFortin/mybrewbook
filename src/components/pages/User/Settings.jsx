import {
    Row,
    Col,
    Card,
    Form,
    FloatingLabel,
    OverlayTrigger,
    Tooltip
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import {
    selectTheme,
    selectNotification
} from "../../../utils/store/selectors";
import * as themeActions from "../../../utils/store/theme";
import * as notificationActions from "../../../utils/store/notification";

const Settings = () => {
    const theme = useSelector(selectTheme);
    const notification = useSelector(selectNotification);
    const dispatch = useDispatch();

    return (
        <Form className="w-100">
            <Row className="g-3 mb-3">
                <Col xs={12} lg={6}>
                    <Card>
                        <Card.Header>
                            <h3>Général</h3>
                        </Card.Header>
                        <Card.Body>
                            <Form.Group controlId="Language" className="mb-3">
                                <FloatingLabel
                                    label={
                                        <>
                                            <FontAwesomeIcon
                                                icon="language"
                                                className="me-1"
                                            />
                                            {" Langue"}
                                        </>
                                    }
                                >
                                    <Form.Select>
                                        <option>Français</option>
                                    </Form.Select>
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group controlId="Style" className="mb-3">
                                <FloatingLabel
                                    label={
                                        <>
                                            <FontAwesomeIcon
                                                icon="moon"
                                                className="me-1"
                                            />
                                            {" Thème"}
                                        </>
                                    }
                                >
                                    <Form.Select
                                        onChange={() =>
                                            dispatch(themeActions.toggle())
                                        }
                                        value={theme}
                                    >
                                        <option key="dark" value="dark">
                                            Foncé
                                        </option>
                                        <option key="light" value="light">
                                            Claire
                                        </option>
                                    </Form.Select>
                                </FloatingLabel>
                            </Form.Group>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} lg={6}>
                    <Card>
                        <Card.Header>
                            <h3>Unité</h3>
                        </Card.Header>
                        <Card.Body></Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="g-3 mb-3">
                <Col xs={12}>
                    <Card>
                        <Card.Header>
                            <h3>Notification</h3>
                        </Card.Header>
                        <Card.Body>
                            <Form.Group
                                controlId="accNotification"
                                className="mb-3 g-2"
                            >
                                <Row className="g-2">
                                    <Col xs={7} lg={9}>
                                        <FontAwesomeIcon
                                            icon="bell"
                                            className="me-1"
                                        />
                                        {" Activé les notifications"}
                                    </Col>
                                    <Col xs={5} lg={3}>
                                        <div className="float-end">
                                            <Form.Check
                                                type="switch"
                                                defaultChecked={
                                                    notification.notify
                                                }
                                                onChange={() => {
                                                    dispatch(
                                                        notificationActions.setNotify()
                                                    );
                                                }}
                                            />
                                        </div>
                                    </Col>
                                </Row>
                            </Form.Group>
                            {notification.notify === true && (
                                <Form.Group
                                    controlId="NotifGeneral"
                                    className="mb-3"
                                >
                                    <SettingHeader title="Configuration" />
                                    <Row className="g-2">
                                        <Col>
                                            <FontAwesomeIcon
                                                icon="clock"
                                                className="me-1"
                                            />
                                            {" Heure des notifications"}
                                        </Col>
                                        <Col></Col>
                                    </Row>
                                    <Row className="g-2">
                                        <Col xs={7} lg={9}>
                                            <FontAwesomeIcon
                                                icon="comment-sms"
                                                className="me-1"
                                            />
                                            {
                                                " Activé les notifications sur les appareils (push)"
                                            }
                                        </Col>
                                        <Col xs={5} lg={3}>
                                            <div className="float-end">
                                                <Form.Check
                                                    type="switch"
                                                    defaultChecked={
                                                        notification.notifyOpt
                                                            .push
                                                    }
                                                    onChange={() => {
                                                        dispatch(
                                                            notificationActions.setNotifyOpt(
                                                                "push"
                                                            )
                                                        );
                                                    }}
                                                />
                                            </div>
                                        </Col>
                                        <Col xs={7} lg={9}>
                                            <FontAwesomeIcon
                                                icon="envelope"
                                                className="me-1"
                                            />
                                            {
                                                " Activé les notifications par E-mail"
                                            }
                                        </Col>
                                        <Col xs={5} lg={3}>
                                            <div className="float-end">
                                                <Form.Check
                                                    type="switch"
                                                    defaultChecked={
                                                        notification.notifyOpt
                                                            .mail
                                                    }
                                                    onChange={() => {
                                                        dispatch(
                                                            notificationActions.setNotifyOpt(
                                                                "mail"
                                                            )
                                                        );
                                                    }}
                                                />
                                            </div>
                                        </Col>
                                    </Row>
                                    <SettingHeader title="Notification" />
                                    <SettingsNotifConfig
                                        name="Global"
                                        nameProp="global"
                                        value={notification.notifyList.global}
                                        icon="globe"
                                        helpMsg="Obtenir des notifications générales"
                                    />
                                    <SettingsNotifConfig
                                        name="Embouitellage"
                                        nameProp="global"
                                        value={notification.notifyList.global}
                                        icon="wine-bottle"
                                        helpMsg="Avoir un rappel pour le jour d'embouteillage"
                                    />
                                </Form.Group>
                            )}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Form>
    );
};

const SettingsNotifConfig = ({ name, nameProp, value, icon, helpMsg }) => {
    const dispatch = useDispatch();

    return (
        <Row className="g-2">
            <Col xs={7} lg={9}>
                {icon && <FontAwesomeIcon icon="globe" className="me-1" />}

                {name}
            </Col>

            <Col xs={5} lg={3}>
                <div className="float-end">
                    <Form.Check
                        inline
                        label="Push"
                        type="checkbox"
                        defaultChecked={value.push}
                        onChange={() => {
                            dispatch(
                                notificationActions.setNotifyList({
                                    configName: nameProp,
                                    configNameList: "push"
                                })
                            );
                        }}
                    />
                    <Form.Check
                        inline
                        label="E-mail"
                        type="checkbox"
                        defaultChecked={value.mail}
                        onChange={() => {
                            dispatch(
                                notificationActions.setNotifyList({
                                    configName: nameProp,
                                    configNameList: "mail"
                                })
                            );
                        }}
                    />
                    <h5 className="form-check-inline form-check p-0 m-0">
                        {helpMsg ? (
                            <OverlayTrigger
                                placement="top"
                                overlay={
                                    <Tooltip style={{ position: "fixed" }}>
                                        {helpMsg}
                                    </Tooltip>
                                }
                            >
                                <span>
                                    <FontAwesomeIcon
                                        icon={["far", "question-circle"]}
                                        transform="shrink-1"
                                        className="ms-1 text-400"
                                    />
                                </span>
                            </OverlayTrigger>
                        ) : (
                            <span
                                className="ms-1 text-400"
                                style={{ width: "1em", display: "block" }}
                            >
                                {" "}
                            </span>
                        )}
                    </h5>
                </div>
            </Col>
        </Row>
    );
};

const SettingHeader = ({ title }) => {
    return (
        <>
            <hr />
            <h5>{title}</h5>
            <hr />
        </>
    );
};

export default Settings;
