import React from 'react';
import PropTypes from 'prop-types';
import {
    Container,
    Row,
    Col,
    Card,
    CardImg,
    CardBody,
    CardText,
    CardImgOverlay, CardHeader
} from "reactstrap";
import CharacterModal from "./CharacterModal";
import './Character.css'

const Character = ({characters = []}) => (
    <Container>
        <Row className="my-3">
            {characters.map((character, index) => (
                <Col sm="6" md="4" lg="3" key={index} className="my-3 card-deck">
                    <Card className="text-center">
                        <CardHeader className={'p-0 position-relative'}>
                            <CardImg top width="100%" src={character.image} alt="Card image cap"/>
                            <CardImgOverlay>
                                <CardText>{character.name}
                                </CardText>
                            </CardImgOverlay>
                        </CardHeader>
                        <CardBody className={'p-2'}>
                            <CharacterModal buttonLabel="Detail" character={character}/>
                        </CardBody>
                    </Card>
                </Col>
            ))}
        </Row>
    </Container>
);

Character.propTypes = {
    characters: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            image: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            created: PropTypes.string.isRequired,
            status: PropTypes.string.isRequired,
            species: PropTypes.string.isRequired,
            gender: PropTypes.string.isRequired,
            origin: PropTypes.object.isRequired,
            location: PropTypes.object.isRequired
        }).isRequired
    ).isRequired,
};

export default Character;
