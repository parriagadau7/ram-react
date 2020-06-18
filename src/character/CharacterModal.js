import React, { useState } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    CardImg,
    CardImgOverlay,
    CardText, CardHeader, CardBody, Table, Card, Alert
} from 'reactstrap';
import moment from "moment";

const CharacterModal = (props) => {
    const {
        buttonLabel,
        className,
        character
    } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div>
            <Button color="success" onClick={toggle}>{buttonLabel}</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader className='mh-position' toggle={toggle} />
                <ModalBody>
                    {character=== undefined ?
                        <Alert color="info">
                            Character Not Found
                        </Alert> :
                        <Card className="text-center">
                            <CardHeader className={'p-0 position-relative'}>
                                <CardImg top width="100%" src={character.image} alt="Card image cap"/>
                                <CardImgOverlay>
                                    <CardText>{character.name}<br/>
                                        id: {character.id} -
                                        created {moment(character.created, moment.HTML5_FMT.DATETIME_LOCAL_MS).fromNow()}
                                    </CardText>
                                </CardImgOverlay>
                            </CardHeader>
                            <CardBody className={'p-2'}>
                                <Table borderless>
                                    <tbody>
                                    <tr>
                                        <td>STATUS</td>
                                        <td>{character.status}</td>
                                    </tr>
                                    <tr>
                                        <td>SPECIES</td>
                                        <td>{character.species}</td>
                                    </tr>
                                    <tr>
                                        <td>GENDER</td>
                                        <td>{character.gender}</td>
                                    </tr>
                                    <tr>
                                        <td>ORIGIN</td>
                                        <td>{character.origin.name}</td>
                                    </tr>
                                    <tr>
                                        <td>LAST LOCATION</td>
                                        <td>{character.location.name}</td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </CardBody>
                        </Card>
                    }
                </ModalBody>
            </Modal>
        </div>
    );
};

export default CharacterModal;
