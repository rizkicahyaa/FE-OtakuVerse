import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";

export default function Footer() {
    return (
        <footer className="py-5">
            <Container>
                <Row className="text-center">
                    <span>&copy; 2026 OtakuVerse. All rights reserved.</span>
                </Row>
            </Container>
        </footer>
    );
}
