import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { animes } from "./AnimeData";

export default function Anime() {
    return (
        <section className="anime-fav py-5" id="anime">
            <Container>
                <Row className="mb-2">
                    <h1 className="text-uppercase">Anime Favorite</h1>
                </Row>
                <Row className="d-flex justify-content-center">
                    <>
                        {animes.map((anime) => (
                            <Col xs="8" md="2" className="g-4">
                                <Card className="card shadow-sm h-100">
                                    <Card.Img variant="top" src={anime.image} alt={anime.name} />
                                    <Card.Body>
                                        <Card.Title className="card-title">{anime.name}</Card.Title>
                                        {anime.genre.map((genres) => (
                                            <span className="badge text-bg-light me-1" key={genres}>
                                                {genres}
                                            </span>
                                        ))}
                                    </Card.Body>
                                    <Card.Footer className="card-footer d-flex justify-content-between">
                                        <span className="rating">
                                            <i className="bi bi-star-fill me-1"></i>
                                            <strong>{anime.rating}</strong>
                                        </span>
                                        <span className="anime-details">
                                            <a href="">Details</a>
                                        </span>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        ))}
                    </>
                </Row>
            </Container>
        </section>
    );
}
